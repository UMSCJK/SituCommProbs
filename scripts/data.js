function consoleGetPbl(pNum, qNum) { // paperNumber, questionNumber
	var output = '';
	output += scpdata[pNum - 1].paperTitle + '\n' + qNum + '. '
		+ scpdata[pNum - 1].pbls[qNum - 1].stm[0] + '\n'
		+ scpdata[pNum - 1].pbls[qNum - 1].stm[1] + '\n A. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[0] + '\n B. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[1] + '\n C. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[2] + '\n D. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[3];
	console.log(output)
};

function consoleGetTrans(pNum, qNum) {
	var output = '';
	output += scpdata[pNum - 1].paperTitle + '\n' + qNum
		+ scpdata[pNum - 1].pbls[qNum - 1].stm[0] + '\n'
		+ scpdata[pNum - 1].pbls[qNum - 1].stm[1] + '\n A. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[0] + '\n B. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[1] + '\n C. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[2] + '\n D. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[3] + '\n\n答案：'
		+ scpdata[pNum - 1].pbls[qNum - 1].asw + '\n\n翻译：\n'
		+ scpdata[pNum - 1].pbls[qNum - 1].stm[2] + '\n'
		+ scpdata[pNum - 1].pbls[qNum - 1].stm[3] + '\n A. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[4] + '\n B. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[5] + '\n C. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[6] + '\n D. '
		+ scpdata[pNum - 1].pbls[qNum - 1].opt[7];
	console.log(output)
};

var scpdata = [
	{
		"paperTitle":"模拟卷（一）",
		"pbls":[
			{"asw":"D","stm":["–Let's take a coffee break.","–________ We've been working for hours.","——我们喝杯咖啡，休息一会儿吧。","——我完全同意。我们已经连续工作好几个小时了。"],"opt":["Why bother?","What for?","You got me there.","You said it.","何必麻烦？","为什么？","你难住我了。","你说对了；我完全同意。"] },
			{"asw":"A","stm":["–Shall I close the windows now before I leave?","–________. I'll check it myself later.", null, null],"opt":["Don't bother","No hurry","Go ahead","No problem","不用麻烦了","不着急","开始做；着手干","没问题"] },
			{"asw":"D","stm":["–I'm afraid you have the wrong number.","–Sorry! ________.","——恐怕你拨错号码了。","——对不起，希望没打扰到你。"],"opt":["See you later","I didn't know that","Hold on, please","I hope I didn't bother you", null, null, null,"希望没打扰到你"] },
			{"asw":"B","stm":["–I guess you want to play tennis.","–________ That's exactly what I was thinking too.","——我猜你要去打网球。","——你猜对了。那也正是我刚才在想的事情。"],"opt":["I didn't get it.","You read my mind.","You never know.","It's up to you.","我不明白。","由你来决定。","你永远不会知道。","你猜透了我的想法。"] },
			{"asw":"A","stm":["–You look so upset, Isabelle. ________?","–I failed to pass the driving test last week.", null, null],"opt":["What's up","What's for","What are you up to","So what","出什么事了","为什么","你在忙什么","那又怎么样"] }
		]
	},
	{
		"paperTitle":"模拟卷（二）",
		"pbls":[
			{"asw":"C","stm":["–I'm dead tired. I can't walk any farther, Jenny.","–________, Tommy. You can do it!","——Jenny，我累死了。我不能再走了。","——加油，Tommy，你可以做到的。"],"opt":["No problem","No hurry","Come on","That's OK","没问题","不忙","加油","没关系"] },
			{"asw":"C","stm":["–I'm afraid I cannot pass the driving test.","–________, Helen. Everything will be OK soon.","——我恐怕不能通过驾驶考试。","——别着急，海伦。"],"opt":["Don't mention it","Go ahead","Take it easy","It couldn't be worse","不客气","前进，去吧","放轻松一点","情况不能再糟了"] },
			{"asw":"B","stm":["–The movie starts at 8:30, and we can have a quick bite before we go.","–________. See you at 8:10.","——电影8:30开始，在我们去之前我们可以快速地吃点东西。","——听上去是个好主意。八点十分见。"],"opt":["So long","Sounds great","Good luck","Have a good time","再见","听起来好极了","好运","过得愉快，玩的很开心"] },
			{"asw":"C","stm":["–Could you lend me some books?","–________. I have a lot of books here.","——你能借给我一些书吗？","——当然。我这里有很多书。"],"opt":["Excuse me","Sorry","Sure","No way","对不起，打扰一下","抱歉","当然，的确","决不，没门"] },
			{"asw":"B","stm":["–Do you mind if I turn on the TV?","–________. Let's watch the sports news now.","——你介意我把电视打开吗？","——开吧。我们现在看体育新闻吧。"],"opt":["No way","Go ahead","You'd better not","I think so","没门；表示拒绝","问吧，干吧，做吧；表示鼓励对方去做刚提到的事","你最好不要；表示委婉的拒绝","我想是这样的"] }
		]
	},
	{
		"paperTitle":"模拟卷（三）",
		"pbls":[
			{"asw":"C","stm":["–Could you spare me a few minutes, Mr. Green? I still have some questions.","–________.","——格林先生，你能抽出几分钟时间给我吗？我还有一些问题。","——问吧。"],"opt":["Good job","Come on","Go ahead","Help yourself","干得不错","快点","问吧；继续说","请自便"] },
			{"asw":"C","stm":["–Good morning, sir. ________?","–Yes. I booked a room last week. My name is Ron Johnson.","——早上好，先生。我能帮你吗？","——好的。我上周订了一个房间。我叫罗恩·约翰逊。"],"opt":["Are you all right","Have you bought the book","Can I help you","Do you have a room","你还好吗","你买了那本书吗","我可以帮你吗","你有房间吗"] },
			{"asw":"A","stm":["–________?","–My watch says eight.","——现在几点了？","——我的表显示8点。"],"opt":["What time is it","What's the date today","How much is your watch","Could you help me","几点钟了","今天几号","你的手表多少钱","你可以帮我吗"] },
			{"asw":"D","stm":["–That's a nice shirt!","–________. I just got it yesterday.","——这件衬衫真漂亮！","——谢谢。我昨天刚买的。"],"opt":["That's all right","Don't mention it","You're welcome","Oh, thanks","不要紧","别提了","不客气","谢谢"] },
			{"asw":"D","stm":["–Please show me your health code, either on WeChat or Alipay.","–________. Here it is.","——请出示您的健康码，微信或者支付宝都可以。","——没问题。这里。"],"opt":["It's nothing","Be careful","Go ahead","No problem","没事","小心","去吧","没问题"] }
		]
	},
	{
		"paperTitle":"模拟卷（四）",
		"pbls":[
			{"asw":"D","stm":["–I did badly in my English exam. How unlucky I am!","–________. Cheer up! Everything will be OK.","——我英语考试中表现很差。我真不幸！","——很难过听到那个消息。振作起来！一切都会好的。"],"opt":["Congratulations","That's great","Well done","Sorry to hear that","祝贺","那太棒了","做得好","很难过听到那个消息"] },
			{"asw":"A","stm":["–I am going back to America for Christmas.","–________. And we will miss you.","——我要回美国过圣诞节。","——祝你过得愉快。我们会想念你的。"],"opt":["Enjoy yourself","You're welcome","That's interesting","The same to you","过得愉快","不客气","那很有趣","你也一样"] },
			{"asw":"C","stm":["–I am going to have a job interview tomorrow morning.","–Well, ________","——我明天早上有个工作面试。","——嗯，祝你好运！"],"opt":["have a good time!","I'm happy to hear that.","good luck!","congratulations!","玩得高兴！","我很高兴听你这么说。","祝你好运！","祝贺你！"] },
			{"asw":"A","stm":["–Would you mind if I take the seat next to you?","–________. The person who was here has finished his lunch and left.","——你介意我坐在你旁边吗？","——当然不介意。刚才在这儿的那个人吃完午饭就走了。"],"opt":["Certainly not","Enjoy yourself","Don't trouble me","Yes, please","当然不","玩得开心","别麻烦我","是的，请"] },
			{"asw":"B","stm":["–So you gave her your mobile phone?","–________. She said she'd return it to me after she had hers fixed.","——所以你把你的手机送给她了？","——不完全是这样。她说她把她自己的修好后会还给我的。"],"opt":["My pleasure","Not exactly","With pleasure","No problem","乐意效劳","不完全是这样","愉快地","没问题"] }
		]
	},
	{
		"paperTitle":"模拟卷（五）",
		"pbls":[
			{"asw":"C","stm":["–Do you mind if I sit here?","–________ lt's for Ms. Green.","——你介意我坐在这里吗？","——最好不要。这是为格林女士准备的。"],"opt":["Not at all.","Of course not.","You'd better not.","Sure.","一点也不。","当然不。","你最好不。","当然。"] },
			{"asw":"B","stm":["–________?","–Yes. Two sandwiches and a cup of coffee, please.","——你准备点餐了吗？","——是的，请来两份三明治和一杯咖啡。"],"opt":["What do you want","Are you ready to order","What's the specialty here","What would you like to drink", null, null, null, null] },
			{"asw":"D","stm":["–Long time no see, Tom. ________?","–Pretty good. Everything goes well.","——好久不见，汤姆。最近还好吗？","——相当好。一切顺利。"],"opt":["What are you doing","What are you","What's wrong","How is it going","你正在做什么","你做什么工作的","你怎么了","最近还好吗"] },
			{"asw":"C","stm":["–Could you do me a favor and take these books to my office?","–Yes, ________.","——你能帮我把这些书拿到我的办公室吗？","——是的，乐意效劳。"],"opt":["it's nothing","it's all right","with pleasure","my pleasure", null, null,"好的，乐意效劳","那是我应该做的"] },
			{"asw":"C","stm":["–How time fies! Since the College Entrance Examinations are approaching, we have to seize every minute.","–________. As the saying goes, time lost cannot be won again.","——时间过得真快啊！高考快到了，我们要抓紧每一分钟。","——没错。俗话说，时间一去不复返。"],"opt":["Don't mention it","Forget it","Exactly","I beg to differ","没关系","不必在意","一点不错，完全正确","恕我不能同意"] }
		]
	},
	{
		"paperTitle":"模拟卷（六）",
		"pbls":[
			{"asw":"D","stm":["–I'm sorry I didn't make it to your party last night.","–________ I know you are busy these days.","——我很抱歉昨晚没去参加你的派对。","——没关系。我知道你最近很忙。"],"opt":["Don't mention it.","What's up?","I got it.","Never mind.","别客气。","怎么了？","我明白了。","没关系。"] },
			{"asw":"D","stm":["–Miss Lin, are you free at the moment? I have to ask you some questions.","–________.","——林小姐，你现在有空吗？我得问你几个问题。","——你问吧。"],"opt":["It's a pleasure","Ask please","Help yourself","Go ahead","乐意效劳","请问","别客气","去吧，问吧"] },
			{"asw":"C","stm":["–Can I take a look at the menu for a few minutes before I decide?","–Of course! ________, sir.","——我可以先看一下菜单再做决定吗?","——当然！先生，请慢慢看。"],"opt":["Make yourself at home","Take it easy","Take your time","Enjoy yourself","别拘束","别紧张","慢慢来","玩的愉快"] },
			{"asw":"B","stm":["–I'm afraid I've got a terrible cold.","–________. Let's go to see a doctor and have a check.","——恐怕我得了重感冒。","——不要着急。我们去看医生检查一下吧。"],"opt":["Take your time","Take it easy","Don't mention it","Don't bother","别着急；从容做","别担心；放轻松","不用介意","不用麻烦了；不打扰了"] },
			{"asw":"D","stm":["–I get at least an hour of physical exercise almost every day.","–Oh great! ________.","——我几乎每天至少有半小时的锻炼。","——哦，太好了。保持下去。"],"opt":["Good luck","Cheer up","Same to you","Keep it up","祝好运","振作起来","和你一样","保持下去"] }
		]
	},
	{
		"paperTitle":"模拟卷（七）",
		"pbls":[
			{"asw":"B","stm":["–Why didn't you come to the party?","–________, but I'd really like some time alone to clear my thoughts.","——你为什么没有来参加聚会？","——我无意冒犯，但是我真的想有一段时间来整理我的想法。"],"opt":["No wonder","No offence","No comment","No doubt","难怪","无意冒犯","无可奉告","毫无疑问"] },
			{"asw":"B","stm":["–Thank you for sharing your Bilibili membership with me.","–________. That's what friends are for.","——感谢你和我分享你的哔哩哔哩会员。","——别客气。这是朋友该做的。"],"opt":["Not really","Don't mention it","It's up to you","By all means","不全是这样","别客气","你决定吧","当然可以、一定"] },
			{"asw":"B","stm":["–Can we finish packing these orders some other time?","–________? They are not urgent.","——我们能不能改天再包装这些订货？","——为什么不呢?要的不是很急。"],"opt":["What for","Why not","So what","Why bother","为什么","为何不","那又怎样","何必费心"] },
			{"asw":"C","stm":["–I'd like to sit at the back of the classroom.","–________. But you'll see the blackboard more clearly in the front.","——我想坐在教室的后面。","——如你所愿。但是你在前面会看黑板更清楚。"],"opt":["You got me there","I don't know","As you wish","I couldn't agree more","你难住我了","我不知道","如你所愿","我非常同意"] },
			{"asw":"D","stm":["–The concert to be given by the famous singer in our city has been cancelled because of his poor health.","–________. I've been looking forward to seeing him.","——那位著名歌手原定在我市举行的音乐会由于身体不好而取消了。","——真遗憾。我一直盼着见到他。"],"opt":["It doesn't matter","I can't agree more","I have no idea","It's a pity","没关系","我完全同意","我不知道","真遗憾"] }
		]
	},
	{
		"paperTitle":"模拟卷（八）",
		"pbls":[
			{"asw":"C","stm":["–Every day there is always so much work to do. I think I'm going to be driven mad. ","–________. It's going to be all right.","——工作总是这么多，我都快疯了。","——保持冷静。一切都会过去的。"],"opt":["No way","Go ahead","Keep cool","Never mind","没门","着手做某事，尽管去做","保持冷静，有话好好说","不必担心"] },
			{"asw":"A","stm":["–This film is really moving!","–________! You've described exactly what I felt about the film.","——这部电影真感人！","——是啊！你说出了我对这部电影的感觉。"],"opt":["That's it","Well done","Cheers","Nonsense","就是这样","干得好","干杯","胡说八道"] },
			{"asw":"A","stm":["–Are you going to the museum, Alice?","–No, I ________ to it already.","——爱丽丝，你要去博物馆吗？","——不，我已经去过了。"],"opt":["have been","have gone","had been","had gone","已经去过了（现在完成时态）","已经去了还没回来（现在完成时态）","已经去过了（过去完成时态）","已经去了还没回来（过去完成时态）"] },
			{"asw":"A","stm":["–I'm sorry for breaking the cup.","–Oh, ________. —I've got plenty.","——对不起，打坏了你的杯子。","——噢，没关系。我还有很多呢。"],"opt":["forget it","my pleasure","help yourself","pardon me","得了吧；算了吧；没关系","不用谢","随便","对不起，再说一遍"] },
			{"asw":"D","stm":["–Would you like to see a movie with me tonight?","–Great! ________.","——今晚你愿意和我一起去看电影吗？","——太好了，我愿意去。"],"opt":["I'm not free","We'd better not","We'll be fine","I'd love to","我没空","我们最好不","我们很好","我愿意"] }
		]
	},
	{
		"paperTitle":"模拟卷（九）",
		"pbls":[
			{"asw":"B","stm":["–We had a very interesting chat.","–________? About what?","——“我们进行了一次非常有趣的谈话。”","——“真的吗？关于什么？”"],"opt":["So what","Really","Pardon","What for","那又如何","真的吗","能再重复一遍吗","为了什么？"] },
			{"asw":"B","stm":["–I'm going to Venice next week.","–________. Carnival will be held then. Have fun!","——我下周去威尼斯。","——你真走运。那时会举行狂欢节。祝你玩的愉快!"],"opt":["You're crazy","You're lucky","You'd better not","You never know","你疯了","你真幸运","你最好不要","你永远不会懂"] },
			{"asw":"D","stm":["\"All hope was not lost\" means ________.", null,"“没有失去所有的希望”意味着有些希望失去了，有些没有。", null],"opt":["All of the hope was lost","No hope was lost","None of the hope was lost","Some hope was lost, some not", null, null, null,"有些希望失去了，有些没有"] },
			{"asw":"B","stm":["–I think I'd better stay at home and finish the paper.","–Come on! ________. Everybody is going.","——我认为我最好待在家完成论文。","——得了吧，别扫兴，每个人都去。"],"opt":["It's a piece of cake","Don't be a wet blanket","You have green fingers","I'm all ears","小菜一碟","别扫兴","你是园艺高手","我洗耳恭听"] },
			{"asw":"A","stm":["–Have you paid? What's my share of the bill?","–________. It wasn't very much.","——你付账了吗? 我该分摊多少？","——别放在心上。（我付的）不多。"],"opt":["Don't worry about it","It's my share","None of your business","It's up to you", null,"我该付一份","不关你的事","由你负责"] }
		]
	},
	{
		"paperTitle":"模拟卷（十）",
		"pbls":[
			{"asw":"C","stm":["–Could you lend me some books?","–________. I have a lot of books here.","——你能借给我一些书吗？","——当然。我这里有很多书。"],"opt":["Excuse me","Sorry","Sure","No way","对不起，打扰一下","抱歉","当然，的确","决不，没门"] },
			{"asw":"B","stm":["–Tell me about your stay in London. Did you enjoy it?","–Yes, ________.","——告诉我你在伦敦的情况。你喜欢吗？","——是的，很愉快。"],"opt":["it was boring","it was pleasant","it was terrible","it was expensive","它是令人厌烦的","它是令人愉快的","它是令人可怕的","它是昂贵的"] },
			{"asw":"A","stm":["–________, sir?","–A glass of milk, please.","——先生，你想要什么？","——一杯牛奶。"],"opt":["What would you like","What is it over there","What day is it today","What's the matter with you","你想要什么","那边是什么","今天星期几","你怎么了"] },
			{"asw":"C","stm":["–My wife and I are going to Paris.","–________. ","——我妻子和我将去巴黎。","——祝你们旅途愉快。"],"opt":["Never mind","No problem","Have a good trip","It's my pleasure","没有关系","没问题","祝你们旅途愉快","别客气"] },
			{"asw":"D","stm":["–Would you like to see a movie with me tonight?","–Great! ________.","——今晚你愿意和我一起去看电影吗？","——太好了，我愿意去。"],"opt":["I'm not free","We'd better not","We'll be fine","I'd love to","我没空","我们最好不","我们很好","我愿意"] }
		]
	},
	{
		"paperTitle":"模拟卷（十一）",
		"pbls":[
			{"asw":"B","stm":["–I've decided to take part in the race, but I'm afraid I may fail to reach the finishing line.","–________! You never know until you try.","——我已经决定参加比赛了，但是我害怕我可能不能到达终点线。","——去努力争取！你尝试了才会知道。"],"opt":["Do as you like","Go for it","Enjoy yourself","Good luck","随你便","去争取","玩得愉快","祝好运"] },
			{"asw":"B","stm":["–We haven't done very well, have we?","–________. At least we tried.","——我们做得不太好，是吗?","——没关系。至少我们努力过。"],"opt":["I'm fine","Never mind","You're welcome","The same to you","我很好","没关系","不客气","你也一样"] },
			{"asw":"B","stm":["–I've decided to give up my job.","–________ It's really a good job and you are always happy with it.","——我决定放弃我的工作了。","——你说真的吗？那是一份好工作，你一直很满意。"],"opt":["No problem.","Are you serious?","Cool!","That's so easy.","没问题。","你说真的吗？","酷！","太容易了。"] },
			{"asw":"A","stm":["–Lucy you look pale today. ________?","–Thank you. I'm afraid I'm a little tired.","——露西，你今天脸色苍白。怎么了?","——谢谢。恐怕我只是有点累了。"],"opt":["What's up","So what","Are you sure","What's your opinion","怎么了","那又怎样","你确定吗","你怎么说"] },
			{"asw":"A","stm":["–I can't remember those grammar rules!","–________. Practice more.","——我不能够记住这些语法规则。","——你不是一个人，多加练习。"],"opt":["You are not alone","It's hard to say","I'm afraid not","It's up to you","你不是一个人","这很难说","恐怕不是这样的","这取决于你"] }
		]
	},
	{
		"paperTitle":"模拟卷（十二）",
		"pbls":[
			{"asw":"B","stm":["–Ok,I'll fix your computer right now.","–Oh, take your time. ________.","——好的，我马上就给你修电脑。","——哦，慢慢来。我不着急。"],"opt":["I can't stand it","I'm in no hurry","That's a great idea","It's not my cup of tea","我受不了了","我不着急","是个好主意","我对此事不感兴趣"] },
			{"asw":"B","stm":["–It is said that J. K Rolling is coming to our school. Are you coming to her speech?","–________. I can't wait.","——听说 J. K Rolling 要来我们学校了。你来听她的演讲吗？","——当然，我迫不及待了。"],"opt":["It's a deal","You bet","It is up to you","Of course not","一言为定","当然","取决于你","当然不"] },
			{"asw":"B","stm":["–I really don't know when we can get over all the troubles.","–________! Our troubles will soon be over.","——我真不知道我们什么时候才能克服所有的困难。","——振作起来！我们的困难很快就会过去的。"],"opt":["Forget it","Cheer up","Neither do I","What a pity","算了吧","振作起来","我也不","真可惜"] },
			{"asw":"D","stm":["–What shall we do tonight then?","–________ whatever you want.","——我们今晚干什么？","——你决定,你想干什么都行。"],"opt":["Help yourself.","No problem.","It's a deal.","It's up to you.","随意。","没问题。","就这样定了。","由你定。"] },
			{"asw":"A","stm":["–How long are you staying?","–I don't know. ________.","——“你要待多久？”","——“不知道，看情况吧。”"],"opt":["It depends.","That's OK.","Never mind.","It doesn't matter.","看情况而定","好的","没关系","没关系"] }
		]
	},
	{
		"paperTitle":"2023年1月广东省普通高中学业水平合格性考试",
		"pbls":[
			{"asw":"A","stm":["–Thanks for giving me a ride to school.","–________.","——谢谢你开车送我去学校。","——别客气。"],"opt":["You are welcome","That's a good idea","Don't worry","You are so nice","别客气","好主意","别担心","你真好"] },
			{"asw":"C","stm":["–________?","——现在几点了？","——我的表显示九点。","–My watch reads nine."],"opt":["What's the date today","How much is your watch","What time is it now","How many watches do you have","今天几号","你的表多少钱","现在什么时间","你有多少块手表"] },
			{"asw":"B","stm":["–Would you like to come to our party tonight?","–Sure. ________.","——今晚你愿意来参加我们的聚会吗？","——当然，我愿意。"],"opt":["I'm sorry","I'd love to","That's all right","Come on","对不起","我愿意","不要紧，没关系","加油；快点"] },
			{"asw":"A","stm":["–What do you think of the movie?","–I like it. I think ________.","——你觉得这部电影怎么样？","——我喜欢。我觉得很棒。"],"opt":["it's great","it's possible","it's terrible","it's ordinary","极好的","可能的","可怕的","普通的"] },
			{"asw":"D","stm":["–Sorry I was not able to help.","–________.","——对不起，我没能帮上忙。","——别客气。"],"opt":["It just depends","It's my pleasure","Not in the least","Thank you all the same","看情况","别客气","一点也不","还是谢谢你了"] }
		]
	}
]