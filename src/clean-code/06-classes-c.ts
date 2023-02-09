(() => {
  //* Aplicando el principio de responsabilidad única
  //? Priorizar la composición frente a la herencia!

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
    email: string;
    role: string;
  }
  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingdirectory: string;
  }
  class Settings {
    public lastOpenFolder: string;
    public workingdirectory: string;

    constructor({ lastOpenFolder, workingdirectory }: SettingsProps) {
      this.lastOpenFolder = lastOpenFolder;
      this.workingdirectory = workingdirectory;
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
  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      gender,
      birthdate,
      email,
      role,
      lastOpenFolder,
      workingdirectory,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingdirectory });
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

  console.log({ userSettings });
})();
