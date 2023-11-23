const { Router } = require("express");
const statusRouter = Router();

statusRouter.get("/", (req, res) => {
    return res.send({
        ok: true,
        uptime: process.uptime(),
    });
});

module.exports = statusRouter;
