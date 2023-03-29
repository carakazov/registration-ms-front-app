import {Route, Routes} from "react-router-dom";
import LoginPage from "../loginpage/LoginPage";

export default function Main() {
    return(
        <main>
            <Routes>
                <Route exact path={"/"} element={<LoginPage />}></Route>
            </Routes>
        </main>
    )
}