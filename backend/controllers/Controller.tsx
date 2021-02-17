import { HttpRequest, HttpResponse, MongoClient } from "../utils/utils";

export default class Controller {
    
    //some HTTP error status codes to throw for requests that result in errors.
    protected STATUS_BADREQUEST = 400;
    protected STATUS_UNAUTHORIZED = 401;
    protected STATUS_FORBIDDEN = 403;

    protected req: HttpRequest;
    protected res: HttpResponse;
    protected db: MongoClient

    constructor(req: HttpRequest, res: HttpResponse) {
        this.req = req;
        this.res = res;
        this.db = req.db;
    }

    protected sendStatus(status: number) {
        return this.res.status(status).json({});
    }
    
    protected sendMessage(message: String, status = 200) {
        return this.res.status(status).json({message: message});
    }

    protected sendJson(json: Object, status = 200) {
        return this.res.status(status).json(json);
    }

    protected sendClientError(error: String, status = 400){
        return this.res.status(status).json({error: error});
    }
    
    protected sendServerError() {
        return this.res.status(500).json({error: "The server experienced an error. Please try again later"});
    }

}