
document.addEventListener("DOMContentLoaded", function () {
    let player = document.getElementById("player");

    document.addEventListener("mousemove", function (event) {
        // マウスのx座標を取得
        let mouseX = event.clientX;

        // 画像の幅を取得
        let imageWidth = player.offsetWidth;

        // 画像の左端がマウスの位置となるように調整
        let imageLeft = mouseX - (imageWidth / 2);

        // 画像がコンテナからはみ出ないように調整
        let containerWidth = document.getElementById("container").offsetWidth;
        if (imageLeft < 0) {
            imageLeft = 0;
        } else if (imageLeft + imageWidth > containerWidth) {
            imageLeft = containerWidth - imageWidth;
        }

        // 画像の位置を更新
        player.style.left = imageLeft + "px";
    });
});