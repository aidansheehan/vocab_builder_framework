/** Data structure for a multiple choice collection */
export type MultipleChoiceQuestionType = {

    /** prompt */
    prompt: string,

    /** Correct card ID */
    id: string,

    /** Answers */
    answers: MultipleChoiceAnswerType[]

}

/** Data structure for a multiple choice answer */
export type MultipleChoiceAnswerType = {

    /** Lexi */
    lexi: string,

    /** Card ID */
    id: string

}