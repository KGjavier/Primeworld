const PrimejobController = require('../controllers/prime.controller');
const userController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {


    app.get('/api/test', authenticate,PrimejobController.connection);
    app.post('/api/primejob', authenticate,PrimejobController.create);
    app.get('/api/primejob', PrimejobController.findAll);
    app.get('/api/primejob/:id', authenticate,PrimejobController.findOne);
    app.put('/api/primejob/:id', authenticate,PrimejobController.updateOne);
    app.delete('/api/primejob/:id', authenticate,PrimejobController.deleteOne);   
    
 
    app.post('/api/user', userController.create);
    app.post('/api/login', userController.findOne)
    app.get('/api/logout', userController.logout);
    app.get('/api/find', userController.findAllUsers);
    app.get('/api/authCheck', authenticate, userController.authCheck);
}