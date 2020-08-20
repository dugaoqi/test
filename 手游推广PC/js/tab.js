function tabname1(titlename,tabname,tabNum,tabcishu,ClassNameBlock,ClassNameNone)   
{  
	tabsBengin(titlename,tabname,tabNum,tabcishu,ClassNameBlock,ClassNameNone);   
}   


function tabsBengin(titlename,tabname,tabNum,tabcishu,ClassNameBlock,ClassNameNone)   
{   
	
	
	for (var i = 1; i <= tabcishu; i++)   
	{   
		if(!document.getElementById(tabname+i)) break;
		document.getElementById(tabname + i).style.display = (i == tabNum) ? 'block' : 'none';   
		document.getElementById(titlename+ i).className = (i == tabNum) ? ClassNameBlock : ClassNameNone;   
	}   
} 




$(".nav .menu li a").hover(
	function () {
	  $(this).addClass("active");
	},
	function () {
	  $(this).removeClass("active");
	}
  )
 






$('.online_msg').click(function () {
	console.log('hhhh')
	$('html,body').animate({ scrollTop: $(document).height() }, 1000);
	return false;
});





$(".lxfs_b1").click(function(){
	console.log("jjjjj")
	
const telphone=$(".phonenum").val();
const name=$(".username").val();
const demand=$(".demand").val();

	$.ajax({

		type: 'post',

		url: 'https://www.zishajyw.com/game_add',

		data: {
			'name':name,
			'telphone': telphone,
			'demand': demand,
		},

		dataType: 'json',

		success: function (data) {
		
			alert("成功")
			$(this).resetForm();

		},

		error: function () {

			alert("失败")

		}

	});

})
