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


module.exports = router;