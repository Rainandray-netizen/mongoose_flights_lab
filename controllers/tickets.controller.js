const Flight = require('../models/flight.model')
const Ticket = require('../models/ticket.model')

const newTicket = (req, res) => {
  res.render('tickets/new', {flightID: req.params.id})
}

const createTicket = async (req, res, next) => {
  // console.log('ticket creating', req.body)
  try {
    const flight = await Flight.findById(req.params.id)
    const newTicket = new Ticket(req.body)
    newTicket.flight = req.params.id
    let createdTicket = await newTicket.save()
    flight.tickets.push(createdTicket._id)
    await flight.save()
    res.redirect(`/flights/${req.params.id}`)
  }catch(error){
    next(error)
  }
}

module.exports = {
  newTicket,
  createTicket,
}