const baseTheme = {
  colors: {
    primary: '#FF6B4A',
    primaryDark: '#E55A3A',
    secondary: '#2c3e50',
    secondaryLight: '#34495e',
    accent: '#FF6B4A',
    accentDark: '#E55A3A',
    background: '#f8f9fa',
    backgroundDark: '#ecf0f1',
    text: {
      primary: '#2c3e50',
      secondary: '#555',
      light: '#666',
      lighter: '#7f8c8d',
      white: '#ffffff',
      dark: '#1a1a1a'
    },
    white: '#ffffff',
    gray: {
      100: '#f8f9fa',
      200: '#ecf0f1',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#6c757d',
      700: '#495057',
      800: '#343a40',
      900: '#212529'
    },
    success: '#27ae60',
    warning: '#f39c12',
    error: '#e74c3c',
    info: '#3498db'
  },
  
  typography: {
    fontFamily: {
      primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace'
    },
    fontSize: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      md: '1.125rem',    // 18px
      lg: '1.25rem',     // 20px
      xl: '1.5rem',      // 24px
      '2xl': '2rem',     // 32px
      '3xl': '2.5rem',   // 40px
      '4xl': '3rem',     // 48px
      '5xl': '3.5rem'    // 56px
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.6,
      relaxed: 1.8
    }
  },
  
  spacing: {
    xs: '0.25rem',     // 4px
    sm: '0.5rem',      // 8px
    md: '1rem',        // 16px
    lg: '1.5rem',      // 24px
    xl: '2rem',        // 32px
    '2xl': '3rem',     // 48px
    '3xl': '4rem',     // 64px
    '4xl': '6rem',     // 96px
    '5xl': '8rem'      // 128px
  },
  
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
    none: 'none'
  },
  
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    base: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px'
  },
  
  transitions: {
    fast: '150ms ease-in-out',
    base: '300ms ease-in-out',
    slow: '500ms ease-in-out',
    slower: '700ms ease-in-out'
  },
  
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060
  }
};

// Light theme
export const lightTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: '#f8f9fa',
    backgroundDark: '#ecf0f1',
    cardBackground: '#ffffff',
    navBackground: 'rgba(255, 255, 255, 0.98)',
    text: {
      primary: '#2c3e50',
      secondary: '#555',
      light: '#666',
      lighter: '#7f8c8d',
      white: '#ffffff',
      dark: '#1a1a1a'
    },
    border: '#dee2e6'
  }
};

// Dark theme
export const darkTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: '#1a1a1a',
    backgroundDark: '#0d0d0d',
    cardBackground: '#2d2d2d',
    navBackground: 'rgba(26, 26, 26, 0.98)',
    text: {
      primary: '#e0e0e0',
      secondary: '#b0b0b0',
      light: '#999999',
      lighter: '#808080',
      white: '#ffffff',
      dark: '#1a1a1a'
    },
    border: '#404040',
    gray: {
      100: '#2d2d2d',
      200: '#333333',
      300: '#404040',
      400: '#4d4d4d',
      500: '#666666',
      600: '#808080',
      700: '#999999',
      800: '#b3b3b3',
      900: '#cccccc'
    }
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    base: '0 2px 4px rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.3)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.3)',
    none: 'none'
  }
};

// Default to light theme
export const theme = lightTheme;

// Media query helper
export const device = {
  xs: `(min-width: ${baseTheme.breakpoints.xs})`,
  sm: `(min-width: ${baseTheme.breakpoints.sm})`,
  md: `(min-width: ${baseTheme.breakpoints.md})`,
  lg: `(min-width: ${baseTheme.breakpoints.lg})`,
  xl: `(min-width: ${baseTheme.breakpoints.xl})`,
  '2xl': `(min-width: ${baseTheme.breakpoints['2xl']})`
};