import './App.css';
import {useState,useEffect} from 'react';
import BubbleSort from './Algorithms/BubbleSort.js';
import SelectionSort from './Algorithms/SelectionSort.js';
import InsertionSort from './Algorithms/InsertionSort.js';
import MergeSort from './Algorithms/MergeSort.js';
import QuickSort from './Algorithms/QuickSort.js';
import DropDown from './DropDown/DropDown.js';

function App() {
  const [block,setBlock]= useState([]);
  const [initBlock,setInitBlock]= useState([]);
  const [sortingParams,setSortingParams] = useState({});
  const [numberOfBlocks,setNumberOfBlocks] = useState(100);
  const [algorithm,setAlgorithm] = useState('Bubble Sort');
  const [speed,setSpeed] = useState(50);
  const [visualizing,setVisualizing] = useState(false);


  const stopTimeout=()=> {
    var id = setTimeout(()=>{}, 0)
    while (id--) {
      clearTimeout(id);
    }
  }

  const startVisualize=()=>{
    setVisualizing(true);
    algorithm==="Bubble Sort"?BubbleSort(block,setBlock,speed,sortingParams,setSortingParams):
    algorithm==="Selection Sort"?SelectionSort(block,setBlock,speed,sortingParams,setSortingParams):
    algorithm==="Insertion Sort"?InsertionSort(block,setBlock,speed,sortingParams,setSortingParams):
    algorithm==="Merge Sort"?MergeSort(initBlock,setBlock,speed,sortingParams,setSortingParams):
    algorithm==="Quick Sort"?QuickSort(initBlock,setBlock,speed,sortingParams,setSortingParams):console.log(algorithm);
  }

  useEffect(()=>{
    randomize();
    // eslint-disable-next-line
  },[numberOfBlocks]);

  useEffect(()=>{
    if(visualizing){
      stopTimeout();
      setTimeout(startVisualize,0);
    }
    // eslint-disable-next-line
  },[speed]);

  const randomize=()=>{
    setSortingParams({i:0,j:0});
    stopTimeout();
    setVisualizing(false);
    setBlock(Array(numberOfBlocks).fill().map(() => (Math.random())));
    setInitBlock(block);
  }

  const clickHandler=()=>{
    if(visualizing){
      stopTimeout();
      setVisualizing(false);
    }
    else{
      startVisualize();
    }
  }

  const tray=block&&block.map((element,i)=>{
    let color=i===(sortingParams.orange)?"#FF7F50":i===sortingParams.purple?"purple":"#00c2c2";
    let blockStyle = {
      width:"calc(100%/"+numberOfBlocks+" - "+30/numberOfBlocks+"%)",
      height:100*element+"%",
      "background-color":color
    }
    return <div key={i} style={blockStyle} className='block'></div>
  })

  return (
    <div className="App">
      <div className='header'>
        <span>SORTING VISUALIZER</span>
        <DropDown name={"algo"} value={algorithm} setValue={setAlgorithm} list={['Bubble Sort','Insertion Sort','Selection Sort','Merge Sort','Quick Sort']} />
        <div className="sliderContainer"><span>Speed</span><input className="slider" type="range" min="1" max="350" onChange={(e)=>{setSpeed(parseInt(e.target.value))}}></input></div>
        <div className="sliderContainer"><span>Blocks</span><input className="slider" type="range" min="10" max="150" onChange={(e)=>{setNumberOfBlocks(parseInt(e.target.value))}}></input></div>
        <button onClick={randomize} className='randomizeBtn'>Randomize</button>
        <div onClick={clickHandler} className='visualizeBtn'>{visualizing?"Stop":"Visualize"}</div>
      </div>
      <div className='blockContainer'>
        {tray}
      </div>
    </div>
  );
}

export default App;
