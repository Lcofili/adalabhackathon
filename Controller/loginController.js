const loginModel = require('../ModelSchema/loginModel');
 
const newUsers = async (req, res) => {

    try {
        
        const info = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        
        const userInfo = await loginModel.create(info)
        res.status(200).json({
            status: 'Successfully Created',
            data: userInfo
        })
    } catch (error) {
        res.status(500).json({
            status: 'Cant Create',
            message: error.message
        })
    }
}
const allUsers = async (req, res) => {

    try {
        const users = await loginModel.find()
        res.status(200).json({
            status: 'Successfully Found',
            data: users
        })
    } catch (error) {
        res.status(404).json({
            status: 'Cant Find',
            message: error.message
        })
    }
}
const singleUser = async (req, res) => {

    try {
        const userId = req.params.id

        const users = await loginModel.findById( userId )
        res.status(200).json({
            status: 'Successfully Found',
            data: users
        })
    } catch (error) {
        res.status(404).json({
            status: 'Cant Find This user',
            message: error.message
        })
    }
}
const updateUser = async (req, res) => {

    try {
        const userId = req.params.id

        const info = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        const users = await loginModel.findByIdAndUpdate( userId, info )
        res.status(200).json({
            status: 'Successfully Updated',
            data: users
        })
    } catch (error) {
        res.status(404).json({
            status: 'Cant Update This user',
            message: error.message
        })
    }
}
const removeUser = async (req, res) => {

    try {
        const userId = req.params.id

        const users = await loginModel.findByIdAndRemove( userId )
        res.status(200).json({
            status: 'Successfully Deleted',
            data: users
        })
    } catch (error) {
        res.status(404).json({
            status: 'Cant Delete This user',
            message: error.message
        })
    }
}
module.exports = {
    newUsers,
    allUsers,
    singleUser,
    updateUser,
    removeUser
}