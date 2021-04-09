import tec from '../img/tech.png'
import mer from '../img/mrkaz.png'
import cod from '../img/coden.png'
import avo from '../img/avoda.png'
import Link from '@material-ui/core/Link';
import "../styles/Header.css";

export default function Header() {
    return (
        <div id="nav">
            <ul id="navList">
                <Link href="https://www.facebook.com/tech.career">
                    <li><img src={tec} alt="" /></li></Link>
                <Link href="https://bherezbh.wixsite.com/mysite-1">
                    <li><img src={cod} alt="" /></li></Link>
                <Link href="https://www.younglod.com/">
                    <li><img src={mer} alt="" /></li></Link>
                <Link href="https://www.gov.il/he/departments/molsa">
                    <li><img src={avo} alt="" /></li></Link>
                <h4 id="logo">D R &forall; Z</h4>
            </ul>
        </div>
    )
}