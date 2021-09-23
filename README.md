## Getting Started

Install the project using `npm install`

Get the ENV key for Airtable from your pair programming partner and create a .env file that looks like this:

```
AIRTABLE_API_KEY=KEY_GOES_HERE
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Endpoints

There is one endpoint used that takes on different method types depending on your use case:

-   Get all lattes: GET request on `http://localhost:3000/api/lattes`
-   Get one latte: GET request on `http://localhost:3000/api/lattes/[latte_id]`
-   Create latte: POST request on `http://localhost:3000/api/lattes`, name is the only required field.
-   Update latte: PATCH request on `http://localhost:3000/api/lattes/[latte_id]`, accepted fields are name and rating (only ints 1-5)

## Project Options

### Rating Lattes

Inside of `LatteCard` exists the reference to a re-usable component called `Rating`. Utilize this component for the user to rate lattes based on a 1-5 star system. To update this rating value, use the PATCH request outlined above.

### Create Latte

Start from the "Create Latte" button in `components/LatteList/index.js` and utilize the exisitng re-usable Modal component located in `components/Modal` to power the creation process. The only necessary field to create a latte is the "name" field. To create a latte, use the POST request outlined above.

### Searching

Utilize the search field in `components/LatteList/index.js` to filter down the lattees based on their names.

### Sorting

Utilize the sort field in `components/LatteList/index.js` to sort the lattes based on rating and created time.

## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
