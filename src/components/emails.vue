<template lang="html">
    <div class="block-form">
        <div class="form-title" v-html="emails.title"></div>
        <div class="form-out">
        <form class="form-horizontal">
            <div class="form-group">
                <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
                <div class="input-group">
                    <div class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span></div>
                    <input type="text" class="form-control" id="exampleInputAmount" placeholder="请输入您的邮件地址">
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></div>
                    <input type="text" class="form-control" id="exampleInputAmount" placeholder="请输入您的密码">
                    <span class="glyphicon glyphicon-eye-open form-control-feedback"></span>
                </div>
            </div>
            <button type="button" class="btn btn-yellow btn-lg btn-block">立即成为免费会员</button>
        </form>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['attributes'],
        data() {
            return {
                emails: this.attributes
            }
        }
    }
</script>

<style lang="scss">
    .block-form {
        border: 1px solid #CCCCCC;
        border-radius: 4px;
        overflow: hidden;
        text-align: center;
        margin: 3em 0;
    }
    .form-horizontal .form-group {
        margin-left: 0;
        margin-right: 0;
    }
    .form-out {
        padding: 35px;
        .input-group-addon {
            background: none;
            color: #8D8D8D;
        }
        .form-control-feedback {
            color: #CCCCCC;
            height: 45px;
            line-height: 45px;
        }
        .form-control {
            height: 45px;
        }
        .btn-yellow {
    background-color: #ff931e;
    border-color: #ff931e;
    color: #fff;
    font-weight: bold;
    font-size: 22px;
}
    }
    .form-title {
        font-size: 20px;
        color: #333333;
        font-style: italic; 
        font-weight: bold;
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#fbfbfb+0,f3f4f3+79 */
        background: #fbfbfb; /* Old browsers */
        background: -moz-linear-gradient(top, #fbfbfb 0%, #f3f4f3 79%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, #fbfbfb 0%,#f3f4f3 79%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, #fbfbfb 0%,#f3f4f3 79%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fbfbfb', endColorstr='#f3f4f3',GradientType=0 ); /* IE6-9 */
        padding: 30px 1px;
        strong {
            color: #ff931e;
        }
    }

</style>