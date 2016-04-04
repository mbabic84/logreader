module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index.ejs', {title: "Welcome..."});
    });

    app.get('*', function (req, res) {
        res.redirect('/');
    });
};