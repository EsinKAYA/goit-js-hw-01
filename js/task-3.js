let content;
let padding;
let border;

function getElementWidth(content, padding, border){
    let totalWidth = content + padding * 2 + border * 2; //toplam genişlik hesaplanıyor
    console.log(totalWidth)
}
getElementWidth(50, 8, 4); // 74
getElementWidth(60, 12, 8.5); // 101
getElementWidth(200, 0, 0); // 200