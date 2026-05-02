import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface QuizTheme{
    title : string;
    description? : string;
}

export default function SelectQuizTheme(){
    
    const BASE_URL = import.meta.env.BASE_URL

    const navigate = useNavigate()

    const goToQuiz = (title : string) => navigate(`${BASE_URL}/quiz/${title.toLowerCase()}`)

    const quizThemes: QuizTheme[] = [
  {
    title: "História do Brasil",
    description: "Questões sobre eventos históricos e personagens marcantes do Brasil."
  },
  {
    title: "Geografia Mundial",
    description: "Teste seus conhecimentos sobre países, capitais e relevo."
  },
  {
    title: "Ciência e Tecnologia",
    description: "Perguntas sobre descobertas científicas e avanços tecnológicos."
  },
  {
    title: "Arte e Cultura",
    description: "Explore movimentos artísticos, literatura e música."
  },
  {
    title: "Esportes",
    description: "Desafie-se com curiosidades e fatos sobre esportes variados."
  },
  {
    title: "Cinema",
    description: "Questões sobre filmes, diretores e premiações."
  },
  {
    title: "Matemática",
    description: "Problemas e curiosidades matemáticas para testar sua lógica."
  },
  {
    title: "Mitologia",
    description: "Perguntas sobre mitos e lendas de diferentes culturas."
  },
  {
    title: "Astronomia",
    description: "Explore planetas, estrelas e fenômenos cósmicos."
  },
  {
    title: "Literatura",
    description: "Questões sobre autores, obras e estilos literários."
  }
];


    return (
        <section className="h-fit lg:w-2/4 w-3/4 ">
            <h1 className="text-2xl font-black p-2">
                Escolha o tema
            </h1>
            <div className="flex flex-col gap-5 max-h-[70vh] overflow-y-scroll p-5">
                {quizThemes.map((element,index)=>(
                    <Card key={index} className="lg:min-h-[12vh] min-h-[15vh]" onClick={()=>goToQuiz(element.title)}>
                        <CardHeader>
                            <CardTitle>
                                {element.title}
                            </CardTitle>
                            <CardDescription>
                                {element.description}
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </section>
    )
}