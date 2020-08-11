// 透過getElementById得到的input就是物件
// 所以可以用.value得到值
var input = document.getElementById("text");
var button = document.getElementById("send");
var list = document.getElementById("list");

// addEventLister 事件監聽 例如click 點擊以後要執行addData
// 等於在HTML的button 寫 onclick="addData()"
button.addEventListener("click", addData);

var todoList = [];

function addData() {
  // alert(input.value);
  todoList.push(input.value);
  // alert(todoList)
  render();
}

function delData(index) {
  var temp = [];
  for (var i = 0; i < todoList.length; i++) {
    if (i != index) {
      temp.push(todoList[i]);
    }
  }
  // alert(temp);
  todoList = temp;
  render();
}
//   todolist =temp 寫回去

// 刪除array中間特定值的行為

function render() {
  var listContent = "";
  for (var i = 0; i < todoList.length; i++) {
    listContent += `<button onclick="delData(${i})">刪除</button><div>${
      i + 1
    } . ${todoList[i]}</div>`;
  }
  list.innerHTML = listContent;
}