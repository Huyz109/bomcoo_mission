import './App.scss';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram  } from "react-icons/fa6";

function App() {
  return (
    <div className="App">
      <div className='background'>
      </div>
      <div className='container'>
        <div className='content'>
          <div className='avatar'>
            <img src='logo192.png' alt=''></img>
          </div>
          <h3 className='username'>chaemining</h3>
          <p className='desc'>Le your content live longer than the feed.</p>
        </div>
        <ul className='social-list'>
          <li className='social-item'>
            <div className='icon fb'>
              <FaFacebookF />
            </div>
            <div className='info'>
              <p className='name'>채미닝의 페이스북</p>
              <p className='desc'>https://www.facebook.com/test</p>
            </div>
          </li>
          <li className='social-item'>
            <div className='icon twitter'>
              <FaTwitter />
            </div>
            <div className='info'>
              <p className='name'>채미닝의 트위터 채</p>
              <p className='desc'>https://www.facebook.com/test</p>
            </div>
          </li>
          <li className='social-item'>
            <div className='icon ytb'>
              <FaYoutube />
            </div>
            <div className='info'>
              <p className='name'>미닝의 유투브 채미</p>
              <p className='desc'>https://www.facebook.com/test</p>
            </div>
          </li>
          <li className='social-item'>
            <div className='icon ig'>
              <FaInstagram />
            </div>
            <div className='info'>
              <p className='name'>닝의 인스타그램</p>
              <p className='desc'>https://www.facebook.com/test</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
