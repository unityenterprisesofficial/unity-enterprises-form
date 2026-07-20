const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxcCQtGg0zpJl1qTG2-7RxpznT2RJtdCFrJfW1yV2p8ADYc2H3DQw3xMnCIYlh9-sFw/exec";

document.getElementById("jobForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        fullName: document.getElementById("fullName").value,
        fatherName: document.getElementById("fatherName").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        instagram: document.getElementById("instagram").value,
        telegram: document.getElementById("telegram").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        maritalStatus: document.getElementById("maritalStatus").value,
        address: document.getElementById("address").value,
        education: document.getElementById("education").value,
        technical: document.getElementById("technical").value,
        experience: document.getElementById("experience").value,
        jobChoice: document.getElementById("jobChoice").value,
        timeChoice: document.getElementById("timeChoice").value,

        motherName: "",
        aadhar: "",
        pan: "",
        bankName: "",
        accountNumber: "",
        ifsc: "",
        emergencyContact: "",
        reference: "",
        photoLink: "",
        resumeLink: ""
    };

    try {

        const response = await fetch(SCRIPT_URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });

        const result = await response.json();

        if(result.status==="success"){
            alert("Application Submitted Successfully ✅");
            document.getElementById("jobForm").reset();
        }else{
            alert("Submission Failed");
        }

    }catch(error){
        alert("Error : "+error);
    }

});
