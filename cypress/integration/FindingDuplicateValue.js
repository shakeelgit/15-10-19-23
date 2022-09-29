var arry = [2,2,1,2,3,4,5,6,7,7];
//var arry = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//const toFindDuplicates = (arry) =>arry.filter((item,index)=>arry.indexOf(item)!==index)
//console.log(toFindDuplicates(arry))

//const a = arry.filter((item,index)=>arry.indexOf(item))
//const a = arry.indexOf(40)
const d = arry
console.log("array = " +[arry])

const b = (arry)=>arry.filter((item,index)=>item)
//console.log("Item =  "+b(arry))
//console.log(arry)



const c = (arry)=>arry.filter((item,index)=>arry.indexOf(item))
//console.log("indexofitem=  "+c(arry))
console.log(arry)

const a =(arry)=> arry.filter((item,index)=>index)
//console.log("Index=    "+a(arry))

//const e = (arry)=>arry.filter((item,index)=>arry.indexOf(index))
//console.log("indexofindex="+e(arry))

const toFindDuplicates = (arry) =>arry.filter((item,index)=>arry.indexOf(item)!==index)
//console.log("Duplicate "+toFindDuplicates(arry))

const toFindDuplicates1 = arry.filter((item,index)=>arry.indexOf(item)==index)
//console.log("withoutduplicate " +toFindDuplicates1)
console.log(arry)



/*var toFindDuplicates = function(arry)
{
   arry.filter(function(item,index){
        return arry.indexOf((item)!==index)
    }) 
      
}
    
console.log(toFindDuplicates()) */
    



