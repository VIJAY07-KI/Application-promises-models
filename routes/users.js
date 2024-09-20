const router = require('express').Router()
const { createUsers , getUsers, getUsersById, deleteUsers, updateUsersById } = require("../controllers/users")
router.post("/users",createUsers)
      .get("/users", getUsers)
      .get("/users/:ownDefinedName",getUsersById)
      .delete("/users/:ownDefinedName", deleteUsers)
      .put("/users/:ownDefinedName", updateUsersById)
module.exports = router
