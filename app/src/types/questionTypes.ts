
export interface AnswerProtocol{
    content : string;
    isCorrect : boolean
}

export interface QuestionProtocol{
    description : string;
    answers : Array<AnswerProtocol>;
}