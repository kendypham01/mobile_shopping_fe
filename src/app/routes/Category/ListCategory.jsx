import React, { Component } from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import SideBar from '../../../components/SideBar'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { getAll } from '../../../service/CategoryService';
import Popup from '../../../components/Popup/Popup'
import FormProject from '../Project/FormProject'


class ListCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: [],
            openPopup: false,
            setOpenPopup: false,
        }
        
        this.deleteProject = this.deleteProject.bind(this)
        this.openInPopup = this.openInPopup.bind(this)
    }

    componentDidMount() {
        let promise;
        promise = getAll();
        promise
            .then(response => {
                this.setState({
                    category: response
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
        Axios.delete('http://localhost:8080/api/category/' + id, config)
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

    createCategory(){
        window.location.replace('/create-category')
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
                                <h1 className="h3 mb-2 text-gray-800">Danh sách category</h1>
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <div className='row col-md-12'>
                                            <div className='col-md-10'>
                                                <h6 className="m-0 font-weight-bold text-primary">Danh sách</h6>
                                            </div>
                                            <div className='col-md-2'>
                                                <button className='btn btn-primary' onClick={() => this.createCategory()}>Thêm mới</button>
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
                                                        <th >Id</th>
                                                        <th>Mã danh mục</th>
                                                        <th>Tên danh mục</th>
                                                        <th>Trạng thái</th>
                                                        <th>Người tạo</th>
                                                        <th>Ngày tạo</th>
                                                        <th colSpan="2">Lựa chọn</th>
                                                    </tr>
                                                </thead>
                                                <tbody classNameName="list">
                                                    {this.state.category.map((categorys) => (
                                                        <tr key={categorys.id} className='text-center'>
                                                            <td>{categorys.id}</td>
                                                            <td>{categorys.code}</td>
                                                            <td>{categorys.name}</td>
                                                            <td>{categorys.status == true ? 'Đang hoạt động' : 'Khóa'}</td>
                                                            <td>{categorys.createName}</td>
                                                            <td>
                                                                {new Date(categorys.createDate).toLocaleDateString(
                                                                    'vn-VN'
                                                                )}
                                                            </td>
                                                            <td className="text-center">
                                                                    <i className='fa fa-edit' style={{'cursor': 'pointer'}} onClick={() => {this.openInPopup(categorys)}}></i>
                                                                    {/* <Link className="btn btn-sm btn-success" to={`/project-detail/${categorys.id}`}>
                                                                        View
                                                                    </Link> */}
                                                            </td>
                                                            <td>
                                                                    <i className='fa fa-trash' style={{'cursor': 'pointer', 'color': 'red'}}></i>
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
                        {/* popup */}
                        <Footer></Footer>
                    </div>
                    <Popup
                        title="Chi tiết danh mục"
                        openPopup={this.state.openPopup}
                        setOpenPopup={this.state.setOpenPopup}
                    >
                        <FormProject/>
                    </Popup>
                </div>
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>
            </div>
        )
    }
}

export default ListCategory;