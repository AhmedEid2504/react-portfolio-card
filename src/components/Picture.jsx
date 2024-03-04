import ProfilePicture from "../images/profile.jpg"

const Picture = () => {
    return (
        <div className="profile">
            <div className="picture-frame">
                <img className="profile-picture" src={ProfilePicture} alt="Ahmed Eid's picture" />
            </div>
            <h2>Ahmed Eid</h2>
            <h4>Front End Web Developer</h4>
        </div> 
    )
}

export default Picture