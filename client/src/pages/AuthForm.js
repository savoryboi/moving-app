import { useState } from "react";

function AuthForm () {

    return(
        <div className="auth-form-div">
            <form id="authForm">
                <label>Username</label>
                <input type="text" placeholder="username"></input>
                <label>Username</label>
                <input type="password" placeholder="password"></input>
            </form>
        </div>
    )
}