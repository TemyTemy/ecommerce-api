const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

const findTag = (_id) => 
Tag.findOne({
    include:[{model: Product, as: 'tag_products'}],
    where: {id: _id}
});

const okMessage = {    
    message: "ok"
};

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({include:[{model: Product, as: 'tag_products'}]}).then((products) => res.json(products));
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  findTag(req.params.id).then((tag) => res.json(tag));
});

router.post('/', (req, res) => {
  // create a new tag  
  Tag.create({
    tag_name: req.body.tag_name
  }).then((tag) =>res.json(tag.id));
});


module.exports = router;