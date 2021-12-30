import React from "react";
import { useFetch } from "../hook/useFetch";
import Navbar from "./NavBar";
import { useHistory } from "react-router";
import axios from "axios";

const url = "http://localhost:3001/app/users";

const Test = () => {
  const { loading, products } = useFetch(url);
  const history = useHistory();
  let counter = 0;

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:3001/app/User/${id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onUpdate = (id) => {
    alert(id);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="text-center mt-5 mb-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  }
  if (!loading) {
    console.log(products);
    return (
      <>
        <div className="text-center fs-4 fw-bold mt-5 mb-5">
          USERS DATA FROM DATABASE
        </div>
        <div className="row">
          {products.map((user) => {
            counter = counter + 1;
            return (
              <>
                <div className="col-3 container mt-4 ms-4">
                  <div key={user._id}>
                    <div className="card" style={{ width: "18rem" }}>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item fs-4 fw-bold">
                          UserNo: {counter}
                        </li>
                        <li className="list-group-item fs-6">
                          FirstName: {user.firstName}
                        </li>
                        <li className="list-group-item fs-6">
                          lastName: {user.lastName}
                        </li>
                        <li className="list-group-item fs-6">
                          Email: {user.email}
                        </li>
                        <li className="list-group-item fs-6">
                          Password: {user.password}
                        </li>
                        <li className="list-group-item fs-6">
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              onDelete(user._id);
                            }}
                          >
                            Delete
                          </button>
                          <button
                            className="btn btn-primary ms-4"
                            onClick={() => {
                              onUpdate(user._id);
                            }}
                          >
                            Update
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="text-center">
          <div
            className="btn btn-primary mt-5 mb-5"
            onClick={() => history.push("/")}
          >
            Go to Home
          </div>
        </div>
      </>
    );
  }
};

export default Test;
