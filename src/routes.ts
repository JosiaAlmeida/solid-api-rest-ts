import { Router } from "express";
import { createUserControll } from "./useCases/CreateUser";

const router = Router()

router.post("/users", (request, response) => {
    return createUserControll.handle(request, response)
})


export { router }