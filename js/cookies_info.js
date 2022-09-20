/* Set mouse over and mouse out events for cookies button */

function showCookiesTooltip() {
	document.getElementById("cookiesTooltip").classList.add("visible")
}

function hideCookiesTooltip() {
	document.getElementById("cookiesTooltip").classList.remove("visible")
}

document.getElementById("cookiesButton").addEventListener("mouseover", showCookiesTooltip);
document.getElementById("cookiesButton").addEventListener("click", showCookiesTooltip);
document.getElementById("cookiesButton").addEventListener("mouseout", hideCookiesTooltip);
document.getElementById("closeTooltip").addEventListener("click", hideCookiesTooltip);

