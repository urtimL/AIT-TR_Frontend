const shoppingCart = {
    items: [], // массив товаров  item => name, price, quantity
    totalCost: 0, // итогова стоимость всех продуктов
    addItem(item) {
        const existingItem = this.items.find((e) => e.name === item.name);
        if (existingItem) {
            existingItem.quantity += item.quantity;
            existingItem.price =
                existingItem.price < item.price
                    ? item.price
                    : existingItem.price;
        } else {
            this.items.push(item);
        }
        this.updateTotalCost();
    },
    removeItem(itemName) {
        const index = this.items.findIndex((elem) => elem.name === itemName);
        if (index !== -1) {
            this.items.splice(index, 1);
            this.updateTotalCost();
        }
    },
    updateTotalCost() {
        this.totalCost = this.items.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
    },
};

const add = document.getElementById("add");
const stats = document.getElementById("stats");
// '     555     '.trim() => '555'

add.onclick = addHandler;
stats.onclick = statsHandler;

function statsHandler() {
    // Кол-во позиций;
    // Итоговая стоимость всех продуктов;
    // Итоговое кол-во всех продуктов;
    // Максимальная цена
    // Минимальная цена
    // Средняя цена

    statsOur.innerHTML = "";

    const [count, totalNumber, maxPrice, minPrice, averPrice] = statistics();

    const li = document.createElement("li");
    li.textContent = `
            Number of positions: ${count},
            Total cost of all products: ${shoppingCart.totalCost},
            Total number of all products: ${totalNumber},
            Maximum price: ${maxPrice},
            Minimum price: ${minPrice},
            Average price: ${averPrice},
        `;

    statsOur.appendChild(li);
}

function statistics() {
    const res = [];
    let count = 0;
    let totalNumber = 0;
    let minPrice = 999999999;
    let maxPrice = -999999999;
    shoppingCart.items.forEach((e) => {
        count++;
        totalNumber += e.quantity;
        minPrice = minPrice > e.price ? e.price : minPrice;
        maxPrice = maxPrice < e.price ? e.price : maxPrice;
    });
    res.push(count);
    res.push(totalNumber);
    res.push(maxPrice);
    res.push(minPrice);
    res.push(shoppingCart.totalCost / totalNumber);

    return res;
}

function addHandler() {
    shoppingCart.addItem({
        name: productName.value.trim(),
        price: +price.value.trim(),
        quantity: +quantity.value.trim(),
    });

    productList.innerHTML = "";

    shoppingCart.items.forEach((e) => {
        const li = document.createElement("li");
        li.textContent = `
            Product name: ${e.name},
            Product price: ${e.price},
            Quantity of product: ${e.quantity},
        `;
        productList.appendChild(li);
    });
}

const item = {
    name: "Alice",
};

// item.name === 'Хлеб'
