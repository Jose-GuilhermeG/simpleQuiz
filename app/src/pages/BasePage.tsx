import Header , {type HeaderLinks} from "@/layout/Header";
import { Outlet } from "react-router-dom";

export default function BasePage(){
    const links : Array<HeaderLinks> = [
    {
      title : "Repositorio",
      url : "https://github.com/Jose-GuilhermeG/simpleQuiz/",
      oppenNewPage : true
    },
    {
      title : "Criador",
      url : "https://github.com/Jose-GuilhermeG/",
      oppenNewPage : true
    },
    {
      title : "Ideia do projeto",
      url : "https://roadmap.sh/frontend/projects?difficulty=intermediate",
      oppenNewPage : true
    },
  ]
  return (
    <main className="w-screen h-screen flex flex-col items-center bg-background">
      <Header links={links} />
      <Outlet/>
    </main>
  )
}