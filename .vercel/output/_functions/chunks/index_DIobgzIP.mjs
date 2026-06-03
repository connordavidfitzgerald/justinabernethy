import { createClient } from '@sanity/client';
import { c as createComponent, $ as $$Picture, a as $$Font } from './_astro_assets_CgdWy6OF.mjs';
import 'piccolore';
import { c as createRenderInstruction, r as renderTemplate, b as renderSlot, d as renderComponent, e as renderHead, f as addAttribute, g as defineScriptVars, m as maybeRenderHead } from './entrypoint_BrHFceOG.mjs';
import 'clsx';
import { createImageUrlBuilder } from '@sanity/image-url';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const sanityClient = createClient(
            {"apiVersion":"2026-04-01","projectId":"t3fe0x9u","dataset":"production","useCdn":false}
          );

globalThis.sanityClient = sanityClient;

const headshot = new Proxy({"src":"/_astro/JAFINALHEADSHOT.BRdMMjEs.jpg","width":2059,"height":2573,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/connor/WebstormProjects/justinabernethy/src/assets/images/JAFINALHEADSHOT.jpg";
							}
							
							return target[name];
						}
					});

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Justin Abernethy",
    description = "Director and Photographer Based in Toronto.",
    preloadImages = []
  } = Astro2.props;
  const FONTS = ["--font-sans"];
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="viewport" content="width=device-width"><meta name="description"', '><meta name="author" content="Justin Abernethy"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><link rel="preconnect" href="https://cdn.sanity.io" crossorigin><link rel="dns-prefetch" href="https://cdn.sanity.io"><link rel="preconnect" href="https://stream.mux.com" crossorigin><link rel="dns-prefetch" href="https://stream.mux.com"><link rel="preconnect" href="https://image.mux.com" crossorigin><link rel="dns-prefetch" href="https://image.mux.com">', "", "<title>", "</title><script>\n        (function() {\n            const savedTheme = localStorage.getItem('theme') || 'light';\n            if (savedTheme === 'dark') {\n                document.documentElement.classList.add('dark');\n            }\n        })();\n    <\/script>", '</head> <body class="min-h-screen var(--font-sans) uppercase bg-theme"> <div class="fixed top-0 left-0 right-0 h-fit flex flex-row justify-between font-normal text-md px-padding z-10001 pt-padding pb-padding tracking-custom text-white mix-blend-difference"> <div style="overflow: hidden;"> <a id="nav-logo" href="/" class="block pl-1 pt-0.5">Justin Abernethy</a> </div> <div class="flex flex-row gap-20 justify-end pr-1 pt-0.5"> <div class="flex flex-row gap-padding text-md tracking-[-1%] justify-end"> <div style="overflow: hidden;"> <h3 id="theme-light" class="cursor-pointer opacity-muted dark:opacity-100">LIGHT</h3> </div> <div style="overflow: hidden;"> <h3 id="theme-dark" class="cursor-pointer opacity-100 dark:opacity-muted">DARK</h3> </div> </div> <div style="overflow: hidden; position: relative;"> <a id="nav-info" class="block"> <span id="nav-info-label" class="cursor-pointer" style="display: block;">Information</span> </a> <span id="nav-info-close" class="cursor-pointer" style="display: block; position: absolute; top: 0; right: 0; white-space: nowrap; visibility: hidden;">Close</span> <span id="nav-info-scroll-top" class="cursor-pointer" style="display: block; position: absolute; top: 0; right: 0; white-space: nowrap; visibility: hidden;">Back to top</span> </div> </div> </div> <!-- Info overlay: wipes down from above, z-index below nav (10001) --> <div id="info-overlay" style="position: fixed; inset: 0; z-index: 10000; pointer-events: none;" class=""> <div id="info-panel" class="bg-theme text-theme absolute inset-0" style="opacity: 0;"> <!-- Desktop layout --> <div class="hidden md:grid grid-cols-10 gap-gutter px-padding text-sm leading-[110%] h-screen! items-end" style=""> <!-- Left column: text content --> <div class="min-[1350px]:col-span-5 col-span-4 h-full flex flex-col justify-center"> <div class="flex flex-col gap-padding w-full h-fit min-[1350px]:grid min-[1350px]:grid-cols-5 min-[1350px]:gap-gutter"> <div class="min-[1350px]:col-span-3! flex flex-col gap-padding items-start"> <p class="text-nowrap">\nDirector and Photographer Based in Toronto.<br><span id="email" class="opacity-muted text-nowrap cursor-pointer">info@justinabernethy.com</span> </p> </div> <div class="min-[1350px]:pt-0 pt-10 flex flex-row gap-10 min-[1350px]:gap-padding min-[1350px]:contents"> <div style="overflow: hidden; line-height: 1;"> <a id="info-reveal-instagram" class="block cursor-pointer hover:opacity-muted min-[1350px]:col-span-1 min-[1350px]:flex min-[1350px]:justify-end" style="display: block;" href="https://www.instagram.com/nethyj/">Instagram</a> </div> <div style="overflow: hidden; line-height: 1;"> <a id="info-reveal-vimeo" class="block cursor-pointer hover:opacity-muted min-[1350px]:col-span-1 min-[1350px]:flex min-[1350px]:justify-end min-[1350px]:pr-4" style="display: block;" href="https://vimeo.com/user96868841">Vimeo</a> </div> </div> </div> </div> <!-- Right column: headshot --> <div class="min-[1350px]:col-span-5 col-span-6 h-full flex flex-col justify-end items-end overflow-hidden pr-padding pt-[2.1rem] mb-padding max-h-screen"> <div class="h-full max-w-full aspect-5/7 overflow-hidden flex flex-col justify-end pb-padding max-h-screen!" style="max-height: calc(100%);"> ', ' </div> </div> </div> <!-- Mobile layout: exact same structure as the slider with project 00 --> <div class="md:hidden h-full p-padding overflow-hidden"> <!-- matches #mobile-slider: h-full relative, acts as positioning context --> <div class="h-full w-full relative"> <!-- matches .slider-slide: h-full flex items-center px-10 --> <div class="h-full flex items-center px-10"> ', ` </div> <!-- matches #center-info: absolute top-1/2 left-0 right-0.
                             No hardcoded pointer-events here: links inherit the
                             #info-overlay container's state (none when closed,
                             auto when open) so they only respond while open. --> <div class="absolute top-1/2 left-0 right-0 flex flex-row justify-between items-start text-white mix-blend-difference uppercase tracking-custom text-sm font-normal"> <div class="leading-[110%] w-[75%]"> <span style="display:block">Director and Photographer from Toronto.</span> <a href="mailto:info@justinabernethy.com" style="display:block;opacity:0.5">info@justinabernethy.com</a> <span style="display:flex;gap:2.5rem;padding-top:4rem;"> <a href="https://www.instagram.com/nethyj/">Instagram</a> <a href="https://vimeo.com/user96868841">Vimeo</a> </span> </div> <span class="leading-[110%]">000</span> </div> </div> </div> </div> </div> `, " ", " </body> </html>"])), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), preloadImages.map((url) => renderTemplate`<link rel="preload" as="image"${addAttribute(url, "href")}>`), FONTS.map((font) => renderTemplate`${renderComponent($$result, "Font", $$Font, { "cssVariable": font, "preload": true })}`), title, renderHead(), renderComponent($$result, "Picture", $$Picture, { "src": headshot, "alt": "Justin Abernethy headshot", "class": "w-full aspect-5/7 max-h-screen object-cover" }), renderComponent($$result, "Picture", $$Picture, { "src": headshot, "alt": "Justin Abernethy headshot", "class": "w-full object-cover block", "style": "aspect-ratio: 5/7;" }), renderSlot($$result, $$slots["default"]), renderScript($$result, "/Users/connor/WebstormProjects/justinabernethy/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/connor/WebstormProjects/justinabernethy/src/layouts/Layout.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Preloader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Preloader;
  const { thumbnails } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="preloader" class="fixed inset-0 bg-theme text-theme" style="z-index: 99999;"> <!-- Image container: centered; clip-path animates to close it on exit --> <div id="preloader-img-container" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 104px; height: 130px; z-index: 2;"> <img id="preloader-img" src="" alt="" class="w-full h-full object-cover" style="visibility: hidden;"> </div> <!-- Name: SplitText splits into words; each word gets an overflow:hidden wrapper for mask reveal --> <p id="preloader-name" class="font-normal text-md tracking-custom uppercase " style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); white-space: nowrap; line-height: 1; visibility: hidden; z-index: 1;">Justin Abernethy</p> </div> <script>(function(){', "\n(function () {\n    'use strict';\n\n    var isMobile = !matchMedia('(min-width: 768px)').matches;\n\n    // Skip preloader for direct project links so the target opens immediately\n    if (location.hash.length > 1) {\n        var el = document.getElementById('preloader');\n        if (el) el.remove();\n        return;\n    }\n\n    // Only run once per session — skip on refresh or back-navigation\n    if (sessionStorage.getItem('preloader-shown')) {\n        var el = document.getElementById('preloader');\n        if (el) el.remove();\n        return;\n    }\n    sessionStorage.setItem('preloader-shown', '1');\n\n    // Signal to gallery init() that the preloader is handling the reveal (desktop only)\n    if (!isMobile) {\n        window.__PRELOADER_ACTIVE__ = true;\n    }\n\n    // ─── New-preloader timing constants ──────────────────────────────────────\n\n    var STAGE1_DURATION   = 1750;  // ms — total span of image reveal stagger\n    var STAGE1_DECAY      = 0.9;   // geometric stagger decay (< 1 = big gaps first)\n    var COVER_ANIM_S      = 1.2;   // s — each cover pull-up animation\n    var COVER_EASE        = 'power3.inOut';\n\n    // Navbar starts this many ms after stage 1 kicks off (overlapping)\n    var STAGE2_OFFSET_MS  = 1200;   // ms into stage 1 when navbar begins\n    var STAGE2_STAGGER_S  = 0.12;  // s between each navbar item\n    var STAGE2_ANIM_S     = 0.5;   // s — each navbar item reveal\n    var STAGE2_EASE       = 'power3.out';\n\n    // Names start after navbar finishes\n    var STAGE3_GAP_MS     = 200;    // ms between end of navbar and start of names\n    var STAGE3_STAGGER_S  = 0.12;  // s between each name reveal\n    var STAGE3_ANIM_S     = 0.45;  // s — each name reveal\n    var STAGE3_EASE       = 'power3.out';\n\n    // Navbar item ids in left-to-right order\n    var NAV_IDS = ['nav-logo', 'theme-light', 'theme-dark', 'nav-info'];\n\n    // ─── Gate: both old animation AND gallery layout must finish first ────────\n\n    var galleryLayoutReady = false;\n    var oldAnimDone        = false;\n    var capturedItems      = [];\n\n    function maybeStartNewPreloader() {\n        if (!galleryLayoutReady || !oldAnimDone) return;\n\n        var preloader = document.getElementById('preloader');\n        if (preloader) preloader.remove();\n\n        // Remove wrapper covers instantly — they only exist to fill the dead zone\n        // above each gallery-row during the old preloader's opacity fade.\n        document.querySelectorAll('.gallery-row-wrapper').forEach(function (w) {\n            if (w.__wrapperCover) { w.__wrapperCover.remove(); delete w.__wrapperCover; }\n        });\n\n        var stage2TotalMs = (NAV_IDS.length - 1) * STAGE2_STAGGER_S * 1000 + STAGE2_ANIM_S * 1000;\n        var stage3StartMs = STAGE2_OFFSET_MS + stage2TotalMs + STAGE3_GAP_MS;\n\n        runStage1(capturedItems);\n        setTimeout(runStage2, STAGE2_OFFSET_MS);\n        setTimeout(function () { runStage3(capturedItems); }, stage3StartMs);\n    }\n\n    // ─── Helpers ─────────────────────────────────────────────────────────────\n\n    function computeRevealTimes(n, totalMs, decay) {\n        if (n <= 0) return [];\n        if (n === 1) return [0];\n        var S0 = totalMs * (1 - decay) / (1 - Math.pow(decay, n));\n        var times = [];\n        var t = 0;\n        for (var i = 0; i < n; i++) {\n            times.push(t);\n            t += S0 * Math.pow(decay, i);\n        }\n        return times;\n    }\n\n    // ─── Old preloader animation ──────────────────────────────────────────────\n\n    var OLD_ANIM_DURATION = 4000;\n\n    function expoInOut(t) {\n        if (t <= 0) return 0;\n        if (t >= 1) return 1;\n        return t < 0.5\n            ? Math.pow(2, 20 * t - 10) / 2\n            : (2 - Math.pow(2, -20 * t + 10)) / 2;\n    }\n\n    function runOldExitAnimation() {\n        var gsap      = window.gsap;\n        var SplitText = window.SplitText;\n        if (!gsap || !SplitText) {\n            requestAnimationFrame(runOldExitAnimation);\n            return;\n        }\n\n        var nameEl      = document.getElementById('preloader-name');\n        nameEl.style.visibility = 'visible';\n        var containerEl = document.getElementById('preloader-img-container');\n\n        var preloader   = document.getElementById('preloader');\n\n        var COVER_DUR = 0.45;\n        var PAUSE     = 0.12;\n        var STAGGER   = 0.07;\n        var IN_DUR    = 0.5;\n        var IN_EASE   = 'power3.out';\n        var HOLD      = 0.6;\n        var OUT_DUR   = 0.5;\n        var OUT_EASE  = 'power3.in';\n\n        // Split name into words; wrap each in overflow:hidden for mask reveal\n        var split = new SplitText(nameEl, { type: 'words' });\n        split.words.forEach(function (word) {\n            var wrapper = document.createElement('span');\n            wrapper.style.cssText = 'display:inline-block;overflow:hidden;vertical-align:bottom;line-height:1;';\n            word.parentNode.insertBefore(wrapper, word);\n            wrapper.appendChild(word);\n        });\n\n        // Words start below their mask — pure yPercent, no opacity\n        gsap.set(split.words, { yPercent: 0 });\n\n        var tl = gsap.timeline({\n            onComplete: function () {\n                preloader.style.transition = 'opacity 0.4s ease-out';\n                preloader.style.opacity    = '0';\n                preloader.addEventListener('transitionend', function () {\n                    if (isMobile) {\n                        preloader.remove();\n                    } else {\n                        oldAnimDone = true;\n                        maybeStartNewPreloader();\n                    }\n                }, { once: true });\n            }\n        });\n\n\n\n        // Close image container via clip-path — no opacity change on the image\n        tl.fromTo(containerEl,\n            { clipPath: 'inset(0% 0% 0% 0%)' },\n            { clipPath: 'inset(100% 0% 0% 0%)', duration: COVER_DUR, ease: 'power2.in' },\n            0\n        );\n\n        // Words slide up from below mask, staggered — no opacity\n        var inAt = COVER_DUR + PAUSE;\n        tl.to(split.words, { yPercent: 0, delay: 0.2, duration: IN_DUR, ease: IN_EASE, stagger: STAGGER }, inAt);\n\n        // Words slide back down below mask, staggered — no opacity\n\n        tl.to(split.words, { display: 'none', duration: 0, });\n    }\n\n    function runOldAnimation() {\n        var imgEl      = document.getElementById('preloader-img');\n\n        if (!imgEl) {\n            if (isMobile) { var el = document.getElementById('preloader'); if (el) el.remove(); }\n            else { oldAnimDone = true; maybeStartNewPreloader(); }\n            return;\n        }\n\n\n\n        var total = thumbnails.length;\n        var start = performance.now();\n\n        function frame(now) {\n            var elapsed  = Math.min(now - start, OLD_ANIM_DURATION);\n            var progress = expoInOut(elapsed / OLD_ANIM_DURATION);\n\n\n            imgEl.src = thumbnails[Math.min(Math.floor(progress * total), total - 1)];\n            imgEl.style.visibility = 'visible';\n\n            if (elapsed < OLD_ANIM_DURATION) {\n                requestAnimationFrame(frame);\n            } else {\n                runOldExitAnimation();\n            }\n        }\n\n        requestAnimationFrame(frame);\n    }\n\n    // Preload all thumbnails then start old animation.\n    // If no thumbnails, skip straight to the gate.\n    if (thumbnails.length === 0) {\n        if (isMobile) {\n            var el = document.getElementById('preloader');\n            if (el) el.remove();\n        } else {\n            oldAnimDone = true;\n        }\n    } else {\n        var loadedCount = 0;\n        thumbnails.forEach(function (url) {\n            var img = new window.Image();\n            img.onload = img.onerror = function () {\n                loadedCount++;\n                if (loadedCount === thumbnails.length) runOldAnimation();\n            };\n            img.src = url;\n        });\n    }\n\n    // ─── Stage 1: image reveals (gallery covers pull up) ─────────────────────\n\n    function runStage1(allItems) {\n        var groupA = [], groupB = [];\n        for (var i = 0; i < allItems.length; i++) {\n            var gi = parseInt(allItems[i].dataset.globalIndex || '999', 10);\n            (gi < 10 ? groupA : groupB).push(allItems[i]);\n        }\n        groupA.sort(function (a, b) { return parseInt(a.dataset.globalIndex || '0', 10) - parseInt(b.dataset.globalIndex || '0', 10); });\n        groupB.sort(function (a, b) { return parseInt(a.dataset.globalIndex || '0', 10) - parseInt(b.dataset.globalIndex || '0', 10); });\n        var seq = groupA.concat(groupB);\n        var n   = seq.length;\n        if (n === 0) return;\n\n        var times = computeRevealTimes(n, STAGE1_DURATION, STAGE1_DECAY);\n        var gsap  = window.gsap;\n\n        for (var i = 0; i < n; i++) {\n            (function (item, delay) {\n                setTimeout(function () {\n                    var cover = item.__preloaderCover;\n                    if (!cover) return;\n                    gsap.fromTo(cover,\n                        { clipPath: 'inset(-4px -4px -4px -4px)' },\n                        {\n                            clipPath: 'inset(110% -4px -4px -4px)',\n                            duration: COVER_ANIM_S,\n                            ease: COVER_EASE,\n                            delay: 0.1,\n                            onComplete: function () {\n                                cover.remove();\n                                delete item.__preloaderCover;\n                            }\n                        }\n                    );\n                }, delay);\n            })(seq[i], times[i]);\n        }\n    }\n\n    // ─── Stage 2: navbar mask reveal (left → right, one by one) ──────────────\n\n    function runStage2() {\n        var gsap = window.gsap;\n        var tl   = gsap.timeline();\n        for (var i = 0; i < NAV_IDS.length; i++) {\n            var el = document.getElementById(NAV_IDS[i]);\n            if (el) tl.to(el, { yPercent: 0, duration: STAGE2_ANIM_S, ease: STAGE2_EASE }, i * STAGE2_STAGGER_S);\n        }\n    }\n\n    // ─── Stage 3: project name mask reveals (top → bottom, one by one) ────────\n\n    function runStage3(allItems) {\n        var sorted = allItems.slice().sort(function (a, b) {\n            return parseInt(a.dataset.globalIndex || '0', 10) - parseInt(b.dataset.globalIndex || '0', 10);\n        });\n\n        var gsap     = window.gsap;\n        var nameEls  = [];\n        var indexEls = [];\n        for (var i = 0; i < sorted.length; i++) {\n            var nameEl  = sorted[i].querySelector('.project-title h3');\n            var indexEl = sorted[i].querySelector('[data-index-reveal]');\n            if (nameEl)  nameEls.push(nameEl);\n            if (indexEl) indexEls.push(indexEl);\n        }\n\n        gsap.to(nameEls,  { yPercent: 0, duration: STAGE3_ANIM_S, ease: STAGE3_EASE, stagger: STAGE3_STAGGER_S });\n        gsap.to(indexEls, { yPercent: 0, duration: STAGE3_ANIM_S, ease: STAGE3_EASE, stagger: STAGE3_STAGGER_S });\n\n        var totalMs = (sorted.length - 1) * STAGE3_STAGGER_S * 1000 + STAGE3_ANIM_S * 1000;\n        setTimeout(function () {\n            var footer = document.getElementById('desktop-footer');\n            if (footer) {\n                footer.style.visibility = 'visible';\n                footer.style.transition = 'opacity 0.4s ease';\n                footer.style.opacity    = '1';\n            }\n            window.__PRELOADER_ACTIVE__ = false;\n            document.body.style.overflow = '';\n        }, totalMs);\n    }\n\n    // ─── Gallery-layout-ready: set up covers + hide names/nav ────────────────\n\n    if (!isMobile) window.addEventListener('gallery-layout-ready', function () {\n        capturedItems = Array.from(document.querySelectorAll('.gallery-item'));\n\n        document.body.style.overflow = 'hidden';\n\n        var seenWrappers = typeof Set !== 'undefined' ? new Set() : null;\n        for (var i = 0; i < capturedItems.length; i++) {\n            var cover = document.createElement('div');\n            cover.style.cssText =\n                'position:absolute;inset:-4px;z-index:15;pointer-events:none;' +\n                'background:var(--bg-primary);will-change:clip-path;';\n            capturedItems[i].appendChild(cover);\n            capturedItems[i].__preloaderCover = cover;\n\n            // Cover the dead zone above each gallery-row inside its wrapper.\n            // This space has no item cover and bleeds through the fading preloader overlay.\n            var rowWrapper = capturedItems[i].closest('.gallery-row-wrapper');\n            if (rowWrapper && !(seenWrappers ? seenWrappers.has(rowWrapper) : rowWrapper.__wrapperCover)) {\n                if (seenWrappers) seenWrappers.add(rowWrapper);\n                var wc = document.createElement('div');\n                wc.style.cssText = 'position:absolute;inset:0;z-index:14;pointer-events:none;background:var(--bg-primary);';\n                rowWrapper.appendChild(wc);\n                rowWrapper.__wrapperCover = wc;\n            }\n        }\n\n        var gsap = window.gsap;\n\n        for (var i = 0; i < capturedItems.length; i++) {\n            var nameEl  = capturedItems[i].querySelector('.project-title h3');\n            var indexEl = capturedItems[i].querySelector('[data-index-reveal]');\n            if (nameEl)  gsap.set(nameEl,  { yPercent: -110 });\n            if (indexEl) gsap.set(indexEl, { yPercent: -110 });\n        }\n        for (var i = 0; i < NAV_IDS.length; i++) {\n            var el = document.getElementById(NAV_IDS[i]);\n            if (el) gsap.set(el, { yPercent: -110 });\n        }\n\n        galleryLayoutReady = true;\n        maybeStartNewPreloader();\n    }, { once: true });\n\n    // Safety valve\n    setTimeout(function () {\n        var preloader = document.getElementById('preloader');\n        if (preloader) preloader.remove();\n        if (!isMobile) window.__PRELOADER_ACTIVE__ = false;\n        document.body.style.overflow = '';\n    }, 15000);\n\n})();\n})();<\/script>"])), maybeRenderHead(), defineScriptVars({ thumbnails }));
}, "/Users/connor/WebstormProjects/justinabernethy/src/components/Preloader.astro", void 0);

const toKebabCase = (string) => string.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`).replaceAll("_", "-");
const FLATTEN_PROPS = /* @__PURE__ */ new Set(["metadata", "tokens", "castCustomData"]);
const themes = /* #__PURE__ */ Object.assign({"./themes/classic/index.ts": () => import('./index_CLJaLCTH.mjs'),"./themes/gerwig/index.ts": () => import('./index_DiKJ5xv7.mjs'),"./themes/microvideo/index.ts": () => import('./index_zNbEE32o.mjs'),"./themes/minimal/index.ts": () => import('./index_DZ93oIom.mjs'),"./themes/news/index.ts": () => import('./index_CtP-rzj9.mjs')});
function stringifyValue(value) {
  if (Array.isArray(value)) {
    return value.join(" ");
  }
  if (typeof value === "object" && value !== null) {
    return JSON.stringify(value);
  }
  if (value === true) {
    return "";
  }
  return String(value);
}
async function getThemeObject(theme) {
  if (!theme) {
    return {};
  }
  if (typeof theme !== "string") {
    return theme;
  }
  const themeModule = themes[`./themes/${theme}/index.ts`];
  if (!themeModule) {
    return {
      name: theme
    };
  }
  return (await themeModule()).default;
}
const toNativeAttributes = (props = {}) => {
  return Object.entries(props).reduce((transformedProps, [propName, propValue]) => {
    if (typeof propValue === "undefined" || propValue === null || propValue === false) {
      return transformedProps;
    }
    if (propName === "style") {
      transformedProps.style = propValue;
      return transformedProps;
    }
    const attrName = toKebabCase(propName);
    if (FLATTEN_PROPS.has(propName)) {
      if (typeof propValue === "object" && !Array.isArray(propValue)) {
        Object.entries(propValue).forEach(([key, value]) => {
          const kebabKey = toKebabCase(`${attrName}-${key}`);
          if (typeof propValue !== "undefined" && propValue !== null && !props.hasOwnProperty(kebabKey)) {
            transformedProps[kebabKey] = stringifyValue(value);
          }
        });
      }
    } else {
      const attrValue = stringifyValue(propValue);
      transformedProps[attrName] = attrValue;
    }
    return transformedProps;
  }, {});
};

const $$MuxPlayer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MuxPlayer;
  const { theme, ...props } = Astro2.props;
  const { component: Theme, name: themeName } = await getThemeObject(theme);
  return renderTemplate`${renderComponent($$result, "mux-player", "mux-player", { ...toNativeAttributes(props), "theme": themeName }, { "default": () => renderTemplate`${renderSlot($$result, $$slots["default"])}` })} ${Theme && renderTemplate`${renderComponent($$result, "Theme", Theme, {})}`} ${renderScript($$result, "/Users/connor/WebstormProjects/justinabernethy/node_modules/@mux/mux-player-astro/src/MuxPlayer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/connor/WebstormProjects/justinabernethy/node_modules/@mux/mux-player-astro/src/MuxPlayer.astro", void 0);

async function loadQuery({
  query,
  params
}) {
  const { result } = await sanityClient.fetch(query, params ?? {}, {
    filterResponse: false
  });
  return {
    data: result
  };
}

const imageBuilder = createImageUrlBuilder(sanityClient);
function urlForImage(source) {
  return imageBuilder.image(source);
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const PROJECTS_QUERY = `*[_type == "project"] | order(index desc) {
 _id,
  name,
  type,
  index,
  thumbnail {
      ...,
      asset-> {
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      }
    },
  thumbnailVideo {
      asset-> {
        "playbackId": coalesce(playbackId, data.playback_ids[0].id)
      }
    },
  imageGallery[] {
      _key,
      _type,
      asset-> {
        _id,
        url,
        "playbackId": coalesce(playbackId, data.playback_ids[0].id),
        metadata {
          dimensions,
          lqip
        }
      }
    },
}`;
  const { data: projects } = await loadQuery({ query: PROJECTS_QUERY });
  const ROW_SIZE = 5;
  function getAspect(project) {
    return project.posterVideoId ? 9 / 16 : 7 / 5;
  }
  function nameToSlug(name) {
    return name.toLowerCase().normalize("NFD").replace(/[^\x00-\x7F]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }
  const projectsWithUrls = projects.map((project) => {
    const thumbnailUrl = project.thumbnail?.asset ? urlForImage(project.thumbnail).width(900).quality(80).auto("format").url() : null;
    const thumbnailVideoId = project.thumbnailVideo?.asset?.playbackId ?? null;
    const galleryItems = (project.imageGallery ?? []).map(
      (item) => item?._type === "mux.video" ? item.asset?.playbackId ? { type: "video", playbackId: item.asset.playbackId, _key: item._key } : null : item?.asset ? { type: "image", url: urlForImage(item).width(1400).quality(80).auto("format").url(), _key: item._key } : null
    ).filter(Boolean);
    const firstGalleryVideo = galleryItems.find((g) => g.type === "video");
    const firstGalleryImage = galleryItems.find((g) => g.type === "image");
    let posterVideoId = null;
    let posterUrl = null;
    if (thumbnailVideoId) posterVideoId = thumbnailVideoId;
    else if (thumbnailUrl) posterUrl = thumbnailUrl;
    else if (firstGalleryVideo) posterVideoId = firstGalleryVideo.playbackId;
    else if (firstGalleryImage) posterUrl = firstGalleryImage.url;
    return {
      ...project,
      slug: project.name ? nameToSlug(project.name) : project._id,
      thumbnailUrl,
      thumbnailVideoId,
      galleryItems,
      posterVideoId,
      posterUrl
    };
  });
  const rows = Array.from(
    { length: Math.ceil(projectsWithUrls.length / ROW_SIZE) },
    (_, i) => projectsWithUrls.slice(i * ROW_SIZE, i * ROW_SIZE + ROW_SIZE)
  );
  const preloaderThumbnails = projectsWithUrls.slice().sort((a, b) => a.index - b.index).map((p) => p.thumbnail?.asset ? urlForImage(p.thumbnail).width(300).quality(60).auto("format").url() : null).filter(Boolean);
  const firstRowPreloads = projectsWithUrls.slice(0, ROW_SIZE).filter((p) => p.thumbnailUrl).map((p) => p.thumbnailUrl);
  const preloadImages = firstRowPreloads;
  const infoSlide = {
    _id: "__info__",
    name: null,
    type: null,
    index: 0,
    thumbnailUrl: headshot.src,
    thumbnailVideoId: null,
    posterUrl: headshot.src,
    posterVideoId: null,
    galleryItems: []
  };
  const allSlides = [...projectsWithUrls, infoSlide];
  const extendedProjects = allSlides.length > 0 ? [allSlides[allSlides.length - 1], ...allSlides, allSlides[0]] : [];
  return renderTemplate(_a || (_a = __template(["", "<!-- Pass project data to client --><script>(function(){", "\n  window.__PROJECTS_DATA__   = projectsWithUrls;\n  window.__ROW_SIZE__        = ROW_SIZE;\n  window.__MOBILE_PROJECTS__ = [...projectsWithUrls, {\n    _id: '__info__',\n    name: null,\n    type: null,\n    index: 0,\n    thumbnailUrl: headshotSrc,\n    thumbnailVideoId: null,\n    posterUrl: headshotSrc,\n    posterVideoId: null,\n    galleryItems: [],\n  }];\n})();<\/script>", "<!-- ────────────────────────── Mobile slider script ────────────────────────── -->", ""])), renderComponent($$result, "Layout", $$Layout, { "title": "Justin Abernethy", "preloadImages": preloadImages, "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Preloader", $$Preloader, { "thumbnails": preloaderThumbnails, "data-astro-cid-j7pv25f6": true })}${maybeRenderHead()}<main class="hidden md:block p-padding bg-theme text-theme" data-astro-cid-j7pv25f6><section class="relative" data-astro-cid-j7pv25f6>${projects.length === 0 && renderTemplate`<p class="text-gray-400" data-astro-cid-j7pv25f6>No projects found.</p>`}<!-- Gallery Container --><div id="gallery-container" class="flex flex-col gap-0" style="visibility: hidden; opacity: 0;" data-astro-cid-j7pv25f6>${rows.map((row, rowIndex) => renderTemplate`<div class="gallery-row-wrapper relative"${addAttribute(rowIndex, "data-wrapper")} data-astro-cid-j7pv25f6><div class="gallery-row absolute inset-x-0 bottom-0 flex gap-0 items-end"${addAttribute(rowIndex, "data-row")} data-astro-cid-j7pv25f6>${row.map((project, projectIndex) => {
    const aspect = getAspect(project);
    const globalIndex = rowIndex * ROW_SIZE + projectIndex;
    return renderTemplate`<div class="gallery-item flex flex-col gap-padding min-w-0 px-padding-half cursor-pointer relative overflow-hidden" style="flex: 1 1 0%"${addAttribute(aspect, "data-aspect")}${addAttribute(rowIndex, "data-row")}${addAttribute(globalIndex, "data-global-index")}${addAttribute(project._id, "data-project-id")} data-astro-cid-j7pv25f6><div class="gallery-item-cover absolute -inset-1 bg-theme z-10 pointer-events-none" style="transform: translateY(100%)" data-astro-cid-j7pv25f6></div>${project.posterVideoId ? renderTemplate`<div class="item-media relative w-full overflow-hidden" style="aspect-ratio: 16/9"${addAttribute(`media-${project._id}`, "data-flip-id")}${addAttribute(project.posterVideoId, "data-mux-id")} data-astro-cid-j7pv25f6><img${addAttribute(`https://image.mux.com/${project.posterVideoId}/thumbnail.jpg?width=900&fit_mode=smartcrop`, "src")}${addAttribute(project.name ?? "", "alt")} class="mux-thumb absolute inset-0 w-full h-full object-cover" style="transition: opacity 0.3s;"${addAttribute(rowIndex === 0 ? "eager" : "lazy", "loading")}${addAttribute(rowIndex === 0 ? "high" : void 0, "fetchpriority")} data-astro-cid-j7pv25f6></div>` : project.posterUrl ? renderTemplate`<img${addAttribute(project.posterUrl, "src")}${addAttribute(project.name, "alt")} class="item-media w-full object-cover" style="aspect-ratio: 5/7"${addAttribute(`media-${project._id}`, "data-flip-id")}${addAttribute(rowIndex === 0 ? "eager" : "lazy", "loading")}${addAttribute(rowIndex === 0 ? "high" : void 0, "fetchpriority")} data-astro-cid-j7pv25f6>` : renderTemplate`<div class="item-media w-full bg-theme" style="aspect-ratio: 5/7"${addAttribute(`media-${project._id}`, "data-flip-id")} data-astro-cid-j7pv25f6></div>`}<div id="item-name-type" class="item-name-type flex flex-row justify-between w-full relative overflow-clip font-normal tracking-custom -mt-0 pb-padding" data-astro-cid-j7pv25f6><div class="absolute z-0 mt-0 h-full flex flex-col gap-0 project-title" data-astro-cid-j7pv25f6><div style="overflow: hidden; line-height: 1;" data-astro-cid-j7pv25f6><h3 class="text-sm leading-[100%] tracking-custom whitespace-nowrap" data-astro-cid-j7pv25f6>${project.name}</h3></div></div><div class="title-fade-overlay absolute inset-0 h-full w-full z-1 pointer-events-none opacity-100 gradient-fade" data-astro-cid-j7pv25f6></div><div class="flex flex-col gap-0 items-end grow z-2" data-astro-cid-j7pv25f6><div style="overflow: hidden; line-height: 1;" data-astro-cid-j7pv25f6><p class="text-sm leading-[100%] tracking-custom flex" data-index-reveal data-astro-cid-j7pv25f6>${project.index}</p></div></div></div></div>`;
  })}</div></div>`)}</div><!-- Project Detail Section (hidden initially, in document flow) --><div id="project-detail" class="hidden z-20" data-astro-cid-j7pv25f6><div class="w-full flex px-0.5" data-astro-cid-j7pv25f6><div class="grid grid-cols-10 gap-padding w-full" data-astro-cid-j7pv25f6><!-- Left Sidebar --><div class="col-span-2 max-[1100px]:col-span-3 flex flex-col h-full min-h-screen" data-astro-cid-j7pv25f6><div class="sticky top-2 h-screen min-h-200 w-full flex flex-col " data-astro-cid-j7pv25f6><!-- Preview container: grows into remaining space and centres itself --><div class="flex-1 flex items-end pb-padding" data-astro-cid-j7pv25f6><div class="project-preview w-full" data-astro-cid-j7pv25f6><div class="relative w-full" style="aspect-ratio: 4/5" data-astro-cid-j7pv25f6><div class="grid absolute inset-0" id="detail-preview-grid" data-astro-cid-j7pv25f6>${projectsWithUrls.map((project) => renderTemplate`<div class="preview-item opacity-0 col-start-1 row-start-1 flex items-end"${addAttribute(project._id, "data-preview-id")} data-astro-cid-j7pv25f6>${project.posterVideoId ? renderTemplate`${renderComponent($$result2, "MuxPlayer", $$MuxPlayer, { "playbackId": project.posterVideoId, "class": "w-full object-cover aspect-video", "style": { "--controls": "none" }, "muted": true, "loop": true, "disable-tracking": true, "data-astro-cid-j7pv25f6": true })}` : project.posterUrl ? renderTemplate`<img${addAttribute(project.posterUrl, "src")}${addAttribute(project.name, "alt")} class="w-full object-cover" style="aspect-ratio: 4/5" data-astro-cid-j7pv25f6>` : null}</div>`)}</div></div></div></div><!-- Project list --><div id="project-list-container" class="project-list-container" data-astro-cid-j7pv25f6><div class="project-list flex flex-col justify-end gap-0 text-sm uppercase tracking-custom leading-[115%] font-normal pb-2" data-astro-cid-j7pv25f6>${projectsWithUrls.map((project) => renderTemplate`<div class="detail-list-item flex flex-row gap-padding cursor-pointer opacity-muted"${addAttribute(project._id, "data-project-id")} data-astro-cid-j7pv25f6><p class="min-w-4.5" data-astro-cid-j7pv25f6>${String(project.index).padStart(3, "0")}</p><p data-astro-cid-j7pv25f6>${project.name}</p></div>`)}</div></div></div></div><!-- Right Content - Image Gallery --><div class="col-span-8 max-[1100px]:col-span-7 flex flex-col gap-padding" data-astro-cid-j7pv25f6><div id="detail-image-gallery" class="grid grid-cols-2 max-[1100px]:grid-cols-1 grid-flow-row gap-padding w-full" data-astro-cid-j7pv25f6><!-- Images will be populated dynamically --></div></div></div></div><!-- Scroll back hint --><div id="scroll-back-hint" class="fixed inset-0 z-30 bg-theme flex flex-col justify-center items-center text-sm uppercase tracking-custom font-normal select-none pointer-events-none h-screen" style="opacity: 0;" data-astro-cid-j7pv25f6><div class="relative" data-astro-cid-j7pv25f6><span class="opacity-(--opacity-muted)" data-astro-cid-j7pv25f6>scroll to go back to projects</span><span id="scroll-back-fill" class="absolute inset-0 overflow-hidden whitespace-nowrap" style="clip-path: inset(0 100% 0 0);" data-astro-cid-j7pv25f6>scroll to go back to projects</span></div></div></div><div id="single-view-overlay" class="fixed inset-0 z-[10000] bg-black hidden opacity-0 pointer-events-none transition-opacity duration-300" data-astro-cid-j7pv25f6><div class="h-screen w-full grid! grid-cols-20 gap-padding bg-black text-white text-sm tracking-custom uppercase relative px-padding" data-astro-cid-j7pv25f6><!-- Left Controls (initially hidden) --><div class="col-span-3 h-full w-full flex flex-row items-center justify-between pr-padding" data-astro-cid-j7pv25f6><a id="overlay-exit" class="overlay-nav opacity-muted hover:opacity-100 cursor-pointer " data-astro-cid-j7pv25f6>Exit</a><a id="overlay-prev" class="overlay-nav opacity-100 cursor-pointer hover:opacity-muted" data-astro-cid-j7pv25f6>Previous</a></div><!-- Center Media (initially hidden/scaled) --><div class="col-span-14 h-screen w-full flex flex-row justify-center items-center overflow-clip" data-astro-cid-j7pv25f6><div id="overlay-media-container" class="w-full h-full flex items-center justify-center opacity-0" data-astro-cid-j7pv25f6><!-- Media injected via JS --></div></div><!-- Right Controls (initially hidden) --><div class="col-span-3 col-start-18 h-full w-full flex flex-row items-center justify-between pl-padding" data-astro-cid-j7pv25f6><a id="overlay-next" class="overlay-nav opacity-100 cursor-pointer hover:opacity-muted" data-astro-cid-j7pv25f6>Next</a><p id="overlay-pagination" class="opacity-100 overlay-nav" data-astro-cid-j7pv25f6>1/5</p></div></div></div></section><!-- Mux custom controls — shared between single-view overlay and project detail player --><div id="overlay-mux-controls" class="px-padding py-padding flex flex-row justify-between items-center gap-4 text-white mix-blend-difference text-sm uppercase tracking-custom font-medium opacity-0 pointer-events-none transition-opacity duration-200" data-astro-cid-j7pv25f6><div class="flex flex-row gap-4 pointer-events-auto items-center" data-astro-cid-j7pv25f6><span data-mux-ctl="playpause" class="cursor-pointer hover:opacity-70" data-astro-cid-j7pv25f6>PLAY</span><span data-mux-ctl="mute" class="cursor-pointer hover:opacity-70" data-astro-cid-j7pv25f6>UNMUTE</span></div><div data-mux-ctl="timeline" class="flex-1 relative h-3 cursor-pointer pointer-events-auto select-none touch-none" data-astro-cid-j7pv25f6><div class="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-white" data-astro-cid-j7pv25f6></div><div data-mux-ctl="thumb" class="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-white" style="left: 0%" data-astro-cid-j7pv25f6></div></div><span class="inline-flex gap-1 tabular-nums" data-astro-cid-j7pv25f6><span data-mux-ctl="current" data-astro-cid-j7pv25f6>00:00</span><span data-astro-cid-j7pv25f6>/</span><span data-mux-ctl="duration" data-astro-cid-j7pv25f6>00:00</span></span><span data-mux-ctl="fullscreen" class="cursor-pointer hover:opacity-70 hidden md:inline pointer-events-auto" data-astro-cid-j7pv25f6>FULLSCREEN</span></div><div class="h-100" data-astro-cid-j7pv25f6></div><div id="desktop-footer" class="max-h-screen grid! grid-cols-10! gap-gutter text-sm leading-[110%]" style="visibility: hidden; opacity: 0;" data-astro-cid-j7pv25f6><div class="min-[1350px]:col-span-5 col-span-4 h-full flex flex-col justify-center" data-astro-cid-j7pv25f6><div class="flex flex-col gap-padding w-full h-fit min-[1350px]:grid min-[1350px]:grid-cols-5 min-[1350px]:gap-gutter" data-astro-cid-j7pv25f6><div class="min-[1350px]:col-span-3! flex flex-row items-start justify-start" data-astro-cid-j7pv25f6><p class="text-nowrap" data-astro-cid-j7pv25f6>
Director and Photographer Based in Toronto.<br data-astro-cid-j7pv25f6><a id="email" href="mailto:info@justinabernethy.com" class="opacity-muted text-nowrap cursor-pointer" data-astro-cid-j7pv25f6>info@justinabernethy.com</a></p></div><div class="min-[1350px]:pt-0 pt-10 flex flex-row gap-10 min-[1350px]:gap-padding min-[1350px]:contents " data-astro-cid-j7pv25f6><a href="https://www.instagram.com/nethyj/" id="footer-button" class="min-[1350px]:col-span-1 min-[1350px]:justify-end flex flex-row justify-start items-start hover:opacity-muted cursor-pointer" data-astro-cid-j7pv25f6>Instagram</a><a href="https://vimeo.com/user96868841" id="footer-button" class="min-[1350px]:col-span-1 min-[1350px]:justify-end min-[1350px]:pr-4  flex flex-row justify-start  items-start hover:opacity-muted cursor-pointer" data-astro-cid-j7pv25f6>Vimeo</a></div></div></div><div class="min-[1350px]:col-span-5 col-span-6 h-full flex flex-col justify-end items-end overflow-hidden pr-padding max-h-screen mb-padding" data-astro-cid-j7pv25f6><div class="h-full max-w-full aspect-5/7 overflow-hidden" style="max-height: calc(100% - (0.375rem*6));" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Picture", $$Picture, { "src": headshot, "alt": "Justin Abernethy headshot", "class": "w-full h-full object-cover", "data-astro-cid-j7pv25f6": true })}</div></div></div></main><div class="md:hidden fixed inset-0 z-50 bg-theme text-theme overflow-hidden p-padding" data-astro-cid-j7pv25f6><div id="mobile-slider" class="h-full w-full relative overflow-hidden touch-none select-none"${addAttribute(allSlides.length, "data-slide-count")} data-astro-cid-j7pv25f6><div id="slider-track" class="absolute left-0 right-0 flex flex-col" style="visibility: hidden;" data-astro-cid-j7pv25f6>${extendedProjects.map((project, i) => {
    const isCloneFirst = i === 0;
    const isCloneLast = i === extendedProjects.length - 1;
    const realIndex = isCloneFirst ? allSlides.length - 1 : isCloneLast ? 0 : i - 1;
    return renderTemplate`<div class="slider-slide w-full shrink-0 flex items-center px-10"${addAttribute(realIndex, "data-real-index")}${addAttribute(i, "data-virtual-index")} data-astro-cid-j7pv25f6>${project.posterVideoId ? renderTemplate`<div class="w-full flex items-center justify-center" style="aspect-ratio: 5/7;" data-astro-cid-j7pv25f6><img${addAttribute(`https://image.mux.com/${project.posterVideoId}/thumbnail.jpg?width=900&fit_mode=smartcrop`, "src")}${addAttribute(project.name ?? "", "alt")} class="w-full object-cover block" style="aspect-ratio: 16/9;" draggable="false" data-astro-cid-j7pv25f6></div>` : project.posterUrl ? renderTemplate`<img${addAttribute(project.posterUrl, "src")}${addAttribute(project.name ?? "", "alt")} class="w-full object-cover block" style="aspect-ratio: 5/7;" loading="eager" draggable="false" data-astro-cid-j7pv25f6>` : renderTemplate`<div class="w-full bg-gray-800 block" style="aspect-ratio: 5/7;" data-astro-cid-j7pv25f6></div>`}</div>`;
  })}</div><div id="center-info" class="absolute top-1/2 left-0 right-0 flex flex-row justify-between items-start text-white mix-blend-difference uppercase tracking-custom text-sm font-normal z-10000" data-astro-cid-j7pv25f6><div id="center-name" class="leading-[110%] w-[75%]" data-astro-cid-j7pv25f6></div><span id="center-index" class="leading-[110%]" data-astro-cid-j7pv25f6></span></div></div><!-- Mobile single-view overlay --><div id="mobile-overlay" class="fixed inset-0 z-[10000] bg-black text-white hidden opacity-0 pointer-events-none" data-astro-cid-j7pv25f6><div id="mobile-overlay-media" class="absolute inset-0 overflow-hidden opacity-0 z-1" data-astro-cid-j7pv25f6><div id="mobile-overlay-track" style="display: flex; height: 100%; will-change: transform;" data-astro-cid-j7pv25f6></div></div><button id="mobile-overlay-close" class="absolute top-12 left-2 z-100 uppercase tracking-custom text-sm font-normal opacity-100 cursor-pointer bg-transparent appearance-none border-0 outline-none p-5 -m-5" data-astro-cid-j7pv25f6>Exit</button><div id="mobile-overlay-meta-left" class="absolute bottom-padding left-2 z-30 flex flex-col items-start uppercase tracking-custom text-sm font-normal pointer-events-none leading-[110%]" data-astro-cid-j7pv25f6><span id="mobile-overlay-index" class="opacity-50" data-astro-cid-j7pv25f6></span><span id="mobile-overlay-name" data-astro-cid-j7pv25f6></span></div><div id="mobile-overlay-meta-right" class="absolute bottom-padding right-2 z-30 uppercase tracking-custom text-sm font-normal pointer-events-none leading-[110%]" data-astro-cid-j7pv25f6><span id="mobile-overlay-counter" data-astro-cid-j7pv25f6></span></div><!-- Mux custom controls (visible only on mobile-overlay videos) --><div id="mobile-overlay-mux-controls" class="absolute bottom-0 left-0 right-0 z-40 px-padding py-padding flex flex-row justify-between items-center gap-4 text-white mix-blend-difference text-sm uppercase tracking-custom font-normal opacity-0 pointer-events-auto transition-opacity duration-200" style="visibility: hidden;" data-astro-cid-j7pv25f6><div class="flex flex-row gap-4 pointer-events-auto items-center" data-astro-cid-j7pv25f6><span data-mux-ctl="playpause" class="cursor-pointer" data-astro-cid-j7pv25f6>PLAY</span><span data-mux-ctl="mute" class="cursor-pointer" data-astro-cid-j7pv25f6>UNMUTE</span></div><div data-mux-ctl="timeline" class="flex-1 relative h-3 cursor-pointer pointer-events-auto select-none touch-none" data-astro-cid-j7pv25f6><div class="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-white" data-astro-cid-j7pv25f6></div><div data-mux-ctl="thumb" class="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-white" style="left: 0%" data-astro-cid-j7pv25f6></div></div><span class="inline-flex gap-1 tabular-nums" data-astro-cid-j7pv25f6><span data-mux-ctl="current" data-astro-cid-j7pv25f6>00:00</span><span data-astro-cid-j7pv25f6>/</span><span data-mux-ctl="duration" data-astro-cid-j7pv25f6>00:00</span></span><span data-mux-ctl="fullscreen" class="cursor-pointer pointer-events-auto" data-astro-cid-j7pv25f6>FULLSCREEN</span></div></div></div>` }), defineScriptVars({ projectsWithUrls, ROW_SIZE, headshotSrc: headshot.src }), renderScript($$result, "/Users/connor/WebstormProjects/justinabernethy/src/pages/index.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "/Users/connor/WebstormProjects/justinabernethy/src/pages/index.astro?astro&type=script&index=1&lang.ts"));
}, "/Users/connor/WebstormProjects/justinabernethy/src/pages/index.astro", void 0);

const $$file = "/Users/connor/WebstormProjects/justinabernethy/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

const index___astro = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  page
}, Symbol.toStringTag, { value: 'Module' }));

export { index___astro as i, renderScript as r };
