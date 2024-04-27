fetch('config.json')
  .then(response => response.json())
  .then(data => {
    let tableHtml = '<h1 class="mt-3" align="center">' + data.judul_halaman + '</h1>';
    data.kategori.forEach(kategori => {
      tableHtml += `<h2 class="mt-4">${kategori.nama}</h2>`;
      tableHtml += '<table class="table table-striped table-bordered">';
      tableHtml += '<thead class="table-dark"><tr><th>Judul</th><th>URL</th></tr></thead>';
      tableHtml += '<tbody>';
      kategori.daftar_url.forEach(item => {
        tableHtml += '<tr>';
        tableHtml += `<td>${item.judul}</td>`;
        tableHtml += '<td>';
        item.urls.forEach(url => {
          tableHtml += `<a href="${url}">${url}</a><br>`;
        });
        tableHtml += '</td>';
        tableHtml += '</tr>';
      });
      tableHtml += '</tbody>';
      tableHtml += '</table>';
    });
    document.title = data.judul_halaman;
    document.getElementById('urlTable').innerHTML = tableHtml;
  })
  .catch(error => console.error('Error:', error));
