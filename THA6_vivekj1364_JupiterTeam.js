// 1. Write a JavaScript function to check whether an `input` is an array or not
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// True


function is_array(x){
  if(Array.isArray(x)){
    console.log("True");
  }

  else{
    console.log("False");
  }
}
is_array(("w3resource"));



// 2. Write a JavaScript function to clone an array
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

function array_Clone(x){
    return x.map(item => item );
  }
  console.log(array_Clone([1, 2, 4, 0]));
  console.log(array_Clone([1, 2, [4, 0]]));
  
  
  // 3. Write a JavaScript function to get the first element of an array. Passing a
  // parameter 'n' will return the first 'n' elements of the array.
  // Test Data :
  // console.log(first([7, 9, 0, -2]));
  // console.log(first([],3));
  // console.log(first([7, 9, 0, -2],3));
  // console.log(first([7, 9, 0, -2],6));
  // console.log(first([7, 9, 0, -2],-3));
  // Expected Output :
  // 7
  // []
  // [7, 9, 0]
  // [7, 9, 0, -2]
  // []
  
  
  function first(x,y){                              
    if(y === undefined){
      return x.shift(); 
    }
    
    else if(y> x.length){
      return x;
    } 
    else if(y < 0){
      return [];
    }
    else{
     return  x.slice(0, y); 
    }
  }
  
  console.log(first([7, 9, 0, -2]));
  console.log(first([],3));
  console.log(first([7, 9, 0, -2],3));
  console.log(first([7, 9, 0, -2],6));
  console.log(first([7, 9, 0, -2],-3));
  

  
  
  // 4. Write a simple JavaScript program to join all elements of the following
  // array into a string.
  // Sample array : myColor = ["Red", "Green", "White", "Black"];
  // Expected Output :
  // "Red,Green,White,Black"
  // "Red,Green,White,Black"
  // "Red+Green+White+Black"
  
  
  myColor = ["Red", "Green", "White", "Black"];
  
  var result= "";
  for(let i =0; i < myColor.length; i++){
    result+=myColor[i]+ ",";
  }
  console.log(result);
  
  
  
  // 5. Write a JavaScript program to find the most frequent item of an array
  // Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
  // Sample Output : a ( 5 times )
  
  var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
  var x = 1;
  var y = 0;
  var item;
  for (var i = 0; i < arr1.length; i++) {
      for (var j = i; j < arr1.length; j++) {
          if (arr1[i] == arr1[j])
              m++;
          if (x < y) {
              x = y;
              item = arr1[i];
          }
      }
      y = 0;
  }
  console.log(item + " ( " + x + " times ) ");





  
  