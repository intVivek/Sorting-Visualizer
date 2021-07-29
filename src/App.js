import './App.css';
import {useState,useEffect} from 'react';
import BubbleSort from './Algorithms/BubbleSort.js';

function App() {
  const [block,setBlock]= useState([]);
  const [numberOfBlocks,setNumberOfBlocks] = useState(50);

  const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  useEffect(()=>{
    setBlock(Array(numberOfBlocks).fill().map(() => (Math.random())));
  },[]);

  const clickHandler=()=>{

    BubbleSort(block,setBlock)

  }

  const tray=block.map((element,i)=>{
    return <div key={i} style={{width:"calc(100%/"+numberOfBlocks+" - 2px)",height:100*element+"%"}} className='block'></div>
  })

  return (
    <div className="App">
      <button onClick={clickHandler}>go</button>
      {tray}
    </div>
  );
}

export default App;
