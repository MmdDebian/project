import {Request , Response} from 'express';
import service from './service';

export function read(req:Request,res:Response){
    res.send(service.read());
};
