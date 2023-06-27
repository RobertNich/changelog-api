import { Router } from "express";

const router = Router();

router.get("/product", (req, res) => {
  res.json({ message: "Some Message" });
});
router.get("/product/:id", () => {});
router.put("/product/:id", () => {});
router.post("/product", () => {});
router.delete("/product/:id", () => {});

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update", () => {});
router.post("/update/:id", () => {});
router.delete("/update/:id", () => {});

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint", () => {});
router.post("/updatepoint/:id", () => {});
router.delete("/updatepoint/:id", () => {});

export default router;
