function getPbl(pNum, qNum) { // paperNumber, questionNumber
	var output = '';
	output += scpdata[pNum - 1].paperTitle + '\n' + qNum + '. —'
		+ scpdata[pNum - 1].pbls[qNum - 1].stm[0] + '\n—'
		+ scpdata[pNum - 1].pbls[qNum - 1].stm[1] + '\n A. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[0] + '\n B. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[1] + '\n C. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[2] + '\n D. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[3];
	console.log(output)
};

function getTrans(pNum, qNum) {
	var output = '';
	output += scpdata[pNum - 1].paperTitle + '\n' + qNum + '. —'
		+ scpdata[pNum - 1].pbls[qNum - 1].stm[0] + '\n—'
		+ scpdata[pNum - 1].pbls[qNum - 1].stm[1] + '\n A. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[0] + '\n B. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[1] + '\n C. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[2] + '\n D. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[3] + '\n\n答案：'
		+ scpdata[pNum - 1].pbls[qNum - 1].asw + '\n\n翻译：\n——'
		+ scpdata[pNum - 1].pbls[qNum - 1].stm[2] + '\n——'
		+ scpdata[pNum - 1].pbls[qNum - 1].stm[3] + '\n A. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[4] + '\n B. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[5] + '\n C. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[6] + '\n D. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[7];
	console.log(output)
};

var scpdata = [
	{
		"paperTitle": "模拟卷（一）",
		"pbls": [
			{
				"asw": "D",
				"stm": [
					"Let's take a coffee break.",
					"________ We've been working for hours.",
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
					"Shall I close the windows now before I leave?",
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
					"You'd better not",
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
				"asw": "D",
				"stm": [
					"I did badly in my English exam. How unlucky I am!",
					"________. Cheer up! Everything will be OK.",
					"我英语考试中表现很差。我真不幸！",
					"很难过听到那个消息。振作起来！一切都会好的。"
				],
				"opt": [
					"Congratulations",
					"That's great",
					"Well done",
					"Sorry to hear that",
					"祝贺",
					"那太棒了",
					"做得好",
					"很难过听到那个消息"
				]
			},
			{
				"asw": "A",
				"stm": [
					"I am going back to America for Christmas.",
					"________. And we will miss you.",
					"我要回美国过圣诞节。",
					"祝你过得愉快。我们会想念你的。"
				],
				"opt": [
					"Enjoy yourself",
					"You're welcome",
					"That's interesting",
					"The same to you",
					"过得愉快",
					"不客气",
					"那很有趣",
					"你也一样"
				]
			},
			{
				"asw": "C",
				"stm": [
					"I am going to have a job interview tomorrow morning.",
					"Well, ________",
					"我明天早上有个工作面试。",
					"嗯，祝你好运！"
				],
				"opt": [
					"have a good time!",
					"I'm happy to hear that.",
					"good luck!",
					"congratulations!",
					"玩得高兴",
					"我很高兴听你这么说",
					"祝你好运！",
					"祝贺你！"
				]
			},
			{
				"asw": "A",
				"stm": [
					"Would you mind if I take the seat next to you?",
					"________. The person who was here has finished his lunch and left.",
					"你介意我坐在你旁边吗？",
					"当然不介意。刚才在这儿的那个人吃完午饭就走了。"
				],
				"opt": [
					"Certainly not",
					"Enjoy yourself",
					"Don't trouble me",
					"Yes, please",
					"当然不",
					"玩得开心",
					"别麻烦我",
					"是的，请"
				]
			},
			{
				"asw": "B",
				"stm": [
					"So you gave her your mobile phone?",
					"________. She said she'd return it to me after she had hers fixed.",
					"所以你把你的手机送给她了？",
					"不完全是这样。她说她把她自己的修好后会还给我的。"
				],
				"opt": [
					"My pleasure",
					"Not exactly",
					"With pleasure",
					"No problem",
					"乐意效劳",
					"不完全是这样",
					"愉快地",
					"没问题"
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（五）",
		"pbls": [
			{
				"asw": "C",
				"stm": [
					"Do you mind if I sit here?",
					"________ lt's for Ms. Green.",
					"你介意我坐在这里吗？",
					"最好不要。这是为格林女士准备的。"
				],
				"opt": [
					"Not at all.",
					"Of course not.",
					"You'd better not.",
					"Sure.",
					"一点也不",
					"当然不",
					"你最好不",
					"当然"
				]
			},
			{
				"asw": "B",
				"stm": [
					"________?",
					"Yes. Two sandwiches and a cup of coffee, please.",
					"你准备点餐了吗？",
					"是的，请来两份三明治和一杯咖啡。"
				],
				"opt": [
					"What do you want",
					"Are you ready to order",
					"What's the specialty here",
					"What would you like to drink",
					null,
					null,
					null,
					null
				]
			},
			{
				"asw": "D",
				"stm": [
					"Long time no see, Tom. ________?",
					"Pretty good. Everything goes well.",
					"好久不见，汤姆。最近还好吗？",
					"相当好。一切顺利。"
				],
				"opt": [
					"What are you doing",
					"What are you",
					"What's wrong",
					"How is it going",
					"你正在做什么？",
					"你做什么工作的？",
					"你怎么了？",
					"最近还好吗？"
				]
			},
			{
				"asw": "C",
				"stm": [
					"Could you do me a favor and take these books to my office?",
					"Yes, ________.",
					"你能帮我把这些书拿到我的办公室吗？",
					"是的，乐意效劳。"
				],
				"opt": [
					"it's nothing",
					"it's all right",
					"with pleasure",
					"my pleasure",
					null,
					null,
					"好的，乐意效劳",
					"那是我应该做的"
				]
			},
			{
				"asw": "C",
				"stm": [
					"How time fies! Since the College Entrance Examinations are approaching, we have to seize every minute.",
					"________. As the saying goes, time lost cannot be won again.",
					"时间过得真快啊！高考快到了，我们要抓紧每一分钟。",
					"没错。俗话说，时间一去不复返。"
				],
				"opt": [
					"Don't mention it",
					"Forget it",
					"Exactly",
					"I beg to differ",
					"没关系",
					"不必在意",
					"一点不错，完全正确",
					"恕我不能同意"
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（六）",
		"pbls": [
			{
				"asw": "D",
				"stm": [
					"I'm sorry I didn't make it to your party last night.",
					"________ I know you are busy these days.",
					"我很抱歉昨晚没去参加你的派对。",
					"没关系。我知道你最近很忙。"
				],
				"opt": [
					"Don't mention it.",
					"What's up?",
					"I got it.",
					"Never mind.",
					"别客气",
					"怎么了？",
					"我明白了",
					"没关系"
				]
			},
			{
				"asw": "D",
				"stm": [
					"Miss Lin, are you free at the moment? I have to ask you some questions.",
					"________.",
					"林小姐，你现在有空吗？我得问你几个问题。",
					"你问吧。"
				],
				"opt": [
					"It's a pleasure",
					"Ask please",
					"Help yourself",
					"Go ahead",
					"乐意效劳",
					"请问",
					"别客气",
					"去吧，问吧"
				]
			},
			{
				"asw": "C",
				"stm": [
					"Can I take a look at the menu for a few minutes before I decide?",
					"Of course! ________, sir.",
					"我可以先看一下菜单再做决定吗?",
					"当然！先生，请慢慢看。"
				],
				"opt": [
					"Make yourself at home",
					"Take it easy",
					"Take your time",
					"Enjoy yourself",
					"别拘束",
					"别紧张",
					"慢慢来",
					"玩的愉快"
				]
			},
			{
				"asw": "B",
				"stm": [
					"I'm afraid I've got a terrible cold.",
					"________. Let's go to see a doctor and have a check.",
					"恐怕我得了重感冒。",
					"不要着急。我们去看医生检查一下吧。"
				],
				"opt": [
					"Take your time",
					"Take it easy",
					"Don't mention it",
					"Don't bother",
					"别着急；从容做",
					"别担心；放轻松",
					"不用介意",
					"不用麻烦了；不打扰了"
				]
			},
			{
				"asw": "D",
				"stm": [
					"I get at least an hour of physical exercise almost every day.",
					"Oh great! ________.",
					"我几乎每天至少有半小时的锻炼。",
					"哦，太好了。保持下去。"
				],
				"opt": [
					"Good luck",
					"Cheer up",
					"Same to you",
					"Keep it up",
					"祝好运",
					"振作起来",
					"和你一样",
					"保持下去"
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（七）",
		"pbls": [
			{
				"asw": "B",
				"stm": [
					"Why didn't you come to the party?",
					"________, but I'd really like some time alone to clear my thoughts.",
					"你为什么没有来参加聚会？",
					"我无意冒犯，但是我真的想有一段时间来整理我的想法。"
				],
				"opt": [
					"No wonder",
					"No offence",
					"No comment",
					"No doubt",
					"难怪",
					"无意冒犯",
					"无可奉告",
					"毫无疑问"
				]
			},
			{
				"asw": "B",
				"stm": [
					"Thank you for sharing your Bilibili membership with me.",
					"________. That's what friends are for.",
					"感谢你和我分享你的哔哩哔哩会员。",
					"别客气。这是朋友该做的。"
				],
				"opt": [
					"Not really",
					"Don't mention it",
					"It's up to you",
					"By all means",
					"不全是这样",
					"别客气",
					"你决定吧",
					"当然可以、一定"
				]
			},
			{
				"asw": "B",
				"stm": [
					"Can we finish packing these orders some other time?",
					"________? They are not urgent.",
					"我们能不能改天再包装这些订货？",
					"为什么不呢?要的不是很急。"
				],
				"opt": [
					"What for",
					"Why not",
					"So what",
					"Why bother",
					"为什么",
					"为何不",
					"那又怎样",
					"何必费心"
				]
			},
			{
				"asw": "C",
				"stm": [
					"I'd like to sit at the back of the classroom.",
					"________. But you'll see the blackboard more clearly in the front.",
					"我想坐在教室的后面。",
					"如你所愿。但是你在前面会看黑板更清楚。"
				],
				"opt": [
					"You got me there",
					"I don't know",
					"As you wish",
					"I couldn't agree more",
					"你难住我了",
					"我不知道",
					"如你所愿",
					"我非常同意"
				]
			},
			{
				"asw": "D",
				"stm": [
					"The concert to be given by the famous singer in our city has been cancelled because of his poor health.",
					"________. I've been looking forward to seeing him.",
					"那位著名歌手原定在我市举行的音乐会由于身体不好而取消了。",
					"真遗憾。我一直盼着见到他。"
				],
				"opt": [
					"It doesn't matter",
					"I can't agree more",
					"I have no idea",
					"It's a pity",
					"没关系",
					"我完全同意",
					"我不知道",
					"真遗憾"
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（八）",
		"pbls": [
			{
				"asw": "C",
				"stm": [
					"Every day there is always so much work to do. I think I'm going to be driven mad. ",
					"________. It's going to be all right.",
					"工作总是这么多，我都快疯了。",
					"保持冷静。一切都会过去的。"
				],
				"opt": [
					"No way",
					"Go ahead",
					"Keep cool",
					"Never mind",
					"没门",
					"着手做某事，尽管去做",
					"保持冷静，有话好好说",
					"不必担心"
				]
			},
			{
				"asw": "A",
				"stm": [
					"This film is really moving!",
					"________! You've described exactly what I felt about the film.",
					"这部电影真感人！",
					"是啊！你说出了我对这部电影的感觉。"
				],
				"opt": [
					"That's it",
					"Well done",
					"Cheers",
					"Nonsense",
					"就是这样",
					"干得好",
					"干杯",
					"胡说八道"
				]
			},
			{
				"asw": "A",
				"stm": [
					"Are you going to the museum, Alice?",
					"No, I ________ to it already.",
					"爱丽丝，你要去博物馆吗？",
					"不，我已经去过了。"
				],
				"opt": [
					"have been",
					"have gone",
					"had been",
					"had gone",
					"已经去过了（现在完成时态）",
					"已经去了还没回来（现在完成时态）",
					"已经去过了（过去完成时态）",
					"已经去了还没回来（过去完成时态）"
				]
			},
			{
				"asw": "A",
				"stm": [
					"I'm sorry for breaking the cup.",
					"Oh, ________. —I've got plenty.",
					"对不起，打坏了你的杯子。",
					"噢，没关系。我还有很多呢。"
				],
				"opt": [
					"forget it",
					"my pleasure",
					"help yourself",
					"pardon me",
					"得了吧；算了吧；没关系",
					"不用谢",
					"随便",
					"对不起，再说一遍"
				]
			},
			{
				"asw": "D",
				"stm": [
					"Would you like to see a movie with me tonight?",
					"Great! ________.",
					"今晚你愿意和我一起去看电影吗？",
					"太好了，我愿意去。"
				],
				"opt": [
					"I'm not free",
					"We'd better not",
					"We'll be fine",
					"I'd love to",
					"我没空",
					"我们最好不",
					"我们很好",
					"我愿意"
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