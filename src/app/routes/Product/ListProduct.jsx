import React, { Component } from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import SideBar from '../../../components/SideBar'
import { getAllProduct } from '../../../service/ProductService';


class ListProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [],
            openPopup: false,
            setOpenPopup: false,
        }
        this.deleteProject = this.deleteProject.bind(this)
    }
    componentDidMount(){
        let promise;
        promise = getAllProduct();
        promise
            .then(response => {
                this.setState({
                    product: response
                })
            }).catch(error => {
                console.log(error)
            });
    }

    deleteProject(id) {
    }

    createProduct(){
        window.location.replace('/create-product');
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
                                <h1 className="h3 mb-2 text-gray-800">Danh sách sản phẩm</h1>
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <div className='row col-md-12'>
                                            <div className='col-md-10'>
                                                <h6 className="m-0 font-weight-bold text-primary">Danh sách</h6>
                                            </div>
                                            <div className='col-md-2'>
                                                <button className='btn btn-primary' style={{'margin-left': '10px'}} onClick={() => this.createProduct()}>Thêm mới</button>
                                            </div>
                                        </div>
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
                                                        <th>STT</th>
                                                        <th>Mã sản phẩm</th>
                                                        <th>Tên sản phẩm</th>
                                                        <th>Trạng thái</th>
                                                        <th>Người tạo</th>
                                                        <th>Ngày tạo</th>
                                                        <th colSpan="2">Lựa chọn</th>
                                                    </tr>
                                                </thead>
                                                <tbody classNameName="list">
                                                    {this.state.product.map((products) => (
                                                        <tr key={products.id} className='text-center'>
                                                            <td>{products.id}</td>
                                                            <td>{products.code}</td>
                                                            <td>{products.name}</td>
                                                            <td>{products.status === true ? 'Đang hoạt động' : 'Khóa'}</td>
                                                            <td>{products.createName}</td>
                                                            <td>
                                                                {new Date(products.createDate).toLocaleDateString(
                                                                    'vn-VN'
                                                                )}
                                                            </td>
                                                            <td className="text-center">
                                                                    {/* <Link className="btn btn-sm btn-success" to={`/project-detail/${products.id}`}>
                                                                        View
                                                                    </Link> */}
                                                                    <i className='fa fa-edit'></i>
                                                            </td>
                                                            <td>
                                                                {/* <div className="col-lg-6 col-5 text-center">
                                                                    <button
                                                                        className="btn btn-sm btn-danger"
                                                                        onClick={() => this.deleteProject(products.id)}
                                                                    >
                                                                        Delete
                                                                    </button>
                                                                </div> */}
                                                                <i className='fa fa-trash' style={{'color' : 'red'}}></i>
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

export default ListProduct;