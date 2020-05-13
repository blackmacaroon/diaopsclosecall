import React from "react";
import Switch from "@material-ui/core/Switch";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Request = () => {
    return (
        <div className="Request">
            <header>
                <h2>Create a Closure Request:</h2>
            </header>
            <form>
                <FormControlLabel control={<Checkbox name="complexClosure" color="primary"/>}label="Is this a complex closure?"/>
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