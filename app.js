var radio = document.getElementsByClassName('option')
var lines = document.getElementsByClassName('lines')
var questions = document.getElementById('questions')
var para1 = document.getElementById('para1')
var para2 = document.getElementById('para2')
var para3 = document.getElementById('para3')
var para4 = document.getElementById('para4')
var nxt = document.getElementById('nxt')
var previous = document.getElementById('previous')
var submit = document.getElementById('submit')
var infobtn = document.getElementById('infobtn')
var start = document.getElementById('start')
var username = document.getElementById('username')
var userage = document.getElementById('userage')
var quiz = document.getElementById('wrapper')
var result = document.getElementById('result')
var user = document.getElementById('name')
var age = document.getElementById('age')
var corrects = document.getElementById('corrects')
var wrong = document.getElementById('wrong')
var per = document.getElementById('per')



infobtn.addEventListener('click',()=>{
    if(userage.value >= 3 && userage.value <=40){
        start.style.display = 'none'
        quiz.style.display = 'block'
    }
    else{
        alert('age limit is 3-40 years old')
    }
})
// console.log(lines.length)
// console.log(radio.length)
var count = -1

function press(){


for(var i=0; i<lines.length;i++){ 
        if(radio[i].checked == true){
        lines[i].classList.add('active')
    }
    else{
        lines[i].classList.remove('active')
    }
}
}

var que_obj = {
    
    que_arr : [
        
        "2.	Tabulating Machine was invented by -------",
        "3.	A desktop computer is also known as",
        "4.	CPU is the --------- of computer.",
        '5.	----------- computer is the most powerful computer.',
        '6.	----------- is the physical device of a computer system.',
        '7.	IC stands for',
        '8.	Which of the following is not a characteristic of a computer    ',
        '9.	Which of the following is not Computer Hardware?',
        '10.	----------- processing is used in mainframe computer.'
    ]
}

const options = [
  
    [
        'Blaise Pascal',
        'Herman Hollerith',
        'Ada Byron',
        'Charles Babbage'
    ],
    [
        'PC',
        'Laptop',
        'Mainframe',
        'Palmtop'   
    ],
    [
        'Brain',
        'Ear',
        'Eye',
        "All"   
    ],
    [
        'Mini',
        'Micro',
        'Super',
        'Mainframe'   
    ],
    [
        'Program',
        'Software',
        'Hardware',
        "Application"   
    ],
    [
        'Internal Circuit',
        'Internal Computer',
        'Integrated Computer',
        'Integrated Circuit'   
    ],
    [
        'Speed',
        'Intelligence',
        'Automation',
        'Versatility'   
    ],
    [
        'Mouse',
        'Monitor',
        'Printer',
        'Antivirus'    
    ],
    [
        'Parallel',
        'Batch',
        'Serial',
        'Toggle'   
    ]
]

const correct = [
    'Charles Babbage',
    'Herman Hollerith',
    'PC',
    'Brain',
    'Super',
    'Hardware',
    'Integrated Circuit',
    'Intelligence',
    'Antivirus',
    'Batch'
]

var num = 0
var userAnswer = []
function next(){
    count++    
    if(count>=0 && count <que_obj.que_arr.length){
        
        if(radio[0].checked == true){
            userAnswer.push(para1.innerHTML)
            // console.log(userAnswer)
        }
        
        else if(radio[1].checked == true){
            userAnswer.push(para2.innerHTML)
            // console.log(userAnswer)
        }
        
        else if(radio[2].checked == true){
            userAnswer.push(para3.innerHTML)
            // console.log(userAnswer)
        }
        
        else if(radio[3].checked == true){
            userAnswer.push(para4.innerHTML)
            // console.log(userAnswer)
        }
        else{
            userAnswer.push('')
        }
            
    questions.innerHTML = que_obj.que_arr[count]
    questions.style.textAlign = 'center'        
    questions.classList.add('que_para') 

    para1.innerHTML = options[count][0]
    para2.innerHTML = options[count][1]
    para3.innerHTML = options[count][2]
    para4.innerHTML = options[count][3]

 
    
    for(var i=0; i<lines.length;i++){ 
    lines[i].classList.remove('active')
    radio[i].checked = false
    }
         
    }
    else if(count == 9){

        if(radio[0].checked == true){
        userAnswer.push(para1.innerHTML)
        // console.log(userAnswer)
        }

        else if(radio[1].checked == true){
        userAnswer.push(para2.innerHTML)
        // console.log(userAnswer)
        }

        else if(radio[2].checked == true){
        userAnswer.push(para3.innerHTML)
        // console.log(userAnswer)
        }

        else if(radio[3].checked == true){
        userAnswer.push(para4.innerHTML)
        // console.log(userAnswer)
        }
        else{
            userAnswer.push('')
        }

        nxt.style.display = 'none'
        previous.style.display = 'none'
        previous.style.display = 'none'
        submit.style.display = 'flex'
        submit.classList.add('submitClass')
        
        // submit.style.justifyContent = 'center'
        
    }
    console.log(userAnswer)

}
function pre(){

    if(count>0 && count<=que_obj.que_arr.length ){
    count--
    questions.innerHTML = que_obj.que_arr[count]
    questions.style.textAlign = 'center' 
    
    
    para1.innerHTML = options[count][0]
    para2.innerHTML = options[count][1]
    para3.innerHTML = options[count][2]
    para4.innerHTML = options[count][3]

}  
  
    //     if(userAnswer[count] == correct[count]){
    //         num--
    // }
    userAnswer.pop()
}

function check(){
    for(var i=0; i<userAnswer.length; i++){
        if(userAnswer[i] == correct[i]){
            num++
            // console.log(num)
        }
        console.log(num)

    }
}


submit.addEventListener('click',()=>{
    check()

    result.style.display = 'block'
    quiz.style.display = 'none'
    user.innerHTML = username.value
    age.innerHTML = userage.value
    corrects.innerHTML = num
    wrong.innerHTML = 10-num
    per.innerHTML = `${(num/correct.length)*100}%`
   
})