# Basic Ticket System API

Ticket managing system using express and REST API.

## Requirements

- Sell Lottery Ticket
- Update Lottery Ticket
- Get all tickets
- Get Ticket by id
- bulk buy (User can buy multiple ticket at a time)
- raffle draw

## Ticket Model:

- number (unique).
- userName
- price
- createdAt
- updatedAt

## Routes:

- /health [GET] - status of the application
- /api/v1/tickets/t/:ticketId[GET] - find single ticket by id
- /api/v1/tickets/t/:ticketId[PATCH] - update ticket by id
- /api/v1/tickets/t/:ticketId[DELETE] - delete ticket by id
- /api/v1/tickets/u/:username[GET] - find tickets for a given user
- /api/v1/tickets/u/:username[PATCH] - update tickets for a given user
- /api/v1/tickets/u/:username[DELETE] - delete all tickets for a given user
- /api/v1/tickets/sell[POST] - create lottery ticket
- /api/v1/tickets/bulk[POST] - bulk sell ticket
- /api/v1/tickets/draw[POST] - draw lottery
- /api/v1/tickets[GET] - find all lottery
