import {useContext, useEffect, useState} from "react";
import {getClients} from "../../api/clientsApi";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";
import {Context} from "../context/Context";
import ClientCard from "../clientcard/ClientCard";
import './clientinformation.css'


export default function ClientInformation() {
    const [clientList, setClientList] = useState([])
    const [fetchError, setFetchError] = useState({})

    const {checkedSystem} = useContext(Context)

    const navigate = useNavigate()
    const {t} = useTranslation()

    useEffect(() => {
        getClients()
            .then(resolve => setClientList(resolve.clients))
            .catch(reject => {
                setFetchError({
                    isError: true,
                    errorCode: reject
                })
            })
    }, [])

    if(fetchError.isError) {
        navigate('/')
    }

    return(
        <div className={'client-information-wrapper'}>
            <div className={'client-information-header'}>
                {t('titles.clientInformation')}
            </div>
            <div className={'client-cards-wrapper'}>
                {clientList.map(
                    item => {
                        let isCardSelected = item.username === checkedSystem
                        return <ClientCard client={item} isSelected={isCardSelected} key={item.username}/>
                    }
                )}
            </div>
        </div>
    )
}