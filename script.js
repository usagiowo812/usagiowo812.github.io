function check(formObj) {
  var obj = formObj.peas;
  var selected = [];
  for (var i = 0; i < obj.length; i++) {
    if (obj[i].checked) {
      selected.push(obj[i].value);
    }
  }
  document.getElementById("buyingList").innerHTML =
    "您選擇的顏色代碼是 : " + selected.join();
}