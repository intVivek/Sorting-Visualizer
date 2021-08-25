const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function bubbleSort(block,setBlock,speed,sortingParams,setSortingParams){
  const dupBlocks = block.slice()
  var t=0,swapblock=0;
  for(var i = sortingParams.i; i < dupBlocks.length; i++){ 
    var x = i===sortingParams.i?x=sortingParams.j:x=0;
    for(var j = x; j < ( dupBlocks.length - i -1 ); j++){
        if (dupBlocks[j] > dupBlocks[j + 1]) {
          swapblock=j;
          swap(dupBlocks, j, j + 1);
        }
        setTimeout((a,b,c,d)=>{
          setSortingParams(prev=>{
            prev.i=b
            prev.j=c
            prev.orange=d+1;
            prev.purple=d;
            return prev
          })
          setBlock(a);
        },t*1000/speed,dupBlocks.slice(0),i,j,swapblock);
        t++;
    }
  }
 }

 export default bubbleSort;