function getPbl(paperNum, pblNum) {
	var output = '';
	output += scpdata[paperNum - 1].paperTitle
		+ '\n'
		+ pblNum
		+ '. —'
		+ scpdata[paperNum - 1].pbls[pblNum - 1].stm[0]
		+ '\n—'
		+ scpdata[paperNum - 1].pbls[pblNum - 1].stm[1]
		+ '\n A. '
		+ scpdata[paperNum - 1].pbls[pblNum - 1].opt[0]
		+ '\n B. '
		+ scpdata[paperNum - 1].pbls[pblNum - 1].opt[1]
		+ '\n C. '
		+ scpdata[paperNum - 1].pbls[pblNum - 1].opt[2]
		+ '\n D. '
		+ scpdata[paperNum - 1].pbls[pblNum - 1].opt[3];
	console.log(output)
};

function getTrans(paperNum, pblNum) {
	var output = '';
	output += scpdata[paperNum - 1].paperTitle
		+ '\n'
		+ pblNum
		+ '. —'
		+ scpdata[paperNum - 1].pbls[pblNum - 1].stm[0]
		+ '\n—'
		+ scpdata[paperNum - 1].pbls[pblNum - 1].stm[1]
		+ '\n A. '
		+ scpdata[paperNum - 1].pbls[pblNum - 1].opt[0]
		+ '\n B. '
		+ scpdata[paperNum - 1].pbls[pblNum - 1].opt[1]
		+ '\n C. '
		+ scpdata[paperNum - 1].pbls[pblNum - 1].opt[2]
		+ '\n D. '
		+ scpdata[paperNum - 1].pbls[pblNum - 1].opt[3]
		+ '\n\n答案：'
		+ scpdata[paperNum - 1].pbls[pblNum - 1].asw
		+ '，翻译：\n——'
		+ scpdata[paperNum - 1].pbls[pblNum - 1].stm[2]
		+ '\n——'
		+ scpdata[paperNum - 1].pbls[pblNum - 1].stm[3]
		+ '\n A. '
		+ scpdata[paperNum - 1].pbls[pblNum - 1].opt[4]
		+ '\n B. '
		+ scpdata[paperNum - 1].pbls[pblNum - 1].opt[5]
		+ '\n C. '
		+ scpdata[paperNum - 1].pbls[pblNum - 1].opt[6]
		+ '\n D. '
		+ scpdata[paperNum - 1].pbls[pblNum - 1].opt[7];
	console.log(output)
};

var scpdata = [
	{
		"paperTitle": "模拟卷（一）",
		"pbls": [
			{
				"asw": "D",
				"stm": [
					"Let’s take a coffee break.",
					"________ We’ve been working for hours.",
					"我们喝杯咖啡，休息一会儿吧。",
					"我完全同意。我们已经连续工作好几个小时了。"
				],
				"opt": [
					"Why bother?",
					"What for?",
					"You got me there.",
					"You said it.",
					"何必麻烦",
					"为什么",
					"你难住我了",
					"你说对了；我完全同意"
				]
			},
			{
				"asw": "A",
				"stm": [
					"Shall I close the windows now before I leave？",
					"________. I'll check it myself later.",
					null,
					null
				],
				"opt": [
					"Don't bother",
					"No hurry",
					"Go ahead",
					"No problem",
					"不用麻烦了",
					"不着急",
					"开始做；着手干",
					"没问题"
				]
			},
			{
				"asw": "D",
				"stm": [
					"I'm afraid you have the wrong number.",
					"Sorry! ________.",
					"恐怕你拨错号码了。",
					"对不起，希望没打扰到你。"
				],
				"opt": [
					"See you later",
					"I didn't know that",
					"Hold on, please",
					"I hope I didn't bother you",
					null,
					null,
					null,
					"希望没打扰到你"
				]
			},
			{
				"asw": "B",
				"stm": [
					"I guess you want to play tennis.",
					"________ That's exactly what I was thinking too.",
					"我猜你要去打网球。",
					"你猜对了。那也正是我刚才在想的事情。"
				],
				"opt": [
					"I didn't get it.",
					"You read my mind.",
					"You never know.",
					"It's up to you.",
					"我不明白",
					"由你来决定",
					"你永远不会知道",
					"你猜透了我的想法"
				]
			},
			{
				"asw": "A",
				"stm": [
					"You look so upset, Isabelle. ________?",
					"I failed to pass the driving test last week.",
					null,
					null
				],
				"opt": [
					"What's up",
					"What's for",
					"What are you up to",
					"So what",
					"出什么事了？",
					"为什么？",
					"你在忙什么？",
					"那又怎么样？"
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（二）",
		"pbls": [
			{
				"asw": "C",
				"stm": [
					"I'm dead tired. I can't walk any farther, Jenny.",
					"________, Tommy. You can do it!",
					"Jenny，我累死了。我不能再走了。",
					"加油，Tommy，你可以做到的。"
				],
				"opt": [
					"No problem",
					"No hurry",
					"Come on",
					"That's OK",
					"没问题",
					"不忙",
					"加油",
					"没关系"
				]
			},
			{
				"asw": "C",
				"stm": [
					"I'm afraid I cannot pass the driving test.",
					"________, Helen. Everything will be OK soon.",
					"我恐怕不能通过驾驶考试。",
					"别着急，海伦。"
				],
				"opt": [
					"Don't mention it",
					"Go ahead",
					"Take it easy",
					"It couldn't be worse",
					"不客气",
					"前进，去吧",
					"放轻松一点",
					"情况不能再糟了"
				]
			},
			{
				"asw": "B",
				"stm": [
					"The movie starts at 8:30, and we can have a quick bite before we go.",
					"________. See you at 8:10.",
					"电影8:30开始，在我们去之前我们可以快速地吃点东西。",
					"听上去是个好主意。八点十分见。"
				],
				"opt": [
					"So long",
					"Sounds great",
					"Good luck",
					"Have a good time",
					"再见",
					"听起来好极了",
					"好运",
					"过得愉快，玩的很开心"
				]
			},
			{
				"asw": "C",
				"stm": [
					"Could you lend me some books?",
					"________. I have a lot of books here.",
					"你能借给我一些书吗？",
					"当然。我这里有很多书。"
				],
				"opt": [
					"Excuse me",
					"Sorry",
					"Sure",
					"No way",
					"对不起，打扰一下",
					"抱歉",
					"当然，的确",
					"决不，没门"
				]
			},
			{
				"asw": "B",
				"stm": [
					"Do you mind if I turn on the TV?",
					"________. Let's watch the sports news now.",
					"你介意我把电视打开吗？",
					"开吧。我们现在看体育新闻吧。"
				],
				"opt": [
					"No way",
					"Go ahead",
					"You’d better not",
					"I think so",
					"没门；表示拒绝",
					"问吧，干吧，做吧；表示鼓励对方去做刚提到的事",
					"你最好不要；表示委婉的拒绝",
					"我想是这样的"
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（三）",
		"pbls": [
			{
				"asw": "C",
				"stm": [
					"Could you spare me a few minutes, Mr. Green? I still have some questions.",
					"________.",
					"格林先生，你能抽出几分钟时间给我吗？我还有一些问题。",
					"问吧。"
				],
				"opt": [
					"Good job",
					"Come on",
					"Go ahead",
					"Help yourself",
					"干得不错",
					"快点",
					"问吧；继续说",
					"请自便"
				]
			},
			{
				"asw": "C",
				"stm": [
					"Good morning, sir. ________?",
					"Yes. I booked a room last week. My name is Ron Johnson.",
					"早上好，先生。我能帮你吗？",
					"好的。我上周订了一个房间。我叫罗恩·约翰逊。"
				],
				"opt": [
					"Are you all right",
					"Have you bought the book",
					"Can I help you",
					"Do you have a room",
					"你还好吗",
					"你买了那本书吗",
					"我可以帮你吗",
					"你有房间吗"
				]
			},
			{
				"asw": "A",
				"stm": [
					"________?",
					"My watch says eight.",
					"现在几点了？",
					"我的表显示8点。"
				],
				"opt": [
					"What time is it",
					"What's the date today",
					"How much is your watch",
					"Could you help me",
					"几点钟了",
					"今天几号",
					"你的手表多少钱",
					"你可以帮我吗"
				]
			},
			{
				"asw": "D",
				"stm": [
					"That's a nice shirt!",
					"________. I just got it yesterday.",
					"这件衬衫真漂亮！",
					"谢谢。我昨天刚买的。"
				],
				"opt": [
					"That's all right",
					"Don't mention it",
					"You're welcome",
					"Oh, thanks",
					"不要紧",
					"别提了",
					"不客气",
					"谢谢"
				]
			},
			{
				"asw": "D",
				"stm": [
					"Please show me your health code, either on WeChat or Alipay.",
					"________. Here it is.",
					"请出示您的健康码，微信或者支付宝都可以。",
					"没问题。这里。"
				],
				"opt": [
					"It's nothing",
					"Be careful",
					"Go ahead",
					"No problem",
					"没事",
					"小心",
					"去吧",
					"没问题"
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（四）",
		"pbls": [
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（五）",
		"pbls": [
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（六）",
		"pbls": [
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（七）",
		"pbls": [
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（八）",
		"pbls": [
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（九）",
		"pbls": [
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（十）",
		"pbls": [
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（十一）",
		"pbls": [
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（十二）",
		"pbls": [
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			}
		]
	},
	{
		"paperTitle": "2023年1月广东省普通高中学业水平合格性考试",
		"pbls": [
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			},
			{
				"asw": "",
				"stm": [
					"",
					"",
					"",
					""
				],
				"opt": [
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
				]
			}
		]
	}
]