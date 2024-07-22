// 收據商品細項收合
function receiptMin(e) {
    var receipt = e.closest('.receipt-item')
    if (receipt.classList.contains('receipt-item--min')) { // 開
        receipt.querySelector('.receipt-item__dropdown').firstElementChild.style.animationName = "dropdownMax";
        receipt.querySelector('.receipt-item__detail').style.animationName = "detailMax";
        receipt.classList.toggle('receipt-item--min');
    } else { // 關
        receipt.querySelector('.receipt-item__dropdown').firstElementChild.style.animationName = "dropdownMin";
        receipt.querySelector('.receipt-item__detail').style.animationName = "detailMin";
        setTimeout(function(){ receipt.classList.toggle('receipt-item--min'); }, 500); }}