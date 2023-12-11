onload = function () {
	// 创建监听器
	document.getElementById("optnA").addEventListener("click", function () { sel(0) });
	document.getElementById("optnB").addEventListener("click", function () { sel(1) });
	document.getElementById("optnC").addEventListener("click", function () { sel(2) });
	document.getElementById("optnD").addEventListener("click", function () { sel(3) });
	document.getElementById("optnE").addEventListener("click", function () { sel(4) });
	// 初始化变量（这里还没写）
	var userSelect = '';

	// 定义clsRpls (Class Replace) 函数，以便在sel函数中用较少的代码量实现给HTML元素增减class的功能。此为专用函数，无法用于其他位置
	function clsAdd(idO, idP, idQ, idR) {
		var eleO = document.getElementById(idO);
		var eleP = document.getElementById(idP);
		var eleQ = document.getElementById(idQ);
		var eleR = document.getElementById(idR);
		eleO.classList.remove("seled");
		eleP.classList.remove("seled");
		eleQ.classList.remove("seled");
		eleR.classList.remove("seled");
		eleO.classList.add("unseled");
		eleP.classList.add("unseled");
		eleQ.classList.add("unseled");
		eleR.classList.add("unseled");
	};

	// 定义单选函数
	function sel(opt) {
		if (opt == 0) {
			clsAdd("optnB", "optnC", "optnD", "optnE"); // 为id为optnB、optnC、optnD、optnE的元素移除seled类名、添加unseled类名；给id为optnA的元素添加seled类名
			document.getElementById("optnA").classList.add("seled"); // 为id为optnA的元素添加seled类名
			document.getElementById("optnA").classList.remove("unseled"); // 为id为optnA的元素移除unseled类名
			userSelect = 'A'; // 用户当前选项全局变量改为'A'
		} else if (opt == 1) {
			clsAdd("optnA", "optnC", "optnD", "optnE"); // 为id为optnA、optnC、optnD、optnE的元素移除seled类名、添加unseled类名；给id为optnB的元素添加seled类名
			document.getElementById("optnB").classList.add("seled"); // 为id为optnB的元素添加seled类名
			document.getElementById("optnB").classList.remove("unseled"); // 为id为optnB的元素移除unseled类名
			userSelect = 'B'; // 用户当前选项全局变量改为'B'
		} else if (opt == 2) {
			clsAdd("optnA", "optnB", "optnD", "optnE"); // 为id为optnA、optnB、optnD、optnE的元素移除seled类名、添加unseled类名；给id为optnC的元素添加seled类名
			document.getElementById("optnC").classList.add("seled"); // 为id为optnC的元素添加seled类名
			document.getElementById("optnC").classList.remove("unseled"); // 为id为optnC的元素移除unseled类名
			userSelect = 'C'; // 用户当前选项全局变量改为'C'
		} else if (opt == 3) {
			clsAdd("optnA", "optnB", "optnC", "optnE"); // 为id为optnA、optnB、optnC、optnE的元素移除seled类名、添加unseled类名；给id为optnD的元素添加seled类名
			document.getElementById("optnD").classList.add("seled"); // 为id为optnD的元素添加seled类名
			document.getElementById("optnD").classList.remove("unseled"); // 为id为optnD的元素移除unseled类名
			userSelect = 'D'; // 用户当前选项全局变量改为'D'
		} else if (opt == 4) {
			clsAdd("optnA", "optnB", "optnC", "optnD"); // 为id为optnA、optnB、optnC、optnD的元素移除seled类名、添加unseled类名；给id为optnE的元素添加seled类名
			document.getElementById("optnE").classList.add("seled"); // 为id为optnE的元素添加seled类名
			document.getElementById("optnE").classList.remove("unseled"); // 为id为optnE的元素移除unseled类名
			userSelect = 'E'; // 用户当前选项全局变量改为'E'
		};
		// console.log(userSelect);
	}
}