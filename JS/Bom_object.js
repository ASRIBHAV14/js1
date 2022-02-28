//screen properties-moveto,close,open,new window
function windowoperation() {
    var newwindow = window.open("https://www.youtube.com/watch?v=o1IaduQICO0", "hi", "height=100,width=200")
    newwindow.moveTo(200, 300);
    // newwindow.close();
    // window.close();
}
//console.log(windowoperation());

//navigator properties-app name,version,firefox/chrome-navigator.useragent
function navigatorprop() {
    document.write("appcode name:" + navigator.appCodeName)
    document.write("<br> app name:" + navigator.appName)
    document.write("<br> platform: " + navigator.platform)
    document.write("<br> app version:" + navigator.appVersion)
    document.write("<br> cookie is enabled/not:" + navigator.cookieEnabled)
    document.write("<br> product:" + navigator.product)
    document.write("<br> permission" + navigator.permissions)
}

//navigatorprop();

//location properties
function locationprop() {
    document.write("href of location: " + location.href)
    document.write("<br> host location:" + location.host)
    document.write("<br> hostname: " + location.hostname)
    document.write("<br> protocol: " + location.protocol)
}
locationprop();//location.assign gives you another link in the same window

//history.back,history.forward