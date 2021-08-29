const { Router } = require('express')
const { move, create, getOne, update, destroy } = require('./controller')
const { validateCreate, validateUpdate, validateOne, validateDelete, validateMove } = require('./validation')

const router = Router()

router.post(`/`, validateCreate, create)
router.get(`/:id`, validateOne, getOne)
router.put(`/:id`, validateUpdate, update)
router.put(`/:id/move`, validateMove, move)
router.delete(`/:id`, validateDelete, destroy)

module.exports = router