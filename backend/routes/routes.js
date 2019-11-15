 
const express = require('express'),
routes = express.Router(),
leadController = require('../controllers/LeadsController')

//leads
routes.get('/leads' , leadController.index)
routes.get('/lead/:id' , leadController.show)
routes.post('/lead' , leadController.store)
routes.put('/lead/:id' , leadController.update)
routes.delete('/lead/:id' , leadController.destroy)



module.exports = routes