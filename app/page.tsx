"use client";
import { useState } from "react";
<<<<<<< HEAD
=======
import Link from "next/link";
>>>>>>> origin/main

const GENRES = ["All Volumes", "Fantasy", "Sci-Fi", "Mystery", "Hardboiled", "Romance", "Gothic"];

type Book = { title: string; genre: string; pages?: number; locked?: boolean; from: string; to: string; author: string };

// เปลี่ยน from/to เป็น image ได้ โดยเพิ่ม field `cover: "/covers/xxx.jpg"` แล้วแก้ใน BookCard
const BOOKS: Book[] = [
  { title: "The Silent Clockmaker", genre: "Mystery", pages: 320, from: "#1f4d3f", to: "#0e2a22", author: "Elara Vance" },
  { title: "Shadows of the Manor", genre: "Gothic", pages: 415, from: "#2b3342", to: "#10141c", author: "Elara Vance" },
  { title: "Carbon Soul", genre: "Sci-Fi", pages: 280, from: "#b23a1e", to: "#2a0f0a", author: "Elara Vance" },
  { title: "Neon Blood", genre: "Hardboiled", pages: 195, from: "#7a1f3d", to: "#14172b", author: "Eliza Cassidy" },
  { title: "The Lost Compass", genre: "Adventure", pages: 350, from: "#8a6a3a", to: "#3a2a14", author: "Andentrer Noll" },
  { title: "Echoes of the Void", genre: "Eldritch", locked: true, from: "#efebe5", to: "#efebe5", author: "" },
];

export default function Page() {
  const [genre, setGenre] = useState("All Volumes");
  const [q, setQ] = useState("");
  const shown = BOOKS.filter(
    (b) =>
      (genre === "All Volumes" || b.genre === genre) &&
      b.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="shell">
      <aside className="side">
        <div className="brand">
          <BookIcon />
          <div>
            <div className="brand-name">Antiquarian</div>
            <div className="brand-sub">MASTER SCRIBE</div>
          </div>
        </div>
        <button className="new">+ New Story</button>
        <nav>
          <a href="#"><GridIcon /> Dashboard</a>
          <a href="#"><BookIcon small /> My Stories</a>
          <a href="#" className="active"><CompassIcon /> Discover</a>
        </nav>
        <div className="side-bottom">
          <a href="#">Settings</a>
          <a href="#">Support</a>
          <div className="user">
            <span className="avatar" />
            <div><strong>Elias Thorne</strong><small>Pro Account</small></div>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="top">
          <div>
            <h1>Discover Library</h1>
            <p>Curated masterpieces of the infinite scroll</p>
          </div>
          <div className="top-right">
            <input
              className="search"
              placeholder="Search the archives..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Search the archives"
            />
            <button className="icon" aria-label="Notifications">🔔</button>
            <button className="icon" aria-label="Account">◯</button>
<<<<<<< HEAD
=======
            <Link href="/register" className="register-btn">Register</Link>
            <Link href="/login" className="login-btn">Login</Link>
>>>>>>> origin/main
          </div>
        </header>

        <div className="content">
          <div className="label">CURATE BY GENRE</div>
          <div className="chips">
            {GENRES.map((g) => (
              <button key={g} className={g === genre ? "chip on" : "chip"} onClick={() => setGenre(g)}>
                {g}
              </button>
            ))}
          </div>

          <section className="hero-row">
            <div className="featured">
              <div className="featured-cover">
                <span>THE SILVERED THREAD</span>
                <small>BY ELARA VANCE</small>
              </div>
              <div className="featured-body">
                <div className="tags"><span className="tag peach">FANTASY</span><span className="tag sage">POLISHED</span></div>
                <h2>Masterpiece of the Week</h2>
                <p className="quote">
                  &ldquo;In a world where destiny is woven on looms of starlight, one humble weaver finds the thread
                  that could unravel existence itself.&rdquo;
                </p>
                <div className="cta">
                  <button className="primary">Begin Reading</button>
                  <a href="#">View Archive</a>
                </div>
              </div>
            </div>
            <div className="note">
              <small>CURATOR&apos;S NOTE</small>
              <blockquote>&ldquo;A library is not just a collection of books, but a sanctuary of souls waiting to be heard.&rdquo;</blockquote>
              <div className="stat"><strong>1,248</strong><small>ACTIVE NARRATIVES</small></div>
            </div>
          </section>

          <div className="section-head">
            <h2>Recent Acquisitions</h2>
            <a href="#">View All Archives →</a>
          </div>

          {shown.length === 0 ? (
            <p className="empty">No volumes match your search. Try another genre or keyword.</p>
          ) : (
            <div className="grid">
              {shown.map((b) => (
                <article key={b.title} className="book">
                  <div className={b.locked ? "cover locked" : "cover"} style={{ background: `linear-gradient(160deg, ${b.from}, ${b.to})` }}>
                    {b.locked ? <BookIcon big /> : (<><span>{b.title}</span><small>{b.author}</small></>)}
                  </div>
                  <h3>{b.title}</h3>
                  <div className="meta">{b.genre.toUpperCase()} · {b.locked ? "Locked" : `${b.pages} Pages`}</div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function BookIcon({ small, big }: { small?: boolean; big?: boolean }) {
  const s = big ? 56 : small ? 22 : 30;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M2 5c3-1 7-1 10 1 3-2 7-2 10-1v14c-3-1-7-1-10 1-3-2-7-2-10-1z" />
      <path d="M12 6v14" />
    </svg>
  );
}
function GridIcon() {
  return (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><rect x="3" y="3" width="7" height="9" /><rect x="14" y="3" width="7" height="5" /><rect x="14" y="12" width="7" height="9" /><rect x="3" y="16" width="7" height="5" /></svg>);
}
function CompassIcon() {
  return (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5z" /></svg>);
}
