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

// get one product
router.get('/:id', (req, res) => {
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data
    findProduct(req.params.id).then((product) => res.json(product));
});
  