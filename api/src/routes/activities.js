const { Router } = require("express");
const {
  getActivity,
  postActivity,
  deleteActivity,
} = require("../handlers/activityH");
const activityRouter = Router();

activityRouter.post("/", postActivity);

activityRouter.get("/", getActivity);

activityRouter.delete("/:id", deleteActivity);

module.exports = activityRouter;
