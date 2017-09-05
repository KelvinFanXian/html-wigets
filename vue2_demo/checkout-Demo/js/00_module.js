var vm = new Vue({
    el:"#app",
    data:{
        paratype:[],
        paraitem:[]
    },
    filters:{
        formatMoney:function (value) {
            return "￥ "+value.toFixed(2);
        }
    },
    mounted:function () {
        this.$nextTick(function () {
            this.viewType();
        })
    },
    methods:{
        viewType:function () {
            _this = this;
            axios.get("data/paraData.json").then(function (res) {
                _this.paratype = res.data.paratype;
            });
        },
        addType:function () {
            //在下面追加一行
            this.paratype.push({"id":"","paraTypeCd":"","paraTypeNm":"","description":""});
        },
        delType:function (index,row) {
            this.paratype.splice(index,1);
        },
        editType:function (index,row) {
            //01变换为保存按钮
            for(var i=0;i<this.paratype.length;i++){
                if(index==i){
                    if(typeof this.paratype[i].editMode == "undefined"){
                        Vue.set(this.paratype[i],"editMode",true);
                    }else{
                        this.paratype[i].editMode = true;
                    }
                }
            }
            //02操作dom将td转为input
            var table_paratype = document.getElementById("table_paratype"),
                currtr = table_paratype.querySelector('tbody').children[index];

                for(var j=0;j<currtr.childNodes.length;j++){
                    var td = currtr.childNodes[j];
                    if(td.className.indexOf("option") == -1){
                        var cell = td.firstChild,
                            value=cell.innerText;
                        cell.innerHTML = "<input type='text' class='celltobesave' value='" + value + "' style='width:100%;box-sizing:border-box;background:transparent;font-size:13px;color:red;text-align:center'>";
                    }
                }
        },
        saveType:function (index,row) {
            //01 变换为编辑按钮
            for(var i=0;i<this.paratype.length;i++){
                if(index==i){
                    this.paratype[i].editMode = false;
                }
            }
            //02 操作dom将input转为td && 并将该行数据ajax保存到服务端
            var table_paratype = document.getElementById("table_paratype"),
                currtr = table_paratype.querySelector('tbody').children[index],
                celltobesave = currtr.getElementsByClassName('celltobesave');
            var celltobesaveVal = [];
            for(var i = 0;i<celltobesave.length;i++){
                celltobesaveVal.push(celltobesave[i].value);
            }
            for(var j=0;j<currtr.childNodes.length;j++){
                var td = currtr.childNodes[j];
                if(td.className.indexOf("option") == -1){
                    var str = '<div class="cell">'+celltobesaveVal[j]+'</div>';
                    td.innerHTML=str;
                }
            }
        },
        viewItem:function(row, event, column) {
            if(column.className=="option"){//如果是操作列则不作处理
                return false;
            }
            _this = this;
            axios.get("data/paraData.json",{paraTypeId:row.id}).then(function(res){
                _this.paraitem.length=0;
                _this.paraitem=[];
                for(var i=0;i<res.data.paraitem.length;i++){
                    if(res.data.paraitem[i].paraTypeId==row.id){
                        _this.paraitem.push(res.data.paraitem[i]);
                    }
                }
            });
        },
        addItem:function () {
            this.paraitem.push({"id":"","paraTypeId":"","paraItemCd":"","paraItemNm":"","description":""});
        },
        delItem:function (index,row) {
            this.paraitem.splice(index,1);
        },
        editItem:function (index,row) {
            //01变换为保存按钮
            for(var i=0;i<this.paraitem.length;i++){
                if(index==i){
                    if(typeof this.paraitem[i].editMode == "undefined"){
                        Vue.set(this.paraitem[i],"editMode",true);
                    }else{
                        this.paraitem[i].editMode = true;
                    }
                }
            }
            //02操作dom将td转为input
            var table_paratype = document.getElementById("table_paraitem"),
                currtr = table_paratype.querySelector('tbody').children[index];
            for(var j=0;j<currtr.childNodes.length;j++){
                var td = currtr.childNodes[j];
                if(td.className.indexOf("option") == -1){
                    var cell = td.firstChild,
                        value=cell.innerText;
                    cell.innerHTML = "<input type='text' class='celltobesave' value='" + value + "' style='width:100%;box-sizing:border-box;background:transparent;font-size:13px;color:red;text-align:center'>";
                }
            }
        },
        saveItem:function (index,row) {
            //01 变换为编辑按钮
            for(var i=0;i<this.paraitem.length;i++){
                if(index==i){
                    this.paraitem[i].editMode = false;
                }
            }
            //02 操作dom将input转为td && 并将该行数据ajax保存到服务端
            var table_paraitem = document.getElementById("table_paraitem"),
                currtr = table_paraitem.querySelector('tbody').children[index],
                celltobesave = currtr.getElementsByClassName('celltobesave');
            var celltobesaveVal = [];
            for(var i = 0;i<celltobesave.length;i++){
                celltobesaveVal.push(celltobesave[i].value);
            }
            for(var j=0;j<currtr.childNodes.length;j++){
                var td = currtr.childNodes[j];
                if(td.className.indexOf("option") == -1){//排除操作列
                    var str = '<div class="cell">'+celltobesaveVal[j]+'</div>';
                    td.innerHTML=str;
                }
            }
        },
        // handleSizeChange: function(val) {		//调整每页数量event
        //     this.pageSize = val;
        //     this.loadParaData(1, val);
        // },
        // handleCurrentChange: function(val) {		//跳转当前页到指定索引页event
        //     this.currentPage = val;
        //     this.loadParaData(val, this.pageSize);
        // }
        ///below region to declare private methods

    }
});