const express = require('express');
const { 
    getCourseHandler, 
    getCourseByIdHandler, 
    deleteCourseByIdHandler,
    putCourseHandler
} = require('../handler');

const router = express.Router();

router.get('/course/:id', getCourseByIdHandler);
router.get('/course', getCourseHandler);
router.delete('/course/:id', deleteCourseByIdHandler);
router.put('/course/:id', putCourseHandler)

module.exports = router;