const express = require("express");
const linkController = require("../controllers/link.controller");

const router = express.Router();

router.route("/")
.get(linkController.getAll);

router.route("/:id")
.get(linkController.getLinkByID)
.delete(linkController.deleteLink)
.patch(linkController.hideShowLinkByID);

router.route("/users/:id")
.get(linkController.getAllLinksByUserID)
.post(linkController.createLinkByUserID);


module.exports = router;