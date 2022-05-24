import React, { Component } from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import SideBar from '../../../components/SideBar'
import { getOrderItem } from '../../../service/OrderItemsService'


class OrderItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            orderItems: [],
        }
    }
    componentDidMount() {
        let promise;
        promise = getOrderItem(this.state.id);
        promise
            .then(response => {
                this.setState({
                    orderItems: response
                })
            }).catch(error => {
                console.log(error)
            });
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
                                <h1 className="h3 mb-2 text-gray-800">Chi tiết đơn hàng</h1>
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Danh sách sản phẩm mua</h6>
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
                                                        <th>STT</th>
                                                        <th>Mã sản phẩm</th>
                                                        <th>Tên sản phẩm</th>
                                                        <th>Số lượng</th>
                                                        <th>Giá tiền</th>
                                                    </tr>
                                                </thead>
                                                <tbody classNameName="list">
                                                    {this.state.orderItems.map((orderItem) => (
                                                        <tr key={orderItem.id}>
                                                            <td>{orderItem.id}</td>
                                                            <td>{orderItem.productCode}</td>
                                                            <td>{orderItem.productName}</td>
                                                            <td>{orderItem.quantity}</td>
                                                            <td>{orderItem.price}</td>
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

export default OrderItems;