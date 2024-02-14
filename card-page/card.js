const title = document.getElementById("title");
const img = document.getElementById("img");
const description = document.getElementById("description");
const price = document.getElementById("price");
const locationElement = document.getElementById("location");
const btnDelete = document.getElementById("btnDelete");
const backButton = document.getElementById("back");
const message = document.getElementById("message");
const mobileMenu = document.getElementById("mobileMenu");
const burgerMenu = document.getElementById("burgerMenu");

// const servicesId = localStorage.getItem("serviceId");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const servicesId = urlParams.get("id");
console.log(servicesId);

const fetchServiceCard = async () => {
  const response = await fetch(
    `https://65bb5c4e52189914b5bbd8dd.mockapi.io/grumpycat_services/${servicesId}`
  );
  const service = await response.json();
  console.log(service);
  img.src = service.imgUrl;
  title.innerText = service.Title;
  description.innerText = service.description;
  price.innerText = `Price: ${service.price} Eur per person`;
  locationElement.innerText = `Location: ${service.location}`;
};

fetchServiceCard();

backButton.addEventListener("click", () => {
  window.location.href = "../index.html";
});

btnDelete.addEventListener("click", async () => {
  const response = await fetch(
    `https://65bb5c4e52189914b5bbd8dd.mockapi.io/grumpycat_services/${servicesId}`,
    {
      method: "DELETE",
    }
  );
  const service = response.json();
  message.innerText = "Service card was deleted successfully.";
  if (service) {
    setTimeout(() => {
      window.location.assign("../index.html");
    }, 5000);
  }
});
burgerMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
