const { Country, Activity } = require("../db");

const getAct = async () => {
  const activity = await Activity.findAll({
    include: {
      model: Country,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  if (activity.length === 0) {
    throw Error("No activities available");
  } else {
    return activity;
  }
};

module.exports = getAct;
