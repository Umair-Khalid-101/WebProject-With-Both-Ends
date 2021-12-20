const express = require("express");
const router = express.Router();
const copy = require("../models/SignUpModel");

router.post("/SignUp", (request, response) => {
  const signedUpUser = new copy({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    password: request.body.password,
  });
  signedUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;
