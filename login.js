function Verify() {
    let email = document.getElementById("email").value;
    console.log(email);
    if (email == "admin@admin.com") {
      location.replace("indexADM.html");
    }
    if (email == "") {
      myFunction();
    }
    if (email !== "" && email !== "admin@gmail.com") {
      location.replace("indexCli.html");
    }
  }  