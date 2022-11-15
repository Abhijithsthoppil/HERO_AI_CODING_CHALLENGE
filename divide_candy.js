
console.log('shared candy',divideCandy(30))

function divideCandy(n) {
    
    var i;
    var outPutArray = []
    outPutArray.push(0)
    for(i=1; i<=n; i++) {
        var totalFriends = i+1;
        if(n%totalFriends == 0) {
            outPutArray.push(i)
        }
    }
    return outPutArray
}