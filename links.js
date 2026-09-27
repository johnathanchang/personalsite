// Links marked with data-href (instead of href) open via JS, so the browser
// doesn't show its URL preview in the bottom corner on hover.
document.querySelectorAll('a[data-href]').forEach(function (link) {
  var url = link.getAttribute('data-href');
  var newTab = link.getAttribute('target') === '_blank';

  link.setAttribute('role', 'link');
  link.setAttribute('tabindex', '0');
  link.style.cursor = 'pointer';

  function open(forceNewTab) {
    if (newTab || forceNewTab) {
      window.open(url, '_blank', 'noopener');
    } else {
      window.location.href = url;
    }
  }

  link.addEventListener('click', function (e) {
    e.preventDefault();
    open(e.metaKey || e.ctrlKey);
  });

  // Middle-click opens in a new tab, like a normal link
  link.addEventListener('auxclick', function (e) {
    if (e.button === 1) {
      e.preventDefault();
      open(true);
    }
  });

  link.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      open(false);
    }
  });
});
