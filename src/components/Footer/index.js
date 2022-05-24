import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; Your Website 2020</span>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;
