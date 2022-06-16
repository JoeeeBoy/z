const Student = require("../models/Student.model.js");

module.exports.studentController = {
  postStudent: (req, res) => {
    Student.create({
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age,
    }).then(() => {
      res.json("Студент добавлен");
    });
  },
  getStudent: (req, res) => {
    Student.find({}).then((data) => {
      res.json(data);
    });
  },

  deleteStudent: (req, res) => {
    Student.findByIdAndRemove(req.params.id).then(() => {
      res.json(`студент с id:${id} удален `);
    });
  },

  patchStudent: (req, res) => {
    Student.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      (err, docs) => {
        if (err) {
          console.log(err);
        } else {
          res.json("изменен");
        }
      }
    );
  },
};
