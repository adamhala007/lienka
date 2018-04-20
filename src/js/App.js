import React, { Component } from 'react';
import '../css/App.css';
import FirstPage from "./FirstPage";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


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
            <FirstPage/>
        </MuiThemeProvider>

        /*<Router>
            <div>
                <Navigation authUser={this.state.authUser} />

                <hr/>

                <Route
                    exact path={routes.LANDING}
                    component={() => <FirstPage />}
                />
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
            </div>
        </Router>*/
    );
  }
}

export default App;
