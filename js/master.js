let url = window.location.pathname;
let resize = () => { 
	$('#break').css('margin-top', $('nav').height());
}
$(window).resize(resize);
resize();

function myIP() {
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
 
    xmlhttp.open("GET"," http://api.hostip.info/get_html.php ",false);
    xmlhttp.send();
 
    hostipInfo = xmlhttp.responseText.split("n");
 
    for (i=0; hostipInfo.length >= i; i++) {
        ipAddress = hostipInfo[i].split(":");
        if ( ipAddress[0] == "IP" ) return ipAddress[1];
    }
 
    return false;
}

console.log(myIP());
