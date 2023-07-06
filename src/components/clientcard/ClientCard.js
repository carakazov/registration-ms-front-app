import {useTranslation} from "react-i18next";
import './clientcard.css'
import {changeClientStatus} from "../../api/clientsApi";
import {useContext} from "react";
import classNames from "classnames";
import {Context} from "../context/Context";
import {useNavigate} from "react-router";


export default function ClientCard(props) {
    const {client, isSelected} = props

    const {setCheckedSystem, setShouldReload} = useContext(Context)
    const navigate = useNavigate()

    const {t} = useTranslation()

    const cardWrapperClass = classNames('card-wrapper', { checked: isSelected })

    async function changeStatus(e) {
        e.stopPropagation()
        await changeClientStatus(client.username)
            .then(() => setShouldReload(true))
            .catch(() => navigate("/"))
    }

    function checkCard() {
        setCheckedSystem(client.username)
        setShouldReload(true)
    }

    return(
        <div className={cardWrapperClass} onClick={checkCard}>
            <div className={'upper-line'}>
                {t('clientCard.name')} {client.username}
            </div>
            <div className={'under-line'}>
                <div className={'status-block under-line-item'}>
                    {t('clientCard.status')} {client.blocked ? t('clientCard.blocked') : t('clientCard.active')}
                </div>
                <div className={'change-block under-line-item'}>
                    <p className={'button-line'} onClick={e => changeStatus(e)}>{t('clientCard.change')}</p>
                </div>
            </div>
        </div>
    )
}