import { useEffect, useState } from "react";
import "./Nav.css";
import logo from "./utils/1198px-Netflix_2015_logo.svg.png";
import userIcon from "./utils/user-icon.png";

function Nav(){
    const [show,setShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100) setShow(true);
            else setShow(false);
        })
        return ()=>{
            window.removeEventListener("scroll");
        }
    },[])


    return  <nav className={show&&"nav-black"}>
                <img className="logo" src={logo} alt="logo" />
                <img className="user-icon" src={userIcon} alt="user-icon" />
            </nav>
}

export default Nav;
