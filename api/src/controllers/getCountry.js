const axios = require("axios");
const { Country } = require("../db");

const getAPI = async () => {
  const response = await axios.get("https://restcountries.com/v3/all");
  const data = response.data;

  const countries = data.map((country) => {
    return {
      id: country.cca3,
      official_flag: country.flags[1],
      name: country.name.common
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""),
      capital: country.capital
        ? country.capital[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        : null,
      continent: country.continents
        ? country.continents[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        : null,
      subregion: country.subregion
        ? country.subregion.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        : null,
      area: country.area,
      population: country.population,
    };
  });
  return countries;
};
const getAll = async () => {
  const count = await Country.count();
  if (count > 0) {
    const countriesDB = await Country.findAll();
    return countriesDB;
  } else {
    const countriesAPI = await getAPI();
    const DB = await Country.bulkCreate(countriesAPI);
    return DB;
  }
};

module.exports = getAll;
