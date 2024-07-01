import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'

function App() {
  const [data, setData] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if(!data){
      console.log('lol')
    }else{
      setItems([... items, data]);
      setData("")
    }
  }

  const deleteItem = (id) =>{
    const updItem = items.filter((elem, ind) => {
        return ind !== id;
    })
    setItems(updItem);
  }


  return (
    <>
      <div className="main">
        <div className="child">
          <h1>Todo</h1>

          <div className="addItems">
            <input type="text" placeholder='Enter your task' value={data} onChange={(e) => setData(e.target.value)}  />
            <button onClick={addItem}> Add </button> 
          </div>

          <div className="showItems">
            {items.map((elem, ind) => {
              return(
                <div className="indivItems" key={ind}>
                  <p>{elem}</p>
                  <button onClick={() => {deleteItem(ind)}}>Delete</button>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </>
  )
}

export default App
