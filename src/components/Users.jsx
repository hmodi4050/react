import React, { useEffect, useState } from "react";
import pic1 from '../img/1.jpg'
import pic2 from '../img/2.jpg'
import pic3 from '../img/3.jpg'
import pic4 from '../img/4.jpg'
import pic5 from '../img/5.jpg'
import pic6 from '../img/6.jpg'
import pic7 from '../img/7.jpg'
import pic8 from '../img/8.jpg'
import UserCard from "./UserCard";
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom'
import PopUpCard from './PopUpCard'
import '../styles/Users.css'

// get data by api
export default function Users() {
    const [users, setUsers] = useState([]);
    function getDataFromApi() {
        fetch('https://next.json-generator.com/api/json/get/E1iKSS0bq')
            .then(res => { return res.json() })
            .then((jsonJs) => {
                setUsers(jsonJs)
            })
            .catch((error) => {
                throw error
            })
    }
    useEffect(getDataFromApi, []);
    let imgArray = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
    let i = 0;
    let j = 0;
    {/*  <div id="logControl"> {true ? <div>
               <button>Log out</button>
               </div> : 'you need to login'}</div>*/}
    return (
        <div id="card">
            <div id="sideBar"><Link to="/Login">
                <button className="logOut"><PersonIcon className="logOutIcon" /> Log out  </button>
            </Link>
            </div>
            <div id='containerDiv'>
                <div> {users.map(item => (
                    <div id="cardsDiv">
                        <UserCard name={item.name.first} lastName={item.name.last}
                            age={item.age} email={item.email} pic={imgArray[i++]} />
                        <PopUpCard name={item.name.first} lastName={item.name.last}
                            age={item.age} email={item.email} company={item.company}
                            phone={item.phone} address={item.address} pic={imgArray[j++]} />
                    </div>))}
                </div>
            </div>
        </div>
    )
}