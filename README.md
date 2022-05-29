# Basic Ticket System API

Lottery ticket managing system using express and REST API.

## Contents

1. [Requirements](#features)
1. [Features](#features)
1. [Installation](#installation)
1. [Ticket Model](#ticket-model)
1. [Routes](#routes)

## Requirements

- `NodeJS`
- `express`
- `rest API Concept`

## Features

- Sell lottery ticket
- Sell bulk lottery tickets
- Update/delete lottery ticket
- Get all tickets
- Get Ticket by id
- bulk buy (User can buy multiple ticket at a time)
- raffle draw (get lottery winners)

## Installation

Clone repository or just simply download zip.

```powershell
git clone https://github.com/realDarkCode/raffle-draw-api.git
```

navigate to directory

```powershell
cd raffle-draw-api
```

install dependencies

```powershell
npm install
# or
yarn install
```

run the application

```powershell
npm start
# or
yarn start
```

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
