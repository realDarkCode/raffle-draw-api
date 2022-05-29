# Lottery API

- Sell Lottery Ticket
- Update Lottery Ticket
- Get all tickets
- Get Ticket by id
- bulk buy (User can buy multiple ticket at a time)
- raffle draw

Ticket:

- number (unique).
- userName
- price
- timestamp

Routes:

- tickets/sell[POST] - create lottery ticket
- tickets/bulk[POST] - bulk sell ticket
- tickets/t/:ticketId[GET] - find single ticket by id
- tickets/t/:ticketId[PATCH] - update ticket by id
- tickets/t/:ticketId[DELETE] - delete ticket by id
- tickets/u/:username[GET] - find tickets for a given user
- tickets/u/:username[PATCH] - update tickets for a given user
- tickets/u/:username[DELETE] - delete all tickets for a given user
- tickets/draw[POST] - draw lottery
- tickets[GET] - find all lottery
