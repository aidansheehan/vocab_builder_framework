import { CardType, CollectionType }                                 from '../../../../redux/types/collections/collection.types'
import shuffle                                                      from '../../functions/shuffle'
import MultipleChoiceAnswer                                         from '../classes/multiple-choice-answer.class'
import MultipleChoiceQuestion                                       from '../classes/multiple-choice-question.class'
import { MultipleChoiceAnswerType, MultipleChoiceQuestionType }     from '../types/multiple-choice.question.type'

/**
 * Function to generate questions for multiple choice quiz from collection data
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @param {CollectionType} collection The collection to generate questions for
 * @param {number} numberOfAnswers Number of answers (multiple choice 'choices') to generate for each question
 * @returns {MultipleChoiceQuestionType[]}
 */
const generateQuestions = (collection: CollectionType, numberOfAnswers: number = 3): MultipleChoiceQuestionType[] => {

    const result: MultipleChoiceQuestionType[]  = []                //Init results array 
    const { cards }                             = collection        //Destructure collection
    const shuffledCards                         = shuffle(cards)    //Randomly shuffle collection cards

    //Generate a question for each shuffled array element
    shuffledCards.forEach((card_: CardType) => {

        const answers: MultipleChoiceAnswerType[]   = []                                        //Init answers array
        const cardsWithoutThisOne                   = cards.filter(c_ => c_.id !== card_.id)    //Get cards without current card

        //Loop through cardsWithoutThisOne and generate answer
        for (let i = 0; i < numberOfAnswers - 1; i++) {

            //Choose a random cardWithoutThisOne
            const randIndex = Math.floor(Math.random() * cardsWithoutThisOne.length)

            //Generate an answer for selected index
            const answer = new MultipleChoiceAnswer(cardsWithoutThisOne[randIndex].lexi, cardsWithoutThisOne[randIndex].id)

            //Push answer to answers array
            answers.push(answer)

            //Remove this card from cards to loop through to generate answers
            cardsWithoutThisOne.splice(randIndex, 1)

        }

        //Generate correct answer
        const correctAnswer = new MultipleChoiceAnswer(card_.lexi, card_.id)

        //Generate a random index to insert correct answer in answers array
        const randomIndex = Math.floor(Math.random() * answers.length)

        //Insert correct answer at random index
        answers.splice(randomIndex, 0, correctAnswer)

        //Construct question
        const question = new MultipleChoiceQuestion(card_.textPrompt, card_.id, answers)

        //Push generated question to result
        result.push(question)

    })

    return result

}

export default generateQuestions