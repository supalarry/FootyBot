# od-cli-api
## Local development
This project uses the `pnpm` dependency manager.
1. Run `pnpm install` to install dependencies.
2. Add keys in `.env.local` and rename it to `.env`.
3. Run `pnpm dev` to start the development server.
4. Access dev server on `localhost:3001`
5. Access prod server on `https://od-cli.onrender.com`

## Tech stack
1. Node.js + Express + TypeScript
2. Server hosted on Render
3. Database hosted in Supabase

## Endpoints
### 1. Server health check
Endpoint: `/api/ping`

Method: `GET`

Response: `{
"message": "pong"
}`

### 2. Db version
Endpoint: `/api/db/version`

Method: `GET`

Response:
```
{
   "version": 62,
   "lastMigration": "20220411085539_add_fellow_to_company"
}
```

### 3. Headsup list

Endpoint: `/api/headsup`

Method: `GET`

Response:
```
{
    "messages": [
        {
            "type": "warning",
            "text": "Someone spilled coffee on Sentry servers, so Vercel builds are failing"
        },
        {
            "type": "info",
            "text": "New joiner - let's welcome Robert Cecil Martin to the team!"
        },
        {
            "type": "success",
            "text": "Prisma was updated to the latest version 30.0.0!"
        }
    ]
}
```

### 4. Headsup add

Endpoint: `/api/headsup`

Method: `POST`

Request body:
```
{
    "type": "info",
    "text": "On Deck raised series C 100 million!!!"
}
```

Response:
```
{
    "id": 8,
    "created_at": "2022-04-13T09:19:10.744756+00:00",
    "type": "info",
    "text": "On Deck raised series C 100 million!!!"
}
```

## Adding an endpoint
Endpoint consists of a route and a handler.
Route specifies method and endpoint. Handler
specifies how the request is handled. Route
then implements the handler. Finally, the route
is added to the server.

1. Create a new controller in `source/controllers`. Check existing controller as an example.
2. Create a new route in `source/routes`. Check existing route as an example.
3. Add the controller to the new route.
4. In `source/server.ts` add the new route.
   1. Search for `router.use('/api/`
   2. Add the new route.