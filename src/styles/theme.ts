import { createTheme } from '@mantine/core';

export const maxTheme = createTheme({
  primaryColor: 'max-primary',
  primaryShade: 6,
  black: '#111a34',
  white: '#ffffff',
  colors: {
    'max-primary': [
      '#edf3ff', '#dbe8ff', '#b7ceff', '#8eb1ff', '#6393fa',
      '#3f7cf2', '#1f6ff3', '#195fd1', '#154eab', '#123f86'
    ],
    'max-accent': [
      '#f2eefe', '#e1d6fd', '#c3adfb', '#a582f8', '#875df5',
      '#7144f0', '#6633ea', '#5629cb', '#451faa', '#351889'
    ],
    gray: [
      '#f8faff', '#f1f5fb', '#e6ecf5', '#d7e0ec', '#b8c5d8',
      '#94a3b9', '#6f7f98', '#4f5f78', '#324158', '#1f2e44'
    ],
    'max-navy': [
      '#e9edf6', '#cfd8ea', '#a4b4d4', '#7b8fbf', '#556da9',
      '#3f558e', '#324575', '#27375d', '#1b2843', '#111a34'
    ],
    'max-bg': [
      '#ffffff', '#f8faff', '#f2f5fb', '#eaf0f8', '#dfe8f4',
      '#d1ddec', '#b9c9dd', '#9db1ca', '#7f96b4', '#637b9c'
    ]
  }
});