const items = db.collection("items");

async function loadItems() {
  const user = auth.currentUser;

  const query = await items.where("id_usuario", "==", user.uid).get();

  const table = document.getElementById("listItems");

  table.innerHTML = `
    <tr>
      <th>Título</th>
      <th>Contenido</th>
      <th></th>
    </tr>
  `;

  query.forEach(doc => {
    const data = doc.data();

    table.innerHTML += `
      <tr>
        <td>${data.title}</td>
        <td>${data.content}</td>
        <td>
          <button onclick="deleteItem('${doc.id}')">Eliminar</button>
        </td>
      </tr>
    `;
  });
}