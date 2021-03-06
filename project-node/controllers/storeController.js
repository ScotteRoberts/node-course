const mongoose = require('mongoose');

const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  res.render('index', {
    title: 'Home',
  });
};

exports.addStore = (req, res) => {
  res.render('editStore', {
    title: 'Add Store',
  });
};

exports.createStore = async (req, res) => {
  const store = await new Store(req.body).save();
  req.flash(
    'success',
    `Successfully created ${store.name}. Would you care to leave a review?`
  );
  res.redirect(`/store/${store.slug}`);
};

exports.getStores = (req, res) => {
  res.render('stores', { title: 'Stores' });
};
