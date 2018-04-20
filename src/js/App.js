import React, { Component } from 'react';
import '../css/App.css';
import FirstPage from "./FirstPage";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router';
import Home from "./Home";


/*https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/#react-firebase-setup*/

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        };
    }

    componentDidMount() {

    }

  render() {
    return (
        <MuiThemeProvider>
            <Switch>
                <Route exact path="/" component={FirstPage}/>
                <Route exact path="/home" component={Home}/>
            </Switch>
        </MuiThemeProvider>

        /*
                    <MuiThemeProvider>
                        <Route
                            exact path={"/"}
                            component={() => <FirstPage />}
                        />

            </MuiThemeProvider>
            <div>


                <Route
                    exact path={routes.SIGN_UP}
                    component={() => <SignUpPage />}
                />
                <Route
                    exact path={routes.SIGN_IN}
                    component={() => <SignInPage />}
                />
                <Route
                    exact path={routes.PASSWORD_FORGET}
                    component={() => <PasswordForgetPage />}
                />
                <Route
                    exact path={routes.HOME}
                    component={() => <FirstPage />}
                />
                <Route
                    exact path={routes.ACCOUNT}
                    component={() => <AccountPage />}
                />
            </div>*/

    );
  }
}

export default App;
