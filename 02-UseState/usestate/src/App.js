import './App.css';
import { useState } from 'react';
import i1 from './images/1.jpg';
import i2 from './images/2.jpg';
import i3 from './images/3.jpg'; 
import i4 from './images/4.jpg';
import i5 from './images/5.jpg';
import i6 from './images/6.jpg';
import i7 from './images/7.jpg';



const cartoonMap = {
  i1: i1, 
  i2: i2,
  i3: i3,
  i4: i4,
  i5: i5,
  i6: i6,
  i7: i7,
}

function getRandomCartoon() {
  const cartoonArray = ['i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7',];
  return cartoonArray[Math.floor(Math.random() * cartoonArray.length)];
}

function App() {
  const [cartoon, setCartoon] = useState([]);

  const handleClick = () => {
    setCartoon([...cartoon, getRandomCartoon()]);
    
  }

  const cartoonList = cartoon.map((cartoon,index) =>{
    return <div className='imagesDiv'> 
    <img className='images' src={cartoonMap[cartoon]} alt='cartoon' />
  </div>
  })
  
  return (

    <div className="App">
      <button className='buttonClick' onClick={handleClick} >Cartoons, please!</button>
      <div className='cartoonList'>{cartoonList}</div> 
    </div>
  );
  }

export default App;
