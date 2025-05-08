
let quantity;  //sipariş edilen droid sayısı
let pricePerDroid;   //droid başına fiyat
let totalPrice;  //toplam fiyat
function makeTransaction(quantity, pricePerDroid) {
    totalPrice = quantity * pricePerDroid; //toplam fiyat hesaplanıyor
    console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`)
}
makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500);