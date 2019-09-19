var url = "https://movies-api-siit.herokuapp.com";
var parameter = url + "/auth/login";

Login = Login() {}

Login.prototype.loginFromAPI = function(username,password) {
    return fetch(parameter, {
        method: "POST",
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
        "Content-type": "application/json" 
        }
    }).then(function(response){
        console.log("Login", response)
        if (response.ok){
           return response.json();
        }
        throw new Error("Cannot login", response.status)
    })
}