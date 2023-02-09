(() => {
  //! No aplicando el principio de responsabilidad única

  type Gender = 'M' | 'F';

  class Person {
    //! public name: string;
    //! public gender: Gender;
    //! public birthdate: Date;

    //! constructor(name: string, gender: Gender, birthdate: Date) {
    //! this.name = name;
    //! this.gender = gender;
    //! this.birthdate = birthdate;
    //! }

    //* Better
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingdirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'axel.cor98@gmail.com',
    'Admin',
    'Axel',
    'M',
    new Date('1998-03-24')
  );

  console.log({ userSettings });
})();
