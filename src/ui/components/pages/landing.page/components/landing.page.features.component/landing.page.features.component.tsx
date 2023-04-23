import TextComponent                    from '../../../../text/text.component'
import LANDING_PAGE_FEATURES_CONSTANT   from './landing.page.features.constant'
import styles                           from './landing.page.features.component.scss'

/**
 * Landing page 'features' component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * return (
 *   <LandingPageFeaturesComponent />
 * )
 */
const LandingPageFeaturesComponent = (): JSX.Element => {

    return (
        <div className={styles.features} >
            {
                LANDING_PAGE_FEATURES_CONSTANT.map((f_, i_) => (
                    <div key={i_} className={styles.feature} >
                        <TextComponent title textRef={f_.title} style={styles.featureTitle} />
                        <ul className={styles.featureList} >
                            {
                                f_.texts.map((t_, j_) => (
                                    <li key={j_} className={styles.featureListItem} >
                                        <TextComponent textRef={t_} />
                                    </li>
                                ))
                            }
                        </ul>
                        {i_ < LANDING_PAGE_FEATURES_CONSTANT.length - 1 ? <hr /> : <></>}
                    </div>
                ))
            }
        </div>
    )

}

export default LandingPageFeaturesComponent