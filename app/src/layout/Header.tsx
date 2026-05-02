import ThemeButton from "@/components/ui/themeButton";
import { Link } from "react-router-dom";


export interface HeaderLinks{
    title : string;
    url? : string;
}

interface HeaderProps{
    links : Array<HeaderLinks>;
    className? : string
}

export default function Header({links , className} : HeaderProps){
    const BASE_URL = import.meta.env.BASE_URL
    
    return (
        <header className={`${className} h-[10vh] w-full flex justify-between items-center px-2`}>
            <h1 className="hidden lg:block">
                <Link to={BASE_URL}>
                    SimpleQuiz
                </Link>
            </h1>
            <div className="flex lg:justify-around justify-center gap-5 w-full lg:w-fit">
                <nav className="min-w-sm">
                    <ul className="w-full h-full flex justify-around">
                        {links.map((element,index)=>(
                            <li key={index} className="hover:border-b border-foreground p-1 transition-all">
                                <Link to={element.url || BASE_URL}>
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