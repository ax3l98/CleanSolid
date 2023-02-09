(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  //* Respuesta de la tarea
  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  //? Idea para la nueva clase InputElement
  interface InputElementProps {
    id: string;
    value: string;
    placeholder: string;
  }
  class InputElement {
    public htmlElement: HtmlElement;
    public inputAttributes: InputAttributes;
    public inputEvents: InputEvents;

    constructor({ id, value, placeholder }: InputElementProps) {
      this.htmlElement = new HtmlElement(id, 'input');
      this.inputAttributes = new InputAttributes(value, placeholder);
      this.inputEvents = new InputEvents();
    }
  }

  const nameField = new InputElement({
    id: 'Fernando',
    placeholder: 'Enter first name',
    value: 'txtName',
  });

  console.log({ nameField });

  //! Forma inicial de la tarea
  // type HtmlType = 'input'|'select'|'textarea'|'radio';

  // class HtmlElement {
  //     constructor(
  //         public id: string,
  //         public type: HtmlType,
  //     ) {}
  // }

  // class InputAttributes extends HtmlElement {
  //     constructor(
  //         public value: string,
  //         public placeholder: string,
  //         id: string,
  //     ) {
  //         super(id, 'input');
  //     }
  // }

  // class InputEvents extends InputAttributes {
  //     constructor( value: string, placeholder: string, id: string ) {
  //         super( value, placeholder, id );
  //     }

  //     setFocus() {};
  //     getValue() {};
  //     isActive() {};
  //     removeValue() {};
  // }

  // //? Idea para la nueva clase InputElement

  // const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');

  // console.log({ nameField });
})();
