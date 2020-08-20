$(function() {
	function setRem() {
		var clientWidth = $(window).width();
		var nowRem = (clientWidth / 375 * 10);
		if (nowRem > 16) {
			$("html").css("font-size", parseInt(16) + "px");
		} else if (nowRem < 10) {
			$("html").css("font-size", parseInt(12) + "px");
		} else {
			$("html").css("font-size", parseInt(nowRem, 12) + "px");
		}
	};
	setRem();

	var timer;
	$(window).bind("resize", function() {
		clearTimeout(timer)
		timer = setTimeout(function() {
			setRem();
		}, 100)
	})

	// 复制文本内容
	var copyBtn = new ClipboardJS('.full-gift');

	copyBtn.on("success", function(e) {
		// 复制成功
		alert("微信号复制成功", 1500);
		window.location.href = 'weixin://';
		e.clearSelection();
	});
	copyBtn.on("error", function(e) {
		//复制失败；
		console.log(e.action)
	});

});
