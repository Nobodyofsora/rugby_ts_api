import express from 'express';
let teams = require('./team/team');
let players = require('./player/player');
const app = express();
app.use('/teams', teams);
app.use('/players', players);
app.get('/', (req,res, next)=>{
    res.send({
        "/teams": [ "/","/:insertTeamName", "/findTeamPlayer/:name/:surname"],
        "/players": [ "/","/random", "/random/:team", "/:team", "/role/:role"]
    })
})
app.listen(3002, ()=> console.log('Server running'));