function quchong(arr){
    return Array.from(new Set(arr));
}

console.log(quchong(['s', 'a', 's', 'b', 'a',1,'1',1]));