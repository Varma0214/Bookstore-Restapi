const express=require('express');
const {getAllBooks,getSingleBookById,updateBook,deleteBook,addNewBook}=require('../controllers/bookcontroller')

//create express router

const router=express.Router()

//all the routes that are releated to books only
router.get('/get',getAllBooks)
router.get('/get/:id',getSingleBookById)
router.post('/add',addNewBook)
router.put('/update/:id',updateBook)
router.delete('/delete/:id',deleteBook)

module.exports=router;