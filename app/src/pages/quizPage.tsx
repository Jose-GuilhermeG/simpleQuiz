import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnswerCard from "@/features/questions/answerCard";
import { useInterval } from "@/hooks/useinterval";
import { questionsAstronomy, questionsCinema, questionsGeography, questionsHistory, questionsLiterature, questionsMath, questionsMythology, questionsSciences, questionsSports } from "@/questions";
import type { QuestionProtocol } from "@/types/questionTypes";
import { useEffect, useRef, useState} from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function QuizPage(){
    const BASE_URL = import.meta.env.BASE_URL;
    const parms = useParams()
    const selectTheme : string = parms.theme?.toLowerCase() as string;
    const navigate = useNavigate();
    const themes = {
      "geografia mundial" : questionsGeography,
      "história do brasil" : questionsHistory,
      "matemática" : questionsMath,
      "ciência e tecnologia" : questionsSciences,
      "arte e cultura" : questionsSciences,
      "esportes" : questionsSports,
      "cinema": questionsCinema,
      "mitologia" : questionsMythology,
      "astronomia" : questionsAstronomy,
      "literatura": questionsLiterature,
    }

    useEffect(()=>{
      if(!Object.keys(themes).includes(selectTheme)) navigate(`${BASE_URL}/not-found/`)
        
      },[selectTheme])

    const questions = themes[(selectTheme as keyof typeof themes)] || [];
    

    const [currentQuestionIndex,setCurrentQuestionIndex] = useState<number>(0);
    const [hits ,setHits] = useState<number>(0);
    const [time , setTime] = useState<number>(10);

    const currentQuestion : QuestionProtocol | undefined = questions[currentQuestionIndex];

    const correctAnswer = useRef<HTMLDivElement | null>(null);
    
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
      if(currentQuestion) setTime(prev=>prev-1)
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
                      {currentQuestion && time}
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
                <h1 className="text-xl font-medium text-center text-foreground my-2">
                    Acertos : {hits}
                </h1>
            }
            {
              currentQuestion && 
              <div>
                <h1 className="text-2xl font-black text-foreground text-center">
                  Questão : {currentQuestionIndex + 1} de {questions.length}
                </h1>
                <p className="text-xl font-medium text-center text-foreground my-2">
                  Acertos : {hits}
                </p>
              </div>
            }
        </section>
    )
}