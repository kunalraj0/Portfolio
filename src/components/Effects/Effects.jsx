import React, { useEffect, useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import "./effects.css";

function formatViews(v) {
  if (v >= 1000000) return (v / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (v >= 1000) return (v / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return String(v);
}

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
}

function Effects() {
  const [effects, setEffects] = useState([]);
  const [generatedAt, setGeneratedAt] = useState(null);
  const [sort, setSort] = useState("views");
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}effects.json`)
      .then((res) => res.json())
      .then((data) => {
        setEffects(data.effects || []);
        setGeneratedAt(data.generatedAt || null);
      })
      .catch(() => setError(true));
  }, []);

  const sorted = useMemo(() => {
    const list = [...effects];
    if (sort === "views") list.sort((a, b) => b.v - a.v);
    if (sort === "newest") list.sort((a, b) => new Date(b.d) - new Date(a.d));
    if (sort === "oldest") list.sort((a, b) => new Date(a.d) - new Date(b.d));
    if (sort === "az") list.sort((a, b) => a.n.localeCompare(b.n));
    return list;
  }, [effects, sort]);

  const totalViews = useMemo(() => effects.reduce((s, fx) => s + fx.v, 0), [effects]);

  return (
    <Container fluid className="effects-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Effects <strong className="purple">Archive</strong>
        </h1>
        <p className="project-intro">
          Published YouTube AR effects, synced from effects.youtube.com/manage.
        </p>

        {error && (
          <p className="effects-error">Couldn't load the effects archive right now.</p>
        )}

        {!error && (
          <>
            <div className="fx-meta">
              <span>
                {effects.length} published effects · {formatViews(totalViews)} total views
              </span>
              {generatedAt && (
                <span className="fx-sync">
                  Synced {new Date(generatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
              )}
            </div>

            <div className="fx-controls">
              {[
                { key: "views", label: "Most Viewed" },
                { key: "newest", label: "Newest" },
                { key: "oldest", label: "Oldest" },
                { key: "az", label: "A – Z" },
              ].map((opt) => (
                <button
                  key={opt.key}
                  className={"fx-sort" + (sort === opt.key ? " active" : "")}
                  onClick={() => setSort(opt.key)}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="fx-head">
              <span>Effect</span>
              <span>Views</span>
              <span>Published</span>
              <span></span>
            </div>
            <div className="fx-list">
              {sorted.map((fx, i) => (
                <div className="fx-row" key={fx.id}>
                  <span className="fx-name">
                    <span className="fx-rank">{String(i + 1).padStart(2, "0")}</span>
                    {fx.n}
                  </span>
                  <span className="fx-views">{formatViews(fx.v)}</span>
                  <span className="fx-date">{formatDate(fx.d)}</span>
                  <a
                    className="fx-link"
                    href={`https://youtube.com/effect/${fx.id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Try ↗
                  </a>
                </div>
              ))}
            </div>
          </>
        )}
      </Container>
    </Container>
  );
}

export default Effects;
