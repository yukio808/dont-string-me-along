//Fork this repository to your own GitHub profile and clone to your local machine.checkandcomplete!!!!!

//Write a function that finds the missing numbers in the following sequence of numbers "9899100101103104105".
var arrayNum = "9899100101103104105";
var compareArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function uniq (arrayNum){
  var c = [], diff =[];
  var splitter = arrayNum.split("");
  // this takes array num and splits its objects into a variable
  var sortedArray = splitter.sort();
  // rhis takes the objects and puts them in order form 0-9
              
  for(var i=0;i < sortedArray.length;i++){
    if(c[sortedArray[i]]) delete c[sortedArray[i]];
    c[sortedArray[i]]=true;
    //console.log(c[sortedArray[i]]);
    //this forloop acceses the individual indexes of my array checking it one by one
    //and deleting the elements that have aleady been pushed through.

  }
  //console.log(c);
  for(var j = 0; j < c.length; j++){
    if(c[j]=== true){
      //console.log([j]);
      diff.push(j);
      // this takes the previous loop even further by proccesing the scaled down (c) array and checking of the numbers are true,
      //and then pushing the true numbers into an empty array.
      //console.log(diff);
    }
  }
  return diff;

}
function difference(arrayNum){
  //console.log(arrayNum + "arrayNum");
  var differenceArray = uniq(arrayNum);
  //setting the uniq function to an variable for easier use in my function difference
  var missing_num_array = [];
  //setting an empty array to push my missing numbers into
  //console.log(differenceArray + "differenceArray");
  for(var i = 0; i < compareArray.length; i++){
    if(differenceArray.indexOf(compareArray[i]) === -1){
      // checking the index of difference array to the compare array one by one and printing out what numbers are not in the difference array that are is in the comparison array
      missing_num_array.push(compareArray[i]);
      // pushing the values that were not in the difference array from the compare array.
    console.log(missing_num_array);
    } 
  }
  return missing_num_array;
}

 difference(arrayNum);

// Write a function that takes a string of two words as input such as a name and swaps the order 
// of the words with a comma separating the two words. Ex. "Jay Won" =>
//"Won, Jay" Bonus: Use RegEx to solve this problem



//Write a function that takes 2 strings as input and tests if the first string can be found in a circular variation of the second string.

//Write a function that takes a single word as input and tests if it is a palindrome (ex. racecar),
// the same forwards as backwards. Bonus: Test for the existence of any palindromes in a word