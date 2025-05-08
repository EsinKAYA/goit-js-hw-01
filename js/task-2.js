let country;
let price;   //birim fiyatı
let deliveryFee;  //kargo ücreti
function getShippingMessage(country, price, deliveryFee){
    let totalPrice= price + deliveryFee; //toplam fiyat hesaplanıyor
    console.log(`Shipping to ${country} will cost ${totalPrice} credits  droids worth  credits!`)
}
getShippingMessage("Australia", 120, 50);
getShippingMessage("Germany", 80, 20);
getShippingMessage("Sweden", 100, 20);