let select=document.querySelector('.btn');
select.addEventListener('click',function show(){
    let age=document.querySelector('.age').value;
    let height=document.querySelector('.height').value;
    let weight=document.querySelector('.weight').value;
    console.log(age,height,weight);
    if(age<=18){
        window.alert("not eligible")
    }
    else if(age>18){
        let store=height/100;
        let ans=weight/(store*store);
        window.alert(ans)
        
        if(ans<16){
            window.alert("kuposhit")
        }
    }
})