# Budget Board - Server Side

<p align="center">
  <img src="https://i.imgur.com/NmyvCr4.png" width=66%>
</p>

## Project Summary

Budget Board Server implements the back-end of Budget Board, a full stack budget management app that allows to manage your daily life incomes and expenses.

The full app is hosted [here](http://budget-board.herokuapp.com), using Heroku cloud plataform.
The application's client side is available [here](https://github.com/dportela24/budget-board-client).

## Built with

This project was implemented using NodeJs + Express, with authentification performed by JWT Authentification. The database is managed through MongoDB using the Mongoose framework.

## Usage

### User management

The server exposes two endpoints to deal with user authentication, `/signin` and `/login`, to create an account or log into an existing one, respectively.

A sucessfull response from these endpoints returns a JSON following the structure:

```json
{
  "user": {
    "_id": "foo1",
    "username": "foo2"
  },
  "token": "foo3"
}
```

A third endpoint, `/me`, is available so that the client can fetch information regarding the user.

### Entries management

All entried associated with a given user can be retrieved using the `/all-entries` endpoint. This endpoint responds with a JSON following the structure:

```json
{
  "incomes": [
    {
      "_id": "foo1",
      "description": "foo2",
      "value": foo3,
      "date": "foo4"
    },
    {
      "_id": "foo5",
      "description": "foo6",
      "value": foo7,
      "date": "foo8"
    }
  ],
  "expenses": [
    {
      "_id": "foo9",
      "description": "foo10",
      "value": foo11,
      "date": "foo12"
    }
  ]
 }
```

Moreover, both incomes and expenses have a set of specific endpoints to deal with them (incomes endpoints are analog):

- `/expense`, `GET` request retrieves all expenses;
- `/expense`, `POST` request adds new expensive;
- `/expense/{id}`, `DELETE` request deletes the expense with the path id.

All requests concerning the entries must contain an Authorization header containing a valid user token.




