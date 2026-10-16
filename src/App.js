import './App.css';
import menu from './images/menu.png'
import logo from './images/logo.png'
import search from './images/Search.png'
import list from './images/list.png'
import user from './images/user.png'
import corzina from './images/Buy.png'
import arrow1 from './images/Arrow-Down-1.png'
import arrow2 from './images/Arrow-Down-2.png'
import points from './images/Points.png'
import strelka_na_pravo from './images/strelka-na-pravo.png'
import watch from './images/banner-watch.png'
import galaxy_m13 from './images/Galaxy M13.png'
import galaxy_m33 from './images/Galaxy M33.png'
import galaxy_m53 from './images/Galaxy M53.png'
import categoru1 from './images/image_categoru1.png'
import categoru2 from './images/Cosmetics.png'
import categoru3 from './images/Electronics.png'
import categoru4 from './images/Furniture.png'
import categoru5 from './images/Watches.png'
import categoru6 from './images/Decor.png'
import categoru7 from './images/Accessories.png'
import galaxy_s22_ultra2 from './images/Galaxy S22 Ultra2.png'
import banner_strelka_left from './images/banner-strelka-left.png'
import banner_strelka_right from './images/banner-strelka-right.png' 
import Galaxy_S22_Ultra from './images/Galaxy S22 Ultra.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='hed-left'>
        <button className='knopka-menu-hed'>
          <img className="menu-ikonka" src={menu} alt="menu"/>
        </button>
          <img className="logo-ikonka" src={logo} alt="logo"/>
        </div>
        <div className='hed-center'>
          <img className="search-png" src={search}/>
          <input placeholder='Search essentials, groceries and more...'></input>
          <img className="search-menu" src={list}/>
        </div>
        <div className='hed-right'>
          <div className='hed1'>
            <img className="user-png" src={user}/>
            <a href='#'>Sing Up /</a>
            <a href='#'>Sing In</a>
            <p>|</p>
          </div>
          <div className='hed2'>
            <img className="head-corzina" src={corzina}/>
            <a href='#'>Cart</a>
          </div>
        </div>
      </header>
      <div className='menu1'>
  <div className='menus1'>
    <button className='choice aktivnaya'>
      <p className='tekst-kategorii belyj'>Groceries</p>
      <img className='strelka-vniz' src={arrow1} alt="arrow"/>
    </button>

    <button className='choice'>
      <p className='tekst-kategorii'>Premium Fruits</p>
      <img className='strelka-vniz-seryj' src={arrow2} alt="arrow"/>
    </button>

    <button className='choice'>
      <p className='tekst-kategorii'>Home & Kitchen</p>
      <img className='strelka-vniz-seryj' src={arrow2} alt="arrow"/>
    </button>

    <button className='choice'>
      <p className='tekst-kategorii'>Fashion</p>
      <img className='strelka-vniz-seryj' src={arrow2} alt="arrow"/>
    </button>

    <button className='choice'>
      <p className='tekst-kategorii'>Electronics</p>
      <img className='strelka-vniz-seryj' src={arrow2} alt="arrow"/>
    </button>

    <button className='choice'>
      <p className='tekst-kategorii'>Beauty</p>
      <img className='strelka-vniz-seryj' src={arrow2} alt="arrow"/>
    </button>

    <button className='choice'>
      <p className='tekst-kategorii'>Home Improvement</p>
      <img className='strelka-vniz-seryj' src={arrow2} alt="arrow"/>
    </button>

    <button className='choice'>
      <p className='tekst-kategorii'>Sports, Toys & Luggage</p>
      <img className='strelka-vniz-seryj' src={arrow2} alt="arrow"/>
    </button>
  </div>
</div>
      <div className='big-banner'>
        <button className='banner-strelka-left'>
          <img src={banner_strelka_left}/>
        </button>
        <div className='banner1'>
          <div className='banner-left'>
            <div className='banner-text'>
              <p>Best Deal Online on smart watches</p>
              <h1>SMART WEARABLE.</h1>
              <p>UP to 80% OFF</p>
            </div>
            <img className='banner-points' src={points}></img>
          </div>
          <div className='banner-right'>
              <img className='banner-watch' src={watch}></img>
          </div>
        </div>
         <button className='banner-strelka-right'>
          <img src={banner_strelka_right}/>
        </button>
      </div>
      <div className='sekcija-smartfonov'>
        <div className='opisanie-sekcii'>
          <div className='sekcija-left'>
            <p>Grab the best deal on</p>
            <h1>Smartphones</h1>
          </div>
           <div className='sekcija-right'>
            <p>View All</p>
            <img src={strelka_na_pravo}/>
           </div>
        </div>
        <div className='sekcija-smartfonov-cards'>
          <div className='smarfons-card'>
            <div className='procent-skidki'>
            <p>56% OFF</p>
          </div>
            <div className='smartfon-img'>
            <img src={Galaxy_S22_Ultra}/>
            </div>
            <div className='smartfons-opisanie'>
              <p>Galaxy S22 Ultra</p>
              <div className='smartfons-ckidki'>
                <p className='skidka'>₹32999</p>
                <p className='nachalnaja-cena'>₹74999</p>
              </div>
            </div>
            <div className='smartfons-cena'>
              <p>Save - ₹32999</p>
            </div>
          </div>
          <div className='smarfons-card'>
            <div className='procent-skidki'>
            <p>56% OFF</p>
          </div>
            <div className='smartfon-img'>
            <img src={galaxy_m13}/>
            </div>
            <div className='smartfons-opisanie'>
              <p>Galaxy M13 (4GB | 64 GB )</p>
              <div className='smartfons-ckidki'>
                <p className='skidka'>₹10499</p>
                <p className='nachalnaja-cena'>₹14999</p>
              </div>
            </div>
            <div className='smartfons-cena'>
              <p>Save - ₹4500</p>
            </div>
          </div>
          <div className='smarfons-card'>
            <div className='procent-skidki'>
            <p>56% OFF</p>
          </div>
            <div className='smartfon-img'>
            <img src={galaxy_m33}/>
            </div>
            <div className='smartfons-opisanie'>
              <p>Galaxy M33 (4GB | 64 GB )</p>
              <div className='smartfons-ckidki'>
                <p className='skidka'>₹16999</p>
                <p className='nachalnaja-cena'>₹24999</p>
              </div>
            </div>
            <div className='smartfons-cena'>
              <p>Save - ₹8000</p>
            </div>
          </div>
          <div className='smarfons-card'>
            <div className='procent-skidki'>
            <p>56% OFF</p>
          </div>
            <div className='smartfon-img'>
            <img src={galaxy_m53}/>
            </div>
            <div className='smartfons-opisanie'>
              <p>Galaxy M53 (4GB | 64 GB )</p>
              <div className='smartfons-ckidki'>
                <p className='skidka'>₹31999</p>
                <p className='nachalnaja-cena'>₹40999</p>
              </div>
            </div>
            <div className='smartfons-cena'>
              <p>Save - ₹9000</p>
            </div>
          </div>
          <div className='smarfons-card'>
            <div className='procent-skidki'>
            <p>56% OFF</p>
          </div>
            <div className='smartfon-img'>
            <img src={galaxy_s22_ultra2}/>
            </div>
            <div className='smartfons-opisanie'>
              <p>Galaxy S22 Ultra</p>
              <div className='smartfons-ckidki'>
                <p className='skidka'>₹67999</p>
                <p className='nachalnaja-cena'>₹85999</p>
              </div>
            </div>
            <div className='smartfons-cena'>
              <p>Save - ₹18000</p>
            </div>
          </div>
        </div>
      </div>
      <div className='sekcija-top-categories'>
      <div className='opisanie-sekcii'>
          <div className='sekcija-left'>
            <p>Shop From</p>
            <h1>Top Categories</h1>
          </div>
           <div className='sekcija-right'>
            <p>View All</p>
            <img src={strelka_na_pravo}/>
           </div>
        </div>
        <div className='categories'>
          <div className='categoru'>
            <div className='categoru-img'>
              <img src={categoru1}/>
            </div>
            <p>Mobile</p>
          </div>
           <div className='categoru'>
            <div className='categoru-img1'>
              <img src={categoru2}/>
            </div>
            <p>Cosmetics</p>
          </div>
           <div className='categoru'>
            <div className='categoru-img1'>
              <img src={categoru3}/>
            </div>
            <p>Electronics</p>
          </div>
           <div className='categoru'>
            <div className='categoru-img1'>
              <img src={categoru4}/>
            </div>
            <p>Furniture</p>
          </div>
           <div className='categoru'>
            <div className='categoru-img1'>
              <img src={categoru5}/>
            </div>
            <p>Watches</p>
          </div>
           <div className='categoru'>
            <div className='categoru-img1'>
              <img src={categoru6}/>
            </div>
            <p>Decor</p>
          </div>
           <div className='categoru'>
            <div className='categoru-img1'>
              <img src={categoru7}/>
            </div>
            <p>Accessories</p>
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;