import {Route, Routes} from "react-router-dom";
import LoginPage from "../loginpage/LoginPage";
import ClientCard from "../clientcard/ClientCard";
import ListPage from "../listpage/ListPage";

export default function Main() {
    return(
        <main>
            <Routes>
                <Route exact path={"/"} element={<LoginPage/>}></Route>
                <Route exact path={"/list"} element={<ListPage/>}></Route>
            </Routes>
        </main>
    )
}