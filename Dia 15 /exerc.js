 let ArrayA = [13,20,17,22,24,20,27,17,19,14]
 let ArrayB = [24,22,23,11,15,17,29,14,16,21]
    let ArrayComRepetidos = []
    let ArrayFinal = []
    let ArrayDeApoio
 function NumEmComum(array1 , array2, ArrayFinal,ArrayComRepetidos, ArrayDeApoio ){
     
     for(i=0; i< 10; i++){
        for(j=0; j<10 ; j++){
            if(array1[i] === array2[j]){
            ArrayComRepetidos.push(array1[i]) 
            break      
            }  
        }     
    } 
    //for(i=0; i< ArrayComRepetidos.length; i++){
      //      for(j=0; j< ArrayComRepetidos.length; j++){
        ///            if(array1[i] === array2[j]){
           //     ArrayDeApoio.push(array1[i]) 
             //   break 
       //     }
     //   }
    //}
 }
