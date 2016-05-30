function ajax(url,fnSecc,fnFaild) {
	if (window.XMLHttpRequest) {
		var oAjax = new XMLHttpRequest();
	}else{
		var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	oAjax.open('GET',url,true);
	oAjax.send();
	oAjax.onreadystatechange = function () {
		if (oAjax.readyState == 4) {
			if (oAjax.status == 200) {
				fnSecc(oAjax.responseText);
			}else{
				if (fnFaild) fnFaild(oAjax.status);
			}
		}
	}
}