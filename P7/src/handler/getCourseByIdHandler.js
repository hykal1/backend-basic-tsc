const data = require('../data');

const getCourseByIdHandler = async (req, res) => {
    const { id } = req.params;

    const courseData = data.filter((d) => {
        return d.id === Number(id);
    })

    if (courseData.length === 0) {
        res.json({
            success: false,
            message: "Not Found"
        })
    } else {
        res.json(courseData[0]);
    }
}

module.exports = getCourseByIdHandler;