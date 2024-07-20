import { createTheme } from '@mui/material/styles';
import deepmerge from 'deepmerge';
import customTheme from './customTheme';

const defaultTheme = createTheme();  

const combinedTheme = deepmerge(defaultTheme, customTheme);

 
export default combinedTheme;