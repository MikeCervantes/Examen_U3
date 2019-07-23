const router = require('express').Router();

module.exports = (wagner) => {

    const fanPageCtrl = wagner.invoke((FanPage) =>
        require('../controllers/fanPage.controller')(FanPage));

    router.post('/', (req, res) =>
        fanPageCtrl.createFanPage(req, res));

    router.put('/:id', (req, res) =>
        fanPageCtrl.createKeyword(req, res));

    router.get('/:keywords', (req, res) =>
        fanPageCtrl.findByKeyword(req, res));

    router.get('/califGlobal/:id', (req, res) =>
        fanPageCtrl.califGlobal(req, res));

    /*router.put('/:id', (req, res) =>
        fanPageCtrl.updateByID(req, res));

    router.put('/activar/:id', (req, res) =>
        fanPageCtrl.updateActivo(req, res));

    router.get('/:id', (req, res) =>
        fanPageCtrl.findByID(req, res));

    router.get('/login/:email/:password', (req, res) =>
        fanPageCtrl.login(req, res));*/

    return router;
}