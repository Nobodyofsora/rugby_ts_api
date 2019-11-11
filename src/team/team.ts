import express from 'express';
import {getAllTeams, isTeamPresent, getTeamByPlayer} from 'rugbynpm_nobodyofsora';
const router = express.Router();
interface Player{
    name:string,
    surname:string,
    role:string
}
router.get('/', (req,res)=>{
    res.send(getAllTeams());
})
router.get('/:index', (req,res)=>{
    let team = req.params.index; 
    res.send({team: team, is_it_present: isTeamPresent(team)});
})
router.get('/findTeamPlayer/:name/:surname', (req,res)=>{
    let player:Player = {name:req.params.name, surname: req.params.surname, role:"" };
    res.send({team: getTeamByPlayer(player)});
})
export = router;