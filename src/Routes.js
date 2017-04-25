/**
 * Created by shengj on 2017/4/14.
 * 路由
 */
import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
// 根组件
// import App from './App'
import Login from './components/Login'
import Index from './components/Index'

//Task
import Task from './components/task/Task'

//Sass
import Sass from './components/Sass'

//404
// import NotFound from './components/NotFound';

class Routes extends Component {
    render() {
        return (
            <Router>
                <div style={{height: '100%'}}>
                    <Route exact path="/" component={Login}/>
                    <Route path="/index" component={Index}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/task" component={Task}/>
                    <Route path="/sass" component={Sass}/>
                </div>
            </Router>
        )
    }
}

export default Routes