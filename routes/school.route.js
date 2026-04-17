const express = require('express');
const { addSchool, fetchSchoolList } = require('../api/school.api');
const router = express.Router();

router.post("/addSchool", addSchool);
router.get("/listSchools", fetchSchoolList);

module.exports = router;