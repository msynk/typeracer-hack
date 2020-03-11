// improved version of https://gist.github.com/SitanHuang/cf30c1a0fded65479decc2e49a4224cf

var interval = 115;

!function hack() {
	var idx = 0;
	var input = $$('.txtInput')[0];
	var content = $$('.inputPanel div')[0].innerText;

	start();

	function start() {
		if (idx == content.length) return;	
		input.focus();
		input.value += content[idx++];
		var code = input.value.charCodeAt(0);
		trigger(code, 'keydown');
		input.click();
		trigger(code, 'keypress');
		trigger(code, 'keyup');
	
		setTimeout(start, interval);
	}

	function trigger(keyCode, type) {
		var e = document.createEventObject ? document.createEventObject() : document.createEvent('Events');
		e.initEvent && e.initEvent(type, true, true);
		e.keyCode = keyCode; e.which = keyCode;    
		input.dispatchEvent ? input.dispatchEvent(e) : input.fireEvent('onkeydown', e);
	}

}();
