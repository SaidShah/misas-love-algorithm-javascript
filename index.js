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
