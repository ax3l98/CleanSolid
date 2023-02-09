(() => {
  //! No aplica el principio de responsabilidad única

  type Gender = 'M' | 'F';

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }
  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.birthdate = birthdate;
      this.gender = gender;
      this.name = name;
    }
  }

  interface UserProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }
  class User extends Person {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ birthdate, email, gender, name, role }: UserProps) {
      super({ name, gender, birthdate });
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingdirectory: string;
  }
  class UserSettings extends User {
    public workingdirectory: string;
    public lastOpenFolder: string;

    constructor({
      birthdate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingdirectory,
    }: UserSettingsProps) {
      super({ birthdate, email, gender, name, role });
      this.lastOpenFolder = lastOpenFolder;
      this.workingdirectory = workingdirectory;
    }
  }

  const userSettings = new UserSettings({
    birthdate: new Date('1998-03-24'),
    email: 'axel.cor98@gmail.com',
    gender: 'M',
    lastOpenFolder: '/home',
    name: 'Axel',
    role: 'Admin',
    workingdirectory: '/usr/home',
  });

  userSettings.checkCredentials();
  console.log({ userSettings });
})();
