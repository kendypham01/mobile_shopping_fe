import React, { Component } from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import SideBar from '../../../components/SideBar'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { getAllProducer } from '../../../service/ProducerService';


class ListProducer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            producer: [],
            openPopup: false,
            setOpenPopup: false,
        }
        this.deleteProject = this.deleteProject.bind(this)
    }
    componentDidMount() {
        let promise;
        promise = getAllProducer();
        promise
            .then(response => {
                this.setState({
                    producer: response
                })
            }).catch(error => {
                console.log(error)
            });
    }

    deleteProject(id) {
        const config = {
            header: {
                Authorization: 'Bearer' + localStorage.getItem('accessToken'),
            },
        }
        Axios.delete('http://localhost:8080/api/producers/' + id, config)
            .then((res) => {
                alert('Thành công')
                this.componentDidMount()
            })
            .catch((error) => {
                console.log('error', error)
                alert('Thất bại')
            })
    }

    openInPopup(categorys) {
        console.log(categorys);
        this.setState({
            openPopup: true,
            setOpenPopup: true,
        })
    }

    createProducer(){
        window.location.replace('/create-producer')
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
                                <h1 className="h3 mb-2 text-gray-800">Danh sách NSX</h1>
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <div className='row col-md-12'>
                                            <div className='col-md-10'>
                                                <h6 className="m-0 font-weight-bold text-primary">Danh sách</h6>
                                            </div>
                                            <div className='col-md-2'>
                                                <button className='btn btn-primary' onClick={() => this.createProducer()}>Thêm mới</button>
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
                                                        <th>Id</th>
                                                        <th>Code</th>
                                                        <th>Tên danh mục</th>
                                                        <th>Trạng thái</th>
                                                        <th>Người tạo</th>
                                                        <th>Ngày tạo</th>
                                                        <th colSpan="2">Lựa chọn</th>
                                                    </tr>
                                                </thead>
                                                <tbody classNameName="list">
                                                    {this.state.producer.map((producers) => (
                                                        <tr key={producers.id} className='text-center'>
                                                            <td>{producers.id}</td>
                                                            <td>{producers.code}</td>
                                                            <td>{producers.name}</td>
                                                            <td>{producers.status === true ? 'Đang hoạt động' : 'Khóa'}</td>
                                                            <td>{producers.createName}</td>
                                                            <td>
                                                                {new Date(producers.createDate).toLocaleDateString(
                                                                    'vn-VN'
                                                                )}
                                                            </td>
                                                            <td className="text-center">
                                                                    {/* <Link className="btn btn-sm btn-success" to={`/project-detail/${producers.id}`}>
                                                                        View
                                                                    </Link> */}
                                                                    <i className='fa fa-edit'></i>
                                                            </td>
                                                            <td>
                                                                    {/* <button
                                                                        className="btn btn-sm btn-danger"
                                                                        onClick={() => this.deleteProject(producers.id)}
                                                                    >
                                                                        Delete
                                                                    </button> */}
                                                                    <i className='fa fa-trash' style={{'color': 'red'}}></i>
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
                {/* <Popup
                        title="Thêm mới danh mục"
                        openPopup={this.state.openPopup}
                        setOpenPopup={this.state.setOpenPopup}
                    >
                    <FormProject/>
                </Popup> */}
            </div>
        )
    }
}

export default ListProducer;