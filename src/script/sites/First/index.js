import { Heading } from "./../../components/Organisms/Heading/Index.js";
import { Content } from "./../../components/Organisms/Content/Index.js";

const styles = `
@media print {
    @page { margin: 0; }
    body { 
        margin: 1.6cm; 
    }
    .job-element, .education-item, .skill-item, .socials {
        page-break-inside: avoid;
    }
    
}

body {
    margin: 0;
    font-style: normal;
    font-family: 'Corbel';
    font-size: 14px;
    background-color: #EEEEEE;
}

a {
    color: #334257
}

.app {
    height: 100%;
}

/* General Classes */
.section-headline{
    letter-spacing: 0.25rem;
    font-size: 1.1rem;
}

/* Title */
.title-section {
    display: flex;
    background: #FFFFFF;
    color: #494041;
    padding: 1.5rem;
}

.title-portrait {
    float: right;
    flex: auto;
    border-radius: 50%;
    max-width: 7rem;
    height: 7rem;
    background-position: center;
    background:  no-repeat;
    background-size: 100%;
}

.title-textbox{
    flex: auto;
    text-align: bottom;
}

.title {
    font-size: 2.5rem;
    margin-bottom: 0;
    font-family: 'Rockwell';
}

.sub-title{
    font-size: 1.5rem;
    font-family: 'Rockwell';
}

/* Content */
.content-section {
    color: #334257 !important;
    padding: 1.5rem;
    display: flex;
    width: calc(100% - 4rem);
}

.main-content {
    flex-grow: 1;
    padding-right: 1rem;
    max-width: 75%;
    height: 100%;
}

.side-information {
    border-left: 1px solid lightgray;
    padding-left: 1rem;
    flex-grow: 1;
    max-width: 25%;
    display: flex;
    flex-direction: column;
    min-height: 100%;
}

/* introduction */
.introduction-headline {
    margin-top: 0;
    margin-bottom: 0.5rem;
}
.introduction {
    border-bottom: 1px solid lightgray;
    padding-bottom: 0.5rem;
}
.introduction-text {
    margin-top: 0;
    margin-bottom: 0.5rem;
}


/* Experience */
.experience-title {
    margin-bottom: 0rem;     
}

.job-element {
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
}

.job-title {
    margin: 0.1rem 0;
}

.job-subtitle {
    display: block;
    font-size: 0.8rem;
    margin: 0;
    border-bottom: 1px solid lightgray;
    width: 100%;
}

.job-description {
    margin: 0;
}

.job-tasklist {
    margin-top: 0.5rem;
}

.job-task-item {
    list-style-type: square;
}

/* Personal Information */
.personal-information {
    padding-top: 1.5rem;
    flex-shrink: 1;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid lightgray;
    margin-bottom: 0.5rem;
}

.info-item {
    display: flex;
    padding-bottom: 1rem;
}

.info-icon {
    height: 1rem;
    width: 1rem;
}

.info-text {
    padding-left: 0.5rem;
}

.mail-link {
    text-decoration: none;

}
.mail-link:hover {
    background-color: black;
}

/* Socials */
.socials {
    display: flex;
    flex-wrap: wrap;
}

.socials-title{
    width: 100%;
}

.social-item {
    flex: auto;
    text-align: center;
}

/* Skills */
.skills {
    flex-shrink: 1;
}

.skills-title {
    margin-top: 1rem;
    margin-bottom: 0.4rem;
}

.skill-item {
    padding-left: 0.6rem;
    padding-right: 0.6rem;
    text-align: center;
}

.skill-box {
    width: 100%;
    background: rgba(71, 96, 114, 0.4); 
    height: 10px;
    overflow: hidden;
}

.skill-progress {
    position: relative;
    background: #476072;
    height: 100%;
}

.skill-progress-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -5px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid #476072;
}

.skill-title {
    margin-top: 0.2rem;
    margin-bottom: 0.4rem;
}

/* Education */
.education {
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
}

.educations-title {
    margin-bottom: 0.2rem;
} 

.education-item {
    font-size: 1rem;
    margin-bottom: 1rem;
}

.education-title {
    margin: 0.5rem 0 0.5rem 0 ;
    font-size: 1rem;
}

.education-univ {
    margin: 0 0 0.5rem 0 ;  
    font-size: 0.7rem;
}

.education-duration {
    margin: 0;
    font-size: 0.6rem;
}
`
const First = () => {

    function constructor() {
        const container = document.createElement('div');
        container.id = 'first_container' 
        const head = Heading;
        const content = Content;


        container.appendChild(head);
        container.appendChild(content);

        addStyles();

        return {
            element: container
        }
    }

    function addStyles () {
        if(document.querySelector('.first_styles')) return;

        const styleContainer = document.createElement('style');
        styleContainer.textContent = styles;

        document.body.append(styleContainer);
    }
    return constructor();
}



export default First;