// 商品popup
function popItem() {
    document.getElementById("pop__item").style.display = "flex";
    document.body.style.overflow = "hidden";
    img = document.getElementById("item-img"); //商品照片比例調整
    img.style = "min-height: " + img.firstElementChild.offsetWidth + "px"; }

// 購物車popup
function popCart() {
    document.getElementById("pop__cart").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 推薦一起點popup
function popSuggest() {
    document.getElementById("pop__suggest").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 通知popup
function popNotice() {
    document.getElementById("pop__notice").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// 備註自動高度
function textarea(e) {
    e.style = "min-height: " + (e.scrollHeight) + "px"; }