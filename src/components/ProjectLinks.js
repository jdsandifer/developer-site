import React from 'react'

const styles = {
    a: {
        marginRight: "30px"
    }
}
const ProjectLinks = ({ demoLink, codeLink }) => {
    const demoA = demoLink ? <a style={styles.a} href={demoLink} target="_blank">See it Live</a> : null;
    const codeA = codeLink ? <a style={styles.a} href={codeLink} target="_blank">See the Code</a> : null;
    return (
        <div>
            {demoA}
            {codeA}
        </div>
    )
}

export default ProjectLinks
