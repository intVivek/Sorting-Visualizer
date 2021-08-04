const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function SelectionSort(block,setBlock,speed,sortingParams,setSortingParams){
  const dupBlocks = block.slice()
  var t=0,min_idx;

  for (var i = sortingParams.i; i <dupBlocks.length; i++)
  {
      var x 
      if(i===sortingParams.i&&i>0){
        x=sortingParams.j;
        min_idx = sortingParams.purple;
      }else{
        x=i+1;
        min_idx=i;
      }
      for (var j = x; j < dupBlocks.length; j++){
        if (dupBlocks[j] < dupBlocks[min_idx]){
          min_idx = j;
        }
        setTimeout((a,b,c,d)=>{
          setSortingParams(prev=>{
            prev.i=b
            prev.j=c
            prev.orange=c+1;
            prev.purple=d;
            return prev
          })
          setBlock(a);
        },t*1000/speed,dupBlocks.slice(0),i,j,min_idx);
        t++;
      }
      swap(dupBlocks,min_idx, i);

  }
}

 export default SelectionSort;