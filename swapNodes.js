var swapNodes = function(head, k) {
    var arr = head
    var  temp = 0 
    var temp2 = 0
    len = head.length - 1
    for(let i = 0 ; i < k ; i++)
    {
       temp = i
        
    }
    for(i = len ; i >=len - k + 1 ; i --)
    {
        temp2 = i
    }
    let temp3 = arr[temp]
    arr[temp] = arr[temp2]
    arr[temp2] = temp3
    return arr
};
head = [1,2,3]
k = 2
console.log(swapNodes(head,k))