import SignUpForm from "./my_form";
import React from "react";

export default function Posts() {

    return (
        <div className="col-sm-9">

            <h4>
                <small>RECENT POSTS</small>
            </h4>
            <hr></hr>
            <h2>I Love Food</h2>
            <h5><span className="glyphicon glyphicon-time"></span> Post by Jane Dane, Sep 27, 2015.</h5>
            <h5><span className="label label-danger">Food</span> <span
                className="label label-primary">Ipsum</span></h5><br></br>
            <p>Food is my passion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.</p>


        </div>

    );
};

