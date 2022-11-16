function priceOfProducts(saltBeefPrice, saltBeefRequest, riceRequest) {
	const saltRicePrice = Math.round(saltBeefPrice / 3 * 100) / 100;
	const totalPrice = riceRequest * saltRicePrice + saltBeefPrice * saltBeefRequest;
	return totalPrice;
}

module.exports = priceOfProducts;