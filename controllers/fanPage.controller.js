const http = require('http');
const path = require('path');
const status = require('http-status');

let _fanPage;

const createFanPage = (req, res) => {
    const fanPage = req.body;

    _fanPage.create(fanPage)
        .then((data) => {
            res.status(200);
            res.json({ msg: "FanPage creada con éxito", data: data });
        }).catch((err) => {
            res.status(400);
            res.json({ msg: "Error!!!!", data: err });
        });
}

const createKeyword = (req, res) => {
    const keywords = req.body.keywords;
    const id = { _id: req.params.id };

    _fanPage.findOneAndUpdate(id, { $push: { keywords: keywords } })
        .then((data) => {
            res.status(200);
            res.json({ msg: "Keyword insertado con éxito", data: data });
        }).catch((err) => {
            res.status(400);
            res.json({ msg: "Error!!!!", data: err });
        });
}

const findByKeyword = (req, res) => {
    const keyword = {
        keywords: req.params.keywords
    }

    _fanPage.find(keyword)
        .then((data) => {
            if (data.length == 0) {
                res.status(status.NO_CONTENT);
                res.json({ msg: "FanPages no encontradas" });
            } else {
                res.status(status.OK);
                res.json({ msg: "Éxito!!!", data: data });
            }
        })
        .catch((err) => {
            res.status(status.BAD_REQUEST);
            res.json({ msg: "Error!!!" });
        });
}

const califGlobal = (req, res) => {
    const id = { _id: req.params.id };

    _fanPage.findOne(id)
        .then((data) => {
            var califGlobal = data.calif.reduce(function(a, b) { return a + b }) / data.calif.length;
            res.status(200),
                res.json({
                    data: "Calificación global: " + califGlobal
                })
        })
        .catch((err) => {
            res.status(400);
            res.json({
                data: err
            })
        })
};

/*
const deleteByID = (req, res) => {
    const { id } = req.params;
    //const id = req.params.id;
    const params = {
        _id: id
    };

    _fanPage.findByIdAndRemove(params)
        .then((data) => {
            res.status(status.OK);
            res.json({ msg: "Éxito!!!", data: data });
        })
        .catch((err) => {
            res.status(status.NOT_FOUND);
            res.json({ msg: "Error!!!", err: err });
        });

}

const updateByID = (req, res) => {
    const id = req.params.id;
    const newData = req.body;

    const query = { _id: id };

    _fanPage.findOneAndUpdate(query, newData, (err, data) => {
        if (err) {
            res.status(status.NOT_MODIFIED);
            res.json({ msg: "No se pudo actualizar" })
        } else {
            res.status(status.OK);
            res.json({ msg: "Usuario modificado con éxito" });
        }
    });
};

const updateActivo = (req, res) => {
    const id = req.params.id;
    const newData = { activo: true };

    const query = { _id: id };

    _fanPage.findOneAndUpdate(query, newData, (err, data) => {
        if (err) {
            res.status(status.NOT_MODIFIED);
            res.json({ msg: "No se pudo actualizar" })
        } else {
            res.status(status.OK);
            res.json({ msg: "Usuario activo" });
        }
    });
};*/

module.exports = (fanPages) => {
    _fanPage = fanPages;
    return ({
        createFanPage,
        createKeyword,
        findByKeyword,
        califGlobal
    });
};