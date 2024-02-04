import "./navbar.css";

export default () => {
    return (
        <div className='container'>
          <nav>
            <h1><span style={{ color: "#ed901e", fontSize: "50px" }}>C</span>HAITANYA <span style={{ color: "#ed901e", fontSize: "50px" }}>K</span>UMAR</h1>
            <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#">SKILLS</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">CONTACT</a></li>
              <li><a href="#">CONTACT</a></li>
            </ul>
          </nav>
          <div className="header-text">
            <p>FRONTEND DEVELOPER</p>
            <h1>Hi, I'm <span>Chaitanya</span><br/>native is Andhra Pradesh</h1>
          </div>
        </div>
      );
}
