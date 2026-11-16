# dsh-skin-ticket-monitor

Deep-navy skin for the [DeepSeek-Harness](https://github.com/deepseek-ai/deepseek-harness) Web GUI, modelled on the palette of [ticket-monitor.mybeijingbuddy.com](https://ticket-monitor.mybeijingbuddy.com/).

Midnight navy canvas, blue-tinted hairlines, cool-white ink, and cyan/blue accents — plus an ambient glow layer and interaction motion.

Palette, visual effects and motion only. No layout geometry is changed.

## Install

### Desktop app

Paste this into the plugin installer (**Plugins → install**):

```
github:WMuTong/dsh-skin-ticket-monitor
```

Then restart the app.

### `dsh web`

```sh
dsh plugin --profile web add github:WMuTong/dsh-skin-ticket-monitor
dsh web
```

## Use

The skin is active once loaded. Toggle it with:

| Platform | Shortcut |
|---|---|
| macOS | `Cmd` + `Option` + `K` |
| Windows / Linux | `Ctrl` + `Alt` + `K` |

Turning it off restores whatever theme the Appearance row holds.

The built-in Appearance row persists only `light` / `dark` / `system`, so a third-party theme cannot live in that list; this plugin owns its own switch instead.

## What it changes

| Area | Detail |
|---|---|
| Canvas | `#070b14` base with layered navy surfaces |
| Ink | `#e6edf8` primary, muted `#7f8da6` secondary |
| Accents | cyan `#22d3ee`, blue `#3b82f6` |
| Hairlines | `rgba(120, 165, 255, .14)` / `.30` |
| Focus ring | recoloured through `--dsw-alias-state-business-primary` |
| Ambient | static radial glow + grid, dark palette only, `screen` blending |
| Motion | 0.22s `cubic-bezier(.22,1,.36,1)` transitions, hover glow, 1px press |

Light mode is a derived pale-blue counterpart because the reference site has no light mode; the ambient layer stays dark-only so it never muddies a pale canvas.

## Accessibility

- Hover glow and press displacement are suppressed under `prefers-reduced-motion: reduce`.
- The ambient glow only adds light (`mix-blend-mode: screen`), so opaque surfaces keep their contrast.
- The primary-button foreground is overridden per scheme: the shipped dark value is near-white and would be illegible on a cyan fill.

## Compatibility

| Requirement | Value |
|---|---|
| DSH | 0.2.x |
| Host | DSH Desktop, or `dsh web` |
| Renderer | any WebView / browser (CSS only) |

## Uninstall

Remove `@wmutong/dsh-skin-ticket-monitor` from the profile's `bundles` and `dependencies`, then restart. No files are written outside the package directory.

## License

MIT
