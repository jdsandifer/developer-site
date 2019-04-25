import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li>
                            <a href="https://twitter.com/jdsandifer" className="icon fa-twitter">
                                <span className="label">Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/jdsandifer" className="icon fa-github">
                                <span className="label">Github</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jdsandifer/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li>
                            <a href="mailto:sandifer.jd@gmail.com" className="icon fa-envelope-o">
                                <span className="label">Email</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; 2018 & 2019 J.D. Sandifer</li>
                        <li>Design:&nbsp;
                            <a href="http://html5up.net">
                                HTML5 UP
                            </a>
                        </li>
                        <li>Photos:&nbsp;
                            <a href="https://www.pexels.com/">
                                PEXELS
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
