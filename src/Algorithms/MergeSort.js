const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function MergeSort(block,setBlock,speed,sortingParams,setSortingParams){
  var t=0;
  const dupBlocks = block.slice()
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
      var i = 0;
      var j = 0;
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
          k++;
      }
      while (i < n1) {
          arr[k] = L[i];
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
          i++;
          k++;
      }
      while (j < n2) {
          arr[k] = R[j];
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
}

 export default MergeSort;