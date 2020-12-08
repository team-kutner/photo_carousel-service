CREATE TABLE "Listings" (
  id SERIAL PRIMARY KEY,
  name VARCHAR (100),
  location VARCHAR (100)
);

CREATE TABLE "Photos" (
  id SERIAL,
  url VARCHAR (100),
  description VARCHAR (500),
  "ListingId" INT NOT NULL,
  CONSTRAINT fk_listing
    FOREIGN KEY ("ListingId")
    REFERENCES "Listings"(id)
    ON DELETE CASCADE
);

