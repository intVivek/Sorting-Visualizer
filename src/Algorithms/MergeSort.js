function MergeSort(block,setBlock,speed,sortingParams,setSortingParams){
  var dupBlocks,t=0;
  var allBlocks=[];
  dupBlocks=block.slice(0);
  console.log(sortingParams.j,dupBlocks);
  function merge(arr, l, m, r)
  {
      var n1 = m - l + 1;
      var n2 = r - m;
      var L = new Array(n1);
      var R = new Array(n2);
      for (var i = 0; i < n1; i++)
          L[i] = arr[l + i];
      for (var j = 0; j < n2; j++)
          R[j] = arr[m + 1 + j];
      i = 0;
      j = 0;
      var k = l;
      while (i < n1 && j < n2) {
          if (L[i] <= R[j]) {
              arr[k] = L[i];
              i++;
          }
          else {
              arr[k] = R[j];
              j++;
          }
          allBlocks[t]=dupBlocks.slice(0);
          t++;
          k++;
      }
      while (i < n1) {
          arr[k] = L[i];
          allBlocks[t]=dupBlocks.slice(0);
          t++;
          i++;
          k++;
      }
      while (j < n2) {
          arr[k] = R[j];
          allBlocks[t]=dupBlocks.slice(0);
          t++;
          j++;
          k++;
      }
  }
  function mergeSort(arr,l, r){
      if(l>=r){
          return;
      }
      var m =l+ parseInt((r-l)/2);
      mergeSort(arr,l,m);
      mergeSort(arr,m+1,r);
      merge(arr,l,m,r);
  }
  mergeSort(dupBlocks,0, dupBlocks.length-1);
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

 export default MergeSort;