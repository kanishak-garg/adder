var submitBtn = document.getElementById("btn");
var inp = document.getElementById("inp");
var one = document.getElementById("one");
var two = document.getElementById("two");
var total = document.getElementById("sum");

var sum = 0;
function processForm(e) {
  if (e.preventDefault) e.preventDefault();
  sum = sum + parseInt(inp.value);

  total.innerHTML = sum;

  var li = document.createElement("li");
  li.appendChild(document.createTextNode(inp.value));
  one.appendChild(li);

  var li = document.createElement("li");
  li.appendChild(document.createTextNode(sum));
  two.appendChild(li);

  console.log(sum);
  inp.value = "";
  return false;
}

var form = document.getElementById("frm");
if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}
