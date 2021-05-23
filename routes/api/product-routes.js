const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

const findProduct = (_id) => 
  Product.findOne({
      include:[{model: Tag, as: 'tags', required: false}, {model: Category, as: 'category', required: false}],
      where: {id: _id}
});

const okMessage = {    
  message: "ok"
};

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
    // find all products
    // be sure to include its associated Category and Tag data
    Product.findAll({include:[{model: Tag, as: 'tags'}, {model: Category, as: 'category'}]}).then((products) => res.json(products));
});

// get one product
router.get('/:id', (req, res) => {
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data
    findProduct(req.params.id).then((product) => res.json(product));
});
  