// updates date and time dynamically using the moment.js function
var update = function() {
    document.getElementById("datetime")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

// save to local storage with JavaScript (working on JQuery functions below)
// saving 9 am's input to local storage
var data9=document.getElementById("data9");
var nine=localStorage.getItem("nine");
if(nine){
    data9.value=nine
}
var save9=document.getElementById("save9");
save9.addEventListener("click", function(){
localStorage.setItem("nine", data9.value) 
})

// saving 10 am's input to local storage
var data10=document.getElementById("data10");
var ten=localStorage.getItem("ten");
if(ten){
    data10.value=ten
}
var save10=document.getElementById("save10");
save10.addEventListener("click", function(){
localStorage.setItem("ten", data10.value) 
})

// saving 11 am's input to local storage
var data11=document.getElementById("data11");
var eleven=localStorage.getItem("eleven");
if(eleven){
    data11.value=eleven
}
var save11=document.getElementById("save11");
save11.addEventListener("click", function(){
localStorage.setItem("eleven", data11.value) 
})

// saving 12 pm's input to local storage
var data12=document.getElementById("data12");
var twelve=localStorage.getItem("twelve");
if(twelve){
    data12.value=twelve
}
var save12=document.getElementById("save12");
save12.addEventListener("click", function(){
localStorage.setItem("twelve", data12.value) 
})

// saving 1 pm's input to local storage
var data1=document.getElementById("data1");
var one=localStorage.getItem("one");
if(one){
    data1.value=one
}
var save1=document.getElementById("save1");
save1.addEventListener("click", function(){
localStorage.setItem("one", data1.value) 
})

// saving 2 pm's input to local storage
var data2=document.getElementById("data2");
var two=localStorage.getItem("two");
if(two){
    data2.value=two
}
var save2=document.getElementById("save2");
save2.addEventListener("click", function(){
localStorage.setItem("two", data2.value) 
})

// saving 3 pm's input to local storage
var data3=document.getElementById("data3");
var three=localStorage.getItem("three");
if(three){
    data3.value=three
}
var save3=document.getElementById("save3");
save3.addEventListener("click", function(){
localStorage.setItem("three", data3.value) 
})

//saving 4 pm's input to local storage
var data4=document.getElementById("data4");
var four=localStorage.getItem("four");
if(four){
    data4.value=four
}
var save4=document.getElementById("save4");
save4.addEventListener("click", function(){
localStorage.setItem("four", data4.value) 
})

//saving 5 pm's input to local storage
var data5=document.getElementById("data5");
var five=localStorage.getItem("five");
if(five){
    data5.value=five
}
var save5=document.getElementById("save5");
save5.addEventListener("click", function(){
localStorage.setItem("five", data5.value) 
})
 
/* Working on JQuery code below 
    localStorage.setItem("nine", $("#save9").value());
    localStorage.setItem("ten", $("#save10").value());
    localStorage.setItem("eleven", $("#save11").value());
    localStorage.setItem("twelve", $("#save12").value());
    localStorage.setItem("one", $("#save1").value());
 */