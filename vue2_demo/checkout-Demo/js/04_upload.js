(function () {
    "use strict"
var vm = new Vue({
    el:"#app",
    data:{
        fileList: [
            { name: 'food.jpeg',
                 url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            },
            {name: 'food2.jpeg',
                 url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }
            ]
    },
    mounted:function () {
        var _this = this;
        this.$nextTick(function () {
            // _this.loadAll();
        })
    },
    methods:{
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
            // debugger;
        }
    }
});
})();