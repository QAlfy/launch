import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

export enum LogoStyle {
  radius = 250,
  stroke = 50
}

const launchStyles = (theme) => ({
  '@global': {
    body: {
      backgroundColor: grey[900],
      color: theme.palette.common.white,
      overflowX: 'hidden'
    },
  },
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: 'black',
    color: grey[200]
  },
  lead: {
    // height: 'calc(50vh)',
    position: 'relative' as 'relative'
  },
  desc: {
    height: 'calc(50vh)',
    backgroundColor: grey[50],
    color: 'black'
  },
  logoContainer: {
    position: 'relative' as 'relative',
    // [theme.breakpoints.down('sm')]: {
    textAlign: 'center' as 'center',
    // },
  },
  logo: {
    height: LogoStyle.radius,
    width: LogoStyle.radius,
  },
  brandLegend: {
    color: green[500]
  },
  brandTitle: {
    color: grey[200],
    flexGrow: 1
  },
  tabsContainer: {
    backgroundColor: 'transparent'
  },
  tabs: {
    color: '#FFFFFF',
    '&.disabled': {
      color: grey[600]
    }
  },
  divider: {
    padding: 10
  },
  tabPanel: {
    color: grey[300]
  },
  list: {
    listStyle: 'circle',
    lineHeight: '2.5em'
  },
  email: {
    width: '100%'
  }
});

export default launchStyles;