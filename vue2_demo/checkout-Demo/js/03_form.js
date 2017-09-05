(function () {
    "use strict"
var vm = new Vue({
    el:"#app",
    data:{
        ruleForm2: {
            pass: '',
            checkPass: '',
            age: ''
        },
        rules2: {
            pass: [
                    { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
                { validator: validatePass2, trigger: 'blur' }
            ],
            age: [
                { validator: checkAge, trigger: 'blur' }
            ]
        }
    },
    mounted:function () {
        var _this = this;
        this.$nextTick(function () {
            // _this.loadAll();
        })
    },
    methods:{
        submitForm:function(formName) {
            this.$refs[formName].validate(function(valid){
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm:function(formName) {
            this.$refs[formName].resetFields();
        }
    }
});


//.>>01 valid form methods
var checkAge = function(rule, value, callback){
    if (!value) {
        return callback(new Error('年龄不能为空'));
    }
    setTimeout(function(){
        if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
        } else {
            if (value < 18) {
                callback(new Error('必须年满18岁'));
            } else {
                callback();
            }
        }
    }, 1000);
};
var validatePass = function(rule, value, callback){
    if (value === '') {
        callback(new Error('请输入密码'));
    } else {
        if (vm.ruleForm2.checkPass !== '') {
            vm.$refs.ruleForm2.validateField('checkPass');
        }
        callback();
    }
};
var validatePass2 = function(rule, value, callback){
    if (value === '') {
        callback(new Error('请再次输入密码'));
    } else if (value !== vm.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'));
    } else {
        callback();
    }
};
//.<<01 valid form methods
})();