import {Request , Response} from 'express';
import service from './service';

export function read(req:Request,res:Response){
    res.send(service.read());
};


export function update(req:Request,res:Response){
    let id = parseInt(req.params.id);
    res.send(service.update(id));
}