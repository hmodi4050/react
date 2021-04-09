import React from 'react';
import Popper from '@material-ui/core/Popper';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import EventIcon from '@material-ui/icons/Event';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WorkIcon from '@material-ui/icons/Work';
import '../styles/PopUpCard.css'

export default function PopUpCard(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { pic, name, lastName, email, age, company, phone, address } = props
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <button aria-describedby={id} type="button" id="openBtn" onClick={handleClick}>. see more . </button>
      <div id="popUp">
        <Popper id={id} open={open} anchorEl={anchorEl} className="popUp"><div >
          <div> <button onClick={handleClick} id="closeBtn" >X</button></div>
          <div id="nameDiv">
            <img src={pic} alt="user-photo" />
            <h1 >{name} {lastName}</h1>
          </div>
          <div id="main">
            <div><EventIcon className="icons" /> Age : {age}</div>
            <div><WorkIcon className="icons" /> Company : {company}</div>
            <div><PhoneIcon className="icons" /> Phone : {phone}</div>
            <div><MailOutlineIcon className="icons" /> Email : {email}</div>
            <div><LocationOnIcon className="icons" /> Address : {address}</div>
          </div>
        </div>
        </Popper>
      </div>
    </div>
  );
}