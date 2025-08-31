import CategoryGrid from "./CategoryGrid"
import {
    ShieldCheck,
    CircleDollarSign,
    Lightbulb,
    TrendingUp,
    Home,
    MailCheck,
} from "lucide-react"

export default function CategorySection() {
    const categories = [
        {
            title: "Asigurări",
            href: "/asigurari",
            icon: <ShieldCheck className="h-8 w-8 text-sky-500" />,
        },
        {
            title: "Credite",
            href: "/credite",
            icon: <CircleDollarSign className="h-8 w-8 text-sky-500" />,
        },
        {
            title: "Curent/Gaz",
            href: "/curent-gaz",
            icon: <Lightbulb className="h-8 w-8 text-sky-500" />,
        },
        {
            title: "Investiții",
            href: "/investitii",
            icon: <TrendingUp className="h-8 w-8 text-sky-500" />,
        },
        {
            title: "Procurarea locuinței",
            href: "/imobil",
            icon: <Home className="h-8 w-8 text-sky-500" />,
        },
        {
            title: "Dosare",
            href: "/dosare",
            icon: <MailCheck className="h-8 w-8 text-sky-500" />,
            subtitle: "Kindergeld / Elterngeld / Wohngeld",
        },
    ]

    return <CategoryGrid items={categories} />
}
