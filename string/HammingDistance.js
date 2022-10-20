function calculateHammingDistance(s1, s2){
   if(s1.length != s2.length){
     throw new Error('Error');
   }
   let stringLength = s1.length;
   let counter = 0; 

   for(let i = 0; i < stringLength; i++){
      if(s1.charAt(i) !=  s2.charAt(i)){
        counter++;
      }
   }
   return counter;
}
console.log(calculateHammingDistance('ad', 'vb'))