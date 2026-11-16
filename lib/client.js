/**
 * Ticket-monitor skin — palette, effects and motion.
 *
 * Mirrors the palette of https://ticket-monitor.mybeijingbuddy.com/: a midnight
 * navy canvas with blue-tinted hairlines, cool-white ink, and cyan/blue accents.
 *
 * This is a client-modules bundle: the client module system evaluates the file
 * and expects a window.__ModuleLoader__.load({ id, factory }) call; a bare
 * export loads "without registering" and the Host reports the package failed.
 *
 * The palette ships as CSS custom properties so it applies without any Cordis
 * service. Token names and their dark/light roles mirror ui-theme's
 * design-platform.css so every consumer keeps working.
 */
window.__ModuleLoader__.load({
  id: '@wmutong/dsh-skin-ticket-monitor',
  factory: () => {
    /** Site palette, from its app.css custom properties. */
    const SITE = {
      bg: '#070b14',
      bgSoft: '#0c1322',
      card: '#101a2c',
      cardSolid: '#111a2b',
      raised: '#16213a',
      raisedHover: '#1c2a47',
      line: 'rgba(120, 165, 255, 0.14)',
      lineSoft: 'rgba(120, 165, 255, 0.09)',
      lineStrong: 'rgba(120, 180, 255, 0.30)',
      text: '#e6edf8',
      textSoft: '#a9b8d0',
      muted: '#7f8da6',
      faint: '#5d6b83',
      cyan: '#22d3ee',
      cyanBright: '#67e8f9',
      cyanDim: 'rgba(34, 211, 238, 0.55)',
      blue: '#3b82f6',
      violet: '#8b5cf6',
      green: '#34d399',
      amber: '#fbbf24',
      red: '#fb5c6c',
    }

    /** Derived light column: the same hue family on a pale blue canvas. */
    const PAPER = {
      bg: '#f2f7ff',
      surface: '#ffffff',
      sunken: '#e9f1ff',
      raised: '#dde8fa',
      ink: '#0b1526',
      inkSoft: '#3d4d66',
      inkMuted: '#66748c',
      inkFaint: '#8d99ad',
      line: 'rgba(59, 130, 246, 0.18)',
      lineSoft: 'rgba(59, 130, 246, 0.10)',
      lineStrong: 'rgba(59, 130, 246, 0.32)',
      blue: '#2563eb',
      blueDeep: '#1d4ed8',
      blueDim: 'rgba(37, 99, 235, 0.55)',
    }

    /**
     * Token pairs: `[light, dark]`. Names mirror ui-theme's alias layer, so
     * overriding them reaches every component that already reads tokens.
     */
    const TOKENS = {
      // ---- canvas ----
      '--dsw-alias-bg-base': [PAPER.bg, SITE.bg],
      '--dsw-alias-bg-layer-1': [PAPER.surface, SITE.bgSoft],
      '--dsw-alias-bg-layer-2': [PAPER.sunken, SITE.card],
      '--dsw-alias-bg-layer-3': [PAPER.raised, SITE.raised],
      '--dsw-alias-bg-module-platform': [PAPER.sunken, SITE.bgSoft],
      '--dsw-alias-bg-overlay': [PAPER.surface, SITE.cardSolid],
      '--dsw-alias-bg-document-preview': [PAPER.surface, SITE.bgSoft],
      '--dsw-alias-bg-multi-select': [PAPER.raised, SITE.raised],
      '--dsw-alias-bg-skeleton': ['rgba(59, 130, 246, 0.10)', 'rgba(120, 165, 255, 0.08)'],
      '--dsw-alias-bg-document-selection': ['rgba(37, 99, 235, 0.18)', 'rgba(34, 211, 238, 0.22)'],
      '--dsw-alias-bg-mask-drop': ['rgba(15, 23, 42, 0.6)', 'rgba(4, 8, 16, 0.78)'],

      // ---- ink ----
      '--dsw-alias-label-primary': [PAPER.ink, SITE.text],
      '--dsw-alias-label-secondary': [PAPER.inkSoft, SITE.textSoft],
      '--dsw-alias-label-tertiary': [PAPER.inkMuted, SITE.muted],
      '--dsw-alias-label-caption': ['#7a879e', '#6b7a94'],
      '--dsw-alias-label-dimmed': [PAPER.inkFaint, SITE.faint],
      '--dsw-alias-label-primary-inverted': [PAPER.surface, SITE.bg],
      '--dsw-alias-label-document-preview': [PAPER.inkSoft, SITE.textSoft],
      // Ink on a filled primary surface: the shipped dark value is near-white,
      // which would be illegible on a cyan fill.
      '--dsw-alias-label-primary-foreground': [PAPER.surface, '#04121a'],

      // ---- hairlines ----
      '--dsw-alias-border-l1': [PAPER.lineSoft, SITE.lineSoft],
      '--dsw-alias-border-l2': [PAPER.line, SITE.line],
      '--dsw-alias-border-l2-darkmode-thin': [PAPER.lineSoft, SITE.lineSoft],
      '--dsw-alias-border-l3': ['rgba(59, 130, 246, 0.24)', 'rgba(120, 180, 255, 0.20)'],
      '--dsw-alias-border-l4': [PAPER.lineStrong, SITE.lineStrong],
      '--dsw-alias-border-inverted': ['rgba(11, 21, 38, 0.06)', 'rgba(230, 237, 248, 0.06)'],
      '--dsw-alias-border-inverted2': ['rgba(11, 21, 38, 0.08)', 'rgba(230, 237, 248, 0.08)'],

      // ---- brand and accents ----
      // The keyboard focus ring reads this token (focus.css), so the accent
      // carries the ring without a stylesheet override.
      '--dsw-alias-state-business-primary': [PAPER.blue, SITE.cyan],
      '--dsw-alias-state-business-tertiary': ['rgba(37, 99, 235, 0.30)', 'rgba(34, 211, 238, 0.30)'],
      '--dsw-alias-brand-primary': [PAPER.blue, SITE.cyan],
      '--dsw-alias-brand-primary-invert': [PAPER.ink, SITE.text],
      '--dsw-alias-brand-primary-new-colorprimary-new-color': [PAPER.blue, SITE.cyan],
      '--dsw-alias-brand-text': [PAPER.ink, SITE.text],
      '--dsw-alias-link': [PAPER.blue, SITE.blue],

      // ---- buttons ----
      '--dsw-alias-button-primary-fill': [PAPER.blue, SITE.cyan],
      '--dsw-alias-button-primary-hover': [PAPER.blueDeep, SITE.cyanBright],
      '--dsw-alias-button-primary-dimmed': [PAPER.blueDim, SITE.cyanDim],
      '--dsw-alias-button-contrast-fill': [PAPER.raised, SITE.raised],
      '--dsw-alias-button-elevated-fill': [PAPER.surface, SITE.cardSolid],
      '--dsw-alias-button-floating-fill': [PAPER.surface, SITE.card],
      '--dsw-alias-button-floating-hover': [PAPER.raised, SITE.raised],
      '--dsw-alias-button-ghost-active-fill': ['rgba(37, 99, 235, 0.12)', 'rgba(34, 211, 238, 0.16)'],
      '--dsw-alias-button-ghost-active-hover': ['rgba(37, 99, 235, 0.18)', 'rgba(34, 211, 238, 0.24)'],
      '--dsw-alias-button-ghost-active-border': ['rgba(37, 99, 235, 0.35)', 'rgba(34, 211, 238, 0.40)'],
      '--dsw-alias-button-info-fill': [PAPER.blue, SITE.blue],
      '--dsw-alias-button-info-hover': [PAPER.blueDeep, SITE.cyan],
      '--dsw-alias-button-tool-bar-fill': ['rgba(219, 232, 250, 0.6)', 'rgba(22, 33, 58, 0.62)'],
      '--dsw-alias-button-tool-bar-fill-invisible': ['rgba(219, 232, 250, 0.30)', 'rgba(12, 19, 34, 0.40)'],
      '--dsw-alias-button-tool-bar-hover': ['rgba(219, 232, 250, 0.85)', 'rgba(28, 42, 71, 0.78)'],

      // ---- interaction ----
      '--dsw-alias-interactive-bg-hover': ['rgba(37, 99, 235, 0.07)', 'rgba(120, 165, 255, 0.08)'],
      '--dsw-alias-interactive-bg-active': ['rgba(37, 99, 235, 0.12)', 'rgba(120, 165, 255, 0.13)'],
      '--dsw-alias-interactive-bg-hover-accent': ['rgba(37, 99, 235, 0.16)', 'rgba(34, 211, 238, 0.20)'],
      '--dsw-alias-interactive-bg-hover-solid': [PAPER.raised, SITE.raisedHover],
      '--dsw-alias-turn-trigger-bg': ['rgba(37, 99, 235, 0.06)', 'rgba(120, 165, 255, 0.07)'],
      '--dsw-alias-turn-trigger-bg-hover': ['rgba(37, 99, 235, 0.11)', 'rgba(120, 165, 255, 0.12)'],

      // ---- code and markdown ----
      '--dsw-alias-markdown-code-block': [PAPER.sunken, SITE.bgSoft],
      '--dsw-alias-markdown-code-block-banner': [PAPER.raised, SITE.cardSolid],
      '--dsw-alias-markdown-inline-code': ['#e8f0ff', SITE.raised],
      '--dsw-alias-markdown-code-segment-selected': [PAPER.raised, SITE.raised],
      '--dsw-alias-markdown-code-segment-unselected': [PAPER.sunken, SITE.cardSolid],
      '--dsw-alias-markdown-placeholder': [PAPER.raised, SITE.cardSolid],
      '--dsw-alias-markdown-tag': [PAPER.raised, SITE.cardSolid],
      '--dsw-alias-code-diff-added': ['rgba(52, 211, 153, 0.14)', 'rgba(52, 211, 153, 0.16)'],
      '--dsw-alias-code-diff-deleted': ['rgba(251, 92, 108, 0.14)', 'rgba(251, 92, 108, 0.16)'],

      // ---- surfaces ----
      '--dsw-alias-settings-card-fill': [PAPER.surface, SITE.cardSolid],
      '--dsw-alias-settings-card-stroke': [PAPER.line, SITE.line],
      '--dsw-alias-illustration-background': [PAPER.sunken, SITE.card],
      '--dsw-alias-illustration-backing': [PAPER.raised, SITE.raised],
      '--dsw-alias-illustration-detail': [PAPER.inkMuted, SITE.muted],
      '--dsw-alias-illustration-shadow': [PAPER.raised, SITE.raised],
      '--dsw-alias-illustration-surface': [PAPER.surface, SITE.cardSolid],
      '--dsw-alias-toast-bg': [PAPER.ink, SITE.raised],
      '--dsw-alias-toast-label': [PAPER.surface, SITE.text],
      '--dsw-alias-tooltip-bg': [PAPER.ink, SITE.raised],
      '--dsw-alias-menu-group-header-fill': ['rgba(233, 241, 255, 0.96)', 'rgba(12, 19, 34, 0.94)'],
      '--dsw-alias-switch-thumb': [PAPER.surface, '#cdd9ea'],

      // ---- scrollbars ----
      '--dsw-alias-scrollbar-bg-l1': ['rgba(37, 99, 235, 0.16)', 'rgba(120, 165, 255, 0.16)'],
      '--dsw-alias-scrollbar-bg-l2': ['rgba(37, 99, 235, 0.24)', 'rgba(120, 165, 255, 0.24)'],
      '--dsw-alias-scrollbar-hover-l1': ['rgba(37, 99, 235, 0.28)', 'rgba(120, 180, 255, 0.30)'],
      '--dsw-alias-scrollbar-hover-l2': ['rgba(37, 99, 235, 0.36)', 'rgba(120, 180, 255, 0.38)'],

      // ---- state ----
      '--dsw-alias-state-done-primary': [SITE.violet, SITE.violet],
      '--dsw-alias-state-error-primary': [SITE.red, SITE.red],
      '--dsw-alias-state-error-secondary': [SITE.red, SITE.red],
      '--dsw-alias-state-idle-primary': [PAPER.inkFaint, SITE.faint],
      '--dsw-alias-state-success-primary': [SITE.green, SITE.green],
      '--dsw-alias-state-success-secondary': [SITE.green, SITE.green],
      '--dsw-alias-state-success-tertiary': ['rgba(52, 211, 153, 0.30)', 'rgba(52, 211, 153, 0.30)'],
      '--dsw-alias-state-warn-primary': [SITE.amber, SITE.amber],
      '--dsw-alias-state-warn-secondary': [SITE.amber, SITE.amber],
      '--dsw-alias-state-warn-label': ['#b45309', SITE.amber],
      '--dsw-alias-state-warn-tertiary': ['rgba(251, 191, 36, 0.30)', 'rgba(251, 191, 36, 0.30)'],
    }

    /** One column of {@link TOKENS} as CSS declarations. */
    const column = (index) => Object.entries(TOKENS)
      .map(([name, pair]) => `  ${name}: ${pair[index]};`)
      .join('\n')

    /**
     * Interaction, ambient and canvas layer.
     *
     * Component class names are CSS-Modules hashes, so this sheet only targets
     * element and attribute selectors. The ambient glow paints as a light
     * overlay with `screen` blending: it only adds light, so opaque surfaces
     * keep their contrast. It stays dark-only because the reference site has no
     * light mode, and it is static — an animated full-viewport blur is a
     * sustained GPU cost.
     */
    const CSS = `
/* ---- palette ---- */
:root {
${column(0)}
}
body[data-ds-dark-theme] {
${column(1)}
}

/* ---- canvas ---- */
html, body, #root {
  background-color: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
}

/* ---- headroom: let the ambient layer show through page chrome ---- */
body[data-ds-dark-theme] #root {
  background-color: transparent;
}

/* ---- interaction transitions ---- */
@media (prefers-reduced-motion: no-preference) {
  button, [role="button"], [role="menuitem"], [role="option"], [role="tab"], a,
  input, textarea, select, summary {
    transition:
      background-color .22s cubic-bezier(.22, 1, .36, 1),
      border-color .22s cubic-bezier(.22, 1, .36, 1),
      color .18s cubic-bezier(.22, 1, .36, 1),
      box-shadow .22s cubic-bezier(.22, 1, .36, 1),
      transform .16s cubic-bezier(.22, 1, .36, 1);
  }
}

/* ---- hover glow, press feedback, selected tab accent ---- */
button:hover:not(:disabled),
[role="button"]:hover:not([aria-disabled="true"]) {
  box-shadow: 0 0 0 0.5px rgba(34, 211, 238, .22), 0 0 14px rgba(34, 211, 238, .16);
}

button:active:not(:disabled),
[role="button"]:active:not([aria-disabled="true"]) {
  transform: translateY(1px);
}

[role="tab"][aria-selected="true"],
[role="tab"][data-state="active"] {
  color: rgba(34, 211, 238, .95);
  box-shadow: inset 0 -2px 0 0 rgba(34, 211, 238, .85);
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
  opacity: .55;
  background-image:
    radial-gradient(ellipse 62% 46% at 20% -12%, rgba(34, 211, 238, .17), transparent 70%),
    radial-gradient(ellipse 56% 42% at 84% -8%, rgba(139, 92, 246, .15), transparent 72%),
    radial-gradient(ellipse 70% 50% at 50% 118%, rgba(59, 130, 246, .10), transparent 70%),
    repeating-linear-gradient(0deg, rgba(120, 165, 255, .035) 0 1px, transparent 1px 64px),
    repeating-linear-gradient(90deg, rgba(120, 165, 255, .035) 0 1px, transparent 1px 64px);
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
        console.info('[skin-ticket-monitor] palette applied,', Object.keys(TOKENS).length, 'tokens')
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
