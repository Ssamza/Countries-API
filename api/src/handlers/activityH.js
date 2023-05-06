const createActivity = require("../controllers/postAct");
const getAct = require("../controllers/getAct");

const postActivity = async (req, res) => {
  try {
    const { name, difficulty, season, country } = req.body;
    const response = await createActivity({
      name,
      difficulty,
      season,
      country,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getActivity = async (req, res) => {
  try {
    const response = await getAct();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getActivity,
  postActivity,
};
