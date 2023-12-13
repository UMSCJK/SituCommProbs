// 初始变量部分，目前包括：空题组、当前题目、当前题目答案、错题列表、答题状态
queList = [], currentQueNum = 0, wrongQues = [], waiting = false;
window.onload = function () {
	// 随机生成题组
	for (var i = 0; i < 10; i++) {
		// 定义临时数组
		var tempQue = [];
		// 随机卷号题号
		var paperNum = Math.floor(Math.random() * 13);
		var queNum = Math.floor(Math.random() * 5);
		var queAns = data[paperNum].pbls[queNum].asw;
		// 卷号题号答案推到临时数组
		tempQue.push(paperNum, queNum, queAns);
		// 临时数组推到全局题组
		queList.push(tempQue);
	};
	console.table(queList);
	/* 结果：生成一坨JSON，大致如此：
	queList = [
		[卷号, 题号, '答案']
		// 共重复10次
	]
	*/

	// 初始化答题界面
	// 进度条
	document.getElementById("prog-bar").style.width = "0";
	document.getElementById("prog-bar").innerHTML = "";
	// 出题
	document.getElementById("question").innerHTML = data[queList[currentQueNum][0]].pbls[queList[currentQueNum][1]].eng[0] + '<br />' + data[queList[0]].pbls[queList[1]].eng[1];
	// document.getElementById("textA").innerHTML = ;
	// document.getElementById("textB").innerHTML = ;
	// document.getElementById("textC").innerHTML = ;
	// document.getElementById("textD").innerHTML = ;
	// document.getElementById("textE").innerHTML = ;

	// 为继续按钮添加监听器
	document.getElementById("continue").addEventListener("click", function () { ctnfn() });
	// 定义继续函数 (continue function)，用于跳转至下一题
	function ctnfn() {
		currentQueNum += 1;
	};
}