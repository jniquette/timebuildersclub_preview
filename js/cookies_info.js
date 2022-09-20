/* Set mouse over and mouse out events for cookies button */

function showCookiesTooltip() {
	document.getElementById("cookiesTooltip").classList.add("visible")
}

function hideCookiesTooltip() {
	document.getElementById("cookiesTooltip").classList.remove("visible")
}

/* Append cookies divs to end of <body> tag */
document.getElementsByTagName("body")[0].innerHTML += "\n" +
	"<div id=\"cookiesButton\">\n" +
	"\tCookies Info\n" +
	"</div>\n" +
	"<div id=\"cookiesTooltip\">\n" +
	"\t<p>This site uses cookies for marketing, performance monitoring, and to ensure that you get the best experience on our site.\n" +
	"\tIf you do not wish for cookies to be used, please disable cookies in your web browser.\n" +
	"\t\t<span id=\"closeTooltip\">[close]</span></p>\n" +
	"</div>";

document.getElementById("cookiesButton").addEventListener("mouseover", showCookiesTooltip);
document.getElementById("cookiesButton").addEventListener("click", showCookiesTooltip);
document.getElementById("cookiesButton").addEventListener("mouseout", hideCookiesTooltip);
document.getElementById("closeTooltip").addEventListener("click", hideCookiesTooltip);

