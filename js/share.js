// 分享本页
function share_() {
    let url = window.location.origin + window.location.pathname
    try {
        // 截取标题
        var title = document.title;
        var subTitle = title.endsWith("| qzxNOCT🥝") ? title.substring(0, title.length - 14) : title;
        navigator.clipboard.writeText('share of qzxNOCT🥝\ntitle：' + subTitle + '\nlink：' + url + '\nwelcome！🍭🍭🍭');
        new Vue({
            data: function () {
                this.$notify({
                    title: "copy information success 🎉",
                    message: "You can share with others！",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success", 
                    duration: 5000
                });
                // return { visible: false }
            }
        })
    } catch (err) {
        console.error('copy error！', err);
    }
    // new ClipboardJS(".share", { text: function () { return 'title：' + document.title + '\nlink：' + url } });
    // btf.snackbarShow("copy success, share it~")
}

// 防抖
function share() {
    debounce(share_, 300);
}