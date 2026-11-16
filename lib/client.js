/**
 * Ticket-monitor skin — a selectable theme, palette/effect/motion only.
 *
 * Mirrors the palette of https://ticket-monitor.mybeijingbuddy.com/: a midnight
 * navy canvas with blue-tinted hairlines, cool-white ink, and cyan/blue accents.
 *
 * The theme is registered through `ctx.theme.register`, so it carries its own
 * id and can be switched in and out. Third-party theme ids are not accepted by
 * the built-in Appearance row's persisted preference (`light` / `dark` /
 * `system` only), so this plugin owns its switch: `Cmd/Ctrl+Alt+K` toggles the
 * theme, and `apply()` restores the skin when it is active.
 *
 * No layout geometry is changed: only alias tokens, a background effect layer,
 * and interaction motion.
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

/** Theme id shown by the theme registry. */
const THEME_ID = 'ticket-monitor'

/**
 * Token overrides. Each entry carries a `light` and a `dark` value: the
 * runtime rejects a bare string because one value goes illegible when the user
 * switches color scheme.
 */
const TOKENS = {
  // ---- canvas -------------------------------------------------------------
  '--dsw-alias-bg-base': { light: PAPER.bg, dark: SITE.bg },
  '--dsw-alias-bg-layer-1': { light: PAPER.surface, dark: SITE.bgSoft },
  '--dsw-alias-bg-layer-2': { light: PAPER.sunken, dark: SITE.cardSolid },
  '--dsw-alias-bg-layer-3': { light: PAPER.raised, dark: SITE.cardRaised },
  '--dsw-alias-bg-module-platform': { light: PAPER.sunken, dark: SITE.bgSoft },
  '--dsw-alias-bg-overlay': { light: PAPER.surface, dark: SITE.cardSolid },
  '--dsw-alias-bg-document-preview': { light: PAPER.surface, dark: SITE.bgSoft },
  '--dsw-alias-bg-multi-select': { light: PAPER.raised, dark: SITE.cardRaised },
  '--dsw-alias-bg-skeleton': { light: 'rgba(59, 130, 246, 0.10)', dark: 'rgba(120, 165, 255, 0.08)' },

  // ---- ink ----------------------------------------------------------------
  '--dsw-alias-label-primary': { light: PAPER.ink, dark: SITE.text },
  '--dsw-alias-label-secondary': { light: PAPER.inkSoft, dark: '#a9b8d0' },
  '--dsw-alias-label-tertiary': { light: PAPER.inkMuted, dark: SITE.muted },
  '--dsw-alias-label-caption': { light: '#7a879e', dark: '#6b7a94' },
  '--dsw-alias-label-dimmed': { light: PAPER.inkFaint, dark: '#5d6b83' },

  // Ink on a filled primary surface. The shipped dark value is near-white, so a
  // cyan fill needs its own dark foreground or the label becomes unreadable.
  '--dsw-alias-label-primary-foreground': { light: PAPER.surface, dark: '#04121a' },

  // ---- hairlines ----------------------------------------------------------
  '--dsw-alias-border-l1': { light: 'rgba(59, 130, 246, 0.12)', dark: 'rgba(120, 165, 255, 0.10)' },
  '--dsw-alias-border-l2': { light: PAPER.line, dark: SITE.line },
  '--dsw-alias-border-l3': { light: 'rgba(59, 130, 246, 0.22)', dark: 'rgba(120, 180, 255, 0.20)' },
  '--dsw-alias-border-l4': { light: PAPER.lineStrong, dark: SITE.lineStrong },

  // ---- brand and fills ----------------------------------------------------
  // The keyboard focus ring paints with this token (`focus.css` reads it as the
  // default `--dsw-focus-ring-color`), so the site's accent carries the ring
  // without a stylesheet override.
  '--dsw-alias-state-business-primary': { light: PAPER.blue, dark: SITE.cyan },
  '--dsw-alias-brand-primary': { light: PAPER.blue, dark: SITE.cyan },
  '--dsw-alias-brand-text': { light: PAPER.ink, dark: SITE.text },
  '--dsw-alias-button-primary-fill': { light: PAPER.blue, dark: SITE.cyan },
  '--dsw-alias-button-primary-hover': { light: PAPER.blueDeep, dark: SITE.cyanBright },
  '--dsw-alias-button-primary-dimmed': { light: 'rgba(37, 99, 235, 0.55)', dark: 'rgba(34, 211, 238, 0.55)' },
  '--dsw-alias-button-contrast-fill': { light: PAPER.raised, dark: SITE.cardRaised },
  '--dsw-alias-button-ghost-active-fill': { light: 'rgba(37, 99, 235, 0.12)', dark: 'rgba(34, 211, 238, 0.16)' },
  '--dsw-alias-button-ghost-active-hover': { light: 'rgba(37, 99, 235, 0.18)', dark: 'rgba(34, 211, 238, 0.24)' },
  '--dsw-alias-button-ghost-active-border': { light: 'rgba(37, 99, 235, 0.35)', dark: 'rgba(34, 211, 238, 0.40)' },

  // ---- links and code surfaces -------------------------------------------
  '--dsw-alias-link': { light: PAPER.blue, dark: SITE.blue },
  '--dsw-alias-markdown-code-block': { light: PAPER.sunken, dark: SITE.bgSoft },
  '--dsw-alias-markdown-code-block-banner': { light: PAPER.raised, dark: SITE.cardSolid },
  '--dsw-alias-markdown-inline-code': { light: '#e8f0ff', dark: SITE.cardRaised },

  // ---- settings cards -----------------------------------------------------
  '--dsw-alias-settings-card-fill': { light: PAPER.surface, dark: SITE.cardSolid },
  '--dsw-alias-settings-card-stroke': { light: PAPER.line, dark: SITE.line },
}

/**
 * Interaction and ambient layer.
 *
 * Component class names are CSS-Modules hashes, so this sheet only targets
 * element and attribute selectors — it can never address one component in
 * isolation. The ambient glow therefore paints as a light overlay with
 * `screen` blending, which only adds light and leaves every opaque surface
 * readable, and it is restricted to the dark palette because the site has no
 * light mode. It is static: an animated full-viewport blur is a sustained GPU
 * cost, which this machine has already been thermally throttled by.
 */
const CSS = `
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
body[data-ds-dark-theme]::after {
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

/** Shortcut id that toggles the theme. */
const SHORTCUT_ID = 'ticketMonitor.toggle'

export const name = 'skin-ticket-monitor'

/** The theme service and shortcut registry must exist before the skin wires up. */
export const inject = ['theme', 'shortcuts']

/**
 * Append the skin's stylesheet to the document head.
 * @returns Disposer removing exactly the element this call created.
 */
function injectStyle() {
  if (typeof document === 'undefined') return () => {}
  const element = document.createElement('style')
  element.dataset.dshSkin = THEME_ID
  element.textContent = CSS
  document.head.append(element)
  return () => { element.remove() }
}

/**
 * Register the theme, publish its stylesheet, and wire the toggle shortcut.
 *
 * The theme starts active: an installed skin that changed nothing until a
 * keystroke would look broken. The toggle removes it, which restores whatever
 * theme the Appearance row holds.
 * @param ctx - client context carrying `theme` and `shortcuts`.
 * @returns Nothing; every registration is owned by the plugin's effect scope.
 */
export function apply(ctx) {
  const theme = ctx.theme
  let active = false
  /** Live disposers for the active look, emptied when the skin is off. */
  let look = []

  /**
   * Apply or withdraw the skin's tokens and stylesheet.
   * @param on - whether the skin should be visible.
   */
  const render = (on) => {
    if (on === active) return
    active = on
    if (on) {
      look = [
        theme.overrideTokens(THEME_ID, TOKENS),
        injectStyle(),
      ]
      return
    }
    for (const dispose of look) dispose()
    look = []
  }

  // Adopt the skin on load so a restart keeps the look the user left on.
  ctx.effect(() => {
    render(true)
    return () => { render(false) }
  }, 'skin-ticket-monitor: theme layer')

  ctx.effect(() => ctx.shortcuts.register({
    id: SHORTCUT_ID,
    label: () => (active ? '关闭 Ticket Monitor 主题' : '启用 Ticket Monitor 主题'),
    aliases: ['ticket monitor', 'skin', 'theme'],
    defaults: {
      'desktop:macos': { code: 'KeyK', modifiers: ['primary', 'alt'] },
      'desktop:windows': { code: 'KeyK', modifiers: ['primary', 'alt'] },
      'desktop:linux': { code: 'KeyK', modifiers: ['primary', 'alt'] },
      'web:macos': { code: 'KeyK', modifiers: ['primary', 'alt'] },
      'web:windows': { code: 'KeyK', modifiers: ['primary', 'alt'] },
    },
    regions: ['page', 'editable'],
    modals: [],
    resolve: () => ({ status: 'handled', run: () => { render(!active) } }),
  }), 'skin-ticket-monitor: toggle shortcut')
}
