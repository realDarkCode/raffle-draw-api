const router = require("express").Router();
const db = require("../db/db");

router.get("/t/:ticketId", (req, res, _next) => {
    const ticketId = req.params.ticketId;
    const ticket = db.findById(ticketId);
    res.status(200).json(ticket);
});
router.patch("/t/:ticketId", (req, res, _next) => {
    const ticketId = req.params.ticketId;
    const updatedTicket = db.updateById(ticketId, req.body);
    res.status(200).json({ message: "Updated Successfully", updatedTicket });
});
router.delete("/t/:ticketId", (req, res, _next) => {
    const ticketId = req.params.ticketId;
    db.deleteById(ticketId);
    res.status(203).send();
});


router.get("/u/:username", (req, res, _next) => {
    const username = req.params.username;
    const tickets = db.findByUsername(username);
    res.status(200).json(tickets);
});

// TODO: Implement these two by yourself.

// router.patch("/u/:username", (req, res, _next) => { });
// router.delete("/u/:username", (req, res, _next) => { });

router.post("/sell", (req, res, _next) => {
    const { username, price } = req.body;
    const ticket = db.create(username, price);
    res.status(201).json({ message: "Ticket Created Successfully", ticket });
});
router.post("/bulk", (req, res, _next) => {
    const { username, price, quantity } = req.body;
    const tickets = db.bulkCreate(username, price, quantity);
    res.status(201).json({ message: "Bulk Ticket Created Successfully", tickets });
});
router.get("/draw", (req, res, _next) => {
    const winnerCount = req.query.wc ?? 1;
    const winners = db.draw(winnerCount);

    res.status(200).json(winners);
});
router.get("", (_req, res, _next) => {
    const tickets = db.find();
    res.status(200).json(tickets);
});

module.exports = router;