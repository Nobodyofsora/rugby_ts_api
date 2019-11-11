"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rugbynpm_nobodyofsora_1 = require("rugbynpm_nobodyofsora");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.json(rugbynpm_nobodyofsora_1.getAllPlayers());
    return;
});
router.get('/:index', (req, res) => {
    let player = JSON.parse(JSON.stringify({ "name": "Willie", "surname": "le Roux", "role": "Fullback" }));
    res.json(rugbynpm_nobodyofsora_1.getTeamByPlayer(player));
    return;
});
module.exports = router;
