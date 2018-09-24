import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/website.jpg'
import thumb02 from '../assets/images/thumbs/quote-api-site.jpg'
import thumb03 from '../assets/images/thumbs/code.jpg'
import thumb04 from '../assets/images/thumbs/code.jpg'
import thumb05 from '../assets/images/thumbs/ideas.jpg'
import thumb06 from '../assets/images/thumbs/lighting-design.jpg'

import full01 from '../assets/images/fulls/website.jpg'
import full02 from '../assets/images/fulls/quote-api-site.jpg'
import full03 from '../assets/images/fulls/code.jpg'
import full04 from '../assets/images/fulls/code.jpg'
import full05 from '../assets/images/fulls/ideas.jpg'
import full06 from '../assets/images/fulls/lighting-design.jpg'

const PROJECT_IMAGES = [
    { 
        id: '1', 
        src: full01, 
        thumbnail: thumb01, 
        caption: 'My Website & Blog', 
        description: 'I used GatsbyJS v2 to quickly re-design my site in a day.', 
        explanation: 'I spun this website up in about a day and finished adding content and my first blog post by the second day. It was very satisfying to see how much faster I could create a polished site by incorporating existing solutions and customizing them rather than trying to build from scratch (like I did with my first portfolio site.', 
        link: 'https://github.com/jdsandifer/developer-site'
    },
    { 
        id: '2', 
        src: full02, 
        thumbnail: thumb02, 
        caption: 'Random Quote API Site', 
        description: 'Accesses the Quotes on Design Rest API and displays quotes with ES6, Sass, and HTML5.', 
        explanation: 'See my code by clicking on the image.', 
        link: 'https://github.com/jdsandifer/random-quote-machine'
    },
    { 
        id: '3', 
        src: full03, 
        thumbnail: thumb03, 
        caption: 'Event Paperwork App', 
        description: 'A React app I helped implement at work', 
        explanation: 'I directed a redesign of the app architecture to include ReactJS on the frontend and move to an API for the backend to reduce coupling and speed up page load.', 
        link: 'https://github.com/jdsandifer/digital-paperwork'
    },
    { 
        id: '4', 
        src: full04, 
        thumbnail: thumb04, 
        caption: 'Presentation File Server', 
        description: 'Full stack work project using a LAMP stack and JS/CSS/HTML5 frontend', 
        explanation: 'I helped on this project across the entire stack: some backend, some frontend, and lots of little bug fixes and optimizations. I also helped port the front end to Mac for better usability for all presenters.', 
        link: 'https://github.com/jdsandifer/PresentationFileServer'
    },
    { 
        id: '5', 
        src: full05, 
        thumbnail: thumb05, 
        caption: 'My Blog', 
        description: 'Read my thoughts on software development! (and other stuff, too)', 
        explanation: "I'll use my blog to share my thoughts about software development in more depth than will comfortably fit in a tweet. I plan to post about frameworks I like and why, things I've learned recently, and other thoughts I think are worth sharing. I'll probably digress with a few posts aobut other areas of my life, too - Parkour, theatre (my first career), LEGO, and more.", 
        link: './hello-world/'
    },
    { 
        id: '6', 
        src: full06, 
        thumbnail: thumb06, 
        caption: 'My First Career - Lighting Design', 
        description: 'I worked for 8 years as a professional lighting designer in Portland, OR.', 
        explanation: "Click or tap on the image to see more photos of my work!", 
        link: 'http://www.jdsandifer.com/lighting-designer/index.html'
    }
];

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
                            question about a tricky programming issue, feel free to contact me.
                        </p>
                        <p>
                            You may use any of the methods listed below, although I recommend email - via the link or the form - for all messages except 
                            pressing issues. Text my phone for anything that you need me to respond to in less than one business day. (Text is best as I'm not always able to answer my phone.)
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