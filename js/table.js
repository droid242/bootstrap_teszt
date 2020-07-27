/*
<tr>
    <td>1.</td>
    <td>Kiss</td>
    <td>János</td>
    <td>55</td>
    <td>
        <div class="btn-group">
            <button class="btn btn-info"><i class="fas fa-redo"></i></button>
            <button class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
        </div>
    </td>
</tr>
*/

let users = [
    {
        'surname': 'Kovács',
        'firstname': 'József',
        'age': 23
    },
    {
        'surname': 'Tóth',
        'firstname': 'István',
        'age': 65
    },
    {
        'surname': 'Orbán',
        'firstname': 'Viktor',
        'age': 57
    },
    {
        'surname': 'Kötsög',
        'firstname': 'Phass',
        'age': 14
    }
];

let tableBody = document.querySelector("#userTable tbody");

let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

let createButtonGroup = parent => {
    let div = document.createElement("div");
    div.className = "bth-group";
    
    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = '<i class="fas fa-redo"></i>';

    let btnDang = document.createElement("button");
    btnDang.className = "btn-danger btn";
    btnDang.innerHTML = '<i class="fas fa-trash-alt"></i>';

    div.appendChild(btnInfo);
    div.appendChild(btnDang);

    let td = document.createElement("td");
    td.appendChild(div);
    parent.appendChild(td);
};

for(let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k) + 1 + ".", tr);
    for(let j of Object.values(users[k])) {
        createTD(j, tr);
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);
}