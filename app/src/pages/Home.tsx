import { Button } from "@/components/ui/button";
import { ArrowRight, CircleQuestionMark } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const BASE_URL = import.meta.env.BASE_URL
  const navigate = useNavigate()

  const startQuiz = ()=> navigate(`${BASE_URL}/theme/select`)

  return (
      <section className="min-w-lg p-2 h-fit mt-[10%]">
            <h1 className="text-foreground font-black text-4xl flex items-center justify-center gap-5">
              Bem vindo ao quiz
              <CircleQuestionMark className="w-10 h-10"/>
            </h1>
        <p className="text-foreground font-light text-2xl text-center my-2">
            Teste suas habilidades com conhecimentos
        </p>
          <div className="w-full flex justify-around my-5">
            <Button variant="outline" className="border border-foreground cursor-pointer px-2 rounded-[10px] w-2/5 py-7">
              Sobre <ArrowRight/>
            </Button>
            <Button className="cursor-pointer px-2 rounded-[10px] w-2/5 py-7" onClick={startQuiz}>
              Começar <ArrowRight/>
            </Button>
          </div>
      </section>
  )
}

