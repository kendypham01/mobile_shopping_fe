import React, { Component } from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import SideBar from '../../../components/SideBar'
import Axios from 'axios'
import { Link } from 'react-router-dom'

class ListUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [],
        }
        this.deleteUser = this.deleteUser.bind(this)
    }

    componentDidMount() {
        const config = {
            header: {
                Authorization: 'Bearer' + localStorage.getItem('accessToken'),
            },
        }
        Axios.get('http://localhost:8080/api/user', config).then((res) => {
            this.setState({
                user: res.data,
            })
        })
    }

    deleteUser(id) {
        const config = {
            header: {
                Authorization: 'Bearer' + localStorage.getItem('accessToken'),
            },
        }
        Axios.delete('http://localhost:8080/api/user/' + id, config)
            .then((res) => {
                alert('Thành công')
                this.componentDidMount()
            })
            .catch(error =>{
                console.log('error: ', error)
                alert('Thất bại')
            })
    }

    render() {
        return (
            <div id="page-top">
                <div id="wrapper">
                    <SideBar></SideBar>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Header></Header>
                            <div className="container-fluid">
                                <h1 className="h3 mb-2 text-gray-800">Danh sách tài khoản</h1>
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Danh sách</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table
                                                className="table table-bordered"
                                                id="dataTable"
                                                width="100%"
                                                cellspacing="0"
                                            >
                                                <thead>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Tên đăng nhập</th>
                                                        <th>Họ và tên</th>
                                                        <th>Email</th>
                                                        <th>CreateDate</th>
                                                        <th colSpan="2" className="text-center">
                                                            Lựa chọn
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody classNameName="list">
                                                    {this.state.user.map((users) => (
                                                        <tr key={users.id}>
                                                            <td>{users.id}</td>
                                                            <td>{users.username}</td>
                                                            <td>{users.fullName}</td>
                                                            <td>{users.email}</td>
                                                            <td>
                                                                {new Date(users.createDate).toLocaleDateString('vn-VN')}
                                                            </td>
                                                            <td className="text-center">
                                                                <div className="col-lg-6 col-5 text-center">
                                                                    <Link className="btn btn-sm btn-success" to={`/`}>
                                                                        View
                                                                    </Link>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="col-lg-6 col-5 text-center">
                                                                    <button
                                                                        className="btn btn-sm btn-danger"
                                                                        onClick={() => this.deleteUser(users.id)}
                                                                    >
                                                                        Delete
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer></Footer>
                    </div>
                </div>
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>
            </div>
        )
    }
}

export default ListUser
