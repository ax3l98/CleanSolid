(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const filesToEvaluate = [
    { id: 1, flagged: false },
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true },
  ];

  // Archivos marcados para borrar - files to delete
  const filesToDelete = filesToEvaluate.map((file) => file.flagged);

  // Malos nombres
  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejores nombres
  class User {}
  interface User {}

  // Todo: Tarea

  // día de hoy - today
  const ddmmyyyy = new Date();
  const dateToday = new Date(); // Mi opción
  const today = new Date(); // Fernando

  // días transcurridos - elapsed time in days
  const d: number = 23;
  const elapsedDays: number = 23; // Mi opción
  const elapsedTimeInDays: number = 23; // Fernando

  // número de archivos en un directorio - number of files in directory
  const dir = 33;
  const filesInDirectory = 33; // Mi opción
  const numberOfFilesInDirectory = 33; // Fernando

  // primer nombre - first name
  const nombre = 'Fernando';
  const firstName = 'Fernando';

  // primer apellido - last name
  const apellido = 'Herrera';
  const lastName = 'Herrera';

  // días desde la última modificación - days since modification
  const dsm = 12;
  const daysSinceModification = 12; // Mi opción
  const daysSinceLastModification = 12; // Fernando

  // cantidad máxima de clases por estudiante - max classes per student
  const max = 6;
  const maxClassesPerStudent = 6;
})();
