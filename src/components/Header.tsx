import { getRandomColor } from "../helpers";

function Header() {
  const randomColor = getRandomColor();
  return (
    <header
      className="header"
      style={{
        // @ts-ignore
        ["--border-colour"]: randomColor
      }}
    >
      <div className="header__logo" style={{ color: randomColor }}>
        Hoxbay
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <a href="#"> Home</a>{/* Create here a link to this page */}
            
          </li>
          <li>
            {/* Create here a link to this page */}
           <a href="#">Categories</a> 
          </li>
          <li>
            {/* Create here a link to this page */}
            <a href="#">basket</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
