const myDb = require("../db/db");
myDb.create("user 1", 50);
myDb.create("user 2", 50);
myDb.create("user 3", 50);
myDb.create("user 4", 50);
myDb.create("user 5", 50);
myDb.bulkCreate("user 6", 5, 5);

const tickets = myDb.find();
const winner = myDb.draw(3);

console.table(tickets)
console.table(winner)