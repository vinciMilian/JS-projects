import react from "react";
import { Outlet, Link } from "react-router-dom";

function Contact() {
  return (
    <div className="containerHome">
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
}

export default Contact;