import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';  
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import SignIn from './components/Signin';
import SignUp from './components/Signup';

const getnerateClassNames = createGenerateClassName({
    productionPrefix: "au"
});

const App = ({history}) => {
    console.log("AUTH APP SSADSSADASd")
    return <div>
        <StylesProvider generateClassName={getnerateClassNames}>
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signin" component={SignIn} />
                    <Route path="/auth/signup" component={SignUp} />
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}

export default App;