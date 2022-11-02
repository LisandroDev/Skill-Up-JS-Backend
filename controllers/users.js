const createHttpError = require('http-errors')
const { User } = require('../database/models')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

// example of a controller. First call the service, then build the controller method
exports.get = catchAsync(async (req, res, next) => {
  try {
    const response = await User.findAll()
    endpointResponse({
      res,
      message: 'Users retrieved successfully',
      body: response,
    })
  } catch (error) {
    const httpError = createHttpError(
      error.statusCode,
      `[Error retrieving users] - [index - GET]: ${error.message}`,
    )
    next(httpError)
  }
})

exports.createUser = catchAsync(async(req, res, next)=>{
  endpointResponse({res, message: 'NOT IMPLEMENTED: This is an user create controller'})
})

exports.updateUser = catchAsync(async(req, res, next)=>{
  endpointResponse({res, message: 'NOT IMPLEMENTED: This is an user update controller'})
})

exports.deleteUser = catchAsync(async(req, res, next)=>{
  endpointResponse({res, message: 'NOT IMPLEMENTED: This is an user delete controller'})
})


//Validation middleware is needed.

exports.getUser = catchAsync(async (req, res ,next) => {
  try {
    const response = await User.findOne({where:{userId: req.params.id}})
    if(response){
      endpointResponse({
        res,
        message:'Operacion exitosa',
        body: response
      })
    }
    else {
      res.status(404).json({error: 'User not found.', status: 404})
    }
  } catch(error){
    const httpError = createHttpEror(error.statusCode, `Error retrieving user - ${error.message}`)
    next(httpError)  
  }
})
