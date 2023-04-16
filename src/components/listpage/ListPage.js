import {Context} from "../context/Context";
import {useState} from "react";
import ClientInformation from "../clientinformation/ClientInformation";
import StatusHistory from "../statushistory/StatusHistory";
import LogOut from "../logout/LogOut";
import './listpage.css'

export default function ListPage() {
    const [checkedSystem, setCheckedSystem] = useState("")
    const [shouldReload, setShouldReload] = useState(false)

    return(
        <Context.Provider value={{checkedSystem, setCheckedSystem, shouldReload, setShouldReload}}>
            <div className={'list-page-wrapper'}>
                <div className={'lists-wrapper'}>
                    <ClientInformation/>
                    <StatusHistory/>
                </div>
                <LogOut/>
            </div>
        </Context.Provider>
    )
}