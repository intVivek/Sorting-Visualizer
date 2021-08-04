import './DropDown.css';

const DropDown =(props)=>{

  const clickHandler=(element)=>{
    props.setValue(element)
  }
  
  const tray=props.list.map((element,i)=>{
   return <option>{element}</option>
  })
  return(
    <select onChange={(e)=>clickHandler(e.target.value)} value={props.value} class="dropDown" >
      {tray}
  </select>
  );
}

export default DropDown;