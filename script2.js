document.getElementById("registerForm").addEventListener("submit",function(e){
    e.preventDefault();
    const email=document.getElementById("registerEmail").value;
    const password=document.getElementById("registerPassword").value;
    const users=JSON.parse(localStorage.getItem("users"))||0;
    if(users.find(u=>u.email===email)){
        alert("email sa anrejistre deja.");
        return;
    }
    users.push({email,password});
    localStorage.setItem("users",JSON.stringify(users));
    alert("enskripsyon reyisi!");
    window.location.href="connexion.html";
});