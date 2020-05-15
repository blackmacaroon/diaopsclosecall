import 'date-fns';
import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import TodayTwoToneIcon from '@material-ui/icons/TodayTwoTone';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AccessAlarmTwoToneIcon from '@material-ui/icons/AccessAlarmTwoTone';
import { KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';


export default function Request(){
    const [selectedDate, setSelectedDate] = React.useState(new Date().toString());
    const handleDateChange = (date) => {
        setSelectedDate(date)
    };
    return (
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
                            keyboardIcon={ (
                                <TodayTwoToneIcon/>
                            )}
                        />
                        <KeyboardTimePicker
                            ampm={false}
                            margin="normal"
                            id="time-picker"
                            label="time"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                            keyboardIcon={ (
                                <AccessAlarmTwoToneIcon/>
                            )}
                            
                        />
                        
                    </Card>
                        <p>text input of closure purpose</p>
                        <p>text input of requestee email</p>
                        <p>verification of requestee email</p>
                </Grid>
            </Grid>
            </form>
        </div>
    )
}