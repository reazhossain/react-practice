import React from "react";
import ReactDOM from "react-dom";
import {Formik, Form, useField} from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";

import Axios from "axios";
import SignUpForm from './forms/PostForm';
import Posts from './forms/Posts';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

export default function App() {
    return (

        <Router>

            <div className="row content">

                <div className="col-sm-3 sidenav">
                    <h4>SS's Blog</h4>
                    <ul className="nav nav-pills nav-stacked">
                        <li className="active"><Link to="/home">Home</Link></li>
                        <li><Link to="/form">Form</Link></li>
                        <li> <Link to="/posts">Posts</Link></li>
                    </ul>
                </div>

                <div className="col-sm-8">
                    <Switch>
                        <Route path="/posts">
                            <Posts />
                        </Route>

                        <Route path="/form">
                            <SignUpForm />
                        </Route>
                    </Switch>
                </div>

            </div>





        </Router>
    );
}




const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);