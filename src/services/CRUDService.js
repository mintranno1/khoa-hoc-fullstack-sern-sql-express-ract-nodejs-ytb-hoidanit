import bcrypt from 'bcryptjs';
import db from '../models/index';

const salt = bcrypt.genSaltSync(10);

let createNewuser = async (data) => {
    
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBrcyptjs = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBrcyptjs,
                firstName: data.firstname,
                lastName: data.lastname,
                address: data.address,
                gender: data.gender === '1' ? true : false,
                image: 'null',
                phoneNumber: data.phonenumber,
                roleId: data.roleId,
                positionId: 'null',
            })
            resolve('ok! create a new user succeed!');

        } catch (e) {
            reject(e);
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashpassword = await bcrypt.hashSync("password", salt);

            resolve(hashpassword)
        } catch (e) {
            reject(e)
        }

    })
}

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try{
            let users = db.User.findAll({raw : true});

            resolve(users)
        }catch(e){
            reject(e)
        }
    })
}

module.exports = {
    createNewuser: createNewuser,
    getAllUser : getAllUser
};