class Item {
    constructor(name,discount) {
        this.name = name;
        this.discount = discount;
    }
}
Item.mainPrice = 1000;
Item.prototype.getDiscountPrice = function () {
	return Item.mainPrice - Item.mainPrice * this.discount/100;
}

const item1 = new Item("Apple",40);
console.log(item1.getDiscountPrice());