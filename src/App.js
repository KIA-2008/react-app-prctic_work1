import './App.css';
import menu from './images/menu.png'
import logo from './images/logo.png'
import search from './images/Search.png'
import list from './images/list.png'
import user from './images/user.png'
import corzina from './images/Buy.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='hed-left'>
          <img className="menu" src={menu}/>
          <img className="logo" src={logo}/></div>
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
    </div>
  );
}

export default App;