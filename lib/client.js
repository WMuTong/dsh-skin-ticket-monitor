/**
 * Ticket-monitor skin — palette, effects and motion only.
 *
 * Mirrors the palette of https://ticket-monitor.mybeijingbuddy.com/: a midnight
 * navy canvas with blue-tinted hairlines, cool-white ink, and cyan/blue accents.
 *
 * This is a client-modules bundle. The client module system does not import the
 * file as an ES module; it evaluates it and expects a
 * `window.__ModuleLoader__.load({ id, factory })` call that hands back the
 * plugin namespace. A plain `export` therefore loads "without registering" and
 * the Host reports the package as failed. Everything the factory needs is
 * declared inside it.
 *
 * No Cordis service is required, so a missing or late `theme` service cannot
 * keep the palette from applying. The palette ships as CSS custom properties,
 * which every consumer already reads.
 */
window.__ModuleLoader__.load({
  id: '@wmutong/dsh-skin-ticket-monitor',
  factory: () => {
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
     * Token pairs by name: `[light, dark]`. The dark column is also emitted in a
     * dark-palette block so it wins inside `body[data-ds-dark-theme]` without
     * depending on which selector the shell puts the attribute on.
     */
    const TOKENS = {
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
    }

    /** Declarations for one column of {@link TOKENS}. */
    const column = (index) => Object.entries(TOKENS)
      .map(([name, pair]) => `  ${name}: ${pair[index]};`)
      .join('\n')

    /**
     * Interaction, ambient and canvas layer.
     *
     * Component class names are CSS-Modules hashes, so this sheet only targets
     * element and attribute selectors. The ambient glow paints as a light
     * overlay with `screen` blending, which only adds light and leaves every
     * opaque surface readable, and it stays dark-only because the reference site
     * has no light mode. It is static: an animated full-viewport blur is a
     * sustained GPU cost.
     */
    const CSS = `
/* ---- palette ---- */
:root {
${column(0)}
}
body[data-ds-dark-theme], html[data-ds-dark-theme] body, [data-sonner-theme='dark'] {
${column(1)}
}

/* ---- canvas ---- */
html, body, #root {
  background-color: var(--dsw-alias-bg-base);
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

    const STYLE_SELECTOR = 'style[data-dsh-skin="ticket-monitor"]'

    /** Build the stylesheet element without mounting it. */
    const styleElement = () => {
      const element = document.createElement('style')
      element.dataset.dshSkin = 'ticket-monitor'
      element.textContent = CSS
      return element
    }

    /** Apply the palette on load and expose a document-level toggle. */
    const apply = (ctx) => {
      ctx.effect(() => {
        const element = styleElement()
        document.head.append(element)
        console.info('[skin-ticket-monitor] palette applied')
        return () => { element.remove() }
      }, 'skin-ticket-monitor: palette and stylesheet')

      ctx.effect(() => {
        const onKey = (event) => {
          if (!event.altKey || !(event.metaKey || event.ctrlKey) || event.code !== 'KeyK') return
          const mounted = document.querySelector(STYLE_SELECTOR)
          if (mounted) mounted.remove()
          else document.head.append(styleElement())
          console.info('[skin-ticket-monitor]', mounted ? 'off' : 'on')
        }
        window.addEventListener('keydown', onKey, true)
        return () => { window.removeEventListener('keydown', onKey, true) }
      }, 'skin-ticket-monitor: toggle')
    }

    return {
      name: 'skin-ticket-monitor',
      apply,
    }
  },
})
