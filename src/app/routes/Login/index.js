import React, { Component } from 'react'
import { login } from '../../../service/LoginService'
import 'react-notifications-component/dist/theme.css';
import { showNotification } from '../../../service/NotificationService';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    setParam = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    login = () => {
        var username = this.state.username;
        var password = this.state.password;
        login(username, password)
            .then(response => {
                localStorage.setItem('accessToken', response.token);
                localStorage.setItem('currentUser', response.currentUser);
                showNotification('Đăng nhập thành công', 'success');
                window.location.replace("/")
            }).catch(error => {
                console.log(error)
                showNotification('Đăng nhập thất bại!', 'danger');
            });

    }

    render() {
        return (
            <div className="bg-gradient-primary">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-10 col-lg-12 col-md-9">
                            <div class="card o-hidden border-0 shadow-lg my-5">
                                <div class="card-body p-0">
                                    <div class="row">
                                        {/* <div class="col-lg-6 d-none d-lg-block bg-login-image"></div> */}
                                        <div class="col-lg-12">
                                            <div class="p-5">
                                                <div class="text-center">
                                                    <h1 class="h4 text-gray-900 mb-4 text-text-uppercase">Đăng nhập</h1>
                                                </div>
                                                <form class="user">
                                                    <div class="form-group">
                                                        <input
                                                            type="text"
                                                            class="form-control form-control-user"
                                                            placeholder="Nhập username"
                                                            onChange={this.setParam}
                                                            name="username"
                                                        />
                                                    </div>
                                                    <div class="form-group">
                                                        <input
                                                            type="password"
                                                            class="form-control form-control-user"
                                                            placeholder="Nhập password"
                                                            onChange={this.setParam}
                                                            name="password"
                                                        />
                                                    </div>
                                                    <button class="btn btn-primary btn-user btn-block" type="button" onClick={this.login}>
                                                        Đăng nhập
                                                    </button>
                                                    <hr />
                                                    <a class="btn btn-google btn-user btn-block">
                                                        <i class="fab fa-google fa-fw"></i> Login with Google
                                                    </a>
                                                    <a class="btn btn-facebook btn-user btn-block">
                                                        <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                    </a>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
