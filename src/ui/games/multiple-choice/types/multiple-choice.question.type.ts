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

/** Answer 'state' type for managing answer components */
export type MultipleChoiceAnswerStateType = {

    /** Lexi */
    lexi: string,

    /** State */
    currentState: 'unclicked' | 'correct' | 'incorrect'
    
}