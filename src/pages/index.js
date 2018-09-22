import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/code.jpeg'
import thumb02 from '../assets/images/thumbs/code.jpeg'
import thumb03 from '../assets/images/thumbs/code.jpeg'
import thumb04 from '../assets/images/thumbs/code.jpeg'
import thumb05 from '../assets/images/thumbs/code.jpeg'
import thumb06 from '../assets/images/thumbs/code.jpeg'

import full01 from '../assets/images/fulls/code.jpeg'
import full02 from '../assets/images/fulls/code.jpeg'
import full03 from '../assets/images/fulls/code.jpeg'
import full04 from '../assets/images/fulls/code.jpeg'
import full05 from '../assets/images/fulls/code.jpeg'
import full06 from '../assets/images/fulls/code.jpeg'

const PROJECT_IMAGES = [
    { 
        id: '1', 
        src: full01, 
        thumbnail: thumb01, 
        caption: 'My Portfolio Website & Blog', 
        description: 'Used GatsbyJS v2 to quickly re-design my site', 
        explanation: 'I spun this website up in about a day and finished adding content and my first blog post by the second day. It was very satisfying to see how much faster I could create a polished site by incorporating existing solutions and customizing them rather than trying to build from scratch (like I did with my first portfolio site.', 
        link: 'https://github.com/jdsandifer'
    },
    { 
        id: '2', 
        src: full02, 
        thumbnail: thumb02, 
        caption: 'React Site', 
        description: 'Built with ReactJS, CSS, and HTML5', 
        explanation: 'See my code by clicking on the image.', 
        link: 'https://github.com/jdsandifer'
    },
    { 
        id: '3', 
        src: full03, 
        thumbnail: thumb03, 
        caption: 'Event Paperwork App', 
        description: 'A React app I helped on at work', 
        explanation: 'I directed a redesign of the app architecture to include ReactJS on the frontend and move to an API for the backend to reduce coupling and speed up page load.', 
        link: 'https://github.com/jdsandifer'
    },
    { 
        id: '4', 
        src: full04, 
        thumbnail: thumb04, 
        caption: 'Presentation File Server', 
        description: 'Full stack work project using a LAMP stack', 
        explanation: 'I helped on this project across the entire stack: some backend, some frontend, and lots of little bug fixes and optimizations. I also helped port the front end to Mac for better usability for all presenters.', 
        link: 'https://github.com/jdsandifer'
    }
];
    /*
    { 
        id: '5', 
        src: full05, 
        thumbnail: thumb05, 
        caption: 'Photo 5', 
        description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.', 
        explanation: 'More detail', 
        link: 'https://github.com/jdsandifer'
    },
    { 
        id: '6', 
        src: full06, 
        thumbnail: thumb06, 
        caption: 'Photo 6', 
        description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.', 
        explanation: 'More detail', 
        link: 'https://github.com/jdsandifer'
    }
];*/

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }

    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }

    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }

    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>JavaScript and React Developer</h2>
                        </header>
                        <p>
                            I'm a <strong> problem solver </strong> who loves the 
                            challenge of creating the most readable, testable, and 
                            maintainable code possible.
                        </p>
                        <p>
                            Improvement and <strong> efficiency </strong> top my 
                            list of priorities 
                            whether I'm sorting out a legacy code base, 
                            architecting a new app, or testing existing software 
                            to ensure quality.
                        </p>
                        <p>
                            I have experience as an Android Developer with 
                            <strong> published apps </strong> in the Google Play store, 
                            and I do 
                            full stack development using JavaScript-based 
                            frameworks and libraries.
                        </p>
                        <p>
                            I'm always looking for the next <strong> best practice </strong> 
                            to add to my software development tool belt.</p>
                        {/*
                        <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                        */}
                    </section>

                    <section id="two">
                        <h2>Selected Work</h2>

                        <Gallery images={PROJECT_IMAGES.map(({ id, src, thumbnail, caption, description, explanation, link }) => ({
                            src,
                            thumbnail,
                            caption,
                            description,
                            explanation,
                            link
                        }))} />

                        {/*}
                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    */}
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>
                            Whether it's to discuss a new position, ask me what 
                            Portland area meetups I recomment, or even ask me a 
                            question about a tricky programming issue, feel free to 
                            use any of the contact methods listed below.
                        </p>
                        <p>
                            I  recommend email for general contacts and phone for 
                            pressing issues.
                        </p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Email" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home">
                                            <span className="label">Address</span>
                                        </h3>
                                        Hillsboro, OR<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        507-993-8636
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">sandifer.jd@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`