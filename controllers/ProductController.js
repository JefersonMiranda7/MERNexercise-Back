import ProductModel from '../models/ProductModel.js';

//show all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.findAll();
    res.json(products);
  } catch (e) {
    res.json({ message: e.message })
  }
}

//show one product
export const getProduct = async (req, res) => {
  try {
    const product = await ProductModel.findAll({ where: { idProduct: req.params.id } });
    res.json(product[0]);
  } catch (e) {
    res.json({ message: e.message })
  }
}

//create one product
export const createProduct = async (req, res) => {
  try {
    await ProductModel.create(req.body);
    res.json({ 'message': 'Product has been created successfully!.'});
  } catch (e) {
    res.json({ message: e.message })
  }
}

//update one product
export const updateProduct = async (req, res) => {
  try {
    await ProductModel.update(req.body, { where: { idProduct: req.params.id } });
    res.json({ 'message': 'Product has been updated successfully!.'});
  } catch (e) {
    res.json({ message: e.message })
  }
}

//delete one product
export const deleteProduct = async (req, res) => {
  try {
    await ProductModel.destroy({ where: { idProduct: req.params.id } });
    res.json({ 'message': 'Product has been deleted successfully!.'});
  } catch (e) {
    res.json({ message: e.message })
  }
}