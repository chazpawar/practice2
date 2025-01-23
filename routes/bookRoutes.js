const express = require('express');
const { createBooks, getBooks, updateBooks, deleteBooks, getBookById } = require('../controllers/bookControllers');
console.log({ createBooks, getBooks, updateBooks, deleteBooks, getBookById });
const router = express.Router();

router.post('/create', createBooks);
router.get('/get', getBooks);
router.put('/update/:id', updateBooks);
router.delete('/delete/:id', deleteBooks);
router.get('/get/:id', getBookById);

module.exports = router;    


