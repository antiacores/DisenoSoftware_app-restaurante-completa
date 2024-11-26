import { collection, getDocs, query, where, doc, updateDoc, addDoc, deleteDoc, orderBy } from "firebase/firestore"; 
import { db } from "./firebaseConfig";

//Obtener las mesas
const getTables = async () => {
  try {
    const tablesCollection = collection(db, 'Tables');
    const tablesQuery = query(tablesCollection, orderBy('Table_number', 'asc')); 
    const snapshot = await getDocs(tablesQuery);

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching tables:', error);
    return [];
  }
};

// Actualizar mesa (ocupada o libre)
const updateTableState = async (tableId, newState) => {
  try {
    const tableRef = doc(db, 'Tables', tableId); 
    await updateDoc(tableRef, {
      State: newState
    });
  } catch (error) {
    console.error('No se pudo cambiar el estdo de la mesa:', error);
  }
};

// Función para restablecer el estado de la mesa por número de mesa
const resetTableState = async (tableNumber, newState) => {
  try {
    const tablesCollection = collection(db, 'Tables');
    const q = query(tablesCollection, where("Table_number", "==", tableNumber));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log('Numero de mesa inexistente.');
      return;
    }

    const tableRef = doc(db, 'Tables', querySnapshot.docs[0].id);  
    await updateDoc(tableRef, {
      State: newState 
    });
  } catch (error) {
    console.error('No se pudo cambiar el estado de la mesa', error);
  }
};

//Crear mesa
const createTable = async (tableNumber) => {
  try {
    const tablesCollection = collection(db, 'Tables');
    const newTable = {
      Table_number: tableNumber,
      State: false  
    };

    const docRef = await addDoc(tablesCollection, newTable);
    return docRef.id;
  } catch (error) {
    console.error('Error creando la mesa nueva:', error);
    return null;
  }
};

// Eliminar mesa
const deleteTable = async (tableId) => {
  try {
    const tableRef = doc(db, 'Tables', tableId);
    await deleteDoc(tableRef);
  } catch (error) {
    console.error('Error borrando la mesa:', error);
  }
};

export { getTables, updateTableState, resetTableState, createTable, deleteTable };