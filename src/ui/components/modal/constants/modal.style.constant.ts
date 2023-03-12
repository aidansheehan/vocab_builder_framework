import { MODAL_ANIMATION_TIMER } from './modal.animation-timer.constant'

/** Default Style */
export const DEFAULT_MODAL_STYLE = {
    transition: `opacity ${MODAL_ANIMATION_TIMER}ms ease`,
    opacity: 0
}

/** Transition Styles */
export const MODAL_TRANSITION_STYLES: { [id: string]: React.CSSProperties } = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 }
}