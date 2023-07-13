const getAll = require("../controllers/getCountry");
// const getAPI = require("../controllers/getCountry");
const getById = require("../controllers/getByID");

//query=name
const getCountry = async (req, res) => {
  try {
    const { name } = req.query;
    // const response = await getAPI();
    const response = await getAll();
    if (name) {
      let countryName = response.filter((country) =>
        country.name.toLowerCase().includes(name.toLowerCase())
      );
      if (countryName === null) {
        throw Error("Country not available");
      }
      res.status(200).json(countryName);
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//:id
const getID = async (req, res) => {
  const { idPais } = req.params;
  try {
    const response = await getById(idPais);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCountry,
  getID,
};
