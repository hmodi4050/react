import MailOutlineIcon from '@material-ui/icons/MailOutline';
import EventIcon from '@material-ui/icons/Event';
import { useHistory } from "react-router-dom"
import '../styles/Users.css'

export default function UserCard(props){
    const {pic,name,lastName,email,age}=props
    const history = useHistory();
   
    return(
       <div id="userCard" >
           <img src={pic} alt="user-photo" />
           <h2>{name} {lastName}</h2>
           <h5><EventIcon className="icon"/> Age: {age} </h5>
           <h6><MailOutlineIcon className="icon"/> {email}</h6>
       </div>
    )
}