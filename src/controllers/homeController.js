const getHomePage = (req, res) =>{
    // proccess data
    // call model

    res.send('Hello World! I\'\m admin')
}

const getXYZ = (req, res) =>{
    res.render("sample.ejs");
}

module.exports = {
    getHomePage, getXYZ
}