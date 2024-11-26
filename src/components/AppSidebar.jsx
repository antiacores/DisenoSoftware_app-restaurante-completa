import React, { useState } from "react";
import { Salad, Beef, CakeSlice, Martini, ShoppingCart, Settings, History, LogOut } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
} from "../components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "../components/ui/sheet";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

const menu_items = [
  {
    title: "Entradas",
    url: "/entradas",
    icon: Salad,
  },
  {
    title: "Platos fuertes",
    url: "/platos_fuertes",
    icon: Beef,
  },
  {
    title: "Postres",
    url: "/postres",
    icon: CakeSlice,
  },
  {
    title: "Bebidas",
    url: "/bebidas",
    icon: Martini,
  },
];

const configuracion_items = [
  {
    title: "Ajustes",
    url: "/ajustes",
    icon: Settings,
  },
  {
    title: "Cerrar sesión",
    url: "/#",
    icon: LogOut,
  },
];

export function AppSidebar() {
  const [isCartSheetOpen, setCartSheetOpen] = useState(false);

  const openCartSheet = () => setCartSheetOpen(true);
  const closeCartSheet = () => setCartSheetOpen(false);

  const handlePay = () => {
    alert("¡Gracias por tu pago! 😊");
    closeCartSheet();
  };

  return (
    <>
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>Mar & Olivo</SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menú</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menu_items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Pedidos</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <button onClick={openCartSheet}>
                      <ShoppingCart />
                      <span>Carrito</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="/historial">
                      <History />
                      <span>Historial</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Configuración</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {configuracion_items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
                username
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      </SidebarProvider>

      {/* Sheet for Cart */}
      <Sheet open={isCartSheetOpen} onOpenChange={setCartSheetOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Carrito</SheetTitle>
            <SheetDescription>Revisa y paga tus elementos seleccionados.</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-3 items-center gap-1">
            <Label htmlFor="item1" className="text-left">
                Ensalada Griega
              </Label>
              <Label htmlFor="item1" className="text-left">
                x 2
              </Label>
              <Label htmlFor="item1" className="text-right">
                $150
              </Label>
            </div>
            <div className="grid grid-cols-3 items-center gap-1">
            <Label htmlFor="item1" className="text-left">
                Sangría
              </Label>
              <Label htmlFor="item1" className="text-left">
                x 3
              </Label>
              <Label htmlFor="item1" className="text-right">
                $400
              </Label>
            </div>
            <div className="grid grid-cols-3 items-center gap-1">
            <Label htmlFor="item1" className="text-right">
                
              </Label>
              <Label htmlFor="item1" className="text-right">
              Total
              </Label>
              <Label htmlFor="item1" className="text-right">
                $550
              </Label>
            </div>
          </div>
          <SheetFooter>
            <Button onClick={handlePay}>Pagar</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}