import classNames               from 'classnames'
import { useLocation }          from 'react-router-dom'
import { useNavigate }          from 'react-router-dom'
import useAppSelector           from '../../hooks/redux/use-app-selector.hook'
import ButtonComponent          from '../../components/button/button.component'
import CollectionCardComponent  from '../../components/collection-card/collection-card.component'
import styles                   from './home.page.scss'

/**
 * User Home Page Component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <HomePage />
 * )
 */
const HomePage = (): JSX.Element => {

    const { collections }   = useAppSelector(state => state.collections)    //Get user's collections

    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div className={styles.homePage} >

            <div className={styles.homeHeader} >

                <div className={classNames(styles.control, styles.homePageSection)}>

                    <div className={styles.controlButtons}>
                        <ButtonComponent textRef='home_play-random' secondary onClick={() => alert('play random TBD')} />
                        <ButtonComponent textRef='nav_new-collection_link' primary onClick={() => navigate('collection/info', {state: {backgroundLocation: location}})} />
                    </div>

                    <div className={classNames(styles.searchContainer, styles.homePageSection)} >
                        <input className={styles.searchInput} />
                    </div>

                    {/* <div className={styles.welcomeBanner}>
                        {userInfo && userInfo.username ? <TextComponent textRef='home_greeting' values={[userInfo.username]}  /> : null }
                    </div> */}

                </div>

            </div>

            <div className={classNames(styles.collectionGrid, styles.homePageSection)} >
                {
                    Object.keys(collections).map((id_: string) => {
                        
                        const collection = collections[id_]

                        return (
                            <CollectionCardComponent 
                                id={id_}
                                title={collection.title}
                                description={collection.description}
                                key={id_}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default HomePage