import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

import './header.css'
import languageHolder from "../holders/languageHolder";


export default function Header() {
    const {t, i18n} = useTranslation()

    const[language, setLanguage] = useState(languageHolder.getLanguage())

    useEffect(() => {
        i18n.changeLanguage(language)
        languageHolder.setLanguage(language)
    }, [language])

    return(
        <div className={'header'}>
            <div className={'header-item company-title'}>
                Swan Security Systems
            </div>
            <div className={'header-item app-title'}>
                <select name={'Select language'} onChange={e => setLanguage(e.target.value)} value={language}>
                    <option value={'en'}>EN</option>
                    <option value={'ru'}>RU</option>
                </select>
                {t('titles.administrationConsole')}
            </div>
        </div>
    )
}