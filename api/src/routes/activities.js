const { Router } = require("express");
const { getActivity, postActivity } = require("../handlers/activityH");
const activityRouter = Router();

activityRouter.post("/", postActivity);

activityRouter.get("/", getActivity);

module.exports = activityRouter;
