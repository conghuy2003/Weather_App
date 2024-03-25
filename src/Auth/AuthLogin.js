import React from "react";


import { gapi } from "gapi-script";
import Login from "./Login";
import LogOut from "./Logout";

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.clientid = '929769958539-bs8dglor0tv3tt22emcq4a0o73frc70i.apps.googleusercontent.com';
    }
    componentDidUpdate() {
        gapi.load('client:auth2', () => {
            gapi.client.init({
                clientId: this.clientid
            });
        });
    }
    render() {
        return (
            <>
               <Login/>
               <LogOut/>
            </>
        );
    }
}