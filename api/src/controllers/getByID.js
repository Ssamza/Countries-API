const { Country } = require("../db");

const getById = async (idPais) => {
  const country = await Country.findByPk(idPais.toUpperCase());
  return country;
};

module.exports = getById;
