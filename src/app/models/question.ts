export class Question<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  controlType: string;
  step: number;
  vehicle: string;
  type: string;
  options: { key: string; value: string }[];
  placeholder: string;
  errorHeader: string;
  errorMessage: string;

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      controlType?: string;
      step?: number;
      vehicle?: string;
      type?: string;
      options?: { key: string; value: string }[];
      placeholder?: string;
      errorHeader?: string;
      errorMessage?: string;
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.controlType = options.controlType || '';
    this.step = options.step || 0;
    this.vehicle = options.vehicle || "";
    this.type = options.type || '';
    this.options = options.options || [];
    this.placeholder = options.placeholder || '';
    this.errorHeader = options.errorHeader || '';
    this.errorMessage = options.errorMessage || '';
  }
}
