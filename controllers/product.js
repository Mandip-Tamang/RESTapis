const productModel = require("../Models/product.js");
const getAllProducts = async (req, res) => {
  const { company, name, featured, price, sort, select } = req.query;
  const userQuery = {};

  if (company) {
    userQuery.company = company;
  }
  if (name) {
    userQuery.name = { $regex: name, $options: "i" }; //regex allows us to serach for
  }
  if (price) {
    userQuery.price = price;
  }
  if (featured) {
    userQuery.featured = featured;
  }

  let apiData = productModel.find(userQuery);

  if (sort) {
    let sortFix = sort.replaceAll(",", " ");
    apiData = apiData.sort(sortFix);
  }

  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;

  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  const ProductData = await apiData;
  res.status(200).json({ ProductData, nbHits: ProductData.length });
};
const getAllProductsTest = async (req, res) => {
  const ProductData = await productModel.find(req.query).sort("-price");
  res.status(200).json({ ProductData });
};
module.exports = { getAllProducts, getAllProductsTest };
