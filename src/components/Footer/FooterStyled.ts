import {
  createStyles,
  Theme,
} from '@material-ui/core';

import purple from '@material-ui/core/colors/purple';

const styles = (theme: Theme) => createStyles({
  '&:focus': {
    borderColor: '#80bdff',
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
  bootstrapInput: {
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    borderRadius: 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    width: 'calc(100% - 24px)',
  },
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
    padding: 0,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  cssFocused: {},
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },
  margin: {
    margin: theme.spacing.unit,
  },
})

export default styles;
