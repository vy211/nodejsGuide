const Products = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    })
};


exports.postAddProduct = (req, res, next) => {
    console.log(req.body.title)
    const product = new Products(req.body.title);
    console.log('called save')
    product.save();
    res.redirect("/");
};

exports.getProducts = (req, res, next) => {
    Products.fetchAll((products)=> {
        res.render('shop', {
            prods: products,
            pageTitle: "Shop",
            path: "/"
      });
    });
}