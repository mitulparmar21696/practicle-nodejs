// Define routes for user APIs.
const express = require('express');
const router = express.Router();

// Get survey controller instance.
const thingController = require('../../controllers/thing.contoller');

// Gets all the surveys in the system.
router.post('/save', thingController.saveThing);
router.post('/search', thingController.searchEngine);
router.post('/get-thing-by-id', thingController.getThingById);
router.post('/update-thing', thingController.updateThing);
router.post('/get-all', thingController.getAll)
router.post('/delete', thingController.deleteThing)
// Export the router.
module.exports = router;