const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
function bubbleSort(block,setBlock){
  const dupBlocks = block.slice()
  var t=0;
  for(var i = 0; i < dupBlocks.length; i++){ 
    for(var j = 0; j < ( dupBlocks.length - i -1 ); j++){
        if (dupBlocks[j] > dupBlocks[j + 1]) {
          swap(dupBlocks, j, j + 1);
          setTimeout((a)=>{
          setBlock(a);
          },t*10,dupBlocks.slice(0));
          t++;
        }
    }
  }
 }

 export default bubbleSort;