const Primejob = require('../models/prime.model');


module.exports = ({

    connection: (req, res) => {
        res.status(400).json({ message: "successfully connected" })
    },

    create: (req, res) => {
        Primejob.create(req.body)
            .then((newPrimejob) => res.json(newPrimejob))
            .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }));
    },

    findAll: (req, res) => {
        Primejob.find()
            .sort({ createdAt: 1 })
            .then((allPrimejob) => res.json(allPrimejob))
            .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }));
    },

    findOne: (req, res) => {
        Primejob.findOne({ _id: req.params.id })
            .then((onePrimejob) => res.json(onePrimejob))
            .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }));
    },

    updateOne: (req, res) => {
        Primejob.findOneAndUpdate({ _id: req.params.id },req.body,{ new: true, runValidators: true })
            .then((updatedPrimejob) => res.json(updatedPrimejob))
            .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }));
    },

    deleteOne: (req, res) => {
        Primejob.deleteOne({ _id: req.params.id })
            .then((deletedPrimejob) => res.json({ message: "Successfully deleted", item: deletedPrimejob}))
            .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }));
    }
})

