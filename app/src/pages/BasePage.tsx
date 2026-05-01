import Header , {type HeaderLinks} from "@/layout/Header";
import { Outlet } from "react-router-dom";

export default function BasePage(){
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
      <Outlet/>
    </main>
  )
}