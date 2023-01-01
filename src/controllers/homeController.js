import db from '../models/index';
import CRUDService from '../services/CRUDService';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data : JSON.stringify(data)
        });
    }catch{
        console.log(e)
    }
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewuser(req.body);
    console.log(message);

    return res.send('post crud from server');
}

let getCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();

    return res.render('displayCRUD.ejs', {
        dataUsers : data
    });
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    postCRUD : postCRUD,
    getCRUD : getCRUD
}