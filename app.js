// app.js - Isolated, Containerized Portfolio Controllers

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. HERO ZOOM CONTROLLER (Isolated Scroll & Yawn Animation)
  // ==========================================================================
  class HeroZoomController {
    constructor() {
      this.scrollTrack = document.getElementById('scroll-track');
      if (!this.scrollTrack) return;

      this.catG = document.getElementById('cat-g-1');
      this.eyeLeft = document.getElementById('cat-eye-left');
      this.eyeRight = document.getElementById('cat-eye-right');
      this.mouth = document.getElementById('cat-mouth');
      this.tongue = document.getElementById('cat-tongue');
      this.toothLeft = document.getElementById('cat-tooth-left');
      this.toothRight = document.getElementById('cat-tooth-right');
      this.detail1 = document.getElementById('cat-mouth-detail-1');
      this.detail2 = document.getElementById('cat-mouth-detail-2');
      this.transitionCurtain = document.getElementById('transition-curtain');
      this.section2 = document.getElementById('section-2');
      this.heroContentWrapper = document.querySelector('.hero-content-wrapper');
      this.progressWrapper = document.getElementById('scroll-progress-wrapper');
      this.progressBar = document.getElementById('scroll-progress-bar');

      // Layout cache
      this.viewportWidth = window.innerWidth;
      this.viewportHeight = window.innerHeight;
      this.scrollTrackHeight = this.scrollTrack.offsetHeight;
      this.scrollTrackTop = this.scrollTrack.offsetTop;

      // Scroll states
      this.lastScrollY = window.scrollY;
      this.ticking = false;
      this.snapTimeout = null;
      this.isSnapping = false;

      // Initialize
      this.bindEvents();
      this.updateLayout();

      if (window.location.hash === '#work' || window.location.pathname === '/work') {
        const totalScrollable = this.scrollTrackHeight - this.viewportHeight;
        window.scrollTo(0, this.scrollTrackTop + totalScrollable);
        this.lastScrollY = window.scrollY;
      }

      this.onScroll();
    }

    updateLayout() {
      this.viewportWidth = window.innerWidth;
      this.viewportHeight = window.innerHeight;
      this.scrollTrackHeight = this.scrollTrack.offsetHeight;
      this.scrollTrackTop = this.scrollTrack.offsetTop;
    }

    bindEvents() {
      window.addEventListener('scroll', () => this.onScroll(), { passive: true });
      window.addEventListener('resize', () => {
        this.updateLayout();
        this.onScroll();
      }, { passive: true });

      // Scroll-up from /work: when section-2 is scrolled to the very top
      // and user scrolls up, unlock body so reverse iris animation plays.
      if (this.section2) {
        this.section2.addEventListener('wheel', (e) => {
          if (e.deltaY < 0 && this.section2.scrollTop <= 0) {
            e.preventDefault();
            document.body.style.overflow = '';
            // Trigger a small upward scroll on body to kick reverse animation
            window.scrollBy({ top: -5, behavior: 'instant' });
          }
        }, { passive: false });

        this.section2.addEventListener('touchstart', (e) => {
          this._touchStartY = e.touches[0].clientY;
        }, { passive: true });

        this.section2.addEventListener('touchmove', (e) => {
          const dy = e.touches[0].clientY - this._touchStartY;
          if (dy > 0 && this.section2.scrollTop <= 0) {
            e.preventDefault();
            document.body.style.overflow = '';
            window.scrollBy({ top: -5, behavior: 'instant' });
          }
        }, { passive: false });
      }

      // Handle deep linking to /work on page load
      if (window.location.pathname === '/work' || window.location.hash === '#work') {
        const totalScrollable = this.scrollTrackHeight - this.viewportHeight;
        window.scrollTo({ top: this.scrollTrackTop + totalScrollable, behavior: 'instant' });
      }

      // Disable browser native scroll restoration to prevent it from jumping
      // back to the 0.80 progress point where the pushState originally happened.
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }

      // Initialize state for the first load so we have a known state
      if (window.location.pathname === '/') {
        window.history.replaceState({ section: 'home' }, '', '/');
      } else if (window.location.pathname === '/work') {
        window.history.replaceState({ section: 'work' }, '', '/work');
      }

      // Handle browser back/forward button naturally without locking
      window.addEventListener('popstate', (e) => {
        const state = e.state;
        const targetPath = window.location.pathname;
        
        if ((state && state.section === 'home') || targetPath === '/') {
          document.body.style.overflow = ''; // Unlock scroll
          window.scrollTo({ top: 0, behavior: 'instant' });
        } else if ((state && state.section === 'work') || targetPath === '/work') {
          const totalScrollable = this.scrollTrackHeight - this.viewportHeight;
          window.scrollTo({ top: this.scrollTrackTop + totalScrollable, behavior: 'instant' });
        }
      });

      // Header Logo and Menu item smooth-scroll routing
      const logoLink = document.querySelector('.nav-logo-link');
      if (logoLink) {
        logoLink.addEventListener('click', (e) => {
          e.preventDefault();
          document.body.style.overflow = ''; // Unlock scroll
          window.scrollTo({
            top: 0,
            behavior: 'instant'
          });
        });
      }

      document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', (e) => {
          const text = link.textContent.trim().toLowerCase();
          const href = link.getAttribute('href');
          if (text === 'work' || href === '/work' || href === 'index.html#work') {
            if (window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname === '/work') {
              e.preventDefault();
              const totalScrollable = this.scrollTrackHeight - this.viewportHeight;
              window.scrollTo({
                top: this.scrollTrackTop + totalScrollable,
                behavior: 'instant'
              });
              this.onScroll();
            }
          } else if (text === 'home') {
            e.preventDefault();
            document.body.style.overflow = ''; // Unlock scroll
            window.scrollTo({ top: 0, behavior: 'instant' });
            this.onScroll();
          }
        });
      });
    }

    onScroll() {
      const currentScrollY = window.scrollY;
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.updateAnimation(currentScrollY);
          this.ticking = false;
        });
        this.ticking = true;
      }
    }

    updateAnimation(currentScrollY) {

      const rectTop = this.scrollTrackTop - currentScrollY;
      const totalScrollable = this.scrollTrackHeight - this.viewportHeight;
      let progress = -rectTop / totalScrollable;
      // Fix floating point precision issues (e.g. 0.9999999999999) 
      // which cause the if-else blocks to incorrectly trigger the curtain active state.
      progress = Math.round(progress * 100000) / 100000;
      progress = Math.max(0, Math.min(1, progress));

      // Constant calculations
      const mx_start = 1316.9;
      const my_start = 488.7;
      const nx_start = 1316.9;
      const ny_start = 475.0;
      const mx_end = 960;
      const my_end = 540;
      const eyeLeftCX = 1285.1;
      const eyeLeftCY = 459.4;
      const eyeRightCX = 1345.5;
      const eyeRightCY = 457.0;

      const svgScale = Math.max(this.viewportWidth / 1920, this.viewportHeight / 1080);
      const svgWidth = this.viewportWidth / svgScale;
      const svgHeight = this.viewportHeight / svgScale;

      const s_max = 1.8;
      const s_giant = Math.max(svgWidth / 10.0, svgHeight / 8.0) * 2.0;

      let s = 1.0;
      let tx = 0;
      let ty = 0;

      if (progress < 0.45) {
        const t_zoom = progress / 0.45;
        s = 1.0 + (s_max - 1.0) * t_zoom;
        const nx_target = nx_start + (mx_end - nx_start) * t_zoom;
        const ny_target = ny_start + (my_end - ny_start) * t_zoom;
        tx = nx_target - s * nx_start;
        ty = ny_target - s * ny_start;
      } else if (progress >= 0.45 && progress < 0.75) {
        const t_giant = (progress - 0.45) / 0.30;
        const easeT = t_giant * t_giant * (3 - 2 * t_giant);
        s = s_max + (s_giant - s_max) * easeT;
        const cx = nx_start + (mx_start - nx_start) * easeT;
        const cy = ny_start + (my_start - ny_start) * easeT;
        tx = mx_end - s * cx;
        ty = my_end - s * cy;
      } else {
        s = s_giant;
        tx = mx_end - s * mx_start;
        ty = my_end - s * my_start;
      }

      // Eye scale squint
      const eyeScale = progress < 0.45 ? 1.0 - 0.7 * (progress / 0.45) : 0.3;

      // Mouth opening scale
      const t_mouth = Math.min(1.0, progress / 0.45);
      const mouthScaleX = 1.0 + 1.0 * t_mouth;
      const mouthScaleY = 1.0 + 2.0 * t_mouth;

      // Opacities
      let teethOpacity = 1.0;
      let tongueOpacity = 1.0;
      let noseOpacity = 1.0;

      if (progress >= 0.45) {
        const fadeProgress = Math.min(1.0, (progress - 0.45) / 0.15);
        teethOpacity = 1.0 - fadeProgress;
        tongueOpacity = 1.0 - fadeProgress;
        noseOpacity = 1.0 - fadeProgress;
      }

      // Set transform attributes
      if (this.catG) this.catG.setAttribute('transform', `translate(${tx}, ${ty}) scale(${s})`);

      const leftEyeTransform = `translate(${eyeLeftCX}, ${eyeLeftCY}) scale(1, ${eyeScale}) translate(${-eyeLeftCX}, ${-eyeLeftCY})`;
      const rightEyeTransform = `translate(${eyeRightCX}, ${eyeRightCY}) scale(1, ${eyeScale}) translate(${-eyeRightCX}, ${-eyeRightCY})`;
      if (this.eyeLeft) this.eyeLeft.setAttribute('transform', leftEyeTransform);
      if (this.eyeRight) this.eyeRight.setAttribute('transform', rightEyeTransform);

      const mouthTransform = `translate(${mx_start}, ${my_start}) scale(${mouthScaleX}, ${mouthScaleY}) translate(${-mx_start}, -${my_start})`;
      if (this.mouth) {
        this.mouth.setAttribute('transform', mouthTransform);
        this.mouth.style.opacity = 1;
        this.mouth.setAttribute('opacity', '1');
      }

      if (this.toothLeft) {
        this.toothLeft.setAttribute('transform', mouthTransform);
        this.toothLeft.style.opacity = teethOpacity;
        this.toothLeft.setAttribute('opacity', teethOpacity.toString());
      }
      if (this.toothRight) {
        this.toothRight.setAttribute('transform', mouthTransform);
        this.toothRight.style.opacity = teethOpacity;
        this.toothRight.setAttribute('opacity', teethOpacity.toString());
      }
      if (this.tongue) {
        this.tongue.setAttribute('transform', mouthTransform);
        this.tongue.style.opacity = tongueOpacity;
        this.tongue.setAttribute('opacity', tongueOpacity.toString());
      }
      if (this.detail1) {
        this.detail1.style.opacity = noseOpacity;
        this.detail1.setAttribute('opacity', noseOpacity.toString());
      }
      if (this.detail2) {
        this.detail2.style.opacity = noseOpacity;
        this.detail2.setAttribute('opacity', noseOpacity.toString());
      }

      // Fade Hero Title text
      if (this.heroContentWrapper) {
        this.heroContentWrapper.style.opacity = Math.max(0, 1 - progress / 0.40);
      }

      // Wipe curtain scale / reveal variables
      let scaleVal = 0.0;
      let curtainOpacity = 0.0;
      let curtainActive = false;
      let section2Opacity = 0.0;
      let section2PointerEvents = 'none';
      let section2ZIndex = '20';
      let catContainerOpacity = '1';
      let catContainerVisibility = 'visible';

      if (progress < 0.50) {
        scaleVal = 0.0;
        curtainOpacity = 0.0;
        curtainActive = false;
        section2Opacity = 0.0;
        section2PointerEvents = 'none';
        section2ZIndex = '20';
        catContainerOpacity = '1';
        catContainerVisibility = 'visible';
      } else if (progress >= 0.50 && progress < 0.75) {
        const t_wipe = (progress - 0.50) / 0.25;
        const easeT = t_wipe * t_wipe * (3 - 2 * t_wipe);
        scaleVal = easeT;
        curtainOpacity = 1.0;
        curtainActive = true;
        section2Opacity = 0.0;
        section2PointerEvents = 'none';
        section2ZIndex = '20';
        catContainerOpacity = '1';
        catContainerVisibility = 'visible';
      } else if (progress >= 0.75 && progress < 0.80) {
        scaleVal = 1.0;
        curtainOpacity = 1.0;
        curtainActive = true;
        section2Opacity = 1.0;
        section2PointerEvents = 'none';
        section2ZIndex = '20';
        catContainerOpacity = '0';
        catContainerVisibility = 'hidden';
      } else if (progress >= 0.80 && progress < 1.0) {
        const t_curtain = (progress - 0.80) / 0.20;
        const easeT = t_curtain * t_curtain * (3 - 2 * t_curtain);
        scaleVal = 1.0 - easeT;
        curtainOpacity = 1.0;
        curtainActive = true;
        section2Opacity = 1.0;
        section2PointerEvents = 'auto';
        section2ZIndex = '20';
        catContainerOpacity = '0';
        catContainerVisibility = 'hidden';
      } else {
        scaleVal = 0.0;
        curtainOpacity = 0.0;
        curtainActive = false;
        section2Opacity = 1.0;
        section2PointerEvents = 'auto';
        section2ZIndex = '20';
        catContainerOpacity = '0';
        catContainerVisibility = 'hidden';
      }

      const catContainer = document.getElementById('cat-svg-container');
      if (catContainer) {
        catContainer.style.opacity = catContainerOpacity;
        catContainer.style.visibility = catContainerVisibility;
      }

      if (this.transitionCurtain) {
        if (curtainActive) {
          this.transitionCurtain.classList.add('active');
        } else {
          this.transitionCurtain.classList.remove('active');
        }
        this.transitionCurtain.style.opacity = curtainOpacity.toString();
        this.transitionCurtain.style.zIndex = '30';
        this.transitionCurtain.style.backgroundColor = 'var(--color-neutral-black)';
      }

      if (this.section2) {
        this.section2.style.opacity = section2Opacity.toString();
        this.section2.style.pointerEvents = section2PointerEvents;
        this.section2.style.zIndex = section2ZIndex;
      }

      // Lock body overflow when fully at /work so internal section-2 scroll works.
      // Unlocking happens when user scrolls up from top of section-2 (see bindEvents).
      if (progress >= 1.0) {
        document.body.style.overflow = 'hidden';
      } else if (progress < 0.95) {
        // Only unlock during the transition (not at the boundary where
        // the wheel listener handles it).
        document.body.style.overflow = '';
      }

      // Progress bar: fill tracks the yawn phase (0 → 0.45 → 100%)
      // Visible from progress > 0 and fades out as work page appears.
      if (this.progressBar) {
        const yawnFill = Math.min(1.0, progress / 0.45) * 100;
        this.progressBar.style.width = yawnFill + '%';
      }
      if (this.progressWrapper) {
        // Show once scrolling starts, hide when work page is fully revealed
        if (progress > 0.02 && progress < 0.85) {
          this.progressWrapper.classList.add('visible');
        } else {
          this.progressWrapper.classList.remove('visible');
        }
      }

      // Magnetic scroll snap: If scroll pauses inside the transition range (0.35 <= progress < 0.98),
      // auto-complete the transition after 60ms to work page (or back to hero if < 0.45).
      if (!this.isSnapping && progress > 0.35 && progress < 0.98) {
        if (this.snapTimeout) clearTimeout(this.snapTimeout);
        this.snapTimeout = setTimeout(() => {
          this.isSnapping = true;
          const targetY = progress >= 0.45 ? (this.scrollTrackTop + totalScrollable) : 0;
          
          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });

          setTimeout(() => {
            this.isSnapping = false;
          }, 450);
        }, 60);
      }

      let currentCenterX = this.viewportWidth / 2;
      let currentCenterY = this.viewportHeight / 2;

      if (this.transitionCurtain) {
        const scaleRounded = scaleVal.toFixed(4);
        this.transitionCurtain.style.transform = `translate(${currentCenterX}px, ${currentCenterY}px) translate(-50%, -50%) scale(${scaleRounded})`;
      }

      // Sync address bar route dynamically
      if (progress >= 0.80) {
        if (window.location.pathname !== '/work') {
          window.history.pushState({ section: 'work' }, '', '/work');
        }
      } else {
        if (window.location.pathname !== '/') {
          window.history.pushState({ section: 'home' }, '', '/');
        }
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
