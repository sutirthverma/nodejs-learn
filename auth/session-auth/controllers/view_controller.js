async function handleGetHomePage(req, res) {
    return res.render('home');
}

module.exports = {
    handleGetHomePage
}