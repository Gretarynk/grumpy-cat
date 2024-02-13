const cardBox=document.getElementById('cardBox');


const fetchServices= async()=>{
    const response= await fetch('https://65bb5c4e52189914b5bbd8dd.mockapi.io/grumpycat_services');
    const services=await response.json();
    console.log(services);

    services.forEach((service)=>{
        const card=document.createElement('div');
        card.setAttribute('class','card');
        const photo=document.createElement('img');
        photo.setAttribute('class','photo');
        photo.src=service.imgUrl;
        const title=document.createElement('div');
        title.setAttribute('class','title');
        title.innerText=service.Title;
        const price=document.createElement('div');
        price.setAttribute('class','price');
        price.innerText=`${service.price} Eur per person`;


        card.append(photo);
        card.append(title);
        card.append(price)
        cardBox.append(card);

        card.addEventListener('click',()=>{
            console.log(service.Title);
            localStorage.setItem('serviceId',service.id);
            navigateToCardPage(service.id);
        });
    });
    const navigateToCardPage=(serviceId)=>{
        const servicePageUrl=`/card-page/card.html?id=${serviceId}`;
        window.location.href=servicePageUrl;
    };

}
fetchServices();