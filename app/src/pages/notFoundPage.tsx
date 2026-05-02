import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage(){
    const BASE_URL = import.meta.env.BASE_URL;
    const navigate = useNavigate() 

    const goToHome = ()=>navigate(BASE_URL)

    return (
        <div>
            <h1 className="lg:text-5xl text-3xl my-2 font-black">
                Pagina não encontrada
            </h1>
            <p className="lg:text-3xl text-center font-light my-5">
                Verifique se a url está correta 
            </p>
            <Button className="rounded-[10px] w-full lg:p-7 p-5 font-black cursor-pointer" onClick={goToHome}>
                Ir para a pagina inicial
            </Button>
        </div>
    )
}