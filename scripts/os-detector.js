document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".btn-orange"),r=document.querySelectorAll(".btn-orange img"),t=document.querySelectorAll(".btn-orange .os"),o=-1!=window.navigator.userAgent.indexOf("Windows"),n=-1!=window.navigator.userAgent.indexOf("Mac"),s=-1!=window.navigator.userAgent.indexOf("Linux"),a="https://github.com/trufflesuite/ganache/releases",l="All Releases",u="",d=new XMLHttpRequest;d.open("GET","https://api.github.com/repos/trufflesuite/ganache/releases/latest",!0),d.onload=function(){if(d.status>=200&&d.status<400){var g=JSON.parse(d.responseText);for(o&&(u="/images/suite/ganache/windows-logo.svg",l="Windows",g.assets.forEach(function(e){e.browser_download_url.indexOf(".appx")>=0&&(a=e.browser_download_url)})),n&&(u="/images/suite/ganache/apple-logo.svg",l="MacOS",g.assets.forEach(function(e){e.browser_download_url.indexOf(".dmg")>=0&&(a=e.browser_download_url)})),s&&(u="/images/suite/ganache/linux-tux-logo.svg",l="Linux",g.assets.forEach(function(e){e.browser_download_url.indexOf(".AppImage")>=0&&(a=e.browser_download_url)})),i=0;i<r.length;i++)r[i].setAttribute("src",u),t[i].innerHTML="("+l+")",e[i].setAttribute("href",a)}else for(console.error("Error getting release list. Status: "+d.status),console.error(d.responseText),i=0;i<r.length;i++)r[i].setAttribute("src",u),t[i].innerHTML="("+l+")",e[i].setAttribute("href",a)},d.onerror=function(e){console.error("Error getting release list."),console.error(e)},d.send()});