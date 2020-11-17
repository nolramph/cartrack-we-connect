import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import { defaultTheme } from './api/stylesApi';
// import { useAxiosGetUser } from './api/userApi'
import Header from './components/Header';
import UsersList from './components/Users/UsersList';
import UsersChat from './components/Users/UsersChat';
import UsersProfile from './components/Users/UsersProfile';
import LoginPage from './components/Login';
import configureStore from './redux/configureStore';
import {Provider as ReduxProvider} from 'react-redux';

const store = configureStore();

const App = () =>  {
  return (
    <ReduxProvider store={store}>
      <Router>
      <Header exact component={Header}/>
        <Switch>
          <Route exact path="/login" component={LoginPage}/> 
          <Route exact path="/" component={UsersList}/>
          <Route exact path="/profile/:paramsId" component={UsersProfile}/>
          <Route exact path="/chat/:paramsId" component={UsersChat}/>
        </Switch>
      </Router>
    </ReduxProvider>
  );
}

export default App;
