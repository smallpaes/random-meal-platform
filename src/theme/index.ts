// for media query
const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;

// for passing of custom value
const BASE_FONT_SIZE = 16;
const customValue = (val: number) => `${val / BASE_FONT_SIZE}px`;

interface IMediaQueriesBreakpoints {
  custom: (minWidth: number) => string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

const media: IMediaQueriesBreakpoints = {
  custom: customMediaQuery,
  xs: customMediaQuery(330),
  sm: customMediaQuery(592),
  md: customMediaQuery(768),
  lg: customMediaQuery(992),
  xl: customMediaQuery(1024),
  xxl: customMediaQuery(1200),
};

const colors = {
  primary: 'rgb(239, 75, 77)',
  secondary: 'rgb(0, 195, 173)',
  dark: {
    100: 'rgb(118,118,118)',
    200: 'rgb(88,92,92)',
    300: 'rgb(25,25,25)',
  },
  light: {
    100: 'rgb(255,255,255)',
    200: 'rgb(242,242,242)',
    300: 'rgb(230,230,230)',
  },
  shadow: {
    100: 'rgba(0,0,0,0.04)',
    200: 'rgba(0,0,0,0.08)',
    300: 'rgba(0,0,0,0.12)',
  },
};

const fontSizes = {
  xs: '0.625rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.25rem',
  xl: '1.5rem',
  xxl: '1.75rem',
  xxxl: '2rem',
  custom: customValue,
};

const borderRadius = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
};

const boxShadow = {
  sm: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  md: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  lg: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
};

export const theme = {
  colors,
  fontSizes,
  media,
  borderRadius,
  boxShadow,
};

export interface ITheme {
  colors: typeof colors;
  fontSizes: typeof fontSizes;
  media: IMediaQueriesBreakpoints;
  borderRadius: typeof fontSizes;
}
