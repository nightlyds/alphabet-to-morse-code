import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "normalize.css";
import "./basic/css/fonts_and_colors.css";
import Error404 from "./basic/components/Error404";
import TranslatorPage from "./TranslatorPage";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={TranslatorPage} />
                        <Route component={Error404} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
