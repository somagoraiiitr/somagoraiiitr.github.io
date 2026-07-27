// app.js - Isolated, Containerized Portfolio Controllers

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. HERO ZOOM CONTROLLER (Scroll-driven Iris Transition)
  // ==========================================================================
  class HeroZoomController {
    constructor() {
      this.scrollTrack = document.getElementById('scroll-track');
      if (!this.scrollTrack) return;

      // SVG elements
      this.catG        = document.getElementById('cat-g-1');
      this.eyeLeft     = document.getElementById('cat-eye-left');
      this.eyeRight    = document.getElementById('cat-eye-right');
      this.mouth       = document.getElementById('cat-mouth');
      this.tongue      = document.getElementById('cat-tongue');
      this.toothLeft   = document.getElementById('cat-tooth-left');
      this.toothRight  = document.getElementById('cat-tooth-right');
      this.detail1     = document.getElementById('cat-mouth-detail-1');
      this.detail2     = document.getElementById('cat-mouth-detail-2');
      this.curtain     = document.getElementById('transition-curtain');
      this.section2    = document.getElementById('section-2');
      this.heroWrapper = document.querySelector('.hero-content-wrapper');
      this.progressWrapper = document.getElementById('scroll-progress-wrapper');
      this.progressBar     = document.getElementById('scroll-progress-bar');

      // Layout cache
      this.vw = window.innerWidth;
      this.vh = window.innerHeight;
      this.trackH   = this.scrollTrack.offsetHeight;
      this.trackTop = this.scrollTrack.offsetTop;

      // Scroll state
      this.ticking     = false;
      this.snapTimeout = null;
      this.isSnapping  = false;
      // Direction: 'forward' | 'reverse' | null — used to inhibit snap during reverse
      this.scrollDir   = null;
      this._lastProgress = 0;
      this._touchStartY = 0;
      this._upScrollAccumulator = 0;
      this._touchAccumulator = 0;

      if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

      this.bindEvents();
      this.updateLayout();

      // Deep-link or load directly on /work
      if (window.location.hash === '#work' || window.location.pathname === '/work') {
        this.navigateToWorkSync();
      }

      // Seed history state
      if (window.location.pathname === '/')     window.history.replaceState({ section: 'home' }, '', '/');
      else if (window.location.pathname === '/work') window.history.replaceState({ section: 'work' }, '', '/work');

      this.onScroll();
    }

    updateLayout() {
      this.vw = window.innerWidth;
      this.vh = window.innerHeight;
      this.trackH   = this.scrollTrack.offsetHeight;
      this.trackTop = this.scrollTrack.offsetTop;
    }

    navigateToWorkSync() {
      const max = this.trackH - this.vh;
      this.scrollDir = 'forward';

      // Temporarily force auto scroll behavior so scrollTo is 100% instant
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.style.overflow = 'hidden';

      if (this.section2) {
        this.section2.scrollTop = 0;
        this.section2.style.opacity = '1';
        this.section2.style.pointerEvents = 'auto';
      }
      if (this.curtain) {
        this.curtain.style.opacity = '0';
        this.curtain.style.display = 'none';
        this.curtain.classList.remove('active');
      }
      if (this.heroWrapper) {
        this.heroWrapper.style.opacity = '0';
      }
      const catEl = document.getElementById('cat-svg-container');
      if (catEl) {
        catEl.style.opacity = '0';
        catEl.style.visibility = 'hidden';
      }

      window.scrollTo(0, this.trackTop + max);
      this.updateAnimation(this.trackTop + max);

      // Remove critical render class if set on initial page load
      document.documentElement.classList.remove('is-work-page');

      window.history.replaceState({ section: 'work' }, '', '/work');
    }

    bindEvents() {
      window.addEventListener('scroll', () => this.onScroll(), { passive: true });
      window.addEventListener('resize', () => { this.updateLayout(); this.onScroll(); }, { passive: true });

      // ── Reverse iris: translate wheel deltaY into body scroll when at top of section-2 with friction ──
      if (this.section2) {
        this.section2.addEventListener('wheel', (e) => {
          if (e.deltaY < 0 && this.section2.scrollTop <= 0) {
            this._upScrollAccumulator += Math.abs(e.deltaY);
            // Require 100px of accumulated upward scroll effort (friction gate) before triggering return
            if (this._upScrollAccumulator >= 100) {
              e.preventDefault();
              this.scrollDir = 'reverse';
              document.body.style.overflow = '';
              if (this.snapTimeout) { clearTimeout(this.snapTimeout); this.snapTimeout = null; }
              window.scrollBy({ top: e.deltaY * 0.7, behavior: 'instant' });
            }
          } else {
            this._upScrollAccumulator = 0;
          }
        }, { passive: false });

        this.section2.addEventListener('touchstart', (e) => {
          this._touchStartY = e.touches[0].clientY;
          this._touchAccumulator = 0;
        }, { passive: true });

        this.section2.addEventListener('touchmove', (e) => {
          const dy = e.touches[0].clientY - this._touchStartY;
          if (dy > 0 && this.section2.scrollTop <= 0) {
            this._touchAccumulator += dy;
            if (this._touchAccumulator >= 80) {
              e.preventDefault();
              this.scrollDir = 'reverse';
              document.body.style.overflow = '';
              if (this.snapTimeout) { clearTimeout(this.snapTimeout); this.snapTimeout = null; }
              window.scrollBy({ top: -dy * 1.0, behavior: 'instant' });
              this._touchStartY = e.touches[0].clientY;
            }
          } else {
            this._touchAccumulator = 0;
          }
        }, { passive: false });
      }

      // Browser back/forward
      window.addEventListener('popstate', (e) => {
        const path = window.location.pathname;
        if ((e.state && e.state.section === 'home') || path === '/') {
          document.body.style.overflow = '';
          if (this.section2) this.section2.scrollTop = 0;
          window.scrollTo({ top: 0, behavior: 'instant' });
        } else if ((e.state && e.state.section === 'work') || path === '/work') {
          this.navigateToWorkSync();
        }
      });

      // Logo → home
      const logoLink = document.querySelector('.nav-logo-link');
      if (logoLink) {
        logoLink.addEventListener('click', (e) => {
          e.preventDefault();
          document.body.style.overflow = '';
          if (this.section2) this.section2.scrollTop = 0;
          window.scrollTo({ top: 0, behavior: 'instant' });
        });
      }

      // Nav item routing
      document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', (e) => {
          const text = link.textContent.trim().toLowerCase();
          const href = link.getAttribute('href');
          if (text === 'work' || href === '/work' || href === 'index.html#work') {
            if (['/','','/index.html','/work'].includes(window.location.pathname)) {
              e.preventDefault();
              this.navigateToWorkSync();
            }
          } else if (text === 'home') {
            e.preventDefault();
            document.body.style.overflow = '';
            if (this.section2) this.section2.scrollTop = 0;
            window.scrollTo({ top: 0, behavior: 'instant' });
            this.onScroll();
          }
        });
      });
    }

    onScroll() {
      const y = window.scrollY;
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.updateAnimation(y);
          this.ticking = false;
        });
        this.ticking = true;
      }
    }

    updateAnimation(scrollY) {
      const max = this.trackH - this.vh;
      const rectTop = this.trackTop - scrollY;
      let progress = Math.round((-rectTop / max) * 100000) / 100000;
      progress = Math.max(0, Math.min(1, progress));

      // Track scroll direction for snap suppression
      if (progress < this._lastProgress) this.scrollDir = 'reverse';
      else if (progress > this._lastProgress) this.scrollDir = 'forward';
      this._lastProgress = progress;

      // ── SVG anchor points ──
      const MX = 1316.9, MY = 488.7;
      const NX = 1316.9, NY = 475.0;
      const CX = 960,    CY = 540;
      const ELX = 1285.1, ELY = 459.4;
      const ERX = 1345.5, ERY = 457.0;

      const svgScale = Math.max(this.vw / 1920, this.vh / 1080);
      const S_MAX   = 1.8;
      const S_GIANT = Math.max((this.vw / svgScale) / 10.0, (this.vh / svgScale) / 8.0) * 2.0;

      // ── Cat zoom transform ──
      let s = 1.0, tx = 0, ty = 0;
      if (progress < 0.45) {
        const t = progress / 0.45;
        s = 1.0 + (S_MAX - 1.0) * t;
        tx = (NX + (CX - NX) * t) - s * NX;
        ty = (NY + (CY - NY) * t) - s * NY;
      } else if (progress < 0.75) {
        const t = (progress - 0.45) / 0.30;
        const e = t * t * (3 - 2 * t);
        s = S_MAX + (S_GIANT - S_MAX) * e;
        tx = CX - s * (NX + (MX - NX) * e);
        ty = CY - s * (NY + (MY - NY) * e);
      } else {
        s = S_GIANT;
        tx = CX - s * MX;
        ty = CY - s * MY;
      }
      if (this.catG) this.catG.setAttribute('transform', `translate(${tx},${ty}) scale(${s})`);

      // ── Eye squint ──
      const eyeScale = progress < 0.45 ? 1.0 - 0.7 * (progress / 0.45) : 0.3;
      if (this.eyeLeft)  this.eyeLeft.setAttribute('transform',  `translate(${ELX},${ELY}) scale(1,${eyeScale}) translate(${-ELX},${-ELY})`);
      if (this.eyeRight) this.eyeRight.setAttribute('transform', `translate(${ERX},${ERY}) scale(1,${eyeScale}) translate(${-ERX},${-ERY})`);

      // ── Mouth yawn ──
      const tm = Math.min(1.0, progress / 0.45);
      const mxform = `translate(${MX},${MY}) scale(${1 + tm},${1 + 2*tm}) translate(${-MX},-${MY})`;
      if (this.mouth)     { this.mouth.setAttribute('transform', mxform); this.mouth.style.opacity = 1; }
      if (this.toothLeft)  this.toothLeft.setAttribute('transform', mxform);
      if (this.toothRight) this.toothRight.setAttribute('transform', mxform);
      if (this.tongue)     this.tongue.setAttribute('transform', mxform);

      // Fade teeth/tongue/nose after yawn peak
      const fadeOut = progress >= 0.45 ? 1.0 - Math.min(1.0, (progress - 0.45) / 0.15) : 1.0;
      [this.toothLeft, this.toothRight, this.tongue].forEach(el => {
        if (el) { el.style.opacity = fadeOut; el.setAttribute('opacity', fadeOut.toString()); }
      });
      [this.detail1, this.detail2].forEach(el => {
        if (el) { el.style.opacity = fadeOut; el.setAttribute('opacity', fadeOut.toString()); }
      });

      // ── Hero text fade ──
      if (this.heroWrapper) this.heroWrapper.style.opacity = Math.max(0, 1 - progress / 0.40);

      // ── Iris curtain ──
      let scaleVal = 0, curtainOn = false, s2opacity = 0, s2events = 'none', catOpacity = '1';

      if (progress < 0.50) {
        scaleVal = 0; curtainOn = false;
      } else if (progress < 0.75) {
        const t = (progress - 0.50) / 0.25;
        const e = t * t * (3 - 2 * t);
        scaleVal = e; curtainOn = true;
      } else if (progress < 0.80) {
        const t = (progress - 0.75) / 0.05;
        scaleVal = 1.0; curtainOn = true; s2opacity = t; catOpacity = '0';
      } else {
        scaleVal = 0; curtainOn = false;
        s2opacity = 1; s2events = 'auto'; catOpacity = '0';
      }

      const catEl = document.getElementById('cat-svg-container');
      if (catEl) {
        catEl.style.opacity = catOpacity;
        catEl.style.visibility = catOpacity === '0' ? 'hidden' : 'visible';
      }
      if (this.curtain) {
        this.curtain.classList.toggle('active', curtainOn);
        this.curtain.style.opacity = curtainOn ? '1' : '0';
        this.curtain.style.display = curtainOn ? 'block' : 'none';
        this.curtain.style.zIndex = '30';
        this.curtain.style.backgroundColor = 'var(--color-neutral-black)';
        this.curtain.style.transform =
          `translate(${this.vw/2}px,${this.vh/2}px) translate(-50%,-50%) scale(${scaleVal.toFixed(4)})`;
      }
      if (this.section2) {
        this.section2.style.opacity = s2opacity.toString();
        this.section2.style.pointerEvents = s2events;
        if (progress < 0.50 && this.section2.scrollTop > 0) {
          this.section2.scrollTop = 0;
        }
      }

      // ── Body overflow lock ──
      // Lock at progress=1 so section-2 can scroll internally.
      // Reverse direction unlocks immediately (handled in wheel listener + here).
      if (progress >= 1.0) {
        document.body.style.overflow = 'hidden';
      } else if (progress < 0.98 || this.scrollDir === 'reverse') {
        document.body.style.overflow = '';
      }

      // ── Progress bar (tied to yawn 0→0.45) ──
      if (this.progressBar) this.progressBar.style.width = (Math.min(1, progress / 0.45) * 100) + '%';
      if (this.progressWrapper) this.progressWrapper.classList.toggle('visible', progress < 0.80);

      // ── Magnetic snap ──
      // Only snap forward; suppress entirely while user is actively reversing.
      if (!this.isSnapping && this.scrollDir !== 'reverse' && progress > 0.20 && progress < 0.98) {
        if (this.snapTimeout) clearTimeout(this.snapTimeout);
        this.snapTimeout = setTimeout(() => {
          if (this.scrollDir === 'reverse') return; // guard re-check
          this.isSnapping = true;
          const target = progress >= 0.45 ? (this.trackTop + max) : 0;
          window.scrollTo({ top: target, behavior: 'smooth' });
          setTimeout(() => { this.isSnapping = false; }, 450);
        }, 60);
      }

      // ── Address bar sync ──
      if (progress >= 0.80) {
        if (window.location.pathname !== '/work') window.history.pushState({ section: 'work' }, '', '/work');
      } else {
        if (window.location.pathname !== '/') window.history.pushState({ section: 'home' }, '', '/');
      }
    }
  }

  // ==========================================================================
  // 2. CASE STUDIES INTERACTION CONTROLLER (Isolated Grid & Ripple Toggles)
  // ==========================================================================
  class CaseStudiesController {
    constructor() {
      this.morphRows = document.querySelectorAll('.morph-row');
      this.ctaButtons = document.querySelectorAll('.cta-button');
      this.section2 = document.getElementById('section-2');

      this.initEvents();
    }

    initEvents() {
      // Row expansion and collapse triggers
      this.morphRows.forEach(row => {
        row.addEventListener('click', (e) => {
          // Close button trigger — check both the button and its inner Material icon span
          const closeBtn = e.target.closest('.morph-close-btn');
          if (closeBtn) {
            e.stopPropagation();
            row.classList.remove('expanded');
            return;
          }

          // Exclude link clicks (card action link, etc.)
          if (e.target.tagName.toLowerCase() === 'a' || e.target.closest('a')) {
            return;
          }

          // Stop if already expanded
          if (row.classList.contains('expanded')) {
            return;
          }

          // Close other open cards
          document.querySelectorAll('.morph-row.expanded').forEach(other => {
            other.classList.remove('expanded');
          });

          // Expand row
          row.classList.add('expanded');
        });
      });

      // Material Design Ripple trigger
      this.ctaButtons.forEach(btn => {
        btn.addEventListener('mousedown', (e) => this.createRipple(e));
      });
    }

    createRipple(e) {
      const button = e.currentTarget;
      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      const rect = button.getBoundingClientRect();

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;
      circle.classList.add("ripple-span");

      const oldRipple = button.querySelector(".ripple-span");
      if (oldRipple) {
        oldRipple.remove();
      }

      button.appendChild(circle);
    }
  }

  // ==========================================================================
  // 3. CASE STUDY SUB-PAGE OBSERVERS & UTILITIES
  // ==========================================================================
  class SubPageUtilities {
    constructor() {
      this.sideNavLinks = document.querySelectorAll('.side-nav-link, .cs-nav a');
      this.accordionHeaders = document.querySelectorAll('.accordion-header');

      this.initNavClickHandlers();
      this.initAccordions();
    }

    initNavClickHandlers() {
      if (this.sideNavLinks.length === 0) return;

      this.sideNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          if (href && href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
              const yOffset = -120;
              const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }
        });
      });
    }

    initAccordions() {
      this.accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
          const content = header.nextElementSibling;
          const chevron = header.querySelector('.chevron-icon');
          if (content && content.classList.contains('accordion-content')) {
            const isVisible = content.style.display === 'block';
            content.style.display = isVisible ? 'none' : 'block';
            header.setAttribute('aria-expanded', (!isVisible).toString());
            if (chevron) {
              chevron.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(180deg)';
            }
          }
        });
      });
    }
  }

  // ==========================================================================
  // 4. APPLICATION INITIALIZER
  // ==========================================================================
  new HeroZoomController();
  new CaseStudiesController();
  new SubPageUtilities();

  // ==========================================================================
  // 5. CASE STUDY SIDEBAR SCROLLSPY
  // ==========================================================================
  const updateActiveSideNav = () => {
    const navLinks = Array.from(document.querySelectorAll('.cs-nav a'));
    if (navLinks.length === 0) return;

    const targetIds = navLinks
      .map(link => link.getAttribute('href'))
      .filter(href => href && href.startsWith('#'))
      .map(href => href.substring(1));

    if (targetIds.length === 0) return;

    const targets = targetIds
      .map(id => document.getElementById(id))
      .filter(el => el !== null);

    if (targets.length === 0) return;

    const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 50);

    let currentTarget = targets[0];
    if (isAtBottom) {
      currentTarget = targets[targets.length - 1];
    } else {
      const scrollPosition = window.scrollY + 180;
      for (let i = 0; i < targets.length; i++) {
        const el = targets[i];
        if (el.offsetTop <= scrollPosition) {
          currentTarget = el;
        }
      }
    }

    const currentId = currentTarget.getAttribute('id');
    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', updateActiveSideNav, { passive: true });
  updateActiveSideNav();
});
