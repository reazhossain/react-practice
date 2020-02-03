import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import "../styles.css";
import "../styles-custom.css";
import Axios from "axios";
import SignUpForm from "./my_form";


const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
        <>
            <label className="checkbox">
                <input {...field} {...props} type="checkbox" />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MySelect = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
            <StyledSelect {...field} {...props} />
            {meta.touched && meta.error ? (
                <StyledErrorMessage>{meta.error}</StyledErrorMessage>
            ) : null}
        </>
    );
};



// And now we can use these
const SignupForm = () => {

    return (
        <>
            <h1>Subscribe!</h1>
            <Formik
                initialValues={{
                    username: "",
                    password: "",
                    email: "",
                    acceptedTerms: false, // added for our checkbox
                    jobType: "" // added for our select
                }}
                validationSchema={Yup.object({
                    username: Yup.string()
                        .max(15, "Must be 15 characters or less")
                        .required("Required"),
                    password: Yup.string()
                        .max(20, "Must be 20 characters or less")
                        .required("Required"),
                    email: Yup.string()
                        .email("Invalid email addresss`")
                        .required("Required"),
                    acceptedTerms: Yup.boolean()
                        .required("Required")
                        .oneOf([true], "You must accept the terms and conditions."),
                    jobType: Yup.string()
                    // specify the set of valid values for job type
                    // @see http://bit.ly/yup-mixed-oneOf
                        .oneOf(
                            ["designer", "development", "product", "other"],
                            "Invalid Job Type"
                        )
                        .required("Required")
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        ///   alert(JSON.stringify(values, null, 2));
                        const data = values.valueOf("values");

                        Axios({
                            method: 'post',
                            url: 'http://parliament.itracker71.com/oauth/token',
                            data: {
                                "grant_type" : "password",
                                "client_id" : "2",
                                "client_secret" : "lCtUFBst1FxnzJLbinN4u5tvsLY2atMEwjmat39G",
                                "username" : values.username,
                                "password" : values.password
                            },
                            headers: { 'content-type': 'application/x-www-form-urlencoded' },
                        })
                            .then(response => {

                                console.log(response);
                            })
                            .catch(err => console.log(err));



                        //   setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <MyTextInput
                        label="First Name"
                        name="username"
                        type="text"
                        placeholder="Jane"
                    />
                    <MyTextInput
                        label="Last Name"
                        name="password"
                        type="text"
                        placeholder="Doe"
                    />
                    <MyTextInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="jane@formik.com"
                    />
                    <MySelect label="Job Type" name="jobType">
                        <option value="">Select a job type</option>
                        <option value="designer">Designer</option>
                        <option value="development">Developer</option>
                        <option value="product">Product Manager</option>
                        <option value="other">Other</option>
                    </MySelect>
                    <MyCheckbox name="acceptedTerms">
                        I accept the terms and conditions
                    </MyCheckbox>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    );
};

export default SignUpForm;

/*
function App() {
    return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);*/
