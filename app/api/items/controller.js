const { Todo, Item } = require('../../db/models')


module.exports = {
  create: async (req, res, next) => {
    try {

      const { name, TodoId } = req.body

      const result = await Item.create({ name, TodoId })

      res.status(201).send({ data: result });

    } catch (err) {
      next(err)
    }
  },

  getOne: async (req, res, next) => {
    try {
      const result = await Item.findOne({
        where: { id: req.params.id },
        include: {
          model: Todo,
          attributes: ["id", "name"]
        }
      })

      res.status(200).json({ data: result })

    } catch (err) {

      next(err)
    }
  },
  update: (req, res, next) => {
    const { name } = req.body
    Item.findOne({
      where: { id: req.params.id }
    }).then(item => {
      item.update({ name }).then(() => {
        res.status(200).json({ data: item })
      })

    }).catch(err => {
      next(err)
    })
  },

  destroy: (req, res, next) => {
    Item.findOne({ where: { id: req.params.id } }).then(item => {
      item.destroy().then(() => {


        res.status(200).json({ data: item })
      })
    }).catch(err => {
      next(err)
    })
  },

  move: async (req, res, next) => {
    try {

      const { targetTodoId } = req.body
      Item.findOne({
        where: { id: req.params.id }
      }).then(item => {
        item.update({ TodoId: targetTodoId }).then(() => {
          res.status(200).json({ data: item })
        })

      }).catch(err => {
        next(err)
      })

    } catch (err) {
      next(err)

    }
  }
}