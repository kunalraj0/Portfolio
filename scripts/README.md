# Effects export

`export-effects.console.js` refreshes `public/effects.json` — the data behind
the portfolio's Effects Archive (all published YouTube AR effects, sorted by
views).

## Why this is a console script, not an automated job

The effects list comes from an internal, undocumented YouTube Effect Maker
endpoint that only works inside your own logged-in session. Automating that
unattended (e.g. in CI) would mean storing your personal Google session
somewhere as a secret — a real credential-exposure risk, and fragile since
the endpoint's shape isn't a stable public contract. Running it yourself, on
demand, avoids both problems.

## How to refresh the data

1. Go to https://effects.youtube.com/manage and make sure you're logged in
   and the list has finished loading.
2. Open DevTools (F12) → Console.
3. Paste the entire contents of `export-effects.console.js` and press Enter.
4. Click the sort dropdown (top right, shows "Most recent" or "Effect name")
   and pick the other option. This refreshes the list — that's the request
   the script is listening for. (It has to be a real click; the script can't
   safely trigger this dropdown itself.)
5. It downloads `effects.json` automatically once it sees the response.
6. Move/overwrite it to `public/effects.json` in this repo.
7. Commit and push — the live site now serves the fresh snapshot.

Do this whenever you publish a new effect or want updated view counts —
takes under a minute.
