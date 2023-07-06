import Header from "../header/Header";
import Main from "../main/Main";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

export default function App() {
    const [crutch, setCrutch] = useState(true)
    const navigate = useNavigate()
    //Не смотрите сюда, это такой костыль
    useEffect(() => {
        if(crutch) {
            navigate("/")
            setCrutch(false)
        }
    }, [crutch])

    return(
        <div>
            <Header/>
            <Main/>
        </div>
    )
}