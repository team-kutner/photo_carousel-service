CREATE TABLE "Listings" (
  id SERIAL,
  name VARCHAR (100),
  location VARCHAR (100)
);

CREATE TABLE "Photos" (
  id SERIAL,
  url VARCHAR (100),
  description VARCHAR (500),
  "ListingId" INT NOT NULL
);

