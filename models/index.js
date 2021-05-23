// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Category.hasMany(Product, {as: "products", foreignKey: "category_id"});
Product.belongsTo(Category, {
  foreignKey: "category_id",
  as: "category",
});

Product.belongsToMany(Tag, {
  through: "product_tag",
  as: "tags",
  foreignKey: "product_id",
});

Tag.belongsToMany(Product, {
  through: "product_tag",
  as: "tag_products",
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
