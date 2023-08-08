let users =[];

const addUser = () =>{

    let firstname = document.getElementById('fName').value;
    let lastname = document.getElementById('lName').value;
    let age = document.getElementById('Age').value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('phone').value;


    users.push(
        {
        firstname: firstname,
        lastname: lastname,
        age: age,
        email:email,
        contact:contact
    });



    let divElement= document.getElementById("form-data");
    divElement.innerHTML = "";
    let tableElement = document.createElement("table");

    let HeaderElement = document.createElement('tr');

    let thFnameElement = document.createElement('th');
    thFnameElement.innerText = "First Name";
    let thLnameElement = document.createElement('th');
    thLnameElement.innerText = "Last Name";
    let thAgeElement = document.createElement('th');
    thAgeElement.innerText = "Age";
    let thEmailElement = document.createElement('th');
    thEmailElement.innerText = "Email";
    let thContactElement = document.createElement('th');
    thContactElement.innerText = "Contact Number";

    HeaderElement.append(thFnameElement, thLnameElement, thAgeElement, thEmailElement, thContactElement);
    tableElement.appendChild(HeaderElement);
    
    for(let i=0; i<users.length;i++){
        let user=users[i];
        let trElement = document.createElement("tr");

        let fdata= document.createElement("td");
        fdata.innerText= user.firstname;
        trElement.append(fdata);
        
        let lNameData= document.createElement("td");
        lNameData.innerText= user.lastname;
        trElement.append(lNameData);
        
        let ageData= document.createElement("td");
        ageData.innerText= user.age;
        trElement.append(ageData);

        let emailData= document.createElement("td");
        emailData.innerText= user.email;
        trElement.append(emailData);
        
        let phone= document.createElement("td");
        phone.innerText= user.contact;
        trElement.append(phone);

        tableElement.append(trElement);
    }
divElement.appendChild(tableElement)

}

const resetData = () =>{
    document.getElementById('fName').value ="";
    document.getElementById('lName').value ="";
    document.getElementById('Age').value ="";
    document.getElementById('email').value ="";
    document.getElementById('phone').value ="";
}