import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLastMessagesController } from "./controllers/GetLastMessagesController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { GetLastMessagesService } from "./services/GetLastMessagesService";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle )

router.get("/messages/last", new GetLastMessagesController().handle)

export {router}