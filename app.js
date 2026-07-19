// app.js - Scroll-driven Programmatic SVG Controller with Viewport-Aware Scaling

document.addEventListener('DOMContentLoaded', () => {
  const scrollTrack = document.getElementById('scroll-track');
  const catG = document.getElementById('cat-g-1');
  
  // Cat Eye Selectors (black pupils)
  const eyeLeft = document.getElementById('cat-eye-left');
  const eyeRight = document.getElementById('cat-eye-right');
  
  // Cat Mouth/Teeth/Tongue Selectors
  const mouth = document.getElementById('cat-mouth');
  const tongue = document.getElementById('cat-tongue');
  const toothLeft = document.getElementById('cat-tooth-left');
  const toothRight = document.getElementById('cat-tooth-right');
  
  // Cat Snout/Nose Detail Lines
  const detail1 = document.getElementById('cat-mouth-detail-1');
  const detail2 = document.getElementById('cat-mouth-detail-2');
  
  const transitionCurtain = document.getElementById('transition-curtain');
  const section2 = document.getElementById('section-2');
  const heroContentWrapper = document.querySelector('.hero-content-wrapper');

  // Create a clean debug overlay in the top-left of the viewport for visual diagnostic
  const debugOverlay = document.createElement('div');
  debugOverlay.id = 'transition-debug-overlay';
  Object.assign(debugOverlay.style, {
    position: 'fixed',
    top: '10px',
    left: '10px',
    padding: '8px 12px',
    background: 'rgba(0, 0, 0, 0.85)',
    color: '#00FF00',
    fontFamily: 'monospace',
    fontSize: '11px',
    borderRadius: '4px',
    zIndex: '1000',
    pointerEvents: 'none',
    lineHeight: '1.4',
    boxShadow: '0 2px 10px rgba(0,0,0,0.5)'
  });
  document.body.appendChild(debugOverlay);

  // Cached layout variables to prevent layout thrashing (reflows) on scroll
  let viewportHeight = window.innerHeight;
  let viewportWidth = window.innerWidth;
  let scrollTrackHeight = scrollTrack.offsetHeight;
  let scrollTrackTop = scrollTrack.offsetTop;

  const updateCachedLayout = () => {
    viewportHeight = window.innerHeight;
    viewportWidth = window.innerWidth;
    scrollTrackHeight = scrollTrack.offsetHeight;
    scrollTrackTop = scrollTrack.offsetTop;
  };

  const updateAnimationState = (currentScrollY) => {
    // Calculate progress: 0.0 at start, 1.0 at the end of the scroll track
    const rectTop = scrollTrackTop - currentScrollY;
    const totalScrollable = scrollTrackHeight - viewportHeight;
    let progress = -rectTop / totalScrollable;
    progress = Math.max(0, Math.min(1, progress));
    
    // SVG Coordinate Constants (from 1_5.svg Cat Face)
    const mx_start = 1316.9; // Cat mouth center X
    const my_start = 488.7; // Cat mouth center Y
    const nx_start = 1316.9; // Cat nose center X (same vertical alignment)
    const ny_start = 475.0;  // Cat nose center Y (slightly above mouth)
    const mx_end = 960;     // Screen center X
    const my_end = 540;     // Screen center Y
    
    const eyeLeftCX = 1285.1;
    const eyeLeftCY = 459.4;
    const eyeRightCX = 1345.5;
    const eyeRightCY = 457.0;

    // Calculate viewport dimensions in SVG viewbox space (1920x1080 preserveAspectRatio xMidYMid slice)
    const svgScale = Math.max(viewportWidth / 1920, viewportHeight / 1080);
    const svgWidth = viewportWidth / svgScale;
    const svgHeight = viewportHeight / svgScale;
    const viewportDiagonalPx = Math.sqrt(viewportWidth * viewportWidth + viewportHeight * viewportHeight);
    
    // SVG offsets relative to screen
    const offsetX = (svgWidth - 1920) / 2;
    const offsetY = (svgHeight - 1080) / 2;
    
    // Target center is now simply the center of the viewport
    
    // Max scale factor at progress 0.45 (when initial zoom freezes)
    const s_max = 1.8;
    
    // Giant scale factor required to zoom *into* the mouth until it engulfs the entire screen.
    const s_giant = Math.max(svgWidth / 10.0, svgHeight / 8.0) * 2.0;

    // ----------------------------------------------------
    // GLOBAL STATE CALCULATIONS
    // ----------------------------------------------------

    // 1. Group Zoom and Translation
    let s = 1.0;
    let tx = 0;
    let ty = 0;

    if (progress < 0.45) {
      // Phase 1a: Initial Zoom & Center on Nose (0.0 to 0.45)
      const t_zoom = progress / 0.45;
      s = 1.0 + (s_max - 1.0) * t_zoom;
      
      // Interpolate target from nose start to screen center
      const nx_target = nx_start + (mx_end - nx_start) * t_zoom;
      const ny_target = ny_start + (my_end - ny_start) * t_zoom;
      tx = nx_target - s * nx_start;
      ty = ny_target - s * ny_start;
    } 
    else if (progress >= 0.45 && progress < 0.75) {
      // Phase 1b: Cinematic Zoom INTO the mouth (0.45 to 0.75)
      const t_giant = (progress - 0.45) / 0.30;
      const easeT = t_giant * t_giant * (3 - 2 * t_giant);
      s = s_max + (s_giant - s_max) * easeT;
      
      // Interpolate the camera focus point from nose center to mouth center
      const cx = nx_start + (mx_start - nx_start) * easeT;
      const cy = ny_start + (my_start - ny_start) * easeT;
      tx = mx_end - s * cx;
      ty = my_end - s * cy;
    } 
    else {
      s = s_giant;
      tx = mx_end - s * mx_start;
      ty = my_end - s * my_start;
    }

    // 2. Eyes Squint (Linear to 0.3 at progress 0.45, then stays fixed)
    const eyeScale = progress < 0.45 ? 1.0 - 0.7 * (progress / 0.45) : 0.3;

    // 3. Mouth Expansion (Scales naturally to 2.0x, 3.0x at progress 0.45, then stays locked)
    const t_mouth = Math.min(1.0, progress / 0.45);
    const mouthScaleX = 1.0 + 1.0 * t_mouth;
    const mouthScaleY = 1.0 + 2.0 * t_mouth;

    // 4. Opacities (Teeth, Tongue, Snout are kept solid during Phase 1a, then fade out during early zoom)
    let teethOpacity = 1.0;
    let tongueOpacity = 1.0;
    let noseOpacity = 1.0;

    if (progress >= 0.45) {
      const fadeProgress = Math.min(1.0, (progress - 0.45) / 0.15);
      teethOpacity = 1.0 - fadeProgress;
      tongueOpacity = 1.0 - fadeProgress;
      noseOpacity = 1.0 - fadeProgress;
    }

    // ----------------------------------------------------
    // DOM AND SVG ATTRIBUTE BINDINGS
    // ----------------------------------------------------

    // Apply root cat group zoom & translate
    if (catG) catG.setAttribute('transform', `translate(${tx}, ${ty}) scale(${s})`);

    // Apply eye squint transforms
    const leftEyeTransform = `translate(${eyeLeftCX}, ${eyeLeftCY}) scale(1, ${eyeScale}) translate(${-eyeLeftCX}, ${-eyeLeftCY})`;
    const rightEyeTransform = `translate(${eyeRightCX}, ${eyeRightCY}) scale(1, ${eyeScale}) translate(${-eyeRightCX}, ${-eyeRightCY})`;
    if (eyeLeft) eyeLeft.setAttribute('transform', leftEyeTransform);
    if (eyeRight) eyeRight.setAttribute('transform', rightEyeTransform);

    // Apply mouth opening transforms
    const mouthTransform = `translate(${mx_start}, ${my_start}) scale(${mouthScaleX}, ${mouthScaleY}) translate(${-mx_start}, -${my_start})`;
    if (mouth) {
      mouth.setAttribute('transform', mouthTransform);
      mouth.style.opacity = 1;
      mouth.setAttribute('opacity', '1');
    }

    // Apply teeth opacities & transform
    if (toothLeft) {
      toothLeft.setAttribute('transform', mouthTransform);
      toothLeft.style.opacity = teethOpacity;
      toothLeft.setAttribute('opacity', teethOpacity.toString());
    }
    if (toothRight) {
      toothRight.setAttribute('transform', mouthTransform);
      toothRight.style.opacity = teethOpacity;
      toothRight.setAttribute('opacity', teethOpacity.toString());
    }

    // Apply tongue opacity & transform
    if (tongue) {
      tongue.setAttribute('transform', mouthTransform);
      tongue.style.opacity = tongueOpacity;
      tongue.setAttribute('opacity', tongueOpacity.toString());
    }

    // Apply snout detail opacities
    if (detail1) {
      detail1.style.opacity = noseOpacity;
      detail1.setAttribute('opacity', noseOpacity.toString());
    }
    if (detail2) {
      detail2.style.opacity = noseOpacity;
      detail2.setAttribute('opacity', noseOpacity.toString());
    }

    // ----------------------------------------------------
    // LAYERS & TRANSITION STATE MANAGER (GPU SCALE TRANSFORMS)
    // ----------------------------------------------------

    // 1. Fade out Hero Content Wrapper (Section 1 Text) during initial zoom
    if (heroContentWrapper) {
      heroContentWrapper.style.opacity = Math.max(0, 1 - progress / 0.40);
    }

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
    }
    else if (progress >= 0.50 && progress < 0.75) {
      // Phase 2a: HTML Curtain Circle expands from mouth center (0.50 to 0.75)
      const t_wipe = (progress - 0.50) / 0.25;
      const easeT = t_wipe * t_wipe * (3 - 2 * t_wipe);
      scaleVal = easeT; // scales up to 1.0
      curtainOpacity = 1.0;
      curtainActive = true;
      section2Opacity = 0.0;
      section2PointerEvents = 'none';
      section2ZIndex = '20';
      catContainerOpacity = '1';
      catContainerVisibility = 'visible';
    }
    else if (progress >= 0.75 && progress < 0.80) {
      // Phase 2b: Curtain fully covers the screen (0.75 to 0.80)
      scaleVal = 1.0;
      curtainOpacity = 1.0;
      curtainActive = true;
      section2Opacity = 1.0;
      section2PointerEvents = 'none';
      section2ZIndex = '20';
      catContainerOpacity = '0';
      catContainerVisibility = 'hidden';
    }
    else if (progress >= 0.80 && progress < 1.0) {
      // Phase 2c: Curtain collapses towards target center to reveal Section 2 (0.80 to 1.0)
      const t_curtain = (progress - 0.80) / 0.20;
      const easeT = t_curtain * t_curtain * (3 - 2 * t_curtain);
      scaleVal = 1.0 - easeT; // scales down to 0.0
      curtainOpacity = 1.0;
      curtainActive = true;
      section2Opacity = 1.0;
      section2PointerEvents = 'auto';
      section2ZIndex = '20';
      catContainerOpacity = '0';
      catContainerVisibility = 'hidden';
    }
    else {
      // Fully completed transition
      scaleVal = 0.0;
      curtainOpacity = 0.0;
      curtainActive = false;
      section2Opacity = 1.0;
      section2PointerEvents = 'auto';
      section2ZIndex = '20';
      catContainerOpacity = '0';
      catContainerVisibility = 'hidden';
    }

    // Hide SVG Container completely when black overlay is fully active
    const catContainer = document.getElementById('cat-svg-container');
    if (catContainer) {
      catContainer.style.opacity = catContainerOpacity;
      catContainer.style.visibility = catContainerVisibility;
    }

    // Apply styles to transition curtain
    if (transitionCurtain) {
      if (curtainActive) {
        transitionCurtain.classList.add('active');
      } else {
        transitionCurtain.classList.remove('active');
      }
      transitionCurtain.style.opacity = curtainOpacity.toString();
      transitionCurtain.style.zIndex = '30';
      transitionCurtain.style.backgroundColor = 'var(--color-neutral-black)';
    }

    // Apply styles to section 2
    if (section2) {
      section2.style.opacity = section2Opacity.toString();
      section2.style.pointerEvents = section2PointerEvents;
      section2.style.zIndex = section2ZIndex;
    }

    // Calculate dynamically which center coordinates the HTML circle transitions around
    let currentCenterX = viewportWidth / 2;
    let currentCenterY = viewportHeight / 2;

    // Apply circular scale and position using high-performance CSS transforms
    if (transitionCurtain) {
      const scaleRounded = scaleVal.toFixed(4);
      transitionCurtain.style.transform = `translate(${currentCenterX}px, ${currentCenterY}px) translate(-50%, -50%) scale(${scaleRounded})`;
    }

    // Update debug overlay text
    debugOverlay.innerHTML = `
      <strong>DIAGNOSTICS</strong><br>
      Progress: ${progress.toFixed(4)}<br>
      Screen: ${viewportWidth}x${viewportHeight}px<br>
      Diagonal: ${Math.round(viewportDiagonalPx)}px<br>
      Curtain Scale Factor: ${scaleVal.toFixed(4)}<br>
      Curtain active: ${transitionCurtain ? transitionCurtain.classList.contains('active') : 'null'}<br>
      Sec2 opacity: ${section2 ? section2.style.opacity : 'null'}<br>
    `;
  };

  // Throttled Scroll Loop using requestAnimationFrame
  let scrollY = window.scrollY;
  let ticking = false;

  const onScroll = () => {
    scrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateAnimationState(scrollY);
        ticking = false;
      });
      ticking = true;
    }
  };

  // Scroll and Resize listeners using passive flag for peak scrolling performance
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    updateCachedLayout();
    onScroll();
  }, { passive: true });

  // Initial layout cache and render frame
  updateCachedLayout();
  onScroll();
  
  // CTA Smooth scroll helper
  const ctaBtn = document.querySelector('.cta-button');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Scroll to transition point using cached values
      const targetScroll = scrollTrackTop + (scrollTrackHeight - viewportHeight) * 0.82;
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    });
  }

  // Material Design Ripple Effect
  const createRipple = (e, button) => {
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.className = 'ripple-span';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Clear previous ripples on this button to avoid overlapping tags
    button.querySelectorAll('.ripple-span').forEach(r => r.remove());

    button.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  };

  // Attach ripple to all CTA buttons
  document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mousedown', (e) => createRipple(e, button));
  });
});
