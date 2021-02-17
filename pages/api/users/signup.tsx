
import UserController from '../../../backend/controllers/UserController';
import route from '../../../backend/middleware';


route.post(async (req, res) => { new UserController(req, res).signup()})


export default route;