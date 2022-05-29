const Ticket = require("../models/Ticket");
class MyDB {
    constructor() {
        this.tickets = [];
    }
    /**
     * create and save a new ticket
     * @param {String} username name of buyer for the ticket
     * @param {Number } price price of the ticket
     * @returns {object} {@link Ticket} returns a ticket object
     */
    create(username, price) {
        const ticket = new Ticket(username, price);
        this.tickets.push(ticket);
        return ticket;
    }

    /**
     * create multiple ticket for a single buyer
     * @param {String} username
     * @param {Number} price
     * @param {Number} quantity
     * @returns {Array<Ticket>} tickets
     */
    bulkCreate(username, price, quantity) {
        const result = [];
        for (let i = 0; i < quantity; i++) {
            const ticket = this.create(username, price);
            result.push(ticket)
        }
        return result;
    }
    /**
     * returns all available tickets
     * @returns {Array<Ticket>} tickets
     */
    find() {
        return this.tickets;
    }

    /**
     * find a ticket  by ticket id
     * @param {String} ticketId 
     * @returns {Ticket || undefined}
     */
    findById(ticketId) {
        const ticket = this.tickets.find(
            /**
             * 
             * @param {Ticket} ticket 
             */
            ticket => ticket.id === ticketId
                
            
        )
        return ticket;
    }

    /**
     * find all ticket by given username  
     * @param {String} username 
     * @returns {Array<Ticket>}
     */
    findByUsername(username) {
        const tickets = this.tickets.filter(
            /**
             * @param {Ticket} ticket 
             */
            ticket => ticket.username === username

        )
        return tickets;
    }
    /**
     * update ticket information
     * @param {String} ticketId 
     * @param {{username:string, price: number}} ticketBody 
     * @returns {Ticket};
     */
    updateById(ticketId, ticketBody) {
        const ticket = this.findById(ticketId);
        ticket.username = ticketBody.username ?? ticket.username;
        ticket.price = ticketBody.price ?? ticket.price;
        ticket.updatedAt = new Date();
        return ticket;
    }

    /**
     * 
     * @param {String} ticketId 
     */
    deleteById(ticketId) {
        const index = this.tickets.findIndex(
            /**
             * 
             * @param {Ticket} ticket 
             */
            ticket => ticket.id === ticketId
        )

        if (index === -1) return false
        this.tickets.splice(index, 1);
        return true;

    }
    /**
     * 
     * @param {number} winnerCount Number's of winner count
     * @returns {Array<Ticket>}
     */
    draw(winnerCount) {
        let winnerIndexes = new Array(winnerCount);
        let index = 0;
        while (index < winnerCount) {
            let winnerIndex  = Math.floor(Math.random() * this.tickets.length);
            if (!winnerIndexes.includes(winnerIndex)) {
                winnerIndexes[index++] = winnerIndex;
                continue;
            }
        }
        const winners = winnerIndexes.map(index => this.tickets[index]);
        return winners
    }
}

const myDB = new MyDB();

module.exports = myDB;
