import { Button } from "@/components/ui/button";
import { ArrowRight, CircleQuestionMark } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const BASE_URL = import.meta.env.BASE_URL
  const navigate = useNavigate()

  const startQuiz = ()=> navigate(`${BASE_URL}/theme/select`)

  return (
      <section className="min-w-lg p-2 h-fit lg:mt-[10%] mt-[30%]">
            <h1 className="text-foreground font-black lg:text-4xl text-3xl flex items-center justify-center gap-5 max-[450px]:text-2xl max-[450px]:flex-col-reverse">
              Bem vindo ao simpleQuiz
              <CircleQuestionMark className="w-10 h-10 max-[400px]:h-7"/>
            </h1>
        <p className="text-foreground font-light lg:text-2xl text-wrap text-xl text-center my-2 w-4/5 text-certer m-auto max-[450px]:text-[15px]">
            Teste seus conhecimentos gerais sobre assuntos comuns
        </p>
          <div className="w-full flex sm:flex-row flex-col-reverse items-center justify-around gap-5 my-5">
            <Button variant="outline" className="border border-foreground cursor-pointer lg:px-2 rounded-[10px] w-2/5 py-7">
              Sobre <ArrowRight/>
            </Button>
            <Button className="cursor-pointer lg:px-2 rounded-[10px] w-2/5 py-7" onClick={startQuiz}>
              Começar <ArrowRight/>
            </Button>
          </div>
      </section>
  )
}

