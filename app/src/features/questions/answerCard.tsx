import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type {AnswerProtocol } from "@/types/questionTypes";
import { useEffect, type RefObject } from "react";

interface AnswerCardProps{
    element : AnswerProtocol;
    selectAnswer : (isCorrectAnswer : boolean , element : HTMLElement) => void;
    index : number;
    correctAnswer : RefObject<HTMLElement | undefined>;
}

export default function AnswerCard({element , selectAnswer , index , correctAnswer} : AnswerCardProps){
    const answersLetters = "ABCD"

    return (
        <Card 
            className="w-full h-fit cursor-pointer" 
            onClick={(e)=>selectAnswer(element.isCorrect , e.currentTarget)} 
            {...{ref : element.isCorrect ? correctAnswer : undefined}}
            >
            <CardHeader>
                <CardTitle>
                {answersLetters[index]}
                </CardTitle>
                <CardDescription className="text-foreground font-black">
                {element.content}
                </CardDescription>
            </CardHeader>
        </Card>
    )
}