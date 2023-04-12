// 2. Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23
function binary(num,target){
    let left=0;
    let right=num.length
    while(left<=target){
        let middle=Math.floor((left+right)/2)
        if(target===num[middle]){
            return middle
        }
        else if(target<num[middle]){
            right=middle-1
            left=middle+1
        }

    }
    return null
}
let num=[2,8,0,23,5,45,76]
target=23
console.log(binary(num,target))