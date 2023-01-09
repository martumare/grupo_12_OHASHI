// const express = require('express');
// const router = express.Router();

// const apiUsersController = require('../../controllers/api/users.controller');

// router.get('/', apiUsersController.list);
// router.get('/:id', apiUsersController.detail);

// module.exports = router;

const express = require('express')
const router = express.Router()

const userApi = require('../../controllers/api/users.controller')

router.get('/',userApi.allUsers);

router.get('/profile/:id', userApi.profile)

module.exports = router