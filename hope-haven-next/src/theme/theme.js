// theme/theme.js
// export const colors = {
//     background: '#F7F7F7',
//     white: '#FFFFFF',
//     primary: '#A1C6EA',
//     primaryDark: '#7AAEDC',
//     secondary: '#333333',
//     text: '#222222',
//     error: '#FF6B6B',
//     warning: '#FFCC00',
//     success: '#A8D8A9',
//   };

// theme/theme.js
export const colors = {
  background: '#121212', // Deep charcoal black
  white: '#F5F5F5', // Soft white for text
  primary: '#D4AF37', // Royal gold
  primaryDark: '#B8962D', // Darker gold for hover
  secondary: '#333333', // Dark gray
  accent1: '#8B0000', // Burgundy accent
  accent2: '#1B5E20', // Deep emerald accent
  text: '#F5F5F5', // Soft white text
  error: '#FF6B6B',
  warning: '#FFCC00',
  success: '#A8D8A9',
};

  
  export const typography = {
    fontFamily: "'Inter', 'Poppins', 'Roboto', sans-serif",
    heading: {
      h1: {
        fontSize: '36px',
        fontWeight: 700,
        letterSpacing: '0.5px',
      },
      h2: {
        fontSize: '30px',
        fontWeight: 700,
        letterSpacing: '0.5px',
      },
      h3: {
        fontSize: '24px',
        fontWeight: 700,
        letterSpacing: '0.5px',
      },
    },
    body: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.5,
    },
  };
  
  export const spacing = {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  };
  
  export const shadows = {
    sm: '0 2px 4px rgba(0, 0, 0, 0.05)',
    md: '0 4px 8px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.15)',
  };
  
  export const transitions = {
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.5s ease',
  };
  