var express = require('express')
var router = express.Router()
const flightsCtrl = require('../controllers/flights.controller')
const ticketsCtrl = require('../controllers/tickets.controller')



router.get('/', flightsCtrl.index)

router.get('/new', flightsCtrl.new)

router.get('/:id', flightsCtrl.show)

router.get('/:id/ticket', ticketsCtrl.newTicket)

router.post('/', flightsCtrl.create)

router.post('/:id/destination', flightsCtrl.addDestination)

router.post('/:id/ticket', ticketsCtrl.createTicket)


module.exports = router