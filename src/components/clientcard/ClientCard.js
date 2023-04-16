import {useTranslation} from "react-i18next";
import './clientcard.css'
import {changeClientStatus} from "../../api/clientsApi";
import {useContext, useState} from "react";
import classNames from "classnames";
import {Context} from "../context/Context";


export default function ClientCard(props) {
    const {client, isSelected} = props

    const {setCheckedSystem, setShouldReload} = useContext(Context)

    const {t} = useTranslation()

    const cardWrapperClass = classNames('card-wrapper', { checked: isSelected })

    async function changeStatus(e) {
        e.stopPropagation()
        await changeClientStatus(client.username)
            .then(() => alert('Hui'))
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
                <div className={'change-block under-line-item'} onClick={e => changeStatus(e)}>
                    {t('clientCard.change')}
                </div>
            </div>
        </div>
    )
}