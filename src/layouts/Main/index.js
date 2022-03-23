import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <nav>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Pokemon</Link>
            </li>
            <li>
              <Link to="/flags">Banderas</Link>
            </li>
            <li>
              <Link to="/youtube">Youtube</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Main;
