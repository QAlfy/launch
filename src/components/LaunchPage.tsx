import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Flip from 'react-reveal/Flip';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import HideOnScroll from './utils/HideOnScroll';
import launchStyles from './styles/launch';
import LogoAnim from './utils/LogoAnim';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import strings from '../i18n';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import TypeIt from 'typeit';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { getHash } from './utils/Utils';

interface LaunchProps {
  classes?: any;
}

interface LaunchState {
  tabValue: any;
}

interface TabPanelProps {
  children?: React.ReactNode;
  className?: any;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, className, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      className={className}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

class LaunchPage extends React.Component<LaunchProps, LaunchState> {
  private setTabValue;

  constructor(props: LaunchProps) {
    super(props);

    this.state = {
      tabValue: 0
    };
  }

  componentDidMount() {
    this.typeBrand();
  }

  componentDidUpdate() {
  }

  typeBrand() {
    new TypeIt("#brandLegend", {
      strings: strings.brand.legend,
      speed: 50,
      waitUntilVisible: true,
      cursor: true
    }).go();
  }

  handleTabChange(event: React.ChangeEvent<{}>, newValue: number) {
    this.setState({
      tabValue: newValue
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} >
        <HideOnScroll {...this.props}>
          <AppBar className={classes.bar}>
            <Toolbar>
              <Typography align="center" variant="h6" className={classes.brandTitle}>
                {strings.brand.title}
              </Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        <Grid container>
          <Grid container item xs={12} className={classes.lead}>
            <Grid item xs={12} sm={4} lg={4} md={4}>
              <Container maxWidth="sm" className={classes.logoContainer}>
                <LogoAnim loop={1} />
                <Typography id="brandLegend" variant="h5" align="center"
                  className={classes.brandLegend} />
              </Container>
              <Box className={classes.divider} />
            </Grid>
            <Grid item xs={12} sm={8} lg={8} md={8}>
              <Box className={classes.divider} />
              <Paper square className={classes.tabsContainer}>
                <Tabs
                  value={this.state.tabValue}
                  indicatorColor="secondary"
                  onChange={this.handleTabChange.bind(this)}
                  variant="fullWidth"
                  centered
                  className={classes.tabs}
                >
                  {
                    ['developers', 'qa', 'corporate', 'anyone'].map((section, ix) => {
                      return <Tab wrapped={true} key={getHash(section)} label={strings.tabs[section]} />
                    })
                  }
                </Tabs>
              </Paper>
              {
                ['developers', 'qa', 'corporate', 'anyone'].map((section, ix) => {
                  return <TabPanel className={classes[section]} key={getHash(section)} value={this.state.tabValue} index={ix}>
                    <Flip top cascade>
                      <ul className={classes.list}>
                        {strings.desc[section].map((value, index) => {
                          return <li key={(index + 1 ^ ix + 1)} dangerouslySetInnerHTML={{ __html: value }} />
                        })}
                      </ul>
                    </Flip>
                  </TabPanel>
                })
              }
              <Box className={classes.divider} />
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.desc}>
            <Box className={classes.divider} />
            <Container maxWidth="sm">
              <form
                action="https://formspree.io/xleprdbr"
                method="POST"
              >
                <Typography variant="h5" align="center"
                  dangerouslySetInnerHTML={{ __html: strings.subscribe }}>
                </Typography>
                <Divider light />
                <Box className={classes.divider} />
                <FormControl className={classes.email}>
                  <TextField
                    required={true}
                    helperText={strings.emailTip}
                    name="_replyto" id="outlined-basic" label={strings.email} variant="outlined" />
                  <Button type="submit" variant="contained" color="secondary">
                    {strings.submit}
                  </Button>
                </FormControl>
                <Box className={classes.divider} />
              </form>
            </Container>
            <Box className={classes.divider} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(launchStyles)(LaunchPage);
