const { Country, Activity } = require("../db");

const getById = async (idPais) => {
  const country = await Country.findByPk(idPais.toUpperCase(), {
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "season"],
      through: {
        attributes: [],
      },
    },
  });
  return country;
};

module.exports = getById;
