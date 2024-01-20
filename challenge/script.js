totalQueNum = 10, userSelect = '', correctQueNum = 0, currentQueNum = 0;
queList = [], userAns = [], correctAns = [], result = [], ansCard = [], queSource = [];
function ifsame(m, n) {
	if (queList[m][0] == queList[n][0] && queList[m][1] == queList[n][1]) {
		return true;
	} else {
		return false;
	};
};
function genQue(num) {
	genQueMain(num);
	for (var j = 0; j < i; j++) {
		if (ifsame(num, j) == true) {
			genQueMain(num);
		};
	};
};
function genQueMain(num) {
	queList[num][0] = Math.floor(Math.random() * 13);
	queList[num][1] = Math.floor(Math.random() * 5);
	queList[num][2] = data[queList[num][0]].pbls[queList[num][1]].asw;
};
function ltr(num) {
	return String.fromCharCode(num + 65);
};
function sel(opt) {
	function clsAdd(idO, idP, idQ, idR) {
		document.getElementById(idO).classList.remove("seled");
		document.getElementById(idP).classList.remove("seled");
		document.getElementById(idQ).classList.remove("seled");
		document.getElementById(idR).classList.remove("seled");
		document.getElementById(idO).classList.add("unseled");
		document.getElementById(idP).classList.add("unseled");
		document.getElementById(idQ).classList.add("unseled");
		document.getElementById(idR).classList.add("unseled");
	};
	if (opt == 0) {
		clsAdd("optn1", "optn2", "optn3", "optn4");
		document.getElementById("optn0").classList.add("seled");
		document.getElementById("optn0").classList.remove("unseled");
	} else if (opt == 1) {
		clsAdd("optn0", "optn2", "optn3", "optn4");
		document.getElementById("optn1").classList.add("seled");
		document.getElementById("optn1").classList.remove("unseled");
	} else if (opt == 2) {
		clsAdd("optn0", "optn1", "optn3", "optn4");
		document.getElementById("optn2").classList.add("seled");
		document.getElementById("optn2").classList.remove("unseled");
	} else if (opt == 3) {
		clsAdd("optn0", "optn1", "optn2", "optn4");
		document.getElementById("optn3").classList.add("seled");
		document.getElementById("optn3").classList.remove("unseled");
	} else if (opt == 4) {
		clsAdd("optn0", "optn1", "optn2", "optn3");
		document.getElementById("optn4").classList.add("seled");
		document.getElementById("optn4").classList.remove("unseled");
	};
	userSelect = ltr(opt);
	document.getElementById("continue").disabled = false;
};
function setQue() {
	document.getElementById("question").innerHTML = '<span class="emsp">&emsp;</span>'
		+ data[queList[currentQueNum][0]].pbls[queList[currentQueNum][1]].eng[0] + '<br /><span class="emsp">&emsp;</span>'
		+ data[queList[currentQueNum][0]].pbls[queList[currentQueNum][1]].eng[1];
	document.getElementById("text0").innerHTML = data[queList[currentQueNum][0]].pbls[queList[currentQueNum][1]].eng[2];
	document.getElementById("text1").innerHTML = data[queList[currentQueNum][0]].pbls[queList[currentQueNum][1]].eng[3];
	document.getElementById("text2").innerHTML = data[queList[currentQueNum][0]].pbls[queList[currentQueNum][1]].eng[4];
	document.getElementById("text3").innerHTML = data[queList[currentQueNum][0]].pbls[queList[currentQueNum][1]].eng[5];
	document.getElementById("continue").disabled = true;
	document.getElementById("prog-bar").style.width = (currentQueNum * 10 / totalQueNum * 10).toFixed() + '%';
	document.getElementById("prog-bar").innerHTML = (currentQueNum * 10 / totalQueNum * 10).toFixed() + '%';
	for (var i = 0; i < 5; i++) {
		if (userAns[currentQueNum] == ltr(i)) {
			sel(i);
		};
	};
	if (currentQueNum == 0) {
		document.getElementById("prog-bar").innerHTML = '';
		document.getElementById("backward").disabled = true;
	} else {
		document.getElementById("backward").disabled = false;
	};
	// console.log(userAns);
};
function clsRst() {
	document.getElementById("optn0").classList.remove("seled");
	document.getElementById("optn1").classList.remove("seled");
	document.getElementById("optn2").classList.remove("seled");
	document.getElementById("optn3").classList.remove("seled");
	document.getElementById("optn4").classList.remove("seled");
	document.getElementById("optn0").classList.add("unseled");
	document.getElementById("optn1").classList.add("unseled");
	document.getElementById("optn2").classList.add("unseled");
	document.getElementById("optn3").classList.add("unseled");
	document.getElementById("optn4").classList.add("unseled");
};
function forward() {
	currentQueNum++;
	clsRst();
	userAns[currentQueNum - 1] = userSelect;
	userSelect = '';
	if (currentQueNum == totalQueNum) {
		info();
	} else {
		setQue();
	};
};
function backward() {
	currentQueNum--;
	clsRst();
	setQue();
};
function debug() {
	for (var i = 0; i < totalQueNum; i++) {
		userAns[i] = ltr(Math.floor(Math.random() * 4));
	};
	info();
};
function info() {
	alert('作答完毕，点击确定或关闭查看结果'); //debug的时候把这里注释掉
	if (document.getElementById("header")) {
		document.getElementById("header").remove();
		document.getElementById("question").remove();
		document.getElementById("options").remove();
		document.getElementById("continue").remove();
	};
	for (var i = 0; i < totalQueNum; i++) {
		correctAns.push(queList[i][2]);
	};
	ansCard.push(correctAns, userAns);
	for (var i = 0; i < totalQueNum; i++) {
		if (ansCard[0][i] == ansCard[1][i]) {
			result[i] = true;
			correctQueNum++;
		} else {
			result[i] = false;
		};
		queSource.push([queList[i][0], queList[i][1]]);
	};
	ansCard.push(result, queSource, correctQueNum);
	console.log(ansCard);
	document.body.innerHTML = `<h1 id="resultTitle">结果统计</h1>
	<h2 id="percentage">正确率：</h2>
	<table id="result">
		<thead>
			<tr>
				<th style="width: 40px;">题号</th>
				<th style="width: 40px;">答案</th>
				<th style="width: 40px;">作答</th>
				<th style="width: 112px;">来源试卷</th>
				<th style="width: 56px;">原题号</th>
			</tr>
		</thead>
		<tbody id="tbody"></tbody>
	</table>
	<div id="buttons">
		<button id="back" onclick="window.location.href='../index.html'">返回主页</button>
		<button id="bank" onclick="window.location.href='../bank/index.html'">查看题库</button>
		<button id="opts" onclick="window.location.href='../options/index.html'">选项解析</button>
	</div>
	<button id="reload" onclick="location.reload()">再做一次</button>`;
	document.getElementById("percentage").innerHTML += (ansCard[4] * 10 / totalQueNum * 10).toFixed(1) + '%';
	var writeTable = '';
	for (var i = 0; i < totalQueNum; i++) {
		writeTable += '<tr><td>'
			+ (i + 1) + '</td><td>'
			+ ansCard[0][i] + '</td><td>'
			+ ansCard[1][i] + '</td><td>'
			+ data[ansCard[3][i][0]].paperTitle + '</td><td>'
			+ (ansCard[3][i][1] + 1) + '</td></tr>';
	};
	document.getElementById("tbody").innerHTML = writeTable;
};
for (let i = 0; i < 5; i++) {
	document.getElementById("optn" + i).addEventListener("click", function () { sel(i) });
};
for (var i = 0; i < totalQueNum; i++) {
	userAns.push('');
	queList.push([]);
	genQue(i);
};
document.title = totalQueNum + ' Questions Challenge';
console.log(queList);
clsRst();
setQue();
// debug(); //debug的时候把这里取消注释