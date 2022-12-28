import {Request , Response} from 'express';
import service from './service';

export function login(req:Request,res:Response){
    res.status(201).json({
        message : 'auth/login route is true !' ,
        data : service.login() ,
    })
}