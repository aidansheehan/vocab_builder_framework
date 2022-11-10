import { useEffect, useState } from 'react'
import UserService from '../services/user.service'

/**
 * Test page used for auth development TODO delete and implement methods on other protected routes
 */
const BoardUser = () => {
    const [content, setContent] = useState<string>('')

    useEffect(() => {

        UserService.getUserBoard().then(
            (response) => {
                setContent(response.data)
            },
            (error) => {
                const _content =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()

                setContent(_content)

            }
        )
    }, [])

    return (
        <div>
            <h3>{content}</h3>
        </div>
    )
}

export default BoardUser