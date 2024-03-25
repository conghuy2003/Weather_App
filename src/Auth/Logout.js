import { Component } from "react";
import { GoogleLogout } from "react-google-login";

export default class LogOut extends Component {
    constructor(props) {
        super(props);
        this.clientid = '929769958539-bs8dglor0tv3tt22emcq4a0o73frc70i.apps.googleusercontent.com';
    }
    logoutSuccess = () => {
        alert('Logout success!');
        window.location.reload(true);
        window.location.href = '/';
    }
    render() {
        return (
            <div id="signOutButton">
                <GoogleLogout
                    clientId={this.clientid}
                    buttonText="Logout with google"
                    onLogoutSuccess={this.logoutSuccess}
                />
            </div>
        );
    }
}