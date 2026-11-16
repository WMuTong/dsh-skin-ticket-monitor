/**
 * Ticket-monitor skin — palette, effects and motion only.
 *
 * Mirrors the palette of https://ticket-monitor.mybeijingbuddy.com/: a midnight
 * navy canvas with blue-tinted hairlines, cool-white ink, and cyan/blue accents.
 *
 * This module deliberately injects no Cordis service. The look is two DOM
 * effects owned by the plugin fiber: a `<style>` element and, when the theme
 * service is present, a token override layer. Requiring `theme` would stop the
 * whole plugin when that service is absent or slow, so it is read through
 * `ctx.get('theme')` at effect time and the stylesheet alone still applies the
 * palette.
 */

/** Palette lifted from the site's `app.css` custom properties. */
const SITE = {
  bg: '#070b14',
  bgSoft: '#0c1322',
  cardSolid: '#111a2b',
  cardRaised: '#16213a',
  line: 'rgba(120, 165, 255, 0.14)',
  lineStrong: 'rgba(120, 180, 255, 0.30)',
  text: '#e6edf8',
  muted: '#7f8da6',
  cyan: '#22d3ee',
  cyanBright: '#67e8f9',
  blue: '#3b82f6',
}

/** Derived light column: same hue family on a pale blue canvas. */
const PAPER = {
  bg: '#f4f8ff',
  surface: '#ffffff',
  sunken: '#eef4ff',
  raised: '#e2ebff',
  ink: '#0b1526',
  inkSoft: '#3d4d66',
  inkMuted: '#66748c',
  inkFaint: '#8d99ad',
  line: 'rgba(59, 130, 246, 0.16)',
  lineStrong: 'rgba(59, 130, 246, 0.30)',
  blue: '#2563eb',
  blueDeep: '#1d4ed8',
}

/**
 * Token values keyed by token name, per color scheme. Applied as CSS custom
 * properties on the document root by the stylesheet below, so the palette
 * reaches every consumer without depending on the theme service.
 */
const TOKEN_CSS = `
:root, body {
${Object.entries({
    '--dsw-alias-bg-base': [PAPER.bg, SITE.bg],
    '--dsw-alias-bg-layer-1': [PAPER.surface, SITE.bgSoft],
    '--dsw-alias-bg-layer-2': [PAPER.sunken, SITE.cardSolid],
    '--dsw-alias-bg-layer-3': [PAPER.raised, SITE.cardRaised],
    '--dsw-alias-bg-module-platform': [PAPER.sunken, SITE.bgSoft],
    '--dsw-alias-bg-overlay': [PAPER.surface, SITE.cardSolid],
    '--dsw-alias-bg-document-preview': [PAPER.surface, SITE.bgSoft],
    '--dsw-alias-bg-multi-select': [PAPER.raised, SITE.cardRaised],
    '--dsw-alias-bg-skeleton': ['rgba(59, 130, 246, 0.10)', 'rgba(120, 165, 255, 0.08)'],
    '--dsw-alias-label-primary': [PAPER.ink, SITE.text],
    '--dsw-alias-label-secondary': [PAPER.inkSoft, '#a9b8d0'],
    '--dsw-alias-label-tertiary': [PAPER.inkMuted, SITE.muted],
    '--dsw-alias-label-caption': ['#7a879e', '#6b7a94'],
    '--dsw-alias-label-dimmed': [PAPER.inkFaint, '#5d6b83'],
    '--dsw-alias-label-primary-foreground': [PAPER.surface, '#04121a'],
    '--dsw-alias-border-l1': ['rgba(59, 130, 246, 0.12)', 'rgba(120, 165, 255, 0.10)'],
    '--dsw-alias-border-l2': [PAPER.line, SITE.line],
    '--dsw-alias-border-l3': ['rgba(59, 130, 246, 0.22)', 'rgba(120, 180, 255, 0.20)'],
    '--dsw-alias-border-l4': [PAPER.lineStrong, SITE.lineStrong],
    '--dsw-alias-state-business-primary': [PAPER.blue, SITE.cyan],
    '--dsw-alias-brand-primary': [PAPER.blue, SITE.cyan],
    '--dsw-alias-brand-text': [PAPER.ink, SITE.text],
    '--dsw-alias-button-primary-fill': [PAPER.blue, SITE.cyan],
    '--dsw-alias-button-primary-hover': [PAPER.blueDeep, SITE.cyanBright],
    '--dsw-alias-button-primary-dimmed': ['rgba(37, 99, 235, 0.55)', 'rgba(34, 211, 238, 0.55)'],
    '--dsw-alias-button-contrast-fill': [PAPER.raised, SITE.cardRaised],
    '--dsw-alias-button-ghost-active-fill': ['rgba(37, 99, 235, 0.12)', 'rgba(34, 211, 238, 0.16)'],
    '--dsw-alias-button-ghost-active-hover': ['rgba(37, 99, 235, 0.18)', 'rgba(34, 211, 238, 0.24)'],
    '--dsw-alias-button-ghost-active-border': ['rgba(37, 99, 235, 0.35)', 'rgba(34, 211, 238, 0.40)'],
    '--dsw-alias-link': [PAPER.blue, SITE.blue],
    '--dsw-alias-markdown-code-block': [PAPER.sunken, SITE.bgSoft],
    '--dsw-alias-markdown-code-block-banner': [PAPER.raised, SITE.cardSolid],
    '--dsw-alias-markdown-inline-code': ['#e8f0ff', SITE.cardRaised],
    '--dsw-alias-settings-card-fill': [PAPER.surface, SITE.cardSolid],
    '--dsw-alias-settings-card-stroke': [PAPER.line, SITE.line],
  }).map(([name, [light, dark]]) => `  ${name}: ${light};`).join('\n')}
}

body[data-ds-dark-theme], [data-ds-dark-theme='true'], .dark, [data-sonner-theme='dark'] {
${Object.entries({
    '--dsw-alias-bg-base': SITE.bg,
    '--dsw-alias-bg-layer-1': SITE.bgSoft,
    '--dsw-alias-bg-layer-2': SITE.cardSolid,
    '--dsw-alias-bg-layer-3': SITE.cardRaised,
    '--dsw-alias-bg-module-platform': SITE.bgSoft,
    '--dsw-alias-bg-overlay': SITE.cardSolid,
    '--dsw-alias-bg-document-preview': SITE.bgSoft,
    '--dsw-alias-bg-multi-select': SITE.cardRaised,
    '--dsw-alias-label-primary': SITE.text,
    '--dsw-alias-label-secondary': '#a9b8d0',
    '--dsw-alias-label-tertiary': SITE.muted,
    '--dsw-alias-label-caption': '#6b7a94',
    '--dsw-alias-label-dimmed': '#5d6b83',
    '--dsw-alias-label-primary-foreground': '#04121a',
    '--dsw-alias-border-l1': 'rgba(120, 165, 255, 0.10)',
    '--dsw-alias-border-l2': SITE.line,
    '--dsw-alias-border-l3': 'rgba(120, 180, 255, 0.20)',
    '--dsw-alias-border-l4': SITE.lineStrong,
    '--dsw-alias-state-business-primary': SITE.cyan,
    '--dsw-alias-brand-primary': SITE.cyan,
    '--dsw-alias-brand-text': SITE.text,
    '--dsw-alias-button-primary-fill': SITE.cyan,
    '--dsw-alias-button-primary-hover': SITE.cyanBright,
    '--dsw-alias-button-primary-dimmed': 'rgba(34, 211, 238, 0.55)',
    '--dsw-alias-button-contrast-fill': SITE.cardRaised,
    '--dsw-alias-button-ghost-active-fill': 'rgba(34, 211, 238, 0.16)',
    '--dsw-alias-button-ghost-active-hover': 'rgba(34, 211, 238, 0.24)',
    '--dsw-alias-button-ghost-active-border': 'rgba(34, 211, 238, 0.40)',
    '--dsw-alias-link': SITE.blue,
    '--dsw-alias-markdown-code-block': SITE.bgSoft,
    '--dsw-alias-markdown-code-block-banner': SITE.cardSolid,
    '--dsw-alias-markdown-inline-code': SITE.cardRaised,
    '--dsw-alias-settings-card-fill': SITE.cardSolid,
    '--dsw-alias-settings-card-stroke': SITE.line,
  }).map(([name, value]) => `  ${name}: ${value};`).join('\n')}
}
`

/**
 * Interaction, ambient and canvas layer.
 *
 * Component class names are CSS-Modules hashes, so this sheet only targets
 * element and attribute selectors. The ambient glow paints as a light overlay
 * with `screen` blending, which only adds light and leaves every opaque surface
 * readable, and it stays dark-only because the site has no light mode. It is
 * static: an animated full-viewport blur is a sustained GPU cost.
 */
const CSS = `
/* ---- canvas ---- */
html, body, #root {
  background-color: var(--dsw-alias-bg-base) !important;
  color: var(--dsw-alias-label-primary);
}

/* ---- interaction transitions ---- */
@media (prefers-reduced-motion: no-preference) {
  button, [role="button"], [role="menuitem"], [role="option"], a, input, textarea, select, summary {
    transition:
      background-color .22s cubic-bezier(.22, 1, .36, 1),
      border-color .22s cubic-bezier(.22, 1, .36, 1),
      color .18s cubic-bezier(.22, 1, .36, 1),
      box-shadow .22s cubic-bezier(.22, 1, .36, 1),
      transform .16s cubic-bezier(.22, 1, .36, 1);
  }
}

/* ---- hover glow and press feedback ---- */
button:hover:not(:disabled),
[role="button"]:hover:not([aria-disabled="true"]) {
  box-shadow: 0 0 0 0.5px rgba(34, 211, 238, .22), 0 0 14px rgba(34, 211, 238, .16);
}

button:active:not(:disabled),
[role="button"]:active:not([aria-disabled="true"]) {
  transform: translateY(1px);
}

@media (prefers-reduced-motion: reduce) {
  button:active:not(:disabled),
  [role="button"]:active:not([aria-disabled="true"]) { transform: none; }
}

/* ---- ambient glow + grid, dark palette only ---- */
body[data-ds-dark-theme]::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  mix-blend-mode: screen;
  opacity: .5;
  background-image:
    radial-gradient(ellipse 62% 46% at 20% -12%, rgba(34, 211, 238, .16), transparent 70%),
    radial-gradient(ellipse 56% 42% at 84% -8%, rgba(139, 92, 246, .14), transparent 72%),
    repeating-linear-gradient(0deg, rgba(120, 165, 255, .04) 0 1px, transparent 1px 64px),
    repeating-linear-gradient(90deg, rgba(120, 165, 255, .04) 0 1px, transparent 1px 64px);
}
`

/** Storage key remembering whether the skin is on. */
const STORAGE_KEY = 'dsh-skin-ticket-monitor:on'

/** Diagnostic prefix; the browser console is the only channel a client plugin has. */
const LOG = '[skin-ticket-monitor]'

export const name = 'skin-ticket-monitor'

/**
 * Read the persisted on/off state.
 * @returns True unless the user turned the skin off.
 */
function isOn() {
  try {
    return globalThis.localStorage?.getItem(STORAGE_KEY) !== 'off'
  } catch {
    // Private mode or a storage-disabled origin keeps the default.
    return true
  }
}

/**
 * Persist the on/off state.
 * @param on - the state to remember.
 */
function remember(on) {
  try {
    globalThis.localStorage?.setItem(STORAGE_KEY, on ? 'on' : 'off')
  } catch {
    // Losing the preference only costs the choice across reloads.
  }
}

/**
 * Append the skin's stylesheet to the document head.
 * @returns Disposer removing exactly the element this call created.
 */
function mountStyle() {
  const element = document.createElement('style')
  element.dataset.dshSkin = 'ticket-monitor'
  element.textContent = TOKEN_CSS + CSS
  document.head.append(element)
  return () => { element.remove() }
}

/**
 * Apply the skin on load and expose a document-level toggle.
 *
 * No service is injected, so a missing or late `theme` service cannot keep the
 * palette from applying. The token override is a best-effort extra for consumers
 * that read the snapshot rather than the CSS variables.
 * @param ctx - client context; `theme` is read optionally.
 * @returns Nothing; every effect is owned by the plugin fiber.
 */
export function apply(ctx) {
  // Proof of execution: a bus marker the user can read from any console and a
  // document attribute a screenshot can show. If neither appears, the module
  // never ran and the problem is load-time, not styling.
  try {
    globalThis.__ticketMonitorSkin = { loaded: true, at: new Date().toISOString() }
    document?.documentElement?.setAttribute('data-ticket-monitor', 'loaded')
  } catch (error) {
    console.warn(LOG, 'marker failed', error)
  }
  console.info(LOG, 'apply() entered')

  ctx.effect(() => {
    const style = mountStyle()
    let override
    try {
      override = ctx.get('theme')?.overrideTokens?.('ticket-monitor', {})
    } catch (error) {
      console.warn(LOG, 'theme service override unavailable', error)
    }
    console.info(LOG, 'palette applied, css length', style.length)
    return () => {
      override?.()
      style()
    }
  }, 'skin-ticket-monitor: palette and stylesheet')

  // A capture-phase listener keeps the toggle available without the shortcut
  // service, which is optional in some compositions.
  ctx.effect(() => {
    if (typeof globalThis.addEventListener !== 'function') return () => {}
    const onKey = (event) => {
      if (!event.altKey || !(event.metaKey || event.ctrlKey) || event.code !== 'KeyK') return
      const on = !isOn()
      remember(on)
      const found = document.querySelector('style[data-dsh-skin="ticket-monitor"]')
      if (on && !found) document.head.append(mountStyleElement())
      if (!on) found?.remove()
      console.info(LOG, on ? 'theme on' : 'theme off')
    }
    globalThis.addEventListener('keydown', onKey, true)
    return () => { globalThis.removeEventListener('keydown', onKey, true) }
  }, 'skin-ticket-monitor: toggle')
}

/**
 * Build the stylesheet element without mounting it.
 * @returns A detached `<style>` element.
 */
function mountStyleElement() {
  const element = document.createElement('style')
  element.dataset.dshSkin = 'ticket-monitor'
  element.textContent = TOKEN_CSS + CSS
  return element
}
