const routeController = (req, res) => {
    try {
        res.render('main.ejs', {});
    } catch (e) {
        console.log('Error: ', e);
        res.sendStatus(500);
    }
}

module.exports = {
    routeController,
}