const routeController = (req, res) => {
    try {
        res.render('main.pug', {});
    } catch (e) {
        console.log('Error: ', e);
        res.sendStatus(500);
    }
}

module.exports = {
    routeController,
}