<template lang="html">
    <div class="center">
        <div class="container-center">
            <div class="img">
                <img src="/src/images/book.png" alt="">
            </div>
            <div class="content">
                <p>为了把高效率学会英语的方法，用视频和文字生动结合，为您立体、全面展示，学会英语的旅途中，每一个阶段怎么学，应该如何准确使用自己的注意力，以及有效管理自己的学习状态等综合性辅导，我们特别设计了《功夫英语，6个月搏10年》。这本书不仅全面系统的回答了高效率学会英语的方法，而且，我们也将免费送给您超过600元的学习价值！</p>
                <p>首先，您将会在这本书中，免费获得价值170元的学习方法视频课程，这些视频全部由龙飞虎先生本人亲自用中文讲解。龙飞虎先生用符合人脑学习规律的方式，亲自设计了每一个学习方法视频。每一个讲解都通俗易懂，每一个人都能迅速经过这些方法，抓住学会英语的核心精髓！除此之外，我们还在书中，送给您一个特殊编码，如果您在报名功夫英语时，使用该特殊编码，还将额外免费获得价值447元的1对1口语陪练。</p>
                <p>也就是说，我们将会免费送给您总值超过600元的大礼包，今天申请免费获取《功夫英语，6个月搏10年》仅需支付邮寄成本。</p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
            }
        },
    }
</script>

<style lang="scss">
    .center {
        padding-top: 0.5rem /* 80/160 */;
        min-height: 8.03rem /* 1284/160 */;
        width: 100%;
        background-color: #f3f3f3;
    }
    .container-center {
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-direction: row;
        padding: 0;

        .content {
            margin-left: 0.37rem /* 59/160 */;
            width: 3.5rem /* 560/160 */;
            font-size: 16px;

            p {
                text-indent: 2em;
                font-size: 16px;
                line-height: 2em;
            }
        }
    }
    @media screen and (max-width: 768px) {
        .container-center {
            flex-direction: column;
            align-items: center;

            .content {
                width: 80%;
            }
        }

    }

    @media screen and (min-width: 1019px) {
        .container-center {
            width: 6.37rem /* 1019/160 */;
        }

    }
</style>
