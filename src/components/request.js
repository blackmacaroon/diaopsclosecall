import 'date-fns';
import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import DateFnsUtils from '@date-io/date-fns';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import FormHelperText from '@material-ui/core/FormHelperText';
import { IconButton, InputAdornment } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';


export default function Request(){
    const [selectedDate, setSelectedDate] = React.useState(new Date().toString());
    const handleDateChange = (date) => {
        setSelectedDate(date)
    };
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className="Request">
            <header>
                <h2>create a closure request:</h2>
            </header>
            <form>
            <Grid container justify="space-around" spacing={3}>
                <Grid item xs={12} sm={10}>
                    <Card className="form" variant="outlined">
                        <FormControlLabel
                            control={<Checkbox className="complexClosure" name="complexClosure" />}
                            label="Check for complex closure"
                        />
                        <FormControl className="dropdown">
                            <InputLabel>runway</InputLabel>
                            <Select>
                                <MenuItem>436533433535454545</MenuItem>
                                <MenuItem>3443</MenuItem>
                                <MenuItem>688</MenuItem>
                                <MenuItem>3244</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className="dropdown">
                            <InputLabel>taxiway</InputLabel>
                            <Select>
                                <MenuItem>NKDN</MenuItem>
                                <MenuItem>JTJT3</MenuItem>
                                <MenuItem>LS OSIU</MenuItem>
                                <MenuItem>NDNNEN4</MenuItem>
                            </Select>
                            <FormHelperText>between</FormHelperText>
                        </FormControl>
                        <FormControl className="dropdown">
                        <InputLabel>taxiway</InputLabel>
                            <Select>
                                <MenuItem>NKDN</MenuItem>
                                <MenuItem>JTJT3</MenuItem>
                                <MenuItem>LS OSIU</MenuItem>
                                <MenuItem>NDNNEN4</MenuItem>
                            </Select>
                            <FormHelperText>and</FormHelperText>
                        </FormControl>
                        <KeyboardDatePicker
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="time"
                            value={selectedDate}
                            onChange={handleDateChange}
                            InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton>
                                      <WatchLaterIcon />
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                        
                    </Card>
                        <p>text input of closure purpose</p>
                        <p>text input of requestee email</p>
                        <p>verification of requestee email</p>
                
                </Grid>
            </Grid>
            </form>
        </div>
        </MuiPickersUtilsProvider>
    )
}