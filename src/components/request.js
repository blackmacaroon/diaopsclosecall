import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const Request = () => {
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
                            <InputLabel>stuff</InputLabel>
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
                        
                        
                    </Card>
                            <p>moment input of closure time</p>
                            <p>moment input of closure date</p>
                            <p>text input of closure purpose</p>
                            <p>text input of requestee email</p>
                            <p>verification of requestee email</p>
                    
                </Grid>
            </Grid>
            </form>
        </div>
    )
}
export default Request;