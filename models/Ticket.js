const shortId  = require("shortid");
class Ticket{
    /**
     *  Constructor function to create a ticket
     * @param {String} username  ticket's buyer name
     * @param {Number} price  ticket price
     */
    constructor(username, price) {
        // Validation 
        if (!(username && price)) throw new Error("username and price both filed are required");
        if (typeof username != "string") throw new Error("username must be a type of string");
        if (typeof price != "number") throw new Error("price must be a type of number");
        this.id = shortId.generate();
        this.username = username;
        this.price = price;
        this.createdAt = new Date();
        this.updatedAt = new Date();

    }
}

module.exports = Ticket;