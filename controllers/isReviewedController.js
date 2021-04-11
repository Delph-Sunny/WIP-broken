const db = require('../models/isReviewedModel');

// Defining methods for the postsController
module.exports = {
  findAll: function (req, res) {
    // let query = { name: req.query.name };
    db.find()
      .sort({ created: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByTotalStars: function (req, res) {
    db.findByOne({ sku: req.params.totalStars })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByName: function (req, res) {
    db.findByOne({ name: req.params.name })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    let query = {
      name: req.body.name,
      imageUrl: req.body.imageUrl,
      imageKey: req.body.imageKey,
      description: req.body.description,
      totalStars: req.body.totalStars,
      reviewBody: req.body.reviewBody,
      isActive: req.body.isActive,
      isReveiwable: req.body.isReveiwable,
      created: req.body.created,
      updated: req.body.updated,
    };

    db.create(query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
