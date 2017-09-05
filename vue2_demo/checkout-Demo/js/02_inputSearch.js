(function () {
    "use strict"

var vm = new Vue({
    el:"#app",
    data:{
        restaurants: [],
        state2: ''
    },
    filters:{
        formatMoney:function (value) {
            return "￥ "+value.toFixed(2);
        }
    },
    mounted:function () {
        var _this = this;
        this.$nextTick(function () {
            _this.loadAll();
        })
    },
    methods:{
        querySearch(queryString, cb) {
            var _this = this;
            if(_this.state2.length<5) return false;
            _this.loadAll();
            var restaurants = this.restaurants.array;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {console.log('createFilter>>')
            // return (restaurant) => {
            //     return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
            // };
            return function(restaurant){
                return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
            };
        },
        loadAll:function () {console.log('loadAll>>')
            var _this = this;
            axios.get("data/02_inputSearchData.json")
                .then(function (response) {
                    _this.restaurants = response.data;
                });
        },
        handleSelect(item) {console.log('handleSelect>>')
            console.log(item);
        }
    }
});
})();