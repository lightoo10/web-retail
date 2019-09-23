import { Country } from '../model/country.model';
import { Employee } from '../model/employee.model';

export class Constants {
  public static LST_GENDER = ["Masculino", "Femenino"];
  public static LST_COUNTRY = [new Country('PE', 'PERU'), new Country('ES', 'ESPAÑA')];
  public static LST_EMPLOYEE = [new Employee('1', 'Martin', 'Analista', '7643182', '9872623451', 'prueba@gmail.com'), 
  new Employee('2', 'Juan', 'DBA', '8691282', '9191123423', 'prueba2@gmail.com'),
  new Employee('3', 'Martin', 'DBA', '8691282', '9191123423', 'prueba2@gmail.com'),
  new Employee('4', 'Mariana', 'QA', '8691282', '9191123423', 'prueba2@gmail.com'),
  new Employee('5', 'Roberto', 'DBA', '8691282', '9191123423', 'prueba2@gmail.com'),
  new Employee('6', 'Giancarlo', 'QA', '8691282', '9191123423', 'prueba2@gmail.com'),
  new Employee('7', 'Daniel', 'Programador', '8691282', '9191123423', 'prueba2@gmail.com')];
}
