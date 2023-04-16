import {deleteToken} from "../../tokenholder/tokenHolder";
import {useTranslation} from "react-i18next";
import './logout.css'

export default function LogOut() {
    const {t} = useTranslation()

    return(
        <div className={'logout-wrapper'}>
            <button onClick={deleteToken} className={'logout-button'}>{t('buttons.logout')}</button>
        </div>
    )
}