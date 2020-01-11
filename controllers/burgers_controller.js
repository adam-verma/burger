const express = require('express');

const router = express.Router();

// Require burgers.js
const burger = require('../models/burger.js');

// Create routes for interacting with database and UI
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        }
        // console.log(hbsObject);
        res.render("index",hbsObject);
    });
    res.redirect("/");
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], function(data) {
        res.json({ id: data.insertId });
    });
    res.redirect("/");
});

router.put("/api/burgers/:id", function(req, res) {
    const condition = `id = ${req.params.id}`;
    // console.log(`condition: ${condition}`)

    burger.updateOne({
        devoured: true,
    }, condition, function(data) {
        if (data.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
    res.redirect("/");
});

module.exports = router; 
