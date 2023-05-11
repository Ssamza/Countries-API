const { Country, Activity } = require("../db");

const getAct = async () => {
  const activity = await Activity.findAll();
  if (activity.length === 0) {
    throw Error("No activities available");
  } else {
    return activity;
  }
};

module.exports = getAct;
