import './App.css';
import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";
import LoginPage from "./components/LoginPage/LoginPage";
import {BrowserRouter, Route, Switch} from "react-router-dom"

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>

                {/*<Route path="/login">*/}
                {/*    <LoginPage />*/}
                {/*</Route>*/}
                <Route path="/">
                    <MainPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;