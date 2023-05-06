import { useNavigate, useSearchParams } from "react-router-dom"

/**
 * Custom hook to navigate to the next question
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */
const useGoToQuestion = () => {

    const navigate          = useNavigate()
    const [ searchParams ]  = useSearchParams()

    const goToQuestion = (questionNumber: number) => {

        const newPath = `/user/collection/play/question/${questionNumber}${searchParams ? '?' + searchParams.toString() : '' }`
        navigate(newPath)
    }

    return goToQuestion
}

export default useGoToQuestion