const express = require('express');
const router = express.Router();

const { newUsers, allUsers, singleUser, updateUser, removeUser};

router
    .route( '/userInfo' )
    .post( newUsers )
    .get( allUsers )

router
    .route( '/userInfo/:id' )
    .get( singleUser )
    .patch( updateUser )
    .delete( removeUser )



module.exports = router;