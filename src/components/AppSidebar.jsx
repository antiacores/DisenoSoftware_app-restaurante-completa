import { Salad, Beef, CakeSlice, Martini, ShoppingCart, Settings, History, LogOut } from "lucide-react"
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
  SidebarFooter
} from "../components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"

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
]

const pedidos_items = [
  {
    title: "Carrito",
    url: "/carrito",
    icon: ShoppingCart,
  },
  {
    title: "Historial",
    url: "/historial",
    icon: History,
  },
]

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
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
    <SidebarMenu>
      <SidebarMenuItem>
      Mar & Olivo
      </SidebarMenuItem>
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
              {pedidos_items.map((item) => (
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
  )
}