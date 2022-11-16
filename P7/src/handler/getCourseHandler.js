const data = require('../data');

const getCourseHandler = async (req, res) => {
    const { skip, take } = req.query;

    let courseData = data;
    
    if (skip && take) {
        courseData = data.slice(skip, skip + take);
    }

    res.json(courseData);
}

module.exports = getCourseHandler;