const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function InsertionSort(block,setBlock,speed,sortingParams,setSortingParams){
  const dupBlocks = block.slice();
  var t=0,i, j; 
  for (i=sortingParams.i; i < dupBlocks.length-1; i++){ 
      if(i===sortingParams.i&&i>0){
        j=sortingParams.j;
      }
      else{
        j = i+1;
      }
      while (j > 0 && dupBlocks[j] < dupBlocks[j-1]){ 
        swap(dupBlocks,j-1,j);
        --j;
        setTimeout((a,b,c,d)=>{
          setSortingParams(prev=>{
            prev.i=b
            prev.j=c
            prev.orange=c;
            prev.purple=c;
            return prev;
          })
          setBlock(a);
        },t*1000/speed,dupBlocks.slice(0),i,j);

        t++;  
      } 
  } 
}

 export default InsertionSort;