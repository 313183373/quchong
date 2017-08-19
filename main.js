function quchong(arr){
    return arr.filter((value,index,arr)=>arr.indexOf(value)===index);
}

console.log(quchong(['s', 'a', 's', 'b', 'a',1,'1',1]));