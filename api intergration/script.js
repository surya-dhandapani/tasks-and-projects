const navbar=document.createElement("div")
navbar.setAttribute=("class","navbar")
const ans = fetch("https://jsonplaceholder.typicode.com/users");
res.then((data) => data.json()).then((data1) => {
    for (let i = 0; i < data1.length; i++) {
        const a = document.createElement("div")
        a.innerHTML = `<div class="col  row-cols-md-4 g-4">
        <div class="row">
          <div class="card">
              <h2 class="card-title"><b>${data1[i].name}</b></h2>
              <p class="card-text">Capital: ${data1[i].email}</p>
              <p class="card-text">region :${data1[i].address.street}</p>
              <p class="card-text">sub-region :${data1[i].address.city}</p>
            </div>
        </div>`;
        document.body.append(a);
        console.log(data1[i]);
    }
}) 