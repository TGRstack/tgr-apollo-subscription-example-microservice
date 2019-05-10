// import config from 'config'
// import * as knex from 'knex'
// const {PG} = config

// class PostgresDBclient {
//   app: any    // tslint:disable-line no-any
//   config: any // tslint:disable-line no-any

//   constructor() {
//     this.config = {
//       client: 'pg',
//       connection: {
//         database :  PG.DB,
//         host :      PG.HOST,
//         password :  PG.PASS,
//         port:       PG.PORT,
//         user :      PG.USER,
//       },
//       searchPath: ['public'], // 'knex',
//     }

//     this.app = knex(this.config)
//   }

//   // async test() {
//   //   // SELECT * FROM public.k_principal
//   //   const query = await this.app.select().from('k_principal')
//   //   console.log(query)
//   // }
// }

// export const PGcontainer = new PostgresDBclient()

// const PGclient = PGcontainer.app
// export default PGclient
