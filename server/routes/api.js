const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'http://localhost:8080';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get user
router.get('/getUser', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/getUser`)
    .then(user => {
      res.status(200).json(user.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

// Get subscribed clients
router.get('/getSubscribedClients', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/subscriptions`)
    .then(subscriptions => {
      res.status(200).json(subscriptions.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

// Get reservations
router.get('/getReservations', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/reservations`)
    .then(reservations => {
      res.status(200).json(reservations.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});


module.exports = router;
