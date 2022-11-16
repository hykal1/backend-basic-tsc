const data = require('../data');

const putCourseHandler = async (req, res) => {
    const { id } = req.params;
    const { judul, sks } = req.body;

    data.forEach((d) => {
        if (d.id === Number(id)) {
            d.judul = judul,
            d.sks = sks
        }
    })

    res.json(data.filter((d) => d.id === Number(id))[0])
}

module.exports = putCourseHandler;