//qr코드 생성
var qrcode = new QRCode(document.getElementById("qrcode"), {
	//가로, 세로 높이 조절
	width : 100,
	height : 100
});

//input:text에 들어있는 value를 qr코드로 바꿔주는 function
function makeCode () {
	var elText = document.getElementById("text");

	if (!elText.value) {
		alert("Input a text");
		elText.focus();
		return;
	}

	qrcode.makeCode(elText.value);
}

//위에 만든 function 실행
makeCode();

//텍스트 이벤트 감지
$("#text").
	on("blur", function () {
		makeCode();
	}).
	on("keydown", function (e) {
		if (e.keyCode == 13) {
			makeCode();
		}
	});
