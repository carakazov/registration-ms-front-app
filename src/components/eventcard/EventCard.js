import {useTranslation} from "react-i18next";
import './eventcard.css'

const EVENT_BLOCKED = "BLOCKED"

export default function EventCard(props) {
    const {event} = props

    const {t} = useTranslation()

    function resolveEvent() {
        return EVENT_BLOCKED === event.event ? t('eventCard.blocked') : t('eventCard.unblocked')
    }

    return(
        <div className={'event-card-wrapper'}>
            <div className={'upper-line'}>
                {t('eventCard.event')} {resolveEvent()}
            </div>
            <div className={'under-line'}>
                <div className={'under-line-item date-block'}>
                    {t('eventCard.event')} {event.eventDate}
                </div>
                <div className={'under-line-item operator-block'}>
                    {t('eventCard.operator')} {event.operator}
                </div>
            </div>
        </div>
    )
}