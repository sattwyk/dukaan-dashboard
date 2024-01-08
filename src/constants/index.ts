import { Home, LayoutGrid, LucideIcon, Truck, Users } from "lucide-react"
type SidebarItem = {
    name: string,
    to: string,
    icon: LucideIcon
}
export const SIDEBAR_ITEMS: readonly SidebarItem[] = [
    {
        name: "Home",
        to: '/home',
        icon: Home
    }, {
        name: "Orders",
        to: '/order',
        icon: Home
    }, {
        name: "Products",
        to: '/products',
        icon: LayoutGrid
    }, {
        name: "Delivery",
        to: '/delivery',
        icon: Truck
    }, {
        name: "Marketing",
        to: '/marketing',
        icon: Home
    }, {
        name: "Analytics",
        to: '/analytics',
        icon: Home
    }, {
        name: "Payments",
        to: '/payments',
        icon: Home
    }, {
        name: "Tools",
        to: '/tools',
        icon: Home
    }, {
        name: "Discounts",
        to: '/discounts',
        icon: Home
    }, {
        name: "Audience",
        to: '/audience',
        icon: Users
    }, {
        name: "Appearance",
        to: '/appearance',
        icon: Home
    }, {
        name: "Plugins",
        to: '/plugins',
        icon: Home
    }
]