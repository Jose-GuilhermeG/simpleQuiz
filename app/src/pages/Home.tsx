import { Button } from "@/components/ui/button";
import { ArrowRight, CircleQuestionMark } from "lucide-react";

export default function Home() {
  return (
      <section className="min-w-lg p-2 h-fit">
            <h1 className="text-foreground font-black text-4xl flex items-center justify-center gap-5">
              Bem vindo ao quiz
              <CircleQuestionMark className="w-10 h-10"/>
            </h1>
        <p className="text-foreground font-light text-2xl text-center my-2">
            Teste suas habilidades com conhecimentos
        </p>
          <div className="w-full flex justify-around my-5">
            <Button variant="outline" className="border border-foreground cursor-pointer px-2 rounded-[10px] w-2/5 py-7">
              Começar <ArrowRight/>
            </Button>
            <Button className="cursor-pointer px-2 rounded-[10px] w-2/5 py-7">
              Começar <ArrowRight/>
            </Button>
          </div>
      </section>
  )
}

