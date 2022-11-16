const data = require('../data');

const deleteCourseByIdHandler = async (req, res) => {
    const { id } = req.params;

    const courseDataIdx = data.findIndex((d) => d.id === Number(id));

    data.splice(courseDataIdx);

    res.send("Course with id " + id + " successfully deleted!")
}

module.exports = deleteCourseByIdHandler;