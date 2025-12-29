(() => {
  if (document.getElementById('scroll-arrow')) return;

  const btn = document.createElement('button');
  btn.id = 'scroll-arrow';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Scroll to bottom');
  btn.setAttribute('title', 'Scroll');

  // Basic styles for visibility across pages
  Object.assign(btn.style, {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    width: '48px',
    height: '48px',
    borderRadius: '9999px',
    background: '#1e3a8a', // brand-ish dark blue
    color: '#ffffff',
    border: '1px solid rgba(30,58,138,0.25)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: '9999',
    transition: 'background 150ms ease, transform 150ms ease',
  });

  const icon = document.createElement('span');
  icon.textContent = '↓';
  icon.style.fontSize = '20px';
  icon.style.lineHeight = '1';
  btn.appendChild(icon);

  let atBottom = false;
  const nearTop = () => window.scrollY <= 2;
  const nearBottom = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    return window.scrollY >= maxScroll - 2;
  };

  const setState = (force) => {
    if (force === 'bottom') {
      atBottom = true;
    } else if (force === 'top') {
      atBottom = false;
    } else {
      atBottom = nearBottom();
    }
    // Keep the button in the same position (bottom-right), just toggle icon and labels
    icon.textContent = atBottom ? '↑' : '↓';
    btn.setAttribute('aria-label', atBottom ? 'Scroll to top' : 'Scroll to bottom');
    btn.setAttribute('title', atBottom ? 'Scroll to top' : 'Scroll to bottom');
  };

  const updateVisibility = () => {
    const scrollable = document.documentElement.scrollHeight > window.innerHeight + 8;
    btn.style.display = scrollable ? 'flex' : 'none';
  };

  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.05)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
  });

  btn.addEventListener('click', () => {
    if (!atBottom) {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
      // After animation, set state to bottom
      setTimeout(() => setState('bottom'), 400);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => setState('top'), 400);
    }
  });

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        setState();
        ticking = false;
      });
      ticking = true;
    }
  });

  window.addEventListener('resize', updateVisibility);

  const append = () => {
    if (!document.body) return;
    document.body.appendChild(btn);
    updateVisibility();
    setState();
  };

  if (document.body) append();
  else window.addEventListener('DOMContentLoaded', append);
})();
