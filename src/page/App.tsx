import React, { useState, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import './css/App.css';
import './css/layout.css';
import { Tab, TabProps } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';

const originTabs: Array<string> = [
  'tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6', 'tab7', 'tab8', 'tab9'
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '100VH'
    },
    mainPaper: {
      padding: theme.spacing(0),
      color: theme.palette.text.secondary,
      height: '100VH'
    }
  })
);


interface TabPanelProps {
  children?: React.ReactNode;
  name: string;
  value: string
}

function TabPanel({ children, name, value }: TabPanelProps) {
  return (
    <div
      role="tab-panel"
      hidden={value !== name}
    >
      {value === name && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


interface closeTabProps extends TabProps {

}

interface closeTabAction {

}

function CloseTab({ label, value }: closeTabProps) {
  const cls = (label: any) => {
    return (
      <div>
        <span>{label}</span>
        <Icon>close</Icon>
      </div>
    );
  };
  return (
    <Tab
      label={cls(label)}
      value={value}
    />
  );
}

function App() {
  const [tabs, setTabs] = useState(originTabs);
  const classes = useStyles();
  const [value, setValue] = React.useState(tabs && tabs.length ? tabs[0] : '');

  const handleChange = (event: React.ChangeEvent<{}>, tab: string) => {
    console.log('click tab is ', tab);
    setValue(tab);
  };

  return (
    <div className={classes.root}>
      <CssBaseline/>

      <Grid container>
        <Grid item xs={3}>
          <Paper className={classes.paper}>side</Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.mainPaper}>
            <AppBar position="static" color={'default'}>
              <Tabs value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto">
                {
                  tabs.map((tab: string, ind: number) => <CloseTab
                    key={`${tab}-${ind}`}
                    label={tab}
                    value={tab}
                  />)
                }
              </Tabs>
            </AppBar>
            {
              tabs.map((tab: string, ind: number) => (
                <TabPanel key={`${tab}-${ind}`} name={tab} value={value}> {tab} </TabPanel>)
              )
            }
          </Paper>
        </Grid>
      </Grid>
    </div>

  )
    ;
}

export default App;
