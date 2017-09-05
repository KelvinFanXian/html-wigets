(function () {
    "use strict"
var vm = new Vue({
    el:"#app",
    data:{

    },
    mounted:function () {
        var _this = this;
        this.$nextTick(function () {
            // _this.loadAll();
        })
    },
    methods:{
        handleOpen :function(key, keyPath){
            console.log(key, keyPath);
        },
        handleClose:function(key, keyPath) {
            console.log(key, keyPath);
        }
    }
});
})();