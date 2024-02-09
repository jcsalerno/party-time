const router = require("express").Router();

const partyController = require("../controllers/partyController");

router.route("/parties").post((req, res) => partyController.create(req, res));

router.route("/parties").get((req, res) => partyController.getAll(req, res));

router.route("/parties/:id").get((req, res) => partyController.get(req, res));

module.exports = router;
