import { ThemeOptions, createTheme } from '@mui/material/styles';

export const themeOptions= createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#0b395c',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#141414',
            paper: '#1c1c1c',
        },
        text: {
            primary: '#3b7eb3',
            secondary: '#b71c1c',
            hint: '#ff5252',
        },
        divider: '#1497d6',
    },
    typography: {
        fontFamily: 'Montserrat',
    },
    spacing: 2
});

