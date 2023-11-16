new Vue({
    data: function () {
        this.$notify({
            title: "",
            message: "please follow the GPL protocol！",
            position: 'top-left',
            offset: 50,
            showClose: true,
            type: "warning",
            duration: 5000
        });
    }
})