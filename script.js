const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;
generateBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    isempty();
})
downloadBtn.addEventListener('click' , (e) =>{
    let img = document.querySelector('.qr-body img');
    if (img !== null) {
        let imgatrr = img.getAttribute('src')
        downloadBtn.setAttribute("href",imgatrr);
    } else {
        e.preventDefault();
        alert("there is no QRCode avalable , generate QRCode first !!")
    }
})
function isempty() {
    if (qrText.value.length > 0) {
        
        generateQRCode();
    } else {
        alert("input can not be empty, enter valid url please");
    }
}
sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isempty();
    
})
function generateQRCode(){
    qrContainer.innerHTML = ""; 
     new QRCode(qrContainer, {
        text: qrText.value,
        width: size,
        height: size,
        colorDark : "#000000",
        colorLight : "#ffffff",
        
    });
}
