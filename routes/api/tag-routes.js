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


module.exports = router;