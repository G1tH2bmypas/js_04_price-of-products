function priceOfProducts(saltBeefPrice, saltBeefRequest, riceRequest) {
	return riceRequest * Math.round(saltBeefPrice / 3 * 100 ) / 100 + saltBeefPrice * saltBeefRequest;
}

module.exports = priceOfProducts;