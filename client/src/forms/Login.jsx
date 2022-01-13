import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "axios";
import React from "react";

const validation = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password can not be smaller than 6 characters"),
});

function SignUp({ handleStateChange, data }) {
  const history = useHistory();
  return (
    <>
      <Navbar />
      <div className="row">
        <div
          className="container mb-5 mt-5"
          style={{ backgroundColor: "#F6F6F6" }}
        >
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validation}
            onSubmit={(values) => {
              //   const temp = [...data];
              //   temp.push(values);
              console.log(values);
              //   handleStateChange(temp);
              // history.push("/Products");
              axios
                .post("http://localhost:3001/app/SignUp", values)
                .then((response) => console.log(response.data));
              window.location.reload();
            }}
          >
            <Form>
              <div
                className="container-fluid"
                style={{
                  width: "300px",
                  marginTop: "40px",
                }}
              >
                <h4 className="text-center">Login</h4>
                <TextField label="Email" name="email" type="text" />
                <TextField label="Password" name="password" type="password" />
                <div className="text-center">
                  <h5 className="mt-4">
                    Not a user? <Link to="/SignUp">SignUp</Link>
                  </h5>
                  <Link to="/Products">
                    <button
                      className="btn btn-success ms-4 mb-5 mt-2"
                      type="submit"
                    >
                      Login
                    </button>
                  </Link>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
