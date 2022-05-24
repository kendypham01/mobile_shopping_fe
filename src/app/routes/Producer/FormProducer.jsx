import React, { Component } from 'react';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import SideBar from '../../../components/SideBar';
import { showNotification } from '../../../service/NotificationService';
import { createProducer } from '../../../service/ProducerService';

class FormProducer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: '',
            name: '',
        }
        this.saveProducer = this.saveProducer.bind(this)
    }

    saveProducer = (e) => {
        e.preventDefault()
        let producer = {
            code: this.state.code,
            name: this.state.name
        }
        createProducer(producer).then(responese =>{
            showNotification('Thêm mới NSX thành công', 'success');
            window.location.replace('/list-producer')
        }).catch(error =>{
            console.log(error)
            showNotification('Thêm mới NSX thành công', 'danger');
        })
    }

    changeCode = (e) => {
        this.setState({ code: e.target.value })
    }

    changeName = (e) => {
        this.setState({ name: e.target.value })
    }

    clearData(){
        this.setState({
            code: '',
            name: '',
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
                                <form>
                                    <div class="form-group">
                                        <label>Mã NSX</label>
                                        <input
                                            className="form-control form-control-user"
                                            type="text"
                                            value = {this.state.code}
                                            onChange={this.changeCode}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>Tên NSX</label>
                                        <input
                                            className="form-control form-control-user"
                                            type="text"
                                            value={this.state.name}
                                            onChange={this.changeName}
                                        />
                                    </div>
                                                                    
                                    <div className="form-group">
                                        <button type='reset' className='btn btn-danger' onClick={() => this.clearData()}>Hủy bỏ</button>
                                        <button type="submit" className="btn btn-primary" onClick={this.saveProducer} style={{'margin-left': '10px'}}>
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

export default FormProducer;