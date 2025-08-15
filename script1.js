document.getElementById("loginForm").addEventListener("submit",function(e){
    e.preventDefault();
    const email =document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const users=JSON.parse(localStorage.getItem("users")) || [];
    if (email ==="admin@email.com" && password === "33481548"){
        sessionStorage.setItem("role","admin");
        alert("koneksyon reyisi");
        window.location.href ="ajouter.html"
    }else{
        sessionStorage.setItem("role","patisipan");
        alert("koneksyon reyisi");
        window.location.href="Quiz.html"
    }
   // users.push({email,password});
   // localStorage.setItem("users", JSON.stringify(users));
    //const user =users.find( u=>u.email === email && u.password === password);
   // if(user){
   //     alert("koneksyon reyisi!");
   //     window.location.href="ajouter.html";
   // }else{
   //     alert("Email ou modpas ou pa korek");
   // }
});