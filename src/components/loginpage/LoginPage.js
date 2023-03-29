import './loginpage.css'
import LoginForm from "../forms/login/LoginForm";
import {useTranslation} from "react-i18next";

export default function LoginPage() {
    const {t} = useTranslation()

    return(
        <div className={"login-page"}>
            <div className={"login-form-wrapper"}>
                <h1 className={"login-form-header"}>{t('titles.login')}</h1>
                <LoginForm/>
            </div>
            <div className={"footer-line-div"}>{t('titles.footerLine')}</div>
        </div>
    )
}