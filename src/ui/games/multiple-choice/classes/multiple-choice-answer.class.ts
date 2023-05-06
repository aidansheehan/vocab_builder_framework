import { MultipleChoiceAnswerType } from '../types/multiple-choice.question.type'

/** Multiple choice answer constructor */
class MultipleChoiceAnswer implements MultipleChoiceAnswerType {

    lexi: string
    id: string

    constructor(lexi: string, id: string) {
        this.lexi = lexi
        this.id = id
    }
}

export default MultipleChoiceAnswer