import 'bulma/css/bulma.css';
import './App.css';
import  Cards  from'./Cards';
import fashion from './images/fashion.jpg';
import food from './images/food.jpg';
import health from './images/health.jpg';
import art from './images/art.jpg';


function App() {
  return (
    <div className="App">
      <section className="hero is-link">
  <div className="hero-body">
    <p className="title">
      Categories
    </p>
   
  </div>
</section>
      <div className='container'>
        <section className='section'></section>
        <div className='columns'>
          <div className='column'>
          <Cards 
      image = {fashion}
      title="Fashion & Beauty" 
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. In explicabo repudiandae ipsum qui sint sit, dolorem quibusdam adipisci ullam aperiam nihil culpa fugiat temporibus. Similique iusto a culpa recusandae earum!"
      />


          </div>
          <div className='column'>
            <Cards 
      image = {food}
      title="Food & Drink" 
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. In explicabo repudiandae ipsum qui sint sit, dolorem quibusdam adipisci ullam aperiam nihil culpa fugiat temporibus. Similique iusto a culpa recusandae earum!"
      />
      </div>
          <div className='column'>
          <Cards
        image = {health} 
      title="Health & Wellness" 
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. In explicabo repudiandae ipsum qui sint sit, dolorem quibusdam adipisci ullam aperiam nihil culpa fugiat temporibus. Similique iusto a culpa recusandae earum!"
      />

          </div>
          <div className='column'>
          <Cards 
        image = {art}
      title="Art & Culture" 
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. In explicabo repudiandae ipsum qui sint sit, dolorem quibusdam adipisci ullam aperiam nihil culpa fugiat temporibus. Similique iusto a culpa recusandae earum!"
      />
          </div>

        </div>

      </div>
    
      

     
        
        
        
    </div>
  );
}

export default App;
