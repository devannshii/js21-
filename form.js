let select=document.querySelector('.btn');
select.addEventListener('click',function show(){
    let age=document.querySelector('.age').value;
    console.log(age);
    if(age<18){
        window.alert("not eligible")
    }
    else if(age>=18){
        window.alert("eligible")
    }
    else{
        window.alert("no")
    }
})