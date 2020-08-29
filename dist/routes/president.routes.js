"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const president_controller_1 = require("../controllers/president.controller");
router.route('/')
    .get(president_controller_1.getPresidents)
    .post(president_controller_1.createPresident);
router.route('/:presidentId')
    .get(president_controller_1.getPresident)
    .delete(president_controller_1.deletePost)
    .put(president_controller_1.updatePresident);
exports.default = router;
