/*window.onload = function(){  
    var username=document.getElementById("input1");  
    var pwd=document.getElementById("input2");  

    username.value="1502303020";
    pwd.value="195211";
    document.getElementById("signin").click();  

} */
/*window.onload = function(){  
    var list=document.getElementsByTagName("input");  
    alert(list.length);
    for(var i=0;i<list.length;i++)  
    {  
        alert(list[i].id);
    }  
}  */

window.onload = function () {

    var username = document.getElementsByName("DDDDD");
    
        for (let i = 0; i < username.length; i++) {
            username[i].value = "1502303020";
             /* username[i].value = "jwcz";*/
        }
    

    
        var pwd = document.getElementsByName("upass");
        for (let j  = 0;j < pwd.length; j++) {
            pwd[j].value = "195211";
             /* pwd[j].value = "ROSE626492";*/
        }
    
   

   
   
    var btn = document.getElementsByName("0MKKey");
    for (let k = 0; k < btn.length; k++) {
      btn[k].click();
    }
    

} 