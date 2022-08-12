const btnMobile = document.querySelector("#btn-mobile");
const featureBtn = document.querySelector("#container-feature");
const companyBtn = document.querySelector("#container-company");
const body = document.querySelector("#body")

const handleOnCLick = (event) => {
  event.preventDefault();
  const nav = document.querySelector("#nav");
  nav.classList.toggle("active");
  body.classList.add("body-active")

};

const handleClickFeature = () => {
  featureBtn.classList.toggle("active");
};

const handleClickCompany = () => {
  companyBtn.classList.toggle("active");
};

btnMobile.addEventListener("click", handleOnCLick);
featureBtn.addEventListener("click", handleClickFeature);
companyBtn.addEventListener("click", handleClickCompany);
