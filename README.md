# Aqubnb-photos

> Photo layout and carousel modal

## Related Projects

  - https://github.com/teamTarly/aquabnb-booking
  - https://github.com/teamTarly/aquabnb-more-places-to-stay
  - https://github.com/teamTarly/aquabnb-reviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Dependencies](#Dependencies)

## Usage

1. Create db in postgres shell
2. Create URI env variable
   - *mysql://[username]:[password]@localhost:3306/[database]*
3. npm run seed will create 2 csv files
4. Log in to postgres shell and create photos and listings table with provided schemas
5. copy data from csv to postgres with a copy statement 
example. copy "Listings"(name, location)
from '/Users/henryfradley/Desktop/Work/SDC_HF/Aquabnb-photos/server/database/Listings.csv'
delimiter ','
CSV header;
6. npm run build
7. npm run start

## Requirements

* Node / Express
* Postgres
* JS / React 

## Dependencies

## CRUD API

| Action | Method | URL |
| -------------------- | ------ | ----------------------- |
| Create a new listing | POST | /api/homes/:id/listings |
| Create a new photo | POST | /api/homes/:id/photos |
| Retrieve photos | GET | /api/homes/:id/photos |
| Update listing | PUT | /api/homes/:id/listings |
| Update photos | PUT | /api/homes/:id/photos |
| Delete listing | delete | /api/homes/:id/listings |
| Delete photo | delete | /api/homes/:id/photos |


From within the root directory:

```sh
npm install
```
That's all folks :relaxed:
