const buttonAdd=document.getElementById('addButton');
const  title=document.getElementById('inputTitle');
const imgUrl=document.getElementById('imgUrl');
const description=document.getElementById('textDescription');
const price=document.getElementById('inputPrice');
const serviceLocation=document.getElementById('inputLocation');
const messageAdd=document.getElementById('messageAdd');
const mobileMenu=document.getElementById('mobileMenu');
const burgerMenu=document.getElementById('burgerMenu');

buttonAdd.addEventListener('click', async()=>{
    if(!title.value || !description.value || !price.value || !imgUrl.value || !serviceLocation.value || description.value.length<25 )
    {messageAdd.innerText = 'Please provide all required information.';
    messageAdd.classList.add('messageAddError');
    setTimeout(()=>{
        messageAdd.innerText='';
    }, 3000);
    return;
       
    }
    const serviceData={
        Title:title.value,
        description:description.value,
        price:price.value,
        imgUrl:imgUrl.value,
        location:serviceLocation.value,

    }
    const response= await fetch('https://65bb5c4e52189914b5bbd8dd.mockapi.io/grumpycat_services',{
        method: "POST", headers:{
            Accept: "application/json",
      "Content-Type": "application/json",
        },
        body: JSON.stringify(serviceData),
    });
    const addedServices=await response.json();
    console.log(addedServices);

    messageAdd.innerText= 'Your service was added successfully.';
    messageAdd.classList.add('messageAdd');
    setTimeout(()=>{
        messageAdd.innerText='';
        window.location.assign("../index.html");
    },3000);

});

burgerMenu.addEventListener('click',()=>{
    mobileMenu.classList.toggle('active');
})