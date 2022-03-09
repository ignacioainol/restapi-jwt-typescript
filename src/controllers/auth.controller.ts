import { Request, Response } from 'express';
import User, { IUser } from '../models/User';

export const signup = (req: Request, res: Response) => {

    const user: IUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })

    console.log(user);
    res.send(user);
}

export const signin = (req: Request, res: Response) => {
    res.send('signin');
}

export const profile = (req: Request, res: Response) => {
    res.send('profile');
}