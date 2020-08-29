"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePresident = exports.deletePost = exports.getPresident = exports.createPresident = exports.getPresidents = void 0;
const database_1 = require("../database");
function getPresidents(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const presidents = yield conn.query('SELECT * FROM presidents');
        return res.json(presidents[0]);
    });
}
exports.getPresidents = getPresidents;
function createPresident(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPresident = req.body;
        const conn = yield database_1.connect();
        console.log(newPresident);
        yield conn.query('INSERT INTO presidents SET ?', [newPresident]);
        return res.json({
            "message": "president added"
        });
    });
}
exports.createPresident = createPresident;
;
function getPresident(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.presidentId;
        const conn = yield database_1.connect();
        const president = yield conn.query('SELECT * FROM presidents WHERE id = ?', [id]);
        return res.json(president[0]);
    });
}
exports.getPresident = getPresident;
;
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.presidentId;
        const conn = database_1.connect();
        yield conn.query("DELETE FROM presidents WHERE id = ?", [id]);
        return res.json({
            "message": "President eliminated successfully"
        });
    });
}
exports.deletePost = deletePost;
function updatePresident(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.presidentId;
        const updatePresident = req.body;
        const conn = yield database_1.connect();
        yield conn.query('UPDATE presidents SET ? WHERE id = ?', [updatePresident, id]);
        return res.json({
            "message": "President updated"
        });
    });
}
exports.updatePresident = updatePresident;
