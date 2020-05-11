import React from "react";

const Admin = () => {
    return (
        <div className="Admin">
            <form className="admin-login-form">
                <label>
                    username:
                    <input type="text" name="username" />
                </label>
                <label>
                    password:
                    <input type="password" name="password" />
                </label>
            </form>
            <p>list of current closure requests</p>
            <p>pending a successful login, no options besides view </p>
            <p>approve/deny only is admin is logged in</p>
        </div>
    )
}
export default Admin;