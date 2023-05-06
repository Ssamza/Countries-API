const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const createActivity = async ({ name, difficulty, season, country }) => {
  if (!name || !difficulty || !season) throw Error("info is missing");

  const countriesDB = await Country.findAll();
  if (countriesDB.length === 0) {
    throw Error("No countries found in database");
  }

  if (!country || country.length === 0) {
    throw Error("country is required");
  } else if (country && country.length > 0) {
    const countries = await Promise.all(
      country.map((name) =>
        Country.findOne({
          where: {
            name: {
              [Op.iLike]: `${name}%`,
            },
          },
        })
      )
    );
    const invalid = countries.filter((country) => country === null);

    if (invalid.length > 0) {
      throw Error("Invalid country");
    } else {
      const newActivity = await Activity.create({
        name,
        difficulty,
        season,
      });
      await newActivity.addCountry(countries);
      return newActivity;
    }
  }
};

module.exports = createActivity;
