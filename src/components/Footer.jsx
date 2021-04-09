import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import '../styles/Footer.css'

export default function Footer() {
    return (
        <div>
            <div id="contanier">
                <ul id="socialIcons"> 
                    <li><a href="https://github.com/hmodi4050"><GitHubIcon className="footer" /></a></li>
                    <li><a href="https://www.linkedin.com/in/hammodi-draz-743336203"><LinkedInIcon className="footer" /></a></li>
                    <li><a href="https://twitter.com/"><TwitterIcon className="footer" /></a></li>
                    <li><a href="https://www.facebook.com/"><FacebookIcon className="footer" /></a></li>
                </ul>
                <p id="line"></p>
                <p id="copy">copy &copy; DR&forall;Z&trade; 2021</p>
            </div>
        </div>
    )
}