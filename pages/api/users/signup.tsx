
import UserController from '../../../server/controllers/UserController';
import route from '../../../server/middleware';


route.post(async (req, res) => { new UserController(req, res).signup()})


export default route;