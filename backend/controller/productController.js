import Product from "../models/product.js";

export const getProducts = async (req, res) => {
    res.status(200).json({
        message: "All Products",
    });
};

//create new product
export const newProduct = async (req, res) => {
    const product = await Product.create(req.body);
    res.status(200).json({
        product,
    });
};