import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnswerCard from "@/features/questions/answerCard";
import { useInterval } from "@/hooks/useinterval";
import type { QuestionProtocol } from "@/types/questionTypes";
import { useRef, useState} from "react";
import { useParams } from "react-router-dom"

export default function QuizPage(){
  const questions: QuestionProtocol[] = [
  {
    description: "Qual é o valor de 7 × 8?",
    answers: [
      { content: "54", isCorrect: false },
      { content: "56", isCorrect: true },
      { content: "64", isCorrect: false },
      { content: "48", isCorrect: false }
    ]
  },
  {
    description: "Qual é a raiz quadrada de 144?",
    answers: [
      { content: "10", isCorrect: false },
      { content: "11", isCorrect: false },
      { content: "12", isCorrect: true },
      { content: "13", isCorrect: false }
    ]
  },
  {
    description: "Resolva: 25 ÷ 5",
    answers: [
      { content: "4", isCorrect: false },
      { content: "5", isCorrect: true },
      { content: "6", isCorrect: false },
      { content: "7", isCorrect: false }
    ]
  },
  {
    description: "Qual é o valor de π arredondado para duas casas decimais?",
    answers: [
      { content: "3.12", isCorrect: false },
      { content: "3.14", isCorrect: true },
      { content: "3.15", isCorrect: false },
      { content: "3.16", isCorrect: false }
    ]
  },
  {
    description: "Qual é o resultado de 2³?",
    answers: [
      { content: "6", isCorrect: false },
      { content: "8", isCorrect: true },
      { content: "9", isCorrect: false },
      { content: "12", isCorrect: false }
    ]
  },
  {
    description: "Qual é a solução da equação: x + 5 = 12?",
    answers: [
      { content: "x = 5", isCorrect: false },
      { content: "x = 6", isCorrect: true },
      { content: "x = 7", isCorrect: false },
      { content: "x = 8", isCorrect: false }
    ]
  },
  {
    description: "Qual é o perímetro de um quadrado com lado de 9 cm?",
    answers: [
      { content: "36 cm", isCorrect: true },
      { content: "18 cm", isCorrect: false },
      { content: "27 cm", isCorrect: false },
      { content: "45 cm", isCorrect: false }
    ]
  },
  {
    description: "Qual é a área de um triângulo com base 10 cm e altura 6 cm?",
    answers: [
      { content: "30 cm²", isCorrect: true },
      { content: "60 cm²", isCorrect: false },
      { content: "15 cm²", isCorrect: false },
      { content: "20 cm²", isCorrect: false }
    ]
  },
  {
    description: "Qual é o próximo número na sequência: 2, 4, 8, 16, ...?",
    answers: [
      { content: "24", isCorrect: false },
      { content: "32", isCorrect: true },
      { content: "20", isCorrect: false },
      { content: "36", isCorrect: false }
    ]
  },
  {
    description: "Qual é o valor de 100% de 50?",
    answers: [
      { content: "25", isCorrect: false },
      { content: "50", isCorrect: true },
      { content: "75", isCorrect: false },
      { content: "100", isCorrect: false }
    ]
  }
];

  const parms = useParams()
    

    const [currentQuestionIndex,setCurrentQuestionIndex] = useState<number>(0);
    const [hits ,setHits] = useState<number>(0);
    const [time , setTime] = useState<number>(10);

    const currentQuestion : QuestionProtocol | undefined = questions[currentQuestionIndex];

    const correctAnswer = useRef<HTMLElement | undefined>(undefined);
    
    const setAnswerColor = (isCorrectAsnwer : boolean , element : HTMLElement) =>{
      if(!isCorrectAsnwer) element.style.backgroundColor = "var(--color-red-500)"
      else element.style.backgroundColor = "var(--color-green-500)"
    }

    const clearAnswerColor = (element : HTMLElement | null)=>{
      if(element) element.style.backgroundColor = "var(--color-card)"
    }

    const goToNewQuestion = (element : HTMLElement | null)=>{
      setTimeout(()=>{
        clearAnswerColor(element)
        clearAnswerColor(correctAnswer.current as HTMLElement)
        setCurrentQuestionIndex(prev=>prev+1);
      },400)
    }

    const result = (element : HTMLElement | null , correctResponse : boolean)=>{
      setAnswerColor(true , correctAnswer.current as HTMLElement)
      setHits(prev => prev + (correctResponse ? 1 : 0))
      goToNewQuestion(element);
      setTime(10)
    }
    
    const selectAnswer = (isCorrectAsnwer : boolean , element : HTMLElement)=>{
      setAnswerColor(isCorrectAsnwer , element);
      result(element , isCorrectAsnwer)
    }


    useInterval(()=>{
      setTime(prev=>prev-1)
      if(time < 1) result(null , false);
    },1000)

    return (
        <section className="w-full flex flex-col items-center">
            <Card className="sm:w-lg w-2/3 h-fit">
                <CardHeader>
                    <CardTitle>
                        {currentQuestion ? `Questão ${currentQuestionIndex + 1}`: "voce terminou o quiz"}
                    </CardTitle>
                    <CardDescription className="text-foreground">
                        {currentQuestion && currentQuestion.description}
                    </CardDescription>
                    <CardAction>
                      {time}
                    </CardAction>
                </CardHeader>
            </Card>

            {currentQuestion ? 
                <div className="flex sm:w-lg w-2/3 h-fit my-5 flex-col gap-5 items-center">
                    {currentQuestion.answers.map((element,index)=>(
                        <AnswerCard element={element} index={index} correctAnswer={correctAnswer} selectAnswer={selectAnswer} />
                    ))}
                </div>
                :
                <h1>
                    Acertos : {hits}
                </h1>
            }
            {
              currentQuestion && 
              <div>
                <h1 className="text-2xl font-black text-foreground text-center">
                  Questão : {currentQuestionIndex + 1} de {questions.length}
                </h1>
                <p className="text-xl font-medium text-center text-foreground">
                  Acertos : {hits}
                </p>
              </div>
            }
        </section>
    )
}