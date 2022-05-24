import React, { Component } from 'react';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import SideBar from '../../../components/SideBar';
import axios from 'axios'

class FormProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: '',
            name: '',
            product: []
        }
        this.saveProject = this.saveProject.bind(this)
    }

    // componentDidMount(){
    //     let promise;
    //     promise = this.getListProducer();
    //     promise
    //         .then(response => {
    //             this.setState({
    //                 product: response
    //             })
    //         }).catch(error => {
    //             console.log(error)
    //         });
    // }

    saveProject = (e) => {
        e.preventDefault()
        let project = {
            projectName: this.state.projectName,
            projectLanguage: this.state.projectLanguage,
            createDate: this.state.createDate,
            updateDate: this.state.updateDate,
            expiredDate: this.state.expiredDate,
            username: localStorage.getItem('username'),
            userId: this.state.userId,
        }
        console.log('project => ' + JSON.stringify(project))
        axios.post('http://localhost:8080/api/project', project).then((res) => {
            console.log('Thành công')
            alert('Thành công')
            window.location.replace('/list-project')
        })
    }

    getListProducer(){
        let promise;
        promise = this.getListProducer();
        promise
            .then(response => {
                this.setState({
                    product: response
                })
            }).catch(error => {
                console.log(error)
            });
    }
    changeProjectName = (e) => {
        this.setState({ projectName: e.target.value })
    }

    changeProjectLanguage = (e) => {
        this.setState({ projectLanguage: e.target.value })
    }
    changeExpiredDate = (e) => {
        this.setState({ expiredDate: e.target.value })
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
                                <form>
                                    <div class="form-group">
                                        <label>Mã sản phẩm</label>
                                        <input
                                            className="form-control form-control-user"
                                            type="text"
                                            value={this.state.code}
                                            onChange={this.changeProjectName}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>Loại danh mục</label>
                                        <select className="form-control form-control-user">
                                            {this.state.product.map((products) => (
                                                <option value={products.code}>{products.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>NSX</label>
                                        <input
                                            className="form-control form-control-user"
                                            type="text"
                                            value={this.state.code}
                                            onChange={this.changeProjectName}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>Tên sản phẩm</label>
                                        <input
                                            className="form-control form-control-user"
                                            type="text"
                                            value={this.state.name}
                                            onChange={this.changeProjectLanguage}
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label>Số lượng</label>
                                        <input
                                            className="form-control form-control-user"
                                            type="number"
                                            value={this.state.name}
                                            onChange={this.changeProjectLanguage}
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label>Giá</label>
                                        <input
                                            className="form-control form-control-user"
                                            type="number"
                                            value={this.state.name}
                                            onChange={this.changeProjectLanguage}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <button type='reset' className='btn btn-danger'>Hủy</button>
                                        <button type="submit" className="btn btn-primary" onClick={this.saveProduct} style={{ 'margin-left': '10px' }}>
                                            Thêm mới
                                        </button>
                                    </div>
                                </form>
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

export default FormProduct;