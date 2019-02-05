//
// Misa Amane loves Light Yagami and she wants to join him in his mission to wipe out all criminals. However, Light Yagami is skeptical about her intelligence and asks her to prove it.
//
// He gives Misa a string consisting of lowercase english characters and asks her to count the occurrence of the non-empty prefix which occurs maximum number of times in the string as substring. Misa cannot solve it and has asked for your help. Solve this task for her!
//
// Input Format
//
// The first and only line of input contains the string as defined in statement.
//
// Constraints
//
// It is guaranteed that the given string contains only lowercase english alphabets
// Output Format
//
// In a single line print the count of the prefix which occurs maximum number of times.
//
// Sample Input 0
//
// abc
// Sample Output 0
//
// 1
// Sample Input 1
//
// abbcdabbcd
// Sample Output 1
//
// 2





function misasLoveSubmission(input){
  let str=""
    let splitString = input.split("")
    let indexes=[]
    for(let i =0;i<input.length;i++){
        str+=splitString[i]
        if(input.substring(i).includes(str)){
            indexes.push(i+1)
        }

    }
        let word = input.substring(0,indexes[indexes.length-1])
          let newWord = input.replace(new RegExp(`${word}`, 'g'), '$')
          let charArray = newWord.split("")
        let counter = 0
        for(let i =0;i<charArray.length;i++){
            if(charArray[i]==='$'){
                counter++
            }
        }
    console.log(counter,input)
}

let str1="abbcabbc"
let str2="abcdabcd"
let str3="aaabbcas"

misasLoveSubmission(str1)
misasLoveSubmission(str2)
misasLoveSubmission(str3)
