import ThemeButton from "@/components/ui/themeButton";
import { HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";


export interface HeaderLinks{
    title : string;
    url? : string;
    oppenNewPage? : boolean
}

interface HeaderProps{
    links : Array<HeaderLinks>;
    className? : string
}

export default function Header({links , className = ""} : HeaderProps){
    const BASE_URL = import.meta.env.BASE_URL
    
    return (
        <header className={`${className} h-[10vh] w-full flex justify-between items-center px-2`}>
            <Link to={BASE_URL} className="h-full flex items-center">
                <h1 className="hidden sm:block text-2xl font-black ">
                        SimpleQuiz
                </h1>
                <HomeIcon className="block sm:hidden mx-2"/>
            </Link>
            <div className="flex lg:justify-around justify-center gap-5 w-full lg:w-fit">
                <nav className="min-w-sm">
                    <ul className="w-full h-full flex justify-around">
                        {links.map((element,index)=>(
                            <li key={index} className="hover:border-b border-foreground p-1 transition-all max-sm:text-[15px]">
                                <Link to={element.url || BASE_URL} {...{target : element.oppenNewPage ? "_blank" : "_self"}}>
                                {element.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <ThemeButton/>
            </div>
      </header>
    )
}