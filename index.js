
function sendOtp(){
    let email = document.getElementById("inp-email");
    let otp_class = document.getElementsByClassName("otp-verify");

    let otp_val = Math.floor(Math.random()*10000);
    let body = `<h1>Your OTP is ${otp_val}</h1>`
    
    Email.send({
        SecureToken : "06d0a010-101f-460f-aeae-85273483cb94",
        To : email.value,
        From : "rapidreels012@gmail.com",
        Subject : "OTP Verification",
        Body : body
    }).then(
      message => {
        if(message === "OK")
        {
            alert("OTP sent successfully")
            // otp_class.style.display="block";
            let inp_otp = document.getElementById("inp-otp");
            let verify = document.getElementById("verify");
            inp_otp.style.display="block";
            verify.addEventListener("click",()=>{
                if(Number(inp_otp.value) === otp_val){
                    alert("Validated")
                }
                else{
                    alert("Not Validated")
                }
            })
            
            
        }
        else{
            alert("failed to send")
        }
      }
    );
    
}