import MyCheckbox from '../components/MyCheckbox';
import MyTextInput from '../components/MyTextInput';
import {Form, Formik} from "formik";
import * as Yup from "yup";
import React from "react";

const numbers = [1, 2, 3, 4, 5];

const PostForm = () => {

    return (
        <>
            <h1>Subscribe!</h1>

            <div class="row">

                <div class="col-md-6">
                    <Formik
                        initialValues={{
                            username: "",

                        }}
                        validationSchema={Yup.object({
                            username: Yup.string()
                                .max(15, "Must be 15 characters or less")
                                .required("Required"),
                        })}
                        onSubmit={(values, { setSubmitting }) => {

                        }}
                    >


                        <Form>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Email address</label>
                                <MyTextInput label="First Name" name="username" type="text" placeholder="Jane"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="feFirstName">User Role</label>

                                <select className="form-control" name="role">
                                    <option selected="" value="Admin">Admin</option>
                                    <option value="Executive">Executive</option>
                                    <option value="Monitor">Monitor</option>
                                </select>
                            </div>

                            <button type="submit">Submit</button>
                        </Form>



                    </Formik>
                </div>
            </div>
        </>

    );
};

export default PostForm;