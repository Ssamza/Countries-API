const { Activity } = require("../db");

const delAct = async (id) => {
  const response = await Activity.findByPk(id, {
    attributes: ["id", "name"],
  });
  if (!response) {
    throw Error("ID does not match");
  } else {
    let activity = response;
    // return activity;
    response.destroy();
    return {
      message: "Activity was deleted successfully",
      activity,
    };
  }
};

module.exports = delAct;
