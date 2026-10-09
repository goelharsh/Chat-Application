import express from "express"
import { login, logout, signup } from "../controller/auth.controller.js"


const require = createRequire(import.meta.url);

const router = express.Router()

router.post("/signup", signup)

router.post("/login", login)

router.get("/logout", logout)

export default router;
