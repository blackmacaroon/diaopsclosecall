import React from "react";
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
            <FormControlLabel
                control={<Checkbox className="complexClosure" name="complexClosure" />}
                label="Check for complex closure"
            />
                <p>dropdown input of closure type</p>
                <p>dropdown input of closure section</p>
                <p>moment input of closure time</p>
                <p>moment input of closure date</p>
                <p>text input of closure purpose</p>
                <p>text input of requestee email</p>
                <p>verification of requestee email</p>
            </form>
        </div>
    )
}
export default Request;