import { Router, Request, Response } from "express";

const pageRouter = Router();

// home
pageRouter.get("/", (req: Request, res: Response) => {
  res.status(200).render("index", { title: "Home" });
});

// About
pageRouter.get("/about", (req: Request, res: Response) => {
  res.status(200).render("about", { title: "About" });
});

// Contact
pageRouter.get('/contact',(req: Request, res: Response) => {
  res.status(200).render("contact", { title: "Contact", name: null });
});

pageRouter.post("/contact", (req: Request, res: Response) => {
  const name = req.body.name;
  res.status(200).render("contact", { title: "Contact", name });
});

export default pageRouter;
