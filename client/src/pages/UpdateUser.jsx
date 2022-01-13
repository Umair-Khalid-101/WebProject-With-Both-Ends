import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { TextField } from "../forms/TextField";
import { useHistory } from "react-router";
import { useParams, Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const validation = Yup.object().shape({
  firstName: Yup.string().required("First Name Is Required"),
  lastName: Yup.string().required("Last Name Is Required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .required("Password is Required")
    .min(5, "Can't be smaller than 5 characters"),
});

function UpdateUser({ handleChange, data }) {
  const { id } = useParams();
  const [applicant, setApplicant] = useState([]);
  console.log(id);
  useEffect(() => {
    const data = axios
      .get(`http://localhost:3001/app/User/${id}`)
      .then((response) => {
        console.log(response);
        setApplicant(response.data);

        console.log(applicant);
      });
    return () => {};
  }, []);

  const history = useHistory();
  console.log("Applicant:", applicant);
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
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={validation}
            onSubmit={(values) => {
              console.log(values);
              axios
                .put(`http://localhost:3001/app/UpdateUser/${id}`, values)
                .then((response) => console.log(response.data));
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
                <h4 className="text-center">Update User</h4>
                <TextField
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder={applicant.firstName}
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder={applicant.lastName}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="text"
                  placeholder={applicant.email}
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder={applicant.password}
                />
                <div className="text-center">
                  <button
                    className="btn btn-dark mb-5 mt-4"
                    type="submit"
                    onClick={() => {
                      setTimeout(() => {
                        history.push("/Users");
                      }, 3000);
                    }}
                  >
                    Update
                  </button>
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

export default UpdateUser;
