let shop = document.getElementById("shop");
let shoItemData = [
  {
    id: 1,
    name: "SubmitEvent",
    price: 30,
    image: "image/one.jpg",
    disc: "Lorem Ipsom dolor, sit amet constarctor adipisicing",
  },
  {
    id: 2,
    name: "trouser",
    price: 80,
    image: "image/one.jpg",
    disc: "Lorem Ipsom dolor, sit amet constarctor adipisicing",
  },
  {
    id: 3,
    name: "tishert",
    price: 60,
    image: "image/one.jpg",
    disc: "Lorem Ipsom dolor, sit amet constarctor adipisicing",
  },
  {
    id: 4,
    name: "suit",
    price: 50,
    image: "image/one.jpg",
    disc: "Lorem Ipsom dolor, sit amet constarctor adipisicing",
  },
];
let basket = [];

let generateShop = () => {
  return (shop.innerHTML = shoItemData

    .map((x) => {
      let { id, name, price, image, disc } = x;
      return `<div id=product-id-${id} class="item">
    <img width="180" src=${image} alt="" />
    <div class="details">
      <h2>${name}</h2>
      <p>${disc}</p>
      <div class="price-quantity">
        <h2>$ ${price}</h2>
        <div class="button">

        <i onclick="decrement(${id})"class="bi bi-dash-lg"></i>
          <div id=${id} class="quantity">0</div>
          <i onclick="increment(${id})" class="bi bi-plus"></i>
        </div>
      </div>
    </div>
  </div>

    `;
    })
    .join(""));
};
generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === id);
  if (search === undefined) {
    basket.push({
      id: id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  update(id);
};
let decrement = (id) => {
  let search = basket.find((x) => x.id === id);
  if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(id);
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);

  document.getElementById(id).innerHTML = search.item;
};
