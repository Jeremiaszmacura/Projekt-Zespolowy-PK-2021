import {getRepository} from "typeorm";
import {User} from "../entity/User";


const authenticateUser = async (req, res, next) => {
    await getRepository(User).findOne({where: {email: req.body.user.email}})
        .then((result) => {
            if(result) return res.json('Email already exists.');
            next();
        });
};

module.exports = {
    authenticateUser
};