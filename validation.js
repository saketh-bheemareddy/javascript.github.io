function validate()
{
    var name = document.getElementById("name").value;
    var uname = document.getElementById("uname").value;
    var pwd = document.getElementById("pwd").vlaue;
    var email = document.getElementById("email").value;
    var ph = document.getElementById("phno").value;
    var reg1 = new RegExp("[A-Za-z]");
    var reg2 = new RegExp("[a-z_]");
    var reg3 = new RegExp("[7-9][0-9]{9}$");
    var reg4 = new RegExp("[a-z0-9\._][@][a-z][.][a-z]")
    var flag = 1;
    if(!reg1.test(name))
    {
        alert("inValid name");
        flag = 0;
    }
    if(!reg2.test(uname))
    {
        alert("invalid Uname");
        flag = 0;
    }
    if(!reg3.test(ph))
    {
        alert("Invalid Phone number");
        flag = 0;
    }
    if(!reg4.test(email))
    {
        alert("Invalid email address");
        flag = 0;
    }
    if(flag == 1)
    {
        alert("All details are validated..");
    }

}