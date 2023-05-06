const { Router } = require("express");
const { getCountry, getID } = require("../handlers/countryH");

const countryRouter = Router();

countryRouter.get("/", getCountry);

countryRouter.get("/:idPais", getID);

module.exports = countryRouter;
