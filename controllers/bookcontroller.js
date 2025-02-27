const Book= require('../models/book')

const getAllBooks=async(req,res)=>{
    try {
        const allBooks=await Book.find({});
        if(allBooks.length>0){
            res.status(200).json({
                success:true,
                message:'List of books fetched successfully',
                data:allBooks

            })
        }else{
            res.status(404).json({
                success:false,
                message:'No books found in database'
            })
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:'Something went wrong ! Please try again'
        })
        
    }


}
const getSingleBookById=async(req,res)=>{
    
    try {
        const getCurrentBookId=req.params.id;
        const bookDetailsById=await Book.findById(getCurrentBookId);
        if(!bookDetailsById){
            res.status(404).json({
                success:false,
                message:'Book with the current Id is not found  try with other Id'

            })
        }
        res.status(200).json({
            success:true,
            data:bookDetailsById
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:'Something went wrong ! Please try again'
        })
        
    }

}
const addNewBook=async(req,res)=>{
    try {
        const newBookFormData=req.body;
        const newlyCreatedBook=await Book.create(newBookFormData);
        if(newlyCreatedBook){
            res.status(201).json({
                success:true,
                message:"Book added successfully",
                data:newlyCreatedBook
            })
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:'Something went wrong ! Please try again'
        })
        
    }

    

}
const updateBook=async(req,res)=>{
    try {
        const updatedBookFormData=req.body;
        const getCurrentBookId=req.params.id;
        const updatedBook=await Book.findByIdAndUpdate(getCurrentBookId,updatedBookFormData,{
            new:true,
        })
        if(!updatedBook){
            res.status(404).json({
                success:false,
                message:'Book is not found with this Id'
            })
        }
        res.status(200).json({
            success:true,
            message:"Book updated successfully",
            data:updatedBook
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:'Something went wrong ! Please try again'
        })
        
    }

    

}

const deleteBook=async(req,res)=>{
    try {
        const getCurrentBookId= req.params.id;
        const deletedBook =await Book.findByIdAndDelete(getCurrentBookId);
        if(!deletedBook){
            res.status(404).json({
                success:false,
                message:'Book is not found with this Id'
            })
        }
        res.status(200).json({
            success:true,
            data:deletedBook
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:'Something went wrong ! Please try again'
        })
        
    }
    

}

module.exports={getAllBooks,getSingleBookById,addNewBook,updateBook,deleteBook}