import React from "react";
import Grid from "@material-ui/core/Grid";
import Card  from "@material-ui/core/Card";
import CardContent  from "@material-ui/core/CardContent";

const Schedule = () => {
    return (
        <div className="Schedule">
             <h2>approved pavement closures</h2>
             <Grid container justify="space-around" spacing={3}>
                 <Grid item xs={12}md={5}>
                     <Card variant="outlined">
                         <CardContent>think weather app, this is today's forecast</CardContent></Card></Grid>
                 <Grid item xs={12}md={11}>
                     <Card variant="outlined">
                        <CardContent>underneath is the forecast for the next few days
                            <Grid container justify="space-evenly">
                                <Grid item xs={9} sm={4}>
                                    <Card variant="outlined">tomorrow</Card>
                                </Grid>
                                <Grid item xs={9} sm={4}>
                                    <Card variant="outlined">next day</Card>
                                </Grid>
                                <Grid item xs={9} sm={4}>
                                    <Card variant="outlined">day after</Card>
                                </Grid>
                            </Grid>    
                        </CardContent></Card></Grid>
                 <Grid item xs={12} md={11}>
                     <Card variant="outlined">
                        <CardContent>bottom is month by month, including ability to jump to date, past or future
                            <Grid container>
                                <Grid></Grid>
                            </Grid>
                        </CardContent></Card></Grid>
                 <Grid item xs={12} md={11}>
                     <Card variant="outlined">
                         <CardContent>(ask phil how long to keep track of history)</CardContent></Card></Grid>
             </Grid>
             
        </div>
    )
}
export default Schedule;