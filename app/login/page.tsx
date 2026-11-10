"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Enter a valid email address.");
    if (password.length < 6) return setError("Password must be at least 6 characters.");
    setLoading(true);
    try {
      // TODO: เชื่อมกับ API จริง เช่น await fetch("/api/login", { method: "POST", body: JSON.stringify({ email, password }) })
      await new Promise((r) => setTimeout(r, 600));
      router.push("/");
    } catch {
      setError("Could not sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth">
      <aside className="auth-art">
        <Link href="/" className="auth-brand">Antiquarian</Link>
        <blockquote>&ldquo;A library is not just a collection of books, but a sanctuary of souls waiting to be heard.&rdquo;</blockquote>
        <div className="stat"><strong>1,248</strong><small>ACTIVE NARRATIVES</small></div>
      </aside>

      <main className="auth-panel">
        <form className="auth-form" onSubmit={onSubmit} noValidate>
          <h1>Welcome back</h1>
          <p className="auth-sub">Sign in to continue your stories.</p>

          <label htmlFor="email">Email</label>
          <input id="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />

          <label htmlFor="password">Password</label>
          <div className="pw">
            <input id="password" type={show ? "text" : "password"} autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
            <button type="button" onClick={() => setShow(!show)} aria-label={show ? "Hide password" : "Show password"}>{show ? "Hide" : "Show"}</button>
          </div>

          <div className="auth-row">
            <label className="check"><input type="checkbox" /> Remember me</label>
            <a href="#">Forgot password?</a>
          </div>

          {error && <p className="auth-error" role="alert">{error}</p>}

          <button className="primary full" disabled={loading}>{loading ? "Signing in..." : "Login"}</button>

          <p className="auth-foot">New here? <a href="#">Create an account</a></p>
          <Link href="/" className="auth-back">Back to Discover</Link>
        </form>
      </main>
    </div>
  );
}
