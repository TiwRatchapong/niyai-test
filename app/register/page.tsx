"use client";

import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const password = String(form.get("password") ?? "");
    const confirmation = String(form.get("confirmation") ?? "");

    if (password !== confirmation) {
      setMessage("Passwords do not match. Please try again.");
      return;
    }
    setMessage("Your reader's account is ready. Welcome to Antiquarian.");
  }

  return (
    <main className="register-page">
      <section className="register-aside" aria-label="About Antiquarian">
        <a className="register-brand" href="/">
          <BookMark />
          <span>Antiquarian</span>
        </a>
        <div className="aside-copy">
          <p className="eyebrow">THE READER&apos;S SOCIETY</p>
          <h1>Every great story starts with an open book.</h1>
          <p>Build your personal library, preserve every chapter, and find a world of stories chosen just for you.</p>
        </div>
        <div className="aside-quote">
          <span className="quote-mark">“</span>
          <p>A reader lives a thousand lives before they rest.</p>
          <small>— GEORGE R.R. MARTIN</small>
        </div>
        <div className="book-stack" aria-hidden="true">
          <span className="book-one" />
          <span className="book-two" />
          <span className="book-three" />
        </div>
      </section>

      <section className="register-panel">
        <div className="register-card">
          <div className="register-heading">
            <p className="eyebrow">JOIN THE ARCHIVES</p>
            <h2>Create your account</h2>
            <p>Begin curating your next great read.</p>
          </div>

          <form className="register-form" onSubmit={submit}>
            <div className="name-fields">
              <label>
                First name
                <input name="firstName" autoComplete="given-name" placeholder="Elias" required />
              </label>
              <label>
                Last name
                <input name="lastName" autoComplete="family-name" placeholder="Thorne" required />
              </label>
            </div>
            <label>
              Email address
              <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            </label>
            <label>
              Password
              <span className="password-input">
                <input name="password" type={showPassword ? "text" : "password"} autoComplete="new-password" placeholder="At least 8 characters" minLength={8} required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </span>
            </label>
            <label>
              Confirm password
              <input name="confirmation" type={showPassword ? "text" : "password"} autoComplete="new-password" placeholder="Repeat your password" required />
            </label>
            <label className="consent">
              <input type="checkbox" required />
              <span>I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>.</span>
            </label>
            {message && <p className="form-message" role="status">{message}</p>}
            <button className="register-submit" type="submit">Create account <span>→</span></button>
          </form>

          <p className="signin-link">Already a member? <a href="#sign-in">Sign in to your library</a></p>
        </div>
        <p className="register-footer">© 2025 Antiquarian. Made for devoted readers.</p>
      </section>
    </main>
  );
}

function BookMark() {
  return (
    <svg width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M3 5.2c2.8-1.2 6.5-.9 9 1.1 2.5-2 6.2-2.3 9-1.1v13.6c-2.8-1.2-6.5-.9-9 1.1-2.5-2-6.2-2.3-9-1.1z" />
      <path d="M12 6.3v13.6" />
    </svg>
  );
}
