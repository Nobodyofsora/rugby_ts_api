import express from 'express';
import {getAllTeams, isTeamPresent, getTeamByPlayer} from 'rugbynpm_nobodyofsora';
const router = express.Router();
interface Player{
    name:string,
    surname:string,
    role:string
}
router.get('/', (req,res, next)=>{
    res.send(getAllTeams());
    next();
    return;
})
router.get('/:index', (req,res, next)=>{
    let team = req.params.index; 
    res.send({team: team, is_it_present: isTeamPresent(team)});
    next()
    return;
})
router.get('/findTeamPlayer/:name/:surname', (req,res, next)=>{
    let player:Player = {name:req.params.name, surname: req.params.surname, role:"" };
    res.send({message: getTeamByPlayer(player)});
    next();
    return;
})
module.exports= router;