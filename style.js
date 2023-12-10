window.onload = function () {
	// 创建监听器
	document.getElementById("optnA").addEventListener("click", function () { sel(0) });
	document.getElementById("optnB").addEventListener("click", function () { sel(1) });
	document.getElementById("optnC").addEventListener("click", function () { sel(2) });
	document.getElementById("optnD").addEventListener("click", function () { sel(3) });
	document.getElementById("optnE").addEventListener("click", function () { sel(4) });
	// 初始化变量（这里还没写）


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
	}

	// 定义单选函数
	function sel(opt) {
		if (opt == 0) {
			// 为id为optnB、optnC、optnD、optnE的元素移除seled类名、添加unseled类名；给id为optnA的元素添加seled类名
			clsAdd(B, C, D, E);
			document.getElementById("optnA").classList.add("seled");
			// console.log('选择了A');
		} else if (opt == 1) {
			// 为id为optnA、optnC、optnD、optnE的元素移除seled类名、添加unseled类名；给id为optnB的元素添加seled类名
			clsAdd(A, C, D, E);
			document.getElementById("optnB").classList.add("seled");
			// console.log('选择了B');
		} else if (opt == 2) {
			// 为id为optnA、optnB、optnD、optnE的元素移除seled类名、添加unseled类名；给id为optnC的元素添加seled类名
			clsAdd(A, B, D, E);
			document.getElementById("optnC").classList.add("seled");
			// console.log('选择了C');
		} else if (opt == 3) {
			// 为id为optnA、optnB、optnC、optnE的元素移除seled类名、添加unseled类名；给id为optnD的元素添加seled类名
			clsAdd(A, B, C, E);
			document.getElementById("optnD").classList.add("seled");
			// console.log('选择了D');
		} else if (opt == 4) {
			// 为id为optnA、optnB、optnC、optnD的元素移除seled类名、添加unseled类名；给id为optnE的元素添加seled类名
			clsAdd(A, B, C, D);
			document.getElementById("optnE").classList.add("seled");
			// console.log('选择了IDK');
		}
	}
}