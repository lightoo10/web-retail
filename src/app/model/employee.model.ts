export class Employee {
  id: string;
  name: string;
  role: string;
  phone: string;
  mobile: string;
  email: string;

  constructor(id: string, name: string, role : string, phone : string, mobile : string, email : string) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.phone = phone;
    this.mobile = mobile;
    this.email = email;
  }
}
