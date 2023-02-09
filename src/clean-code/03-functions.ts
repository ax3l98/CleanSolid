(() => {
  //* función para obtener información de una película por Id
  function getAllMovies(movieId: string) {
    console.log({ movieId });
  }
  function getMovieById(id: string) {
    //? Alternativa de Axel y Fernando
    console.log({ id });
  }

  //* función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getAllMovieActors(id: string) {
    console.log({ id });
  }
  function getMovieCastById(id: string) {
    //? Alternativa de Axel y Fernando
    console.log({ id });
  }

  //* funcion para obtener el bio del actor por el id
  function getUsuario(actorId: string) {
    console.log({ actorId });
  }
  function getActorInfoById(id: string) {
    //? Alternativa de Axel
    console.log({ id });
  }
  function getActorBioById(id: string) {
    //? Alternativa de Fernando
    console.log({ id });
  }

  //* Crear una película
  function movie(
    title: string,
    description: string,
    rating: number,
    cast: string[]
  ) {
    console.log({ title, description, rating, cast });
  }
  interface Movie {
    //? Alternativa de Axel y Fernando
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }
  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  //* Crea un nuevo actor
  function createActorIfActorNotExists(
    fullName: string,
    birthdate: Date
  ): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === 'fernando') return false;

    console.log('Crear actor');
    return true;
  }
  function createActor(fullName: string, birthdate: Date): boolean {
    //? Alternativa de Axel y Fernando
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === 'fernando') return false;

    console.log('Crear actor');
    return true;
  }

  //* Continuación
  const getPayAmount1 = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }) => {
    let result;
    if (isDead) {
      result = 1500;
    } else {
      if (isSeparated) {
        result = 2500;
      } else {
        if (isRetired) {
          result = 3000;
        } else {
          result = 4000;
        }
      }
    }

    return result;
  };

  //? Mejor alternativa
  const getPayAmount2 = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) {
      return 1500;
    }

    if (isSeparated) {
      return 2500;
    }

    return isRetired ? 3000 : 4000;
  };
})();
