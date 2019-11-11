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
router.get('/random/', (req,res, next)=>{
    res.send(getRandomPlayer());
    next();
    return;
})
router.get('/random/:team', (req,res, next)=>{
    let team = Number(req.params.team);
    res.send(getRandomPlayerByTeam(team));
    next();
    return;
})
router.get('/:team', (req,res, next)=>{
    let team = Number(req.params.team);
    if (team >= getAllTeams().length){
        res.send({message: "There are no other teams"});
        next();
        return;
    }
    res.send(getPlayersByTeam(team));
    next();
    return;
})
router.get('/role/:role', (req,res, next)=>{
    let role = req.params.role;
    res.send(getPlayerByRole(role));
    next();
    return;
})
module.exports=router;