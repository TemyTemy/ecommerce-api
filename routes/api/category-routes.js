const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

const findCategory = (_id) => 
  Category.findOne({
    include:[{model: Product, as: 'products'}],
    where: {id: _id}
});

const okMessage = {    
  message: "ok"
};

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({include:[{model: Product, as: 'products'}]}).then((categories) => res.json(categories));
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  findCategory(req.params.id).then((categories) => res.json(categories));
});

router.post('/', (req, res) => {
  // create a new category
  console.log(req.body);
  Category.create({
     category_name: req.body.category_name
  }).then((cat) =>res.json(cat.id));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  
  Category.update({category_name: req.body.category_name}, {
    where: {id: req.params.id},
    returning: true,
    plain: true
  }).then(() => res.json(okMessage));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => res.json(okMessage));
});

module.exports = router;
