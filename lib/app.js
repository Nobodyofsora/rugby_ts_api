"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let teams = require('./team/team');
let players = require('./player/player');
const app = express_1.default();
app.use('/team', teams);
app.use('/player', players);
app.listen(3001, () => console.log('Server running'));
