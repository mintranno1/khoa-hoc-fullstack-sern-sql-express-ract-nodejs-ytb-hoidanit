
let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
    //app.set("views", "./src/views"); - có đoạn này bên config > viewEngine nên nó chỉ cần gọi tên file view homepage.ejs nó tự tìm kiếm hiển thị
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

module.exports = {
    getHomePage : getHomePage,
    getAboutPage : getAboutPage,
}