const Flight = require('../models/flight.model')
const Ticket = require('../models/ticket.model')

const newFlight = (req, res) => {
  res.render('flights/new')
}

const createFlight = (req, res) => {
  //TODO: format data if needed
  const flight = new Flight(req.body)

  flight.save(function(err) {
    // one way to handle errors
    if (err) return res.render('flights/new');
    console.log(flight);

    // for now, redirect right back to new.ejs
    res.redirect('/flights/new');
  });
}

const goToIndex = (req,res) => {
  Flight.find({}, (err, allFlights)=>{
    res.render('flights/index', {flights: allFlights})
  })
}

const addDestination = (req,res) => {
  console.log('!!!!!!!! addDestination called')
  Flight.findById(req.params.id, (err, flight)=> {
    if (err) {
      console.log(err)
      return res.redirect(`/flights/${req.params.id}`)
    }

    flight.destination.push(req.body)
    flight.save(err => {
      if (err) {
        console.log(err)
        return res.redirect(`/flights/${req.params.id}`)
      }
      res.redirect('/flights')
    })
  })
}

const show = (req, res) => {
  Flight.findById(req.params.id, (err, flight) => {
    if (err){
      console.log(err)
      res.redirect('/flights')
    }
    Ticket.find({ flight: req.params.id }).then(tickets => {
      console.log('Tickets: ', tickets)
      res.render('flights/show', { flight, tickets })
    })
  })
}

module.exports = {
  new:newFlight,
  create:createFlight,
  index:goToIndex,
  show,
  addDestination,
}