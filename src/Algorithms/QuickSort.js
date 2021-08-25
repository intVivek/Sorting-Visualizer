function QuickSort(block,setBlock,speed,sortingParams,setSortingParams){
  var dupBlocks,t=0;
  var allBlocks=[];
  dupBlocks=block.slice(0);
  const swap=(arr,i,j)=>{
    
    allBlocks[t]=dupBlocks.slice(0);
    t++;
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }

  const partition=(arr,low,high)=>{

      var pivot = arr[high],
      i = (low - 1); 
    
      for(var j = low; j <= high - 1; j++){
        if (arr[j] < pivot){
          i++; 
          swap(arr, i, j);
        }
      }
      swap(arr, i + 1, high);
      return (i + 1);
  }

  const quickSort=(arr,low,high)=>{
    if (low < high){
      var pi = partition(arr, low, high);
      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
    }
  }
 
  quickSort(dupBlocks,0, dupBlocks.length-1);
  var time=0;
  for(var i=sortingParams.i;i<allBlocks.length;i++){
      setTimeout((a)=>{
        setSortingParams(prev=>{
            prev.i=a
            prev.orange=-1;
            prev.purple=-1;
            return prev
          })
        setBlock(allBlocks[a]);
      },time*1000/speed,i);
      time++;
  }
}

 export default QuickSort;