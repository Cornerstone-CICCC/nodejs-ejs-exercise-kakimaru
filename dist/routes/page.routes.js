"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
// home
pageRouter.get("/", (req, res) => {
    res.status(200).render("index", { title: "Home" });
});
// About
pageRouter.get("/about", (req, res) => {
    res.status(200).render("about", { title: "About" });
});
// Contact
pageRouter.get('/contact', (req, res) => {
    res.status(200).render("contact", { title: "Contact", name: null });
});
pageRouter.post("/contact", (req, res) => {
    const name = req.body.name;
    res.status(200).render("contact", { title: "Contact", name });
});
exports.default = pageRouter;
