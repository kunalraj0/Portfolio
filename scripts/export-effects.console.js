/**
 * Effects exporter — run this in the browser console.
 *
 * Why a console script and not an automated CI job:
 * the effects list comes from an internal, undocumented YouTube Effect Maker
 * endpoint that only works with YOUR logged-in session. Automating that
 * unattended would mean storing your personal Google session/cookie in a
 * script or CI secret somewhere — a real credential-exposure risk, and
 * fragile since the endpoint could change shape at any time. Running it
 * yourself, on demand, avoids both problems entirely.
 *
 * Why you have to click the sort dropdown yourself: this page's dropdown
 * only reacts to a real, trusted mouse click — a script-triggered click
 * doesn't open it. So this script listens for the request and does
 * everything else for you; you just make the one click that already
 * refreshes the list on screen.
 *
 * How to use:
 *   1. Open https://effects.youtube.com/manage and make sure you're logged in
 *      and the effects list has finished loading.
 *   2. Open DevTools (F12) -> Console tab.
 *   3. Paste this whole file's contents and press Enter.
 *   4. Click the sort dropdown (top right, shows "Most recent" or
 *      "Effect name") and pick the OTHER option. This refetches the list —
 *      that's the request the script is listening for.
 *   5. It downloads "effects.json" automatically once it sees the response.
 *   6. Move the downloaded file to this project's `public/effects.json`,
 *      replacing the existing one.
 *   7. Commit and push — the live site now serves the fresh snapshot.
 */
(function exportEffects() {
  const origFetch = window.fetch;
  console.log(
    "[export-effects] Ready. Click the sort dropdown (top right) and pick the option that ISN'T currently selected."
  );

  window.fetch = async function (...args) {
    const res = await origFetch.apply(this, args);
    const url = typeof args[0] === "string" ? args[0] : args[0].url;
    if (url.includes("list_snapshots")) {
      window.fetch = origFetch; // one shot — restore immediately
      const text = await res.clone().text();
      finish(text);
    }
    return res;
  };

  // Safety net: stop listening after 60s so this doesn't linger forever.
  setTimeout(() => {
    if (window.fetch !== origFetch) {
      window.fetch = origFetch;
      console.warn(
        "[export-effects] Stopped listening after 60s — no click detected. Run the script again when ready."
      );
    }
  }, 60000);

  function finish(raw) {
    const parsed = JSON.parse(raw);
    const items = parsed[1] || [];

    const effects = items
      .map((it) => {
        const name = it[6] && it[6][0] ? it[6][0][0] : null;
        const url = it.find(
          (x) => typeof x === "string" && x.includes("youtube.com/effect/")
        );
        const id = url ? url.split("/effect/")[1] : null;
        const views = it[9] ? Number(it[9][0]) : 0;
        const created = it[2] ? Number(it[2][0]) * 1000 : null;
        return {
          n: name,
          id,
          v: views,
          d: created ? new Date(created).toISOString().slice(0, 10) : null,
        };
      })
      // Effects without a public URL are not Active (Needs Revision / Removed) — skip them.
      .filter((x) => x.id && x.n);

    effects.sort((a, b) => b.v - a.v);

    const payload = { generatedAt: new Date().toISOString(), effects };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "effects.json";
    document.body.appendChild(a);
    a.click();
    a.remove();

    console.log(
      `[export-effects] Done — exported ${effects.length} active effects to effects.json. Move it into public/effects.json and push.`
    );
  }
})();
