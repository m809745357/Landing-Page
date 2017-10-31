<template>
    <div class="container">
        <banner :attributes="'./src/images/banner.jpg'"></banner>
        <hotline :attributes="hotline"></hotline>
        <div class="row">
            <screen1 :attributes="screen1"></screen1>
            <screen2 :attributes="screen2"></screen2>
            <screen3 :attributes="screen3"></screen3>
            <screen4 :attributes="screen4"></screen4>
        </div>
    </div>
    <!-- <div class="flex-center position-ref full-height">
          <div class="content">
              <div class="title m-b-md">
                  {{ msg }}
              </div>
          </div>
      </div> -->
</template>
<script>
import banner from './components/banner.vue'
import hotline from './components/hotline.vue'
import screen1 from './pages/screen1.vue'
import screen2 from './pages/screen2.vue'
import screen3 from './pages/screen3.vue'
import screen4 from './pages/screen4.vue'

export default {
    components: {
        banner,
        screen1,
        screen2,
        screen3,
        screen4,
        hotline,
    },
    data () {
        return {
            msg: 'Landing',
            hotline: {
                international: '4006-979-088',
                domestic: '0755-88820630'
            },
            screen1: {
                mottos: [
                    {
                        paragraphs: [
                            '王林从事电子行业多年，是一位小有成就的经理。他学历不高，认识的英语单词不足百个。通过一年时间的努力，他实现了自己的梦想，带领他的团队凭借流利的英语，在德国电子产品展销会上接了600多万美元订单，并因此在公司晋升为高级经理和董事会成员。',
                        ],
                        mottos: {
                            author: '王林',
                            motto: [
                                '以前不会英语真的很不方便，我一直以为英语是无法克服的阻碍，直到我找到了这个非常特别的自学课程。',
                                '学会英语的过程很难忘，在这里，我不仅收获了流利的英语，也增强了对自己的信心！非常感谢功夫英语。'
                            ]
                        }
                    },
                    {
                        paragraphs: [
                            'Eric Han, 是一家著名企业的CEO。51岁时，他还没法用英语沟通，不到1年，52岁的他用英语在美国做演讲，并现场自如回答美国专家的提问。他的表现赢得了美国专家的高度认可和热烈的掌声。',
                        ],
                        mottos: {
                            author: 'Eric Han',
                            motto: [
                                '我曾经花了十几万报英语学习班，始终没学会，听不懂，说不出，我已经放弃英语了。 ',
                                '遇到这个革命性的学习方法后，我爱上了英语，并学会了英语，也找回了自己对英语的自信！特别感谢功夫英语。'
                            ]
                        }
                    },
                ],
                paragraphs: [
                    '王林和Eric Han找到的学会英语秘诀，让他们的事业更成功，他们因此更加自信，彻底摆脱了曾经不会英语的困扰、没面子和无奈。您掌握学会英语的秘诀后，也能跟他们一样精彩。这个“学会英语的诀窍”是什么？',
                    '接下来我会详细说。在此之前，您要理解一些重要的事实。首先，需要明确的是，王林和Eric Han没有特异功能，也没有走过什么捷径。他们跟您一样是普通人，以前怀疑自己的记忆力、觉得英语难懂、不敢开口等等。如果您能和他们一样，克服这些困难，您也能行！',
                    '王林、Eric Han 和所有学会英语的白领、老板、商务人士一样，他们只做了一件事：就是决定利用准确的态度和方法来学习英语。在拥有英语真本事基础上，他们自然能用英语说想说的，用这个工具来表达自己的观点，跟外国客人沟通交流。经过有效的学习和练习，他们都感到说英语就像说中文一样。'
                ],
                emails: {
                    title: '想要<strong>免费获取</strong>符合国际领先心理语言学、<br/>人脑科学的英语学习方法电邮系列，请立即注册',
                    formType: ['email', 'password'],
                    buttonText: '立即成为免费会员'
                }
            },
            screen2: {
                mottos: [
                    {
                        mottos: {
                            author: '窦志娟',
                            motto: [
                                '以前总是感觉自己发音不准，不敢开口，学习第一课后，有信心敢开口了。',
                            ]
                        },
                    },
                    {
                        mottos: {
                            author: '马妙玲',
                            motto: [
                                'verything is great and I am busy with Kungfu English everyday. I really enjoy this wonderful program and approach. I like listening to Word Songson my way to office and way back home. ',
                                'It’s very convenient for me to follow to speak when I am driving. FaceFonics is also very useful and I can pronounce more correctly than before. Hope you have a great day.',
                            ]
                        },
                    }
                ],
                titleblocks: {
                    type: 'one-line',
                    text: '我能行么？'
                },
                paragraphs: [
                    '很多外贸行业的老板，既懂专业技术、了解技术的优势，又懂产品推销，可一遇到英语就哑口无言。一位外贸行业的老板叹息：如果我懂英语，我的公司绝对不止现在这个状态了！',
                    '为了学会英语，他们曾经去过学习班，报过网校。投资了钱，花了时间，到头来始终进步不明显。学习的感受是，老师一直在说，自己说的很少，学得很被动。一段时间后，就会心灰意冷、失去信心，感觉很难坚持下去。因此，谈到学英语，第一个反应就是：我能学会吗？',
                ],
                body: [
                    {
                        paragraphs: [
                            '我们的回答是：',
                            '<strong>能！</strong>零基础，完全从零开始都行！'
                        ]
                    },
                    {
                        paragraphs: [
                            '国际著名心理语言学家、《6个月学会任何一种外语》作者、功夫英语创始人龙飞虎先生说：“<strong>任何一个大脑健全的成年人，都有能力在6个月到1年的时间内掌握一门外语，并达到沟通自如流利的程度。</strong>”',
                            '因此，即使您从来没学过英语，也没关系。人的大脑包含获取任何语言的内在本能和系统，您只需要合适地激活那个系统，英语或任何外语都能一步一步地学会。'
                        ]
                    },
                    {
                        images: [
                            '/src/images/device-1.jpg'
                        ]
                    },
                    {
                        paragraphs: [
                            '拓亚物流是一个全球性的大型物流公司，主要的服务对象是欧洲客户。为了沟通顺利，他们招聘的销售人员都起码要有英语六级、专八的水平。',
                            '但是，因为很多客户都来自法国、西班牙等地方，这些销售人员听不懂客户的英语口音，所以经常在会议上听不懂客户说话，效率很低，白白浪费了会议的时间。',
                            ' 2011年，香港总部让上海分公司采用功夫英语，作为公司内部从事涉外业务员工的英语自学工具。员工们学习了三个月左右，他们已经明显的发现，在跟欧洲客户开会时都能听懂他们在说什么了。',
                            'Oreal Yang 就是其中一位学员。在学习功夫英语之前，杨小姐最大的困惑就是听不懂西班牙和法国客户的英语口音，而她刚好在这家公司内部负责欧洲客户的商务洽谈工作。',
                            '学习了2个月后，杨小姐开始发现，自己在跟欧洲客户的会面，和电话会议中，几乎都能听懂他们的口音，并能够完全领会他们的意思。这极大地方便了她的工作，更重要的是工作效率也提升上来了，客户对她的工作能力非常满意，非常乐意跟她合作。',
                            '她兴奋地跟功夫英语学习顾问说：“真的很神奇，我很高兴发现我的英语得到改善，尤其是听力和口语方面。我现在说英语很自信，很喜欢跟外国人交流了。功夫英语对我这种上班族来说非常方便，我们可以在上下班的路上学习。而且课程理念非常独到，它帮助我用全新的方法来学习英语。”',
                            '如下是Oreal Yang 杨 小姐对功夫英语学习心得的一个视频：',
                        ]
                    },
                    {
                        videos: [
                            '/src/images/video1.jpg'
                        ]
                    },
                    {
                        paragraphs: [
                            '只要您有决心，愿意跟随科学准确的方法而行动，您就能在相对短时间内收获一门外语技能。中国的成年人学习英语也是如此，不管您现在年纪多大，您都可以学会英语；无论您现在英语基础如何，您都能学会并运用自如。'
                        ]
                    },
                    {
                        banner: [
                            '/src/images/buy button1.jpg'
                        ]
                    }
                ]
            },
            screen3: {
                mottos: [
                    {
                        mottos: {
                            author: '张骊',
                            motto: [
                                '我现在看到有些单词的字母组合，就能感觉到这个单词应该怎么读了，而且我读的准确率比以前高很多，再不像没学功夫英语之前那样总是需要看音标才能读出发音了。',
                            ]
                        },
                    },
                    {
                        mottos: {
                            author: '陈丽玫',
                            motto: [
                                '过去学习英语的时候就是习惯于听、说、读、写都是通过母语来翻译成英语的，而不是用英语思维直接输出，由此带来的结果就是：慢、别扭、不地道、开不了口、下不了笔。',
                                '在经过3周的功夫英语学习后，渐渐的这个习惯自然地、舒服地有了一些改变，慢慢地从情景想象来融入英语。',
                            ]
                        },
                    }
                ],
                titleblocks: {
                    type: 'one-line',
                    text: '有效练好商务英语的秘诀'
                },
                body: [
                    {
                        paragraphs: [
                            '如果您从事跨国销售或外贸类的工作，您肯定需要用英语和外界沟通。因此，您必然会关心<strong>商务英语</strong>怎么学。大多数人遇到这个问题的第一个反应是，要专门学<strong>商务英语</strong>，才能应付商务工作中的英语沟通需要。很可惜的是，这个思路总是把人的学习结果给带歪了。不是没学会而中途放弃了，就是觉得太难没法坚持。',
                            '准确看待<strong>商务英语</strong>的视角是，承认<strong>商务英语</strong>和普通日常用语大同小异，要想学好<strong>商务英语</strong>，必需打好日常英语的地基。只有这样，才能避免类似于：单词懂、整句不懂；没法写出顺畅的电邮，没法自如在商务谈判中沟通等现象。',
                            '要进一步认识<strong>商务英语</strong>和日常英语的关系，在思路上帮助自己了解准确学习<strong>商务英语</strong>的方法，请参看龙飞虎先生的视频 :',
                            '<strong>商务英语</strong>就是日常英语＋＋（1）、（2）、（3）'
                        ]
                    },
                    {
                        videos: [
                            '/src/images/video2.jpg',
                            '/src/images/video3.jpg',
                            '/src/images/video4.jpg',
                        ]
                    },
                    {
                        banner: [
                            '/src/images/buy button2.jpg'
                        ]
                    }
                ]
            },
            screen4: {
                mottos: [
                    {
                        mottos: {
                            author: '陈红',
                            motto: [
                                '老师，您好。前两阶段的课程已基本学完。',
                                '另有一个好消息值得与老师分享，经过两月的学习,在新公司能听懂一位印度管理者的英语的一部分，虽然不全懂，至少我明白他在说什么。',
                            ]
                        },
                    },
                    {
                        mottos: {
                            author: '谭展',
                            motto: [
                                '电邮中的English, I understand. 直接明白，是不知不觉中就明白了。而且随着课程的进展，我的发音也有很大的进步，很多时候感觉能读出来的词几乎都知道怎么拼写。',
                            ]
                        },
                    }
                ],
                titleblocks: {
                    type: 'two-line',
                    text: '先解决日常沟通，<br/>是练好商务英语的必经之路'
                },
                body: [
                    {
                        paragraphs: [
                            '从龙飞虎先生的视频里，您会认识到一个特别重要的规律，就是<strong>商务英语</strong>的核心是日常英语和普遍的英语比喻为主。 因此如果您要掌握<strong>商务英语</strong>听说交流，就要先掌握98％的日常和生活所需要的英语，在这个基础上，持续累积行业内所需要的词汇就可以了。',
                            '一听到要先学好98％日常用语，您很可能觉得心慌，感觉那个任务太大，您可能认为那等于要学好100多万英语单词，甚至感到练好日常英语都是一个高不可攀的目标。事实上，解决英语沟通问题需要的英语词汇并不多！',
                            '根据对上万册商业周刊和日常杂志的数据统计分析，我们发现，只要掌握英语1000个高频词，就能解决85％日常沟通的需要，而要解决98％的日常和工作沟通所需要的英语，您只需要学会3000个英语高频词。掌握了这些高频词后，您就可以比较自如的进行日常沟通、阅读英文报纸杂志。当然，在阅读的过程中，您还会遇到新的词汇，但在这个基础上，您完全有能力了解上下文的含义，并迅速掌握和记住遇到的新词，您的学习效率也会自然进入一个新阶段。',
                        ]
                    }
                ]
            }
        }
    }
}
</script>
<style>
.container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.row {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

@media screen and (min-width: 1019px) {
    .container {
        width: 6.37rem /* 1019/160 */;
    }

    .row {
        width: 3.45rem /* 552/160 */;
    }
}
</style>
