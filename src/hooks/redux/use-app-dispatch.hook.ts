import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'

/**
 * useAppDispatch hook for typed redux store data dispatch
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */

const useAppDispatch: () => AppDispatch = useDispatch

export default useAppDispatch