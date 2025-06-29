const saveStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
const getStorage = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
};

const themeAction = document.querySelector(".theme__btn");
const body = document.querySelector("body");

(() => {
  const theme = getStorage("theme");
  if (theme) {
    body.classList.add(theme);
  }
  body.classList.add();
})();

themeAction.addEventListener("click", () => {
  const data = body.classList.toggle("dark");
  if (data) {
    saveStorage("theme", "dark");
  } else {
    saveStorage("theme", "light");
  }
});
//////////////////////////////////////tabs//////////////////////////////////////

import { category, products } from "./data.js";
const leatest__list = document.querySelector(".leatest__list");
const product__box = document.querySelector(".product__box");

const renderProduct = (key) => {
  const data = products.find((item) => item.title === key).products;
  product__box.innerHTML = data
    .map(
      (obj) => `
    <div>
    <img src="${obj.img}" alt="img" />
    <h2 class="leatest__item">${obj.name}</h2>
    <strong>${obj.price}</strong>
    </div>`
    )
    .join("");
};
const renderCategory = (active) => {
  leatest__list.innerHTML = category
    .map(
      (item) => `
    <li data-title="${item}" class="leatest__item ${
        item === active ? "active__tab" : ""
      }"> ${item} </li>
    `
    )
    .join("");
};
renderProduct(category[0]);
renderCategory(category[0]);

leatest__list.addEventListener("click", (e) => {
  if (e.target.dataset.title) {
    const title = e.target.dataset.title;
    renderProduct(e.target.dataset.title);
    renderCategory(e.target.dataset.title);
  }
});
