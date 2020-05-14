import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';

const Request = () => {
    return (
        <div className="Request">
            <header>
                <h2>create a closure request:</h2>
            </header>
            <form>
            <Grid container justify="space-around" spacing={3}>
                <Grid item xs={12} sm={10}>
                    <Card variant="outlined">
                        <FormControlLabel
                            control={<Checkbox className="complexClosure" name="complexClosure" />}
                            label="Check for complex closure"
                        />
                        <FormControl>
                            <InputLabel>stuff</InputLabel>
                            <Select>
                                <MenuItem>43653</MenuItem>
                                <MenuItem>3443</MenuItem>
                                <MenuItem>688</MenuItem>
                                <MenuItem>3244</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel>more stuff</InputLabel>
                            <Select>
                                <MenuItem>dfbdfb</MenuItem>
                                <MenuItem>dfbfdbd</MenuItem>
                                <MenuItem>dfbddfb</MenuItem>
                                <MenuItem>dbfdbfdb</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel>other stuff</InputLabel>
                            <Select>
                                <MenuItem>v39u4bg93</MenuItem>
                                <MenuItem>osiv9wgh93</MenuItem>
                                <MenuItem>0efh9wiehv93hg93ig</MenuItem>
                                <MenuItem>ashcfidjkshgiweuuueu3</MenuItem>
                            </Select>
                        </FormControl>
                            <p>dropdown input of closure type</p>
                            <p>dropdown input of closure section</p>
                            <p>moment input of closure time</p>
                            <p>moment input of closure date</p>
                            <p>text input of closure purpose</p>
                            <p>text input of requestee email</p>
                            <p>verification of requestee email</p>
                    </Card>
                </Grid>
            </Grid>
            </form>
        </div>
    )
}
export default Request;