import { useSelector }                  from 'react-redux'
import type { TypedUseSelectorHook }    from 'react-redux'
import { RootState }                    from '../../redux/store'

/**
 * useAppSelector hook for typed redux store data retrieval
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector