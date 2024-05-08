import { Router } from "express";
import gameController from "../controllers/gameController.js"; 
import createRateLimiter from "../middlewares/rateLimitMiddleware.js";
import adminAuth from "../middlewares/adminAuth.js";

const limiter = createRateLimiter();
const gameRouter = Router();

gameRouter.post("/start", limiter, gameController.startGame);

gameRouter.post("/finished", gameController.gameFinished);

gameRouter.patch("/leave", gameController.leaveGame);

gameRouter.delete("/admin/delete", adminAuth, gameController.resetGames);

export default gameRouter;
