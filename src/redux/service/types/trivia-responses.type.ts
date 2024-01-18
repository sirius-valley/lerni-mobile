export type TriviaQuestion = {
    id: string;
    question: string;
    answers: string[];
    correctAnswer?: boolean;
    userAnswer?: string;
}

export type Trivia = {
    id: string;
    questions: TriviaQuestion[];
    opponent: {
        imgUrl: string;
        firstName: string;
        lastName: string;
    }
}
