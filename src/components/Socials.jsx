import Linkedin from '../images/linkedin.png'
import Facebook from '../images/facebook.png'
import Github from '../images/github.png'
import Instagram from '../images/instagram.png'



const Socials = () => {
    return (
        <div className="socials">
            <a href="#" target="_blank"><img src={Linkedin}/></a>
            <a href="#" target="_blank"><img src={Facebook}/></a>
            <a href="#" target="_blank"><img src={Github}/></a>
            <a href="#" target="_blank"><img src={Instagram}/></a>
        </div>
    )
}

export default Socials