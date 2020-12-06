import './App.css';
import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import UserListContainer from "../../containers/UserListContainer";
import UserInfoContainer from "../../containers/UserInfoContainer";
import PaginationContainer from "../../containers/PaginationContainer";

const App = () => {
  return (
    <div className="App">
        <div className="container">
            <HashRouter>
                <Switch>
                    <Route path='/' exact>
                        <UserListContainer />
                        <PaginationContainer />
                    </Route>
                    <Route path='/:userName/' exact>
                        <UserInfoContainer />
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    </div>
  );
}

export default App;
