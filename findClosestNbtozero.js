function findClosestNumber(listNumber) {
    let closest = listNumber[0]

   for(const nb of listNumber){
    if(Math.abs(nb) < Math.abs(closest)){
        closest = nb
    }
   }

   return Math.abs(closest)
}

const resultFindClosestNb = findClosestNumber([5,10,78,-2,-18,14])

console.log('Result ---->',resultFindClosestNb)