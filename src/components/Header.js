import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1>
                        <strong> J.D. Sandifer </strong>
                    </h1>
                    <h2>
                         A Portland, Oregon software developer.
                    </h2>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
