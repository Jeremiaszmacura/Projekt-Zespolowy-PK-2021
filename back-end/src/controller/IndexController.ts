import {Request, Response} from "express";

export let getHelloWorld = (req: Request, res: Response) => {
    return 'hello world';
};