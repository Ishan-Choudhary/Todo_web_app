import "../assets/styles/NavbarStyle.css";

import { useRef } from "react";

function Navbar() {

    const currDate : string = new Date().toDateString().slice(0, -5);
    
    const titleRef = useRef<HTMLInputElement>(null);

    function handleRemovingFocus(e: any) : void  {
        let key: string = e.key;
        
        if(key === "Enter" && titleRef.current !== null) {
            titleRef.current.blur();
        }
    }

    return (
        <nav>
            <div className="logo"></div>
            <input className="title" type="text" placeholder={currDate} onKeyDown={handleRemovingFocus}
            ref={titleRef}/>
            <div className="profile"></div>
        </nav>
    )
};

export default Navbar;