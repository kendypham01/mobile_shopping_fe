import React, { Component } from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import SideBar from '../../../components/SideBar'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { getAllOrders } from '../../../service/OrdersService';


class ListOrders extends Component {
    constructor(props) {
        super(props)
        this.state = {
            order: [],
        }
        this.getOrderItem = this.getOrderItem.bind(this)
    }
    componentDidMount(){
        let promise;
        promise = getAllOrders();
        promise
            .then(response => {
                this.setState({
                    order: response
                })
            }).catch(error => {
                console.log(error)
            });
    }

    getOrderItem(orders){
        window.location.replace('/list-order-item/' + orders.id);
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
                                <h1 className="h3 mb-2 text-gray-800">Danh sách đơn hàng</h1>
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
                                                    <tr className='text-center'>
                                                        <th>Id</th>
                                                        <th>Tên khách hàng</th>
                                                        <th>SĐT</th>
                                                        <th>Địa chỉ</th>
                                                        <th>Trạng thái</th>
                                                        <th>Ngày tạo</th>
                                                        <th>Xem chi tiết</th>
                                                    </tr>
                                                </thead>
                                                <tbody classNameName="list">
                                                    {this.state.order.map((orders) => (
                                                        <tr key={orders.id} className='text-center'>
                                                            <td>{orders.id}</td>
                                                            <td>{orders.name}</td>
                                                            <td>{orders.phone}</td>
                                                            <td>{orders.address}</td>
                                                            <td>{orders.status === 0 ? 'Chưa xử lý' : 'Đã xử lý'}</td>
                                                            <td>
                                                                {new Date(orders.orderDate).toLocaleDateString(
                                                                    'vn-VN'
                                                                )}
                                                            </td>
                                                            <td className="text-center">
                                                                    <i className='fa fa-eye align-center' onClick={() => this.getOrderItem(orders)}></i>
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

export default ListOrders;