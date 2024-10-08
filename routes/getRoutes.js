const router = require('express').Router();
const { getTasks } = require('../controllers/getTasks');

router.get('/get_tasks', getTasks);

module.exports = router; // router 모듈 내보내기
