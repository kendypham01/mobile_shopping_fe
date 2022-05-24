import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

class SideBar extends Component {
    render() {
        return (
            <Router>
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                        <div className="sidebar-brand-icon rotate-n-15">
                        </div>
                        <div className="sidebar-brand-text mx-3">
                            Mobile Shopping
                        </div>
                    </a>
                    <hr className="sidebar-divider my-0" />
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                            <i className="fas fa-fw fa-home"></i>
                            <span>Trang chủ</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link collapsed"
                            href="/list-category"
                        >
                            <i className="fas fa-fw fa-tasks"></i>
                            <span>Quản lý danh mục</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a
                            className="nav-link collapsed"
                            href="/list-producer"
                        >
                            <i className="fas fa-fw fa-university"></i>
                            <span>Quản lý NSX</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="/list-product"
                        >
                            <i className="fas fa-fw fa-server"></i>
                            <span>Quản lý sản phẩm</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="/list-orders"
                        >
                            <i className="fas fa-fw fa-cart-plus"></i>
                            <span>Quản lý đơn hàng</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="/list-user"
                        >
                            <i className="fas fa-fw fa-users"></i>
                            <span>Quản lý tài khoản</span>
                        </a>
                    </li>
                </ul>
            </Router>
        )
    }
}

export default SideBar
