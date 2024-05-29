import express from 'express'
import testController from '../controllers/test.controller.js'
const route = express.Router()


route.post('/must-be-login', testController.mustBeLogin)
route.post('/must-be-admin', testController.mustBeAdmin)


export default route;