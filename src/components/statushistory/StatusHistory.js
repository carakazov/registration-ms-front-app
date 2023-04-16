import {useContext, useEffect, useState} from "react";
import {Context} from "../context/Context";
import {getHistory} from "../../api/historyApi";
import {useTranslation} from "react-i18next";
import EventCard from "../eventcard/EventCard";
import {useNavigate} from "react-router";
import './statushistory.css'

export default function StatusHistory() {
    const [historyList, setHistoryList] = useState([])
    const [fetchError, setFetchError] = useState({})
    const [listToRender, setListToRender] = useState([])

    const { checkedSystem, shouldReload, setShouldReload } = useContext(Context)
    const { t } = useTranslation()
    const navigate = useNavigate()

    useEffect(() => {
       if(shouldReload) {
           getHistory()
               .then(result => setHistoryList(result.history))
               .catch(reject => setFetchError({
                   isError: true,
                   errorStatus: reject
               }))
           setShouldReload(false)
       }
    }, [shouldReload])

    useEffect(() => {
        let list = historyList.filter(item => item.clientSystem === checkedSystem)
        setListToRender(list)
    }, [checkedSystem])

    if(fetchError.isError) {
        if(fetchError.errorCode === 401 || fetchError.errorCode === 403) {
            navigate('/')
        }

        return(<h1>{t('errors.serverException')}</h1>)
    }

    return(
        <div className={'status-history-list-wrapper'}>
            <div className={'status-history-block-header'}>
                {t('titles.historyList')}
            </div>
            <div className={'status-history-list'}>
                {listToRender.map(item => <EventCard event={item} key={item.clientSystem}/>)}
            </div>
        </div>
    )
}