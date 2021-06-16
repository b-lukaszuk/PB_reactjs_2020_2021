import React, { useState } from "react";
import "./LandingPage.css";
import Button from "../../components/Button";
import auth from "../../components/auth";

function LandingPage(props) {

    const [userName, setUserName] = useState("");
    const [userPassowrd, setUserPassword] = useState("");

    console.log(auth.isAuthenticated());

    let handleLogin = () => {
        if (userName.trim() !== "" & userPassowrd.trim() === "1234") {
            return auth.login(() => {
                props.history.push("/todos");
            })
        } else {
            alert("Wrong UserName or Password")
            return auth.login(() => {
                props.history.push("/");
            })

        }
    }

    return (
        <div>
            <div className="container">
                <div className="centered-div">
                    <h2>Enter Your data below and go to Your TODOS</h2>
                    <fieldset>
                        <legend>Your name</legend>
                        <input
                            maxLength="18"
                            placeholder="Enter Your Name"
                            type="text"
                            value={userName}
                            onChange={(e) => { setUserName(e.target.value) }}
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Your Password</legend>
                        <input
                            maxLength="18"
                            placeholder="Enter Your password"
                            type="password"
                            required
                            value={userPassowrd}
                            onChange={(e) => { setUserPassword(e.target.value) }}
                        />
                    </fieldset>
                    <br />
                </div>
            </div>
            <div className="container">
                <Button
                    className="normalBut"
                    onClick={handleLogin}
                    btnText="Log In"
                />
            </div>
        </div>
    );
}

export default LandingPage;
