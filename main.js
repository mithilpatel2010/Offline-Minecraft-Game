function addUser()
{
    var numbers = 123456;
    var numbers1 = 0;
    if(Password.value.match(numbers))
    {
    window.location = "minecraft.html";
    alert("You have been succesfuly logged in! Press OK to be redirected to the Minecraft Game.")
    }
    else
    {
        alert("Invalid Password, please try again.")
        window.location = "index.html"
    }
}

function forgot()
{
    window.location = "forgot.html"
    alert("Press OK to be redirected to the Forgot Password page.")
}