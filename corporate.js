/**
 * Corporate purchase page — Lemon Squeezy overlay checkout.
 * Lemon Squeezy forbids framing checkout in a plain iframe, so the buy button
 * (class "lemonsqueezy-button") opens the official overlay via lemon.js.
 */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof window.createLemonSqueezy === 'function') {
    window.createLemonSqueezy();
  } else {
    // lemon.js is deferred; wait for it, otherwise the link just opens normally.
    window.addEventListener('load', () => {
      if (typeof window.createLemonSqueezy === 'function') window.createLemonSqueezy();
    });
  }
});
