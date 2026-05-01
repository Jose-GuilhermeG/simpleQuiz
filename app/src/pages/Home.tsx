import { Button } from "@/components/ui/button";
import { ArrowRight, CircleQuestionMark } from "lucide-react";

import Header , {type HeaderLinks} from "@/layout/Header";

export default function Home() {
  const links : Array<HeaderLinks> = [
    {
      title : "Repositorio",
    },
    {
      title : "Criador",
    },
    {
      title : "Ideia do projeto",
    },
  ]
  return (
    <main className="w-screen h-screen flex flex-col items-center bg-background gap-[25%]">
      <Header links={links} />
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
    </main>
  )
}

