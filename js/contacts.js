// Gregory Manov
// JQuery

function addSkill(idName, skillsCode) {
  $( idName ).before(function() {
      $(this).attr('data-content', skillsCode);
  });
}

// "use strict"

function showFB (fbLink, fbLinkKey) {
  var coded, key, shift, link, i, ltr, envelope, mailDesktop;
  coded = fbLink;
  key = fbLinkKey;
  shift=coded.length;
  link="";
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i);
      link += (ltr);
    }
    else {
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
      link += (key.charAt(ltr));
    }
  }
document.write("<a target=_blank href=" + link + ">");
}


function showNumber (num, numKey) {
  var coded, key, shift, link, i, ltr, phone, phoneDesktop;
  coded = num;
  key = numKey;
  shift=coded.length;
  link="";
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i);
      link += (ltr);
    }
    else {
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
      link += (key.charAt(ltr));
    }
  }
document.write(link);
}

function showWhatsApp (whtspNum, whtspKey) {
  var coded, key, shift, link, i, ltr, whatsapp, whatsappPrefix, whatsappPostPrefix ;
  coded = whtspNum;
  key = whtspKey;
  shift=coded.length;
  link="";
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i);
      link += (ltr);
    }
    else {
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
      link += (key.charAt(ltr));
      whatsappPrefix = "http://api.whatsapp.com/send?phone=";
      whatsappPostPrefix = "&text=Hello!";
      whatsapp = "<a target=_blank href=" + whatsappPrefix + link + whatsappPostPrefix + ">"
    }
  }
  console.log(whatsapp);

document.write(whatsapp);
}
