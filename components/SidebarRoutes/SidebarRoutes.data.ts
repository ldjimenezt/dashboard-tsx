import {
    BarChart4,
    Building2,
    PanelsTopLeft,
    Settings,
    ShieldCheck,
    CircleHelpIcon,
    Calendar
} from 'lucide-react'

export const dataGeneralSidebar = [
    {
        icon: PanelsTopLeft,
        label: "Dashboard",
        href: "/"
    },
    {
        icon: Building2,
        label: "Compañias",
        href: "/companies" 
    },
    {
        icon: Calendar,
        label: "Calenadario",
        href: "/tasks" 
    },
];

export const dataToolsSidebar = [
    {
        icon: CircleHelpIcon,
        label: "Faqs",
        href: "/faqs",
    },
    {
        icon: BarChart4,
        label: "Analíticas",
        href: "/analytics",
    },
];

export const dataSupportSidebar = [
    {
        icon: Settings,
        label: "Configuración",
        href: "/setting",
    },
    {
        icon: ShieldCheck,
        label: "Seguridad",
        href: "/security",
    },
];