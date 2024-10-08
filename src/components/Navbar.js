import Logo from '../assets/img/header/Logo.svg';
import profileArrow from '../assets/img/header/Seta-opções.svg';
import userIcon from '../assets/img/header/Ícone-usuário.svg';


function Navbar() {
  return (
    <div className="Navbar">
      <div className="home">
        <>
          <img src={Logo} alt="logo" />
        </>
        <div id="title">
          <p>Chronos</p>
        </div>
      </div>

      <div className="profile">
        <div className="dropdown">
          <button onClick={"myFunction"} className="dropbtn">
            <img src={profileArrow} alt="" />
          </button>
          <div id="myDropdown" className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <>
          <img src={userIcon} alt="Ícone de usuário" />
        </>
      </div>
    </div>
  );
}

export default Navbar;
