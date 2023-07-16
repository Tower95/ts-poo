export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;

  isConnected(name: string): boolean;

}

// const driver: Driver = {
//   database: 'mysql',
//   password: '123456',
//   port: 3306,

//   connect(): void{
//     console.log('Connecting to database');
//   }
// }

class PostgresDriver implements Driver {

  constructor(
    public database: string,
    public password: string,
    public port: number,
  ) { }

  connect(): void {
    console.log('Connecting to database Postgres');
  }

  disconnect(): void {
    console.log('Disconnecting to database Postgres');
  }

  isConnected(name: string): boolean {
    return true;
  }

}

class MysqlDriver implements Driver {

  constructor(
    public database: string,
    public password: string,
    public port: number,
  ) { }

  connect(): void {
    console.log('Connecting to database Mysql');
  }

  disconnect(): void {
    console.log('Disconnecting to database Mysql');
  }

  isConnected(name: string): boolean {
    return true;
  }

}


