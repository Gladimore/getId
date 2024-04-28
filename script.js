let id = undefined
const id_shower = document.getElementById('uuid')

function copy(text = "") {
  if (text == 'id') {
    text = id
  }

  navigator.clipboard.writeText(text).then(function () {
    alert('Copied');
  }, function (err) {
    alert('Could not copy text');
  });
}

const nav_info = window.navigator
const screen_info = window.screen
var uid = nav_info.mimeTypes.length
uid += nav_info.userAgent.replace(/\D+/g, '')
uid += nav_info.plugins.length
uid += screen_info.height || ""
uid += screen_info.width || ""
uid += screen_info.pixelDepth || ""

console.log(uid)

id = uid
id_shower.innerText = `ID: ${uid}`