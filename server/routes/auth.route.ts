import createRouter from '../utils/base.route';
import authController from '../controllers/auth.controller';
import validateToken from '../middlewares/validateToken.middleware';

const { loginUser, authUserData, logoutUser } = authController;
const route = createRouter();

route.post('/login', loginUser);
route.get('/verify-token', validateToken, authUserData);
route.get('/logout', validateToken, logoutUser);

export default route;