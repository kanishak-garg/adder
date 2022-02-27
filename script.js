var submitBtn = document.getElementById("btn");
var inp = document.getElementById("inp");
var one = document.getElementById("one");
var two = document.getElementById("two");
var total = document.getElementById("sum");
var start = document.getElementById("start");

var sum = 0;
function processForm(e) {
  if (e.preventDefault) e.preventDefault();
  if (inp.value == "") {
    return false;
  }
  sum = sum + parseInt(inp.value);

  total.innerHTML = sum;

  var li = document.createElement("li");
  li.appendChild(document.createTextNode(inp.value));
  one.appendChild(li);

  var li = document.createElement("li");
  li.appendChild(document.createTextNode(sum));
  two.appendChild(li);

  inp.value = "";
  return false;
}

var form = document.getElementById("frm");
if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}

function processForm1(e) {
  if (e.preventDefault) e.preventDefault();
  if (start.value == "") {
    return false;
  }
  one.setAttribute("start", start.value);
  return false;
}

var form = document.getElementById("reciet");
if (form.attachEvent) {
  form.attachEvent("submit", processForm1);
} else {
  form.addEventListener("submit", processForm1);
}
