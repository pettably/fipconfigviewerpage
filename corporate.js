/**
 * Corporate purchase page — Lemon Squeezy embedded checkout.
 *
 * Lemon Squeezy checkout URLs use the store subdomain and the variant's
 * checkout UUID (Product > Variant > Share), NOT the numeric product ID.
 * Fill in the two values below.
 */
const LEMON_SQUEEZY = {
  productId: '1432919',
  storeSubdomain: 'laneydevelops',
  checkoutUuid: '6bbdbbb7-8796-4aef-8422-e54d4410d36f'
};

document.addEventListener('DOMContentLoaded', () => {
  const frame = document.getElementById('checkoutFrame');
  const loading = document.getElementById('checkoutLoading');
  const fallback = document.getElementById('checkoutFallback');
  const direct = document.getElementById('checkoutDirect');

  const configured =
    !LEMON_SQUEEZY.storeSubdomain.startsWith('YOUR-') &&
    !LEMON_SQUEEZY.checkoutUuid.startsWith('YOUR-');

  if (!configured) {
    console.warn('corporate.js: set storeSubdomain and checkoutUuid in LEMON_SQUEEZY.');
    loading.hidden = true;
    fallback.hidden = false;
    fallback.querySelector('p').textContent =
      'Online checkout is being set up. Please email to arrange your corporate licence.';
    direct.textContent = 'Email laneydevelops@gmail.com';
    return;
  }

  const base = `https://${LEMON_SQUEEZY.storeSubdomain}.lemonsqueezy.com/checkout/buy/${LEMON_SQUEEZY.checkoutUuid}`;
  const embedUrl = `${base}?embed=1&media=0&logo=0&desc=0&discount=0&dark=1`;

  direct.href = base;
  frame.addEventListener('load', () => {
    loading.hidden = true;
    frame.hidden = false;
  });
  frame.src = embedUrl;

  // If the iframe never loads (blocked, offline), offer a direct link.
  setTimeout(() => {
    if (frame.hidden) {
      loading.hidden = true;
      fallback.hidden = false;
    }
  }, 12000);
});
