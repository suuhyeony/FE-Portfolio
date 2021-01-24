const table = document.querySelector("table");
const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");

const add = document.querySelector(".button-add");
let nameValue = "";
let numberValue = "";

const sortButton = document.querySelector(".button-sort");


nameInput.addEventListener("keyup", (e) => {
    const rows = document.querySelectorAll("tbody tr");
    const text = e.target.value.toLowerCase();
    rows.forEach((row) => {
        row.querySelector("td").textContent.toLowerCase().includes(text)
        ? (row.style.display = "table-row")
        : (row.style.display = "none");
    });
});

numberInput.addEventListener("keyup", (e) => {
    const rows = document.querySelectorAll("tbody tr");
    const text = e.target.value;
    rows.forEach((row) => {
        row.cells[1].textContent.includes(text)
        ? (row.style.display = "table-row")
        : (row.style.display = "none");
    });
});

function storeName() {
    const name = nameInput.value;
    nameValue = name;
}

function storeNumber() {
    const number = numberInput.value;
    numberValue = number;
}

function isEmpty() {
    let empty = false;

    if (nameValue === "") {
        alert("이름을 입력하지 않았습니다!");
        empty = true;
    } else if (numberValue === "") {
        alert("번호를 입력하지 않았습니다!");
        empty = true;
    }
    return empty;
}

function addTableRow() {
    if (!isEmpty()) {
        let newRow = table.insertRow(table.length);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        cell1.innerHTML = nameValue;
        cell2.innerHTML = numberValue;
        
        const r = document.querySelectorAll("tbody tr");
        // console.log(r)
        r.forEach((row) => {
            row.style.display = "table-row";
        });
        nameInput.value = "";
        nameValue = "";
        numberInput.value = "";
        numberValue = "";
    };
};

add.addEventListener("click", addTableRow);


function sortRow() {
    const r = document.querySelectorAll("tbody tr");
    let rowList = [];
    for (let i = 0; i < r.length; i++) {
        rowList.push([r[i].cells[0].textContent, r[i].cells[1].textContent]);
    }
    if (sortButton.textContent === "Asc") {
        rowList.sort((a, b) => a[0].toLowerCase() > b[0].toLowerCase() ? 1 : -1);
        sortButton.innerText = "Desc";
    } else {
        rowList.sort((a, b) => a[0].toLowerCase() < b[0].toLowerCase() ? 1 : -1);
        sortButton.innerText = "Asc";
    }
    for (let i = 0; i < r.length; i++) {
        r[i].cells[0].innerText = rowList[i][0];
        r[i].cells[1].innerText = rowList[i][1];
    }
};

sortButton.addEventListener("click", sortRow);