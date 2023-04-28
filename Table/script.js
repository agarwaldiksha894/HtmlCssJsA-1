var table = document.getElementById('mytable');
var input = document.getElementById('myinput');
var tableData = 
[
    {
      name: "A name",
      classStd: "1",
      section: "A",
      sub1: "30",
      sub2: "40",
      sub3: "60",
      
    },
    {
        name: "B name",
        classStd: "3",
        section: "D",
        sub1: "40",
        sub2: "70",
        sub3: "90",
        
    },
    {
        name: "C name",
        classStd: "4",
        section: "B",
        sub1: "40",
        sub2: "60",
        sub3: "10",
        
    },
    {
        name: "D name",
        classStd: "3",
        section: "C",
        sub1: "20",
        sub2: "70",
        sub3: "50",
        
    }
]
//[{name: 'Onion', quantity: 29, price: 1.2, expiry: '2021-09-12'}, {name: 'Apple', quantity: 55, price: 3.3, expiry: '2021-09-22'}, {name: 'Potato', quantity: 25, price: 2.5, expiry: '2021-09-18'}, {name: 'Carrot', quantity: 8, price: 0.8, expiry: '2021-09-25'}];
var caretUpClassName = 'fa fa-caret-up';
var caretDownClassName = 'fa fa-caret-down';

const sort_by = (field, reverse, primer) => {

  const key = primer ?
    function(x) {
      return primer(x[field]);
    } :
    function(x) {
      return x[field];
    };

  reverse = !reverse ? 1 : -1;

  return function(a, b) {
    return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
  };
};


function clearArrow() {
  let carets = document.getElementsByClassName('caret');
  for (let caret of carets) {
    caret.className = "caret";
  }
}


function toggleArrow(event) {
  let element = event.target;
  let caret, field, reverse;
  if (element.tagName === 'SPAN') {
    caret = element.getElementsByClassName('caret')[0];
    field = element.id
  }
  else {
    caret = element;
    field = element.parentElement.id
  }

  let iconClassName = caret.className;
  clearArrow();
  if (iconClassName.includes(caretUpClassName)) {
    caret.className = `caret ${caretDownClassName}`;
    reverse = false;
  } else {
    reverse = true;
    caret.className = `caret ${caretUpClassName}`;
  }

  tableData.sort(sort_by(field, reverse));
  populateTable();
}


function populateTable() {
  table.innerHTML = '';
  for (let data of tableData) {
    let row = table.insertRow(-1);
    let name = row.insertCell(0);
    name.innerHTML = data.name;

    let classStd = row.insertCell(1);
    classStd.innerHTML = data.classStd;

    let section = row.insertCell(2);
    section.innerHTML = data.section;

    let sub1 = row.insertCell(3);
    sub1.innerHTML = data.sub1;

    let sub2 = row.insertCell(4);
    sub2.innerHTML = data.sub2;

    let sub3 = row.insertCell(5);
    sub3.innerHTML = data.sub3;
  }

  filterTable();
}


function filterTable() {
  let filter = input.value.toUpperCase();
  rows = table.getElementsByTagName("TR");
  let flag = false;

  for (let row of rows) {
    let cells = row.getElementsByTagName("TD");
    for (let cell of cells) {
      if (cell.textContent.toUpperCase().indexOf(filter) > -1) {
        if (filter) {
          cell.style.backgroundColor = 'yellow';
        } else {
          cell.style.backgroundColor = '';
        }

        flag = true;
      } else {
        cell.style.backgroundColor = '';
      }
    }

    if (flag) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }

    flag = false;
  }
}


populateTable();

let tableColumns = document.getElementsByClassName('table-column');

for (let column of tableColumns) {
  column.addEventListener('click', function(event) {
    toggleArrow(event);
  });
}

input.addEventListener('keyup', function(event) {
  filterTable();
});