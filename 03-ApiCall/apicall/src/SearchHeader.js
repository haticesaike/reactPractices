import './SearchHeader.css';
import { useState } from 'react';



function SearchHeader({search}) {
    const [valueInput, setValue] = useState();


    const handleFormSubmit = (e) => {
        e.preventDefault();
        debugger;
        search(valueInput);
        
    }
    const handleChange = (e) => {
        setValue(e.target.value);
      
       

    }
    return ( 
    <div className="searchDiv" >
        <form onSubmit={handleFormSubmit} >
            <label>Ne arıyorsunuz?</label>
            <input value={valueInput} onChange={handleChange} className="input"></input>
           
            
        </form>

    </div> );
}

export default SearchHeader;