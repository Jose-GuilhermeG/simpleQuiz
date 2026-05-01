import { useTheme } from "@/components/theme-provider";
import { MoonIcon, SunMedium } from "lucide-react";

export default function ThemeButton(){
    const {theme , setTheme} = useTheme()

    if(theme == "light")
    return (
        <button onClick={()=>setTheme("dark")}>
            <MoonIcon className="w-6 h-6"/>
        </button>
    )

    if(theme == "dark") return (
        <button onClick={()=>setTheme("light")}>
            <SunMedium className="w-6 h-6"/>
        </button>
    )
}