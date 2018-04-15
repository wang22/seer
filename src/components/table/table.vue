<template>
  <div>
      <table class="table stable">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
        </table>
  </div>
</template>

<style lang="scss" scoped>
.stable {
  box-shadow: 0 10px 60px 0 rgba(29,29,31,.09);
  border: 1px solid #ecedf2;
  border-radius: 4px;
  thead {
    background-color: #f4f6f9;
    tr {
      border-top: 1px solid #ecedf2;
      th {
        border: 0;
        color: #768093;
        font-weight: 500;
      }
    }
  }
  tbody {
    tr {
      border-top: 1px solid #ecedf2;
      border-bottom: 1px solid #ecedf2;
      background: #fff;
      td {
        color: #768093;
        font-weight: 500;
      }
    }
  }
}
</style>
