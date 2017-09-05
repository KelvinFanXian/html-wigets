var vm = new Vue({
    el:"#app",
    data:{
        agreement:[],
        agreeTypeList:[{"paraItemCd":0,"paraItemNm":"普通采购"},{"paraItemCd":1,"paraItemNm":"渠道代理"},{"paraItemCd":2,"paraItemNm":"独家采购"},{"paraItemCd":3,"paraItemNm":"个性化"}],
        agreeStatList:[{"paraItemCd":0,"paraItemNm":"待审核"},{"paraItemCd":1,"paraItemNm":"已审核"},{"paraItemCd":2,"paraItemNm":"已签约"},{"paraItemCd":3,"paraItemNm":"已终止"}],
        queryCond:{
            clucliname:'',
            agreeType:'',
            agreeStat:'',
            saleSupervisor:'',
            saleFollow:'',
            dateRange:''
        }
    },
    filters:{
        formatMoney:function (value) {
            return "￥ "+value.toFixed(2);
        }
    },
    mounted:function () {
        this.$nextTick(function () {
            this.viewAgreement();
        })
    },
    methods:{
        viewAgreement:function () {
            _this = this;
            axios.get("data/agreementData.json").then(function (res) {
                _this.agreement = res.data.agreement;
            });
        },
        addAgreement:function () {
            alert(1);
            //在下面追加一行
            // this.paratype.push({"id":"","paraTypeCd":"","paraTypeNm":"","description":""});
        },
        delType:function (index,row) {
            // this.paratype.splice(index,1);
        },
        editType:function (index,row) {
            //01变换为保存按钮
            // for(var i=0;i<this.paratype.length;i++){
            //     if(index==i){
            //         if(typeof this.paratype[i].editMode == "undefined"){
            //             Vue.set(this.paratype[i],"editMode",true);
            //         }else{
            //             this.paratype[i].editMode = true;
            //         }
            //     }
            // }
            //02操作dom将td转为input
            // var table_paratype = document.getElementById("table_paratype"),
            //     currtr = table_paratype.querySelector('tbody').children[index];
            //
            //     for(var j=0;j<currtr.childNodes.length;j++){
            //         var td = currtr.childNodes[j];
            //         if(td.className.indexOf("option") == -1){
            //             var cell = td.firstChild,
            //                 value=cell.innerText;
            //             cell.innerHTML = "<input type='text' class='celltobesave' value='" + value + "' style='width:100%;box-sizing:border-box;background:transparent;font-size:13px;color:red;text-align:center'>";
            //         }
            //     }
        },
        saveType:function (index,row) {
            //01 变换为编辑按钮
            // for(var i=0;i<this.paratype.length;i++){
            //     if(index==i){
            //         this.paratype[i].editMode = false;
            //     }
            // }
            //02 操作dom将input转为td && 并将该行数据ajax保存到服务端
            // var table_paratype = document.getElementById("table_paratype"),
            //     currtr = table_paratype.querySelector('tbody').children[index],
            //     celltobesave = currtr.getElementsByClassName('celltobesave');
            // var celltobesaveVal = [];
            // for(var i = 0;i<celltobesave.length;i++){
            //     celltobesaveVal.push(celltobesave[i].value);
            // }
            // for(var j=0;j<currtr.childNodes.length;j++){
            //     var td = currtr.childNodes[j];
            //     if(td.className.indexOf("option") == -1){
            //         var str = '<div class="cell">'+celltobesaveVal[j]+'</div>';
            //         td.innerHTML=str;
            //     }
            // }
        },
        queryAgree:function () {
            
        }
    }
});