const express=require('express');


const router=express.Router();


const {
    getMessages,
    createMessages,
    deleteAllMessages
}=require('../controllers/messageControllers')


// GET all messages
router.get('/',getMessages);

// Post the message 
router.post('/',createMessages);

// delte the message
router.delete('/',deleteAllMessages);


module.exports=router;