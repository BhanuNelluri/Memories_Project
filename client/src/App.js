import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MyDay from './components/Myday/myday';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import Important from './components/Important/Important';
import Tasks from './components/Tasks/tasks';
import taskForm from './components/Form/taskForm';
import Notification from '../src/Notifications/Notification';
import { useSelector } from 'react-redux';

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const alert = useSelector(state => state.alerts);
    return (
        <div>
            {alert.message && <div className="notification-wrapper">
                <Notification  {...alert} />
            </div>}
          <BrowserRouter>
          <Container maxWidth="xl">
              <Navbar />
              <Switch>
                  <Route path='/' exact component={() => <Redirect to="/home" />} />
                  <Route path='/home' exact component={Home} />
                  <Route path='/myday' exact component={MyDay} />
                  <Route path='/important' exact component={Important} />
                  <Route path='/tasks' exact component={Tasks} />
                  <Route path='/auth' exact component={() => (!user ? <Auth /> : <Redirect to="/home" />)} />
                  <Route path='/newTask' exact component={taskForm} />
                  {/* <Route path='/newList' exact component={listForm} /> */}
              </Switch>

          </Container>
      </BrowserRouter>
      
      </div>
    );
}

export default App;