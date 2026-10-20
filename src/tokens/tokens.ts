/**
 * Design tokens for ui-kit.
 * Keep values in sync with `src/styles/tokens.css`.
 *
 * Color pairs are authored for WCAG AA:
 * - text vs canvas/surface ≥ 4.5:1
 * - interactive chrome vs adjacent background ≥ 3:1
 */
export const tokens = {
  color: {
    canvas: '#F3EEE4',
    surface: '#FFFBF3',
    ink: '#1C1914',
    inkMuted: '#534E45',
    line: '#D6CFC2',
    lineStrong: '#8A8273',
    pine: '#1A4A45',
    pineHover: '#143833',
    onPine: '#F3EEE4',
    copper: '#8A3F12',
    danger: '#8E2A27',
    dangerHover: '#751F1D',
    onDanger: '#FFF8F6',
    dangerBg: '#F6E6E4',
    success: '#1F5C44',
    successBg: '#E3F0EA',
    warning: '#7A4300',
    warningBg: '#F4E3C4',
    info: '#1E4A6E',
    infoBg: '#E4EBF3',
    ring: '#1A4A45',
    focus: '#1A4A45',
  },
  space: {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '24px',
    6: '32px',
    7: '40px',
    8: '48px',
    9: '64px',
  },
  font: {
    sans: '"Source Sans 3", "Segoe UI", system-ui, sans-serif',
    mono: '"IBM Plex Mono", ui-monospace, Menlo, monospace',
  },
  fontSize: {
    caption: '12px',
    body: '14px',
    bodyLg: '16px',
    subtitle: '18px',
    title: '24px',
    display: '32px',
  },
  lineHeight: {
    caption: '16px',
    body: '22px',
    bodyLg: '24px',
    subtitle: '28px',
    title: '32px',
    display: '40px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  duration: {
    fast: '120ms',
    med: '200ms',
  },
  easing: {
    out: 'cubic-bezier(0.2, 0, 0, 1)',
  },
} as const;

export type Tokens = typeof tokens;
