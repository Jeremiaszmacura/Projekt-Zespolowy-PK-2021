import {Request, Response} from "express";

export let getHelloWorld = (req: Request, res: Response) => {
    res.json({content: 'hello world'});
};