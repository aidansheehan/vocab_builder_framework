import { MultipleChoiceAnswerType, MultipleChoiceQuestionType } from '../types/multiple-choice.question.type'

class MultipleChoiceQuestion implements MultipleChoiceQuestionType {
    prompt: string
    id: string
    answers: MultipleChoiceAnswerType[]

    constructor(prompt: string, id: string, answers: MultipleChoiceAnswerType[]) {
        this.prompt = prompt
        this.id = id
        this.answers = answers
    }
}

export default MultipleChoiceQuestion