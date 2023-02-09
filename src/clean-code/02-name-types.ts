(() => {
  // arreglo de temperaturas celsius
  const arrayOfNums = [33.6, 12.34];
  const temperatureList = [33.6, 12.34]; // Alternativa de Axel
  const temperatureCelsius = [33.6, 12.34]; // Alternativa de Fernando

  // Dirección ip del servidor
  const ip = '123.123.123.123';
  const serverIp = '123.123.123.123'; // Alternativa de Axel y Fernando

  // Listado de usuarios
  const people = [
    { id: 1, email: 'fernando@google.com' },
    { id: 2, email: 'juan@google.com' },
    { id: 3, email: 'melissa@google.com' },
  ];
  const userList = [
    // Alternativa de Axel
    { id: 1, email: 'fernando@google.com' },
    { id: 2, email: 'juan@google.com' },
    { id: 3, email: 'melissa@google.com' },
  ];
  const users = [
    // Alternativa de Fernando
    { id: 1, email: 'fernando@google.com' },
    { id: 2, email: 'juan@google.com' },
    { id: 3, email: 'melissa@google.com' },
  ];

  // Listado de emails de los usuarios
  const emails = people.map((user) => user.email);
  const userEmailList = people.map((user) => user.email); // Alternativa de Axel
  const userEmails = people.map((user) => user.email); // Alternativa de Fernando

  // Variables booleanas de un video juego
  const jump = false;
  const isJump = false; // Alternativa de Axel
  const canJump = false; // Alternativa de Fernando
  const run = true;
  const isRuning = true; // Alternativa de Axel
  const canRun = true; // Alternativa de Fernando
  const noTieneItems = true;
  const haveItems = true; // Alternativa de Axel
  const hasItems = true; // Alternativa de Fernando
  const loading = false;
  const isloading = false; // Alternativa de Axel y Fernando

  // Otros ejercicios
  // tiempo inicial
  const start = new Date().getTime();
  const startTime = new Date().getTime(); // Alternativa de Axel y Fernando
  //....
  // 3 doritos después
  //...
  // Tiempo al final
  const end = new Date().getTime() - start;
  const endTime = new Date().getTime() - start; // Alternativa de Axel y Fernando

  // Funciones
  // Obtiene los libros
  function book() {
    throw new Error('Function not implemented.');
  }
  function getBooks() {
    // Alternativa de Axel y Fernando
    throw new Error('Function not implemented.');
  }

  // obtiene libros desde un URL
  function BooksUrl(u: string) {
    throw new Error('Function not implemented.');
  }
  function getUrlOfBook(u: string) {
    // Alternativa de Axel
    throw new Error('Function not implemented.');
  }
  function getBooksByUrl(url: string) {
    // Alternativa de Fernando
    throw new Error('Function not implemented.');
  }

  // obtiene el área de un cuadrado basado en sus lados
  function areaCuadrado(s: number) {
    throw new Error('Function not implemented.');
  }
  function getSquareArea(side: number) {
    // Alternativa de Axel y Fernando
    throw new Error('Function not implemented.');
  }

  // imprime el trabajo
  function printJobIfJobIsActive() {
    throw new Error('Function not implemented.');
  }
  function printJob() {
    // Alternativa de Axel y Fernando
    throw new Error('Function not implemented.');
  }
})();
