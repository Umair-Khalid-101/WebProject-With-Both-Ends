const express = require("express");
const router = express.Router();
const copy = require("../models/SignUpModel");
const cart = require("../models/CartModel");

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

router.post("/Products", (request, response) => {
  const userCart = new cart({
    image: request.body.image,
    title: request.body.title,
    description: request.body.description,
    price: request.body.price,
    category: request.body.category,
  });
  userCart
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

router.delete("/User/:id", (request, response) => {
  copy
    .deleteOne({ _id: request.params.id })
    .then((result) => {
      response.status(200).json(result);
    })
    .catch((error) => console.log(error));
});

router.put("User/:id", (request, response) => {
  copy
    .updateOne(
      { _id: request.params.id },
      {
        $set: {
          firstName: request.body.firstName,
          lastName: request.body.lastName,
          email: request.body.email,
          password: request.body.password,
        },
      }
    )
    .then((result) => {
      result.status(201).json(result);
    })
    .catch((error) => console.log(error));
});

router.get("/users", function (req, res) {
  copy
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => console.log(error));
});
router.get("/Products", function (req, res) {
  cart
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
