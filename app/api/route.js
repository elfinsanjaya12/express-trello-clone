const { Router } = require('express')
const router = Router();
const todosRouter = require('./todos/router')
const itemsRouter = require('./items/router')

router.use("/v1/todos", todosRouter);
router.use("/v1/items", itemsRouter);


module.exports = router