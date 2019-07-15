console.log('Here is : ', 'array')
/*
1
Correct the syntax error
 [ 1,7  9  45, ]
 ["Str" "alex","moh"
 'the','fox' 'over' lazy, 'dog',  ]
*/

 var x=[ 1,7,9,45]
 var y=["Str" ,"alex","moh"]
 var z=['the','fox' ,'over' ,'lazy', 'dog']

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
*/
var fruits=["Tomato","Banana","Watermelon"]
fruits[1]
fruits[0]


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
var Favorite Food = ["Food1","Food2","Food3","Food4","Food5"]
var Favorite Sport=["Sport1","Sport2","Sport3"]
var Favorite Movie=["Movie1","Movie2","Movie3","Movie4"]
/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(arr){
	return arr[0];
}
firstOfArray(["t","u","g","x"]);

// function firstOfArray(arr){
// 	var arr=[1,4,5];
// 	return arr.length(0);
// }
// console.log(firstOfArray(arr));

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array
Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

function lastOfArray(arr){
	var x=arr.length;
	return arr[x-1];
}
lastOfArray(["t","u","g","x"]);

// function lastOfArray(arr){
// 	var arr=[];
// 	return lastOfArray([1,4,5]);
// 	return arr.length();

// }
// console.log (lastOfArray(arr))
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)
var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array=[0,5,7,9]
array.shift(0)
array.shift(5)
array.shift(7)
array.unshift(1,3,4,6,8)
array.push(10)
console.log(array);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
var array2 = [5,9,-7,3.5]
*/
var array2 = [5,9,-7,3.5]
array2.shift()
array2.unshift(6)
array2.pop(8)
array2.push()
console.log(array2);


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets
Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(arr){
	if (arr.length%2==0)
	{
	return arr[(arr.length)/2-1]+"-"+arr[(arr.length)/2]
	}
	else {
		return arr[(arr.length-1)/2]
	}
}

var arr=[1,4,5]
console.log(middleOfArray(arr));



/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something
var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird']
animals.shift();
animals.shift();
animals.shift();
animals.push("zebra");
animals.push("elephant");
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index
var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9
**try more cases by your self
*/
function indexOfArray(arr,index){
	return arr[index]
}
indexOfArray([1,2,3,8,9],3);

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]
**try more cases by your self
*/
function arrayExceptLast(arry){
	return arry.pop();
}
var arry=[1,2,3,8,9];
arrayExceptLast(arry)
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array
var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]
**try more cases by your self
*/
function addToEnd(arry,value){
	arry.splice(arry.length-1, 1,value);
	return arry;
}
var nums= [1,2,3,8,9];

console.log(addToEnd(nums,55));

// 	arry.pop();
// 	arry.push(value);
// 	return arry
// }

// addToEnd([1,2,3,8,9],55)

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array
var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function sumArray(arry){
	var nums=0
	for (i=0; i<arry.length;i++){
		nums += arry[i];
	}
	console.log(nums);
}
sumArray([1,2,3,8,9]);
----
function sumArray(arry){
	var nums=0
	i=0;
	while ( i<arry.length){
		nums += arry[i];
		
	}
	i++
	console.log(nums);
}
sumArray([1,2,3,8,9]);
// ----
// function sumArray(arry){
// 	var nums=0;
// 	while (i<arry.length){
// 		nums += arry[i];
// 		i=i+1;}
// 		console.log(nums);
// 	}
// sumArray([1,2,3,8,9]);
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array
var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(arry){
	var min=arry[0];
	for (i=0;i<arry.length;i++){
		if (arry[i]<min){
			min=arry[i];
		}
	}
return (min);
}
console.log(minInArray([5,2,3,8,9]));
---
function minInArray(arry)
{
	var min=arry[0];
	var i=0;
	while (i<arry.length){
		if (arry[i]<min){
			min=arry[i];
		}
		i++;
	}
return (min);
}
console.log(minInArray([5,2,3,8,9]));

sort
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it
var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(array,elemnt){
		var arr2=[];
	for (var i=0; i<array.length;i++){
		if(array[i]!=elemnt){
			arr2.push(array[i]);
		}
			
		}
		return arr2;
	}

	removeFromArray([1,2,3,8,9],8);
-----
function removeFromArray(array,elemnt){
		var arr2=[];
		var i=0;
	while(i<array.length){
		if(array[i]!=elemnt){
			arr2.push(array[i]);
		}
		i++	
		}
		return arr2;
	}

	removeFromArray([1,2,3,8,9],8);

// 	var remove=arry.splice(3);
// 	return arry;
// }
// var nums= [1,2,3,8,9];
// console.log(removeFromArray(nums));

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts
var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function oddArray(array){
	var arr2=[];
	for (i=0; i<array.length; i++){
		if (array[i]%2==1){
		arr2.push(array[i]); 
	}
	
}
	return arr2;
}
oddArray([1,2,3,8,9]);
----
function oddArray(array){
	var arr2=[];
		i=0;
	while(i<array.length){
		if (array[i]%2==1){
		arr2.push(array[i]); 
	}
	i++
}
	return arr2;
}
oddArray([1,2,3,8,9]);

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array
var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6
var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function aveArray(array){
	var sum=0;
	for (i=0; i<array.length; i++){
		sum+=array[i]/array.length
}
return sum;
}
var sum =[1,2,3,8,9];
console.log(aveArray(sum)

---
function aveArray(array){
	var sum=0;
	i=0; 
	while (i<array.length){
		sum+=array[i]/array.length
}
i++
return sum;
}
var sum =[1,2,3,8,9];
console.log(aveArray(sum))


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function shorterInArray (array){
	var short=array[0];
	for (i=0; i<array.length; i++){
		if (array[i].length<short.length){
			short=array[i];
		}
	}
	return short;
	}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
console.log(shorterInArray(strings));
----
function shorterInArray (array){
	var short=array[0];
		i=0;
	while (i<array.length){
		if (array[i].length<short.length){
			short=array[i];
		}
	}
	i++
	return short;
	}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
console.log(shorterInArray(strings));



/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string
var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar(str,char){
		var char2=0;
	for (i=0; i<str.length; i++){
		if (str.charAt(i)===char){
			char2=char2+1;
		}
}
	return char2
}
var string= "alex mercer madrasa rashed2 emad hala"
console.log(repeatChar(string,"a"));
---
function repeatChar(str,char){
		var char2=0;
			i=0;
	while (i<str.length){
		if (str.charAt(i)===char){
			char2=char2+1;
		}
}
	 i++
	return char2
}
var string= "alex mercer madrasa rashed2 emad hala"
console.log(repeatChar(string,"a"));

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(array){
		var arr2=[];
		var index=0;
	for (i=0; i<array.length; i++){
		if (array[i].length %2!=0 && i %2==0){
			arr2[index]=array[i];
			index++;
		}
	return arr2;
		 
}
}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log(evenIndexOddLength(strings));
-----
function evenIndexOddLength(array){
		var arr2=[];
		var index=0
		i=0;
		while( i<array.length){
		if (array[i].length %2!=0 && i %2==0){
			arr2[index]=array[i];
			index++;
		}
		i++
		return arr2;
		 
}
}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log(evenIndexOddLength(strings));

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self
var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex(array){
		var arr2=[];
	for (i=0; i<array.length; i++){
		arr2[i]=array[i]**i;
		// array.length+1**array;
		}
		return arr2
}
var nums= [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(nums));
---
function powerElementIndex(array){
		var arr2=[];
			i=0;
	while ( i<array.length){
		arr2[i]=array[i]**i;
		}
		i++
		return arr2
}
var nums= [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(nums));

	
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex(array){
		var arr2=[];
		var index=0;
	for (i=0; i<array.length; i++){
		if (array[i] %2==0 && i %2==0){
			arr2[index]=array[i];
			index++;

		}
		}
	return arr2;
		 

}
var nums= [5,2,2,1,8,66,55,77,34,9,55,1];
console.log(evenNumberEvenIndex(nums)); 
----
function evenNumberEvenIndex(array){
		var arr2=[];
		var index=0;
		i=0;
	while (i<array.length){
		if (array[i] %2==0 && i %2==0){
			arr2[index]=array[i];
			index++;

		}
		}
		i++
	return arr2;
		 

}
var nums= [5,2,2,1,8,66,55,77,34,9,55,1];
console.log(evenNumberEvenIndex(nums));


