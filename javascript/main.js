// 今日运势

class 运势 { // 定义运势类
	好运势 = { // 定义好运势
		大吉 : {
			标题: "大吉", 
			有: [
				"作业全对",
				"考试都会",
				"比赛过了",
				"提新猜想",
				"抽卡出金",
				"挖矿出钻"
			]
		},
		吉 : {
			标题: "吉", 
			有: [
				"题基本对",
				"考试高分",
				"比赛很牛",
				"解新难题",
				"抽卡出紫",
				"挖矿出绿"
			]
		},
		小吉 : {
			标题: "小吉", 
			有: [
				"做题全会",
				"考试进步",
				"比赛进步",
				"做新视频",
				"可以抽卡",
				"可以挖矿"
			]
		}
	}	
	坏运势 = { // 定义坏运势
		大凶 : {
			标题: "大凶", 
			有: [
				"没写作业",
				"上课瞌睡",
				"无法起床",
				"晚上不睡",
				"胃口不好",
				"挖矿被炸"
			]
		},
		凶 : {
			标题: "凶", 
			有: [
				"做题不会",
				"考试退步",
				"比赛不会",
				"没有灵感",
				"抽卡不中",
				"跟老师吵"
			]
		},
		小凶 : {
			标题: "小凶", 
			有: [
				"有不会题",
				"考试普通",
				"比赛平庸",
				"印象不好",
				"请求驳回",
				"没法一起"
			]
		}
	}
	开始抽签(运势) {
		let 对应 = 
		{
			1: "大凶",
			2: "凶",
			3: "小凶",
			4: "小吉",
			5: "吉",
			6: "吉",
			7: "大吉",
			8: "大吉",
			9: "大吉",
			10: "大吉"
		}

		var 随机数 = Math.floor(Math.random()*10) + 1;

		console.log("[DEBUG : ] " + 对应[随机数]);

		let 运势标题 = 对应[随机数];

		document.getElementById("运势标题").innerHTML = 运势标题;

		var 运势方向 = "坏运势";

		var 今日适合;
		
		if (运势标题[0] == "吉" || 运势标题[1] == "吉") {
			运势方向 = "好运势";
		}

		随机数 = Math.floor(Math.random()*5);
		
		今日适合 = 运势[运势方向][运势标题]["有"][随机数];

		console.log("[DEBUG : ] " + 今日适合);

		document.getElementById("结果").innerHTML = 今日适合;
	}
};

var toDay = new Date();

var day = toDay.getDay();

function setCookie(cname, cvalue){
    var d = new Date();
    d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function 抽签() {
	if (getCookie("Last") != day) { // 一天不可抽两次
		setCookie("Last", day);
		let 运势对象 = new 运势;
		运势对象.开始抽签(运势对象);
	} else {
		alert("你今天已经抽过了呢！");
	}
}


function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i < ca.length; i ++)  {
		var c = ca[i].trim();
		if (c.indexOf(name)==0) 
			return c.substring(name.length,c.length);
	}
	return "";
}
