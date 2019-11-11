import express from 'express';
import {getAllPlayers, getPlayerByRole, getRandomPlayer, getRandomPlayerByTeam, getPlayersByTeam, getAllTeams} from 'rugbynpm_nobodyofsora';
const router = express.Router();
interface Player{
    name:string,
    surname:string,
    role:string
}
router.get('/', (req,res, next)=>{
    res.json(getAllPlayers());
    next();
    return;
})
router.get('/random/', (req,res)=>{
    res.send(getRandomPlayer());
})
router.get('/random/:team', (req,res)=>{
    let team = Number(req.params.team);
    res.send(getRandomPlayerByTeam(team));
})
router.get('/:team', (req,res)=>{
    let team = Number(req.params.team);
    if (team >= getAllTeams().length){
        res.send({message: "There are no other teams"});
    }
    res.send(getPlayersByTeam(team));
})
router.get('/role/:role', (req,res)=>{
    let role = req.params.role;
    res.send(getPlayerByRole(role));
})
export = router;