const {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    updateBookByIdHandler,
    deleteBookByIdHandler,
} = require('./Handler');

const routes = [
    // method untuk menyimpan buku
    {
      method: 'POST',
      path: '/books',
      handler: addBookHandler,
    },
    // method untuk menampilkan seluruh buku
    {
      method: 'GET',
      path: '/books',
      handler: getAllBooksHandler,
    },
    // method untuk menampilkan buku dengan id yang dicari
    {
      method: 'GET',
      path: '/books/{id}',
      handler: getBookByIdHandler,
    },
    // method untuk Mengubah buku dengan id yang dicari
    {
      method: 'PUT',
      path: '/books/{id}',
      handler: updateBookByIdHandler,
    },
    // method untuk menghapus buku dengan id yang dicari
    {
      method: 'DELETE',
      path: '/books/{id}',
      handler: deleteBookByIdHandler,
    },
  ];
  
  module.exports = routes;