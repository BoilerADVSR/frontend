import React, {Component} from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from "./components/Register";
import Dashbaord from "./components/Dashboard";
import Login from "./components/Login";
import SearchCourses from "./components/SearchCourses";
import LandingPage from "./components/LandingPage";
import PlanOfSudy from "./components/PlanOfStudy";
import EditProfile from "./components/EditProfile";
import PasswordReset from "./components/PasswordReset";
import Chat from "./components/Chat";

class App extends Component {

  render() {
    return (
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route  path='/students/new' component={Register} />
            <Route  path='/students/landingpage/:id' component={LandingPage} />
            <Route  path='/students/dashboard/:id' component={Dashbaord} />
            <Route  path='/students/courses/:id' component={SearchCourses} />
            <Route  path='/students/editprofile/:id' component={EditProfile} />
            <Route  path='/students/planofstudy/:id' component={PlanOfSudy} />
            <Route  path='/students/change/pass=:id' component={PasswordReset} />
            <Route path='/students/chat/:id/:connectionID' component={Chat} />
          </Switch>
        </Router>
    );
  }
}
export default App;
