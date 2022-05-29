# Basic Ticket System API

Ticket managing system using express and REST API.

## Features

- Sell Lottery Ticket
- Update Lottery Ticket
- Get all tickets
- Get Ticket by id
- bulk buy (User can buy multiple ticket at a time)
- raffle draw

## Ticket Model:

| Name      | Type   | Description                          |
| --------- | ------ | ------------------------------------ |
| id        | String | Unique id of a ticket                |
| username  | String | username who owns the ticket         |
| price     | Number | ticket price amount                  |
| createdAt | Date   | timestamp of ticket creation         |
| updatedAt | Date   | timestamp of last update of a ticket |

## Routes:

| Method | URL                           | Description                         |
| :----- | :---------------------------- | :---------------------------------- |
| GET    | `/health`                     | status of the application           |
| GET    | `/api/v1/tickets`             | find all lottery                    |
| POST   | `/api/v1/tickets/sell`        | create lottery ticket               |
| POST   | `/api/v1/tickets/bulk`        | bulk sell ticket                    |
| POST   | `/api/v1/tickets/draw`        | draw lottery                        |
| GET    | `/api/v1/tickets/t/:ticketId` | find single ticket by id            |
| PATCH  | `/api/v1/tickets/t/:ticketId` | update ticket by id                 |
| DELETE | `/api/v1/tickets/t/:ticketId` | delete ticket by id                 |
| GET    | `/api/v1/tickets/u/:username` | find all tickets for a given user   |
| PATCH  | `/api/v1/tickets/u/:username` | update all tickets for a given user |
| DELETE | `/api/v1/tickets/u/:username` | delete all tickets for a given user |
