/**
 *  I am going to create a function reverseString2 so that I will get back the same input in reverse
 */
  function reverseString2(str) {
    //The return function will give m e
    return str.split("").reverse().join("");
  }
  //Now am going to console it and place some values that will give it back to me 
  console.log(reverseString2('20,18,16,10'))
  // Now that we have managed to get the reversel order, we can see the numbers reverse.
  
 // Now we are going to iterate the array by age by inserting the const which will equal to data
 const data = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

// Once we have sorted everything out, we can now group it togther by using const sortedByage which will equal to data. 
  const sortedByage = data.sort((a, b) => a.age - b.age);

  // Now we are going to use a filtered array  match the enteries with an age greater than 50, we are going to use the filter ()method to remove entries with an age greater than 50
  const filteredByAge = sortedByage.filter(entry => entry.age <= 50);

// Now we are going to map the array to change the occupation key to jbo and incrementing every age by 1. 
//We are goin to use the map() method to create a new array with modified entries. 

const modifiedData = filteredByAge.map(entry => ({
...entry,
job: entry.occupation,
age:entry.age + 1
}))
//Now are going to calculate the sum of the ages using the reduced method.
//We are going to use the reduce()method to calculate the sum of ages.

const sumOfAges = modifiedData.reduce((total, entry) => total + entry.age, 0);

// We going to calcute the average age by dividing the sum of ages by the number of enntries to get the average age 
//We going to use the const avarageAge = sumOfAges / modifieddata.length;
const avarageAge = sumOfAges / modifiedData.length
