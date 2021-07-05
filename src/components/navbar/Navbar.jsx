import './Navbar.scss';
import {Person,Mail} from "@material-ui/icons";


export default function Navbar() {
    return (
        <div className="navbar" id="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">logo</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+381 63 290958</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>dejan.colic94@gmail.com</span>
                    </div>
                </div>
                
                <div className="right">
                    right side
                </div>
            </div>
        </div>
    )
}
