import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.clientid =
      "929769958539-bs8dglor0tv3tt22emcq4a0o73frc70i.apps.googleusercontent.com";
    this.state = { user: "", isLoggedIn: false }; // Thêm biến isLoggedIn
  }

  loginThanhCong = (res) => {
    this.setState({ user: res.profileObj.name, isLoggedIn: true });

    // Chỉ chuyển trang nếu chưa chuyển trang trước đó
    if (!this.state.isLoggedIn) {
      setTimeout(() => {
        window.location.href = "/weather";
      }, 3000);
    }
  };

  render() {
    if (this.state.isLoggedIn) {
      // Kiểm tra biến isLoggedIn để quyết định có hiển thị nội dung đăng nhập hay đã đăng nhập thành công
      return (
        <>
          <b>Hi :{this.state.user}</b>
          <div>
            Welcom {this.state.user} to Weather-app
            <br></br>
          </div>
          <div> Chúng tôi sẽ chuyển trang cho bạn !
            
          </div>
        </>
      );
    } else {
      return (
        <div className="login-container">
          <h1>Welcome to Weather App</h1>
          <div id="signInButton">
            <GoogleLogin
              clientId={this.clientid}
              onSuccess={this.loginThanhCong}
              buttonText="Login with Google"
              isSignedIn={true}
            />
          </div>
        </div>
      );
    }
  }
}
