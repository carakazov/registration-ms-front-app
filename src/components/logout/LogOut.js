import {deleteToken} from "../../tokenholder/tokenHolder";
import {useTranslation} from "react-i18next";
import './logout.css'
import {useNavigate} from "react-router";

export default function LogOut() {
    const {t} = useTranslation()
    const navigate = useNavigate()

    function logOut() {
        deleteToken()
        navigate("/")
    }


    return(
        <div className={'logout-wrapper'}>
            <button onClick={logOut} className={'logout-button'}>{t('buttons.logout')}</button>
        </div>
    )
}