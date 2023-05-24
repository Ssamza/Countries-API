const { Activity } = require("../db");

const delAct = async (id) => {
  const deleted = await Activity.findByPk(id);
};

module.exports = delAct;
