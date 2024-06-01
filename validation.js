function show(){
    let name=document.querySelector('.name').value;
    let email=document.querySelector('.email').value;
    let number=document.querySelector('.no').value;
    let password=document.querySelector('.pass').value;
    let pass2=document.querySelector('.pass2').value;
    console.log(name,email,number,password,pass2);
    if(name===""){
        window.alert("enter required field");
        document.querySelector('.name').focus();
        return false;
    }
    else if(email===""){
        window.alert("please enter email");
        document.querySelector('.email').focus();
        return false;
    }
    else if(!email.match(/[@]/)){
        window.alert("please include @");
        document.querySelector('.email').focus();
        return false;

    }
    else if(!email.includes('@gmail.com')||email.includes('@yahoo.com')){
        window.alert("please include @gmail");
        document.querySelector('.email').focus();
        return false;
    }
    else if(no===""){
        window.alert("please enter number");
        document.querySelector('.number').focus();
        return false;
    }
    else if(isNaN(no)){
        window.alert("does not include character");
        document.querySelector('.no').focus();
        document.querySelector('.no').value="";
        return false;
    }
    else if(no.length !==10){
        window.alert("10 digit number");
        document.querySelector('.no').focus();
        return false;

    }
     else if(pass===""){
        window.alert("enter password");
        document.querySelector('.pass').focus();
        return false;
     }
     else if(pass.length<=8){
        window.alert("password should be of 8 characters");
        document.querySelector('.pass').focus();
        return false;
     }
     else if(!pass.match(/[1234567890]/)){
        window.alert("password should contain digits");
        document.querySelector('.pass').focus();
        return false;
     }
     else if(!pass.match(/[!@#$%^&*_+]/)){
        window.alert("password should contain special characters");
        document.querySelector('.pass').focus();
        return false;
     }
     else if(!pass.match(/[qwertyuioplkjhgfdsazxcvbnm]/)){
        window.alert("password should contain lowercase characters");
        document.querySelector('.pass').focus();
        return false;
     }
     else if(!pass.match(/[QWERTYUIOPLKJHGFDSAZXCVBNM]/)){
        window.alert("password should contain lowercase characters");
        document.querySelector('.pass').focus();
        return false;
     }
     else if(pass!==pass2){
        window.alert("pass and confirm pass should match");
        document.querySelector('.pass').value="";
        document.querySelector('.pass2').value="";
        document.querySelector('.pass').focus();
        return false;
     }
     else{
        window.alert("data is ready to submit");
        window.open("show.html");
     }
}