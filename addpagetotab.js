/*  FB Add Page to Tab
 *	version 1.0.0
 *  (c) 2013 Flagship LLC
 *
/*--------------------------------------------------------------------------*/

// jQuery('#developerAppHeader').css('display','none');

$(".devsitePage .menu").css('background','#222222');
var YOUR_APP_ID = $('div.mts tr:first td._51m-._51mw').text();
var YOUR_URL = $('input#secure_page_tab_url').val();
var URL = "https://www.facebook.com/dialog/pagetab?app_id="+YOUR_APP_ID+"&display=popup&next="+YOUR_URL;
$("#developerAppHeader").append("<a href="+URL+" class='adBtn'>Add Page To Tab</a>");


console.log(URL);
console.log(YOUR_URL);
console.log(YOUR_APP_ID);
console.log(append);

