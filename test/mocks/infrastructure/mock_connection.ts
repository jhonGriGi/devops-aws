/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { type Connection } from 'mysql2'

export class MockConnection implements Connection {
  // Creamos una variable para almacenar los resultados simulados de las consultas
  private mockQueryResult: any[]

  constructor () {
    // Inicializamos el mockQueryResult como un array vacío
    this.mockQueryResult = []
  }

  // Método para establecer los resultados simulados de las consultas
  setMockQueryResult (result: any[]): void {
    this.mockQueryResult = result
  }

  // @ts-ignore
  async query (queryString: string): Promise<any> {
    // Simulamos el comportamiento de la consulta devolviendo el resultado configurado
    return await Promise.resolve(this.mockQueryResult)
  }

  close (): void {
    // Implementa aquí la lógica para cerrar la conexión simulada si es necesario
    // En este caso, como es un "mock", no es necesario hacer nada
  }
}
