import React from 'react';
import Grid from '@material-ui/core/Grid/index';
import Paper from '@material-ui/core/Paper/index';
import Typography from '@material-ui/core/Typography/index';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
   title: {
       color: "#1a237e",
       fontWeight: "bold",
       textAlign: "center",
   },
    value: {
       textAlign: "center"
    }
});

export const WeatherPaper = ({title, value, unit}) => {
    let styles = useStyles();
    return (
        <Grid item sm={3} lg={4}>
            <Paper>
                <Typography component="h4" className={styles.title}>
                    {title}
                </Typography>
                <Typography component="p" className={styles.value}>
                    {value} {unit}
                </Typography>
            </Paper>
        </Grid>
    );
};
