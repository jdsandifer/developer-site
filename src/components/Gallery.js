import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';
import ProjectLinks from './ProjectLinks.js';

class Gallery extends Component {
    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
            currentLink: null,
            currentCodeLink: null
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoImage = this.gotoImage.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.renderProjectLinks = this.renderProjectLinks.bind(this);
    }
    openLightbox(index, event, link, codeLink) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
            currentLink: link,
            currentCodeLink: codeLink
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
            currentLink: null,
            currentCodeLink: null
        });
    }
    gotoPrevious() {
        const newIndex = this.state.currentImage - 1
        this.setState({
            currentImage: newIndex,
            currentLink: this.props.images[newIndex].link,
            currentCodeLink: this.props.images[newIndex].codeLink
        });
    }
    gotoNext() {
        const newIndex = this.state.currentImage + 1
        this.setState({
            currentImage: newIndex,
            currentLink: this.props.images[newIndex].link,
            currentCodeLink: this.props.images[newIndex].codeLink
        });
    }
    gotoImage(index) {
        this.setState({
            currentImage: index,
            currentLink: this.props.images[index].link,
            currentCodeLink: this.props.images[index].codeLink
        });
    }
    handleClickImage() {
        const bestLink = this.state.currentLink || this.state.currentCodeLink
        if (typeof window !== 'undefined') {
            window.open(bestLink)
        }
    }
    renderGallery() {
        const { images } = this.props;

        if (!images) return;

        const gallery = images.map((obj, i) => {
            return (
                <article className="6u 12u$(xsmall) work-item" key={i}>
                    <a
                        className="image fit thumb"
                        href={obj.src}
                        onClick={(e) => this.openLightbox(i, e, obj.link, obj.codeLink)}
                    >
                        <img src={obj.thumbnail} />
                    </a>

                    <h3>{obj.caption}</h3>
                    <p>{obj.description}</p>
                </article>
            );
        });

        return (
            <div className="row">
                {gallery}
            </div>
        );
    }
    renderProjectLinks() {
        return <ProjectLinks key={1} demoLink={this.state.currentLink} codeLink={this.state.currentCodeLink} />
    }
    render() {
        return (
            <div>
                {this.renderGallery()}
                <Lightbox
                    currentImage={this.state.currentImage}
                    customControls={[this.renderProjectLinks()]}
                    images={this.props.images}
                    isOpen={this.state.lightboxIsOpen}
                    onClickImage={this.handleClickImage}
                    onClickNext={this.gotoNext}
                    onClickPrev={this.gotoPrevious}
                    onClickThumbnail={this.gotoImage}
                    onClose={this.closeLightbox}
                />
            </div>
        );
    }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    images: PropTypes.array
};

export default Gallery;
