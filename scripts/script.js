// 初始变量部分，目前包括：题数、空题组、当前题目、当前题目答案
var queNum = 10, queList = [], currentQueNum = 0, cuttentAsw = '';

// 随机生成题组
for (var i = 0; i < 10; i++) {
	// 定义临时数组
	var tempQue = [];
	// 随机卷号题号
	var paperNum = Math.floor(Math.random() * 13);
	var queNum = Math.floor(Math.random() * 5);
	// 卷号题号推到临时数组
	tempQue.push(paperNum, queNum);
	// 临时数组推到全局题组
	queList.push(tempQue);
};
/* 结果：生成一坨JSON，大致如此：
queList = [
	[卷号, 题号]
	[卷号, 题号]
	[卷号, 题号]
	[卷号, 题号]
	[卷号, 题号]
	[卷号, 题号]
	[卷号, 题号]
	[卷号, 题号]
	[卷号, 题号]
	[卷号, 题号]
]
*/

// 为继续按钮添加监听器
document.getElementById("continue").addEventListener("click", function () { ctnfn() });
// 定义继续函数 (continue function)，用于跳转至下一题
function ctnfn() {
	console.log('ctnfn');
};