
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model caja
 * 
 */
export type caja = $Result.DefaultSelection<Prisma.$cajaPayload>
/**
 * Model materiales
 * 
 */
export type materiales = $Result.DefaultSelection<Prisma.$materialesPayload>
/**
 * Model medicos
 * 
 */
export type medicos = $Result.DefaultSelection<Prisma.$medicosPayload>
/**
 * Model muestra_material
 * 
 */
export type muestra_material = $Result.DefaultSelection<Prisma.$muestra_materialPayload>
/**
 * Model muestras
 * 
 */
export type muestras = $Result.DefaultSelection<Prisma.$muestrasPayload>
/**
 * Model informes
 * 
 */
export type informes = $Result.DefaultSelection<Prisma.$informesPayload>
/**
 * Model pacientes
 * 
 */
export type pacientes = $Result.DefaultSelection<Prisma.$pacientesPayload>
/**
 * Model secretarios
 * 
 */
export type secretarios = $Result.DefaultSelection<Prisma.$secretariosPayload>
/**
 * Model usuarios
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cajas
 * const cajas = await prisma.caja.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cajas
   * const cajas = await prisma.caja.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.caja`: Exposes CRUD operations for the **caja** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cajas
    * const cajas = await prisma.caja.findMany()
    * ```
    */
  get caja(): Prisma.cajaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materiales`: Exposes CRUD operations for the **materiales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materiales
    * const materiales = await prisma.materiales.findMany()
    * ```
    */
  get materiales(): Prisma.materialesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicos`: Exposes CRUD operations for the **medicos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicos
    * const medicos = await prisma.medicos.findMany()
    * ```
    */
  get medicos(): Prisma.medicosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.muestra_material`: Exposes CRUD operations for the **muestra_material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Muestra_materials
    * const muestra_materials = await prisma.muestra_material.findMany()
    * ```
    */
  get muestra_material(): Prisma.muestra_materialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.muestras`: Exposes CRUD operations for the **muestras** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Muestras
    * const muestras = await prisma.muestras.findMany()
    * ```
    */
  get muestras(): Prisma.muestrasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.informes`: Exposes CRUD operations for the **informes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Informes
    * const informes = await prisma.informes.findMany()
    * ```
    */
  get informes(): Prisma.informesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pacientes`: Exposes CRUD operations for the **pacientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.pacientes.findMany()
    * ```
    */
  get pacientes(): Prisma.pacientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.secretarios`: Exposes CRUD operations for the **secretarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Secretarios
    * const secretarios = await prisma.secretarios.findMany()
    * ```
    */
  get secretarios(): Prisma.secretariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    caja: 'caja',
    materiales: 'materiales',
    medicos: 'medicos',
    muestra_material: 'muestra_material',
    muestras: 'muestras',
    informes: 'informes',
    pacientes: 'pacientes',
    secretarios: 'secretarios',
    usuarios: 'usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "caja" | "materiales" | "medicos" | "muestra_material" | "muestras" | "informes" | "pacientes" | "secretarios" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      caja: {
        payload: Prisma.$cajaPayload<ExtArgs>
        fields: Prisma.cajaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cajaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cajaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cajaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cajaPayload>
          }
          findFirst: {
            args: Prisma.cajaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cajaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cajaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cajaPayload>
          }
          findMany: {
            args: Prisma.cajaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cajaPayload>[]
          }
          create: {
            args: Prisma.cajaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cajaPayload>
          }
          createMany: {
            args: Prisma.cajaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cajaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cajaPayload>[]
          }
          delete: {
            args: Prisma.cajaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cajaPayload>
          }
          update: {
            args: Prisma.cajaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cajaPayload>
          }
          deleteMany: {
            args: Prisma.cajaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cajaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cajaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cajaPayload>[]
          }
          upsert: {
            args: Prisma.cajaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cajaPayload>
          }
          aggregate: {
            args: Prisma.CajaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaja>
          }
          groupBy: {
            args: Prisma.cajaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CajaGroupByOutputType>[]
          }
          count: {
            args: Prisma.cajaCountArgs<ExtArgs>
            result: $Utils.Optional<CajaCountAggregateOutputType> | number
          }
        }
      }
      materiales: {
        payload: Prisma.$materialesPayload<ExtArgs>
        fields: Prisma.materialesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.materialesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.materialesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialesPayload>
          }
          findFirst: {
            args: Prisma.materialesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.materialesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialesPayload>
          }
          findMany: {
            args: Prisma.materialesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialesPayload>[]
          }
          create: {
            args: Prisma.materialesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialesPayload>
          }
          createMany: {
            args: Prisma.materialesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.materialesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialesPayload>[]
          }
          delete: {
            args: Prisma.materialesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialesPayload>
          }
          update: {
            args: Prisma.materialesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialesPayload>
          }
          deleteMany: {
            args: Prisma.materialesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.materialesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.materialesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialesPayload>[]
          }
          upsert: {
            args: Prisma.materialesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialesPayload>
          }
          aggregate: {
            args: Prisma.MaterialesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMateriales>
          }
          groupBy: {
            args: Prisma.materialesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialesGroupByOutputType>[]
          }
          count: {
            args: Prisma.materialesCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialesCountAggregateOutputType> | number
          }
        }
      }
      medicos: {
        payload: Prisma.$medicosPayload<ExtArgs>
        fields: Prisma.medicosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.medicosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.medicosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicosPayload>
          }
          findFirst: {
            args: Prisma.medicosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.medicosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicosPayload>
          }
          findMany: {
            args: Prisma.medicosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicosPayload>[]
          }
          create: {
            args: Prisma.medicosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicosPayload>
          }
          createMany: {
            args: Prisma.medicosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.medicosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicosPayload>[]
          }
          delete: {
            args: Prisma.medicosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicosPayload>
          }
          update: {
            args: Prisma.medicosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicosPayload>
          }
          deleteMany: {
            args: Prisma.medicosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.medicosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.medicosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicosPayload>[]
          }
          upsert: {
            args: Prisma.medicosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicosPayload>
          }
          aggregate: {
            args: Prisma.MedicosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicos>
          }
          groupBy: {
            args: Prisma.medicosGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicosGroupByOutputType>[]
          }
          count: {
            args: Prisma.medicosCountArgs<ExtArgs>
            result: $Utils.Optional<MedicosCountAggregateOutputType> | number
          }
        }
      }
      muestra_material: {
        payload: Prisma.$muestra_materialPayload<ExtArgs>
        fields: Prisma.muestra_materialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.muestra_materialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestra_materialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.muestra_materialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestra_materialPayload>
          }
          findFirst: {
            args: Prisma.muestra_materialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestra_materialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.muestra_materialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestra_materialPayload>
          }
          findMany: {
            args: Prisma.muestra_materialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestra_materialPayload>[]
          }
          create: {
            args: Prisma.muestra_materialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestra_materialPayload>
          }
          createMany: {
            args: Prisma.muestra_materialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.muestra_materialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestra_materialPayload>[]
          }
          delete: {
            args: Prisma.muestra_materialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestra_materialPayload>
          }
          update: {
            args: Prisma.muestra_materialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestra_materialPayload>
          }
          deleteMany: {
            args: Prisma.muestra_materialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.muestra_materialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.muestra_materialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestra_materialPayload>[]
          }
          upsert: {
            args: Prisma.muestra_materialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestra_materialPayload>
          }
          aggregate: {
            args: Prisma.Muestra_materialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMuestra_material>
          }
          groupBy: {
            args: Prisma.muestra_materialGroupByArgs<ExtArgs>
            result: $Utils.Optional<Muestra_materialGroupByOutputType>[]
          }
          count: {
            args: Prisma.muestra_materialCountArgs<ExtArgs>
            result: $Utils.Optional<Muestra_materialCountAggregateOutputType> | number
          }
        }
      }
      muestras: {
        payload: Prisma.$muestrasPayload<ExtArgs>
        fields: Prisma.muestrasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.muestrasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestrasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.muestrasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestrasPayload>
          }
          findFirst: {
            args: Prisma.muestrasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestrasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.muestrasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestrasPayload>
          }
          findMany: {
            args: Prisma.muestrasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestrasPayload>[]
          }
          create: {
            args: Prisma.muestrasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestrasPayload>
          }
          createMany: {
            args: Prisma.muestrasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.muestrasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestrasPayload>[]
          }
          delete: {
            args: Prisma.muestrasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestrasPayload>
          }
          update: {
            args: Prisma.muestrasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestrasPayload>
          }
          deleteMany: {
            args: Prisma.muestrasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.muestrasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.muestrasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestrasPayload>[]
          }
          upsert: {
            args: Prisma.muestrasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muestrasPayload>
          }
          aggregate: {
            args: Prisma.MuestrasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMuestras>
          }
          groupBy: {
            args: Prisma.muestrasGroupByArgs<ExtArgs>
            result: $Utils.Optional<MuestrasGroupByOutputType>[]
          }
          count: {
            args: Prisma.muestrasCountArgs<ExtArgs>
            result: $Utils.Optional<MuestrasCountAggregateOutputType> | number
          }
        }
      }
      informes: {
        payload: Prisma.$informesPayload<ExtArgs>
        fields: Prisma.informesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.informesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.informesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informesPayload>
          }
          findFirst: {
            args: Prisma.informesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.informesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informesPayload>
          }
          findMany: {
            args: Prisma.informesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informesPayload>[]
          }
          create: {
            args: Prisma.informesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informesPayload>
          }
          createMany: {
            args: Prisma.informesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.informesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informesPayload>[]
          }
          delete: {
            args: Prisma.informesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informesPayload>
          }
          update: {
            args: Prisma.informesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informesPayload>
          }
          deleteMany: {
            args: Prisma.informesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.informesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.informesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informesPayload>[]
          }
          upsert: {
            args: Prisma.informesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$informesPayload>
          }
          aggregate: {
            args: Prisma.InformesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInformes>
          }
          groupBy: {
            args: Prisma.informesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InformesGroupByOutputType>[]
          }
          count: {
            args: Prisma.informesCountArgs<ExtArgs>
            result: $Utils.Optional<InformesCountAggregateOutputType> | number
          }
        }
      }
      pacientes: {
        payload: Prisma.$pacientesPayload<ExtArgs>
        fields: Prisma.pacientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pacientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pacientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          findFirst: {
            args: Prisma.pacientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pacientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          findMany: {
            args: Prisma.pacientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>[]
          }
          create: {
            args: Prisma.pacientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          createMany: {
            args: Prisma.pacientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pacientesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>[]
          }
          delete: {
            args: Prisma.pacientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          update: {
            args: Prisma.pacientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          deleteMany: {
            args: Prisma.pacientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pacientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pacientesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>[]
          }
          upsert: {
            args: Prisma.pacientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          aggregate: {
            args: Prisma.PacientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePacientes>
          }
          groupBy: {
            args: Prisma.pacientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.pacientesCountArgs<ExtArgs>
            result: $Utils.Optional<PacientesCountAggregateOutputType> | number
          }
        }
      }
      secretarios: {
        payload: Prisma.$secretariosPayload<ExtArgs>
        fields: Prisma.secretariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.secretariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.secretariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretariosPayload>
          }
          findFirst: {
            args: Prisma.secretariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.secretariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretariosPayload>
          }
          findMany: {
            args: Prisma.secretariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretariosPayload>[]
          }
          create: {
            args: Prisma.secretariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretariosPayload>
          }
          createMany: {
            args: Prisma.secretariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.secretariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretariosPayload>[]
          }
          delete: {
            args: Prisma.secretariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretariosPayload>
          }
          update: {
            args: Prisma.secretariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretariosPayload>
          }
          deleteMany: {
            args: Prisma.secretariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.secretariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.secretariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretariosPayload>[]
          }
          upsert: {
            args: Prisma.secretariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$secretariosPayload>
          }
          aggregate: {
            args: Prisma.SecretariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecretarios>
          }
          groupBy: {
            args: Prisma.secretariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecretariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.secretariosCountArgs<ExtArgs>
            result: $Utils.Optional<SecretariosCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    caja?: cajaOmit
    materiales?: materialesOmit
    medicos?: medicosOmit
    muestra_material?: muestra_materialOmit
    muestras?: muestrasOmit
    informes?: informesOmit
    pacientes?: pacientesOmit
    secretarios?: secretariosOmit
    usuarios?: usuariosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MaterialesCountOutputType
   */

  export type MaterialesCountOutputType = {
    muestra_material: number
  }

  export type MaterialesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muestra_material?: boolean | MaterialesCountOutputTypeCountMuestra_materialArgs
  }

  // Custom InputTypes
  /**
   * MaterialesCountOutputType without action
   */
  export type MaterialesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialesCountOutputType
     */
    select?: MaterialesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaterialesCountOutputType without action
   */
  export type MaterialesCountOutputTypeCountMuestra_materialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: muestra_materialWhereInput
  }


  /**
   * Count Type MedicosCountOutputType
   */

  export type MedicosCountOutputType = {
    muestras: number
  }

  export type MedicosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muestras?: boolean | MedicosCountOutputTypeCountMuestrasArgs
  }

  // Custom InputTypes
  /**
   * MedicosCountOutputType without action
   */
  export type MedicosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicosCountOutputType
     */
    select?: MedicosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicosCountOutputType without action
   */
  export type MedicosCountOutputTypeCountMuestrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: muestrasWhereInput
  }


  /**
   * Count Type MuestrasCountOutputType
   */

  export type MuestrasCountOutputType = {
    muestra_material: number
    caja: number
  }

  export type MuestrasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muestra_material?: boolean | MuestrasCountOutputTypeCountMuestra_materialArgs
    caja?: boolean | MuestrasCountOutputTypeCountCajaArgs
  }

  // Custom InputTypes
  /**
   * MuestrasCountOutputType without action
   */
  export type MuestrasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuestrasCountOutputType
     */
    select?: MuestrasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MuestrasCountOutputType without action
   */
  export type MuestrasCountOutputTypeCountMuestra_materialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: muestra_materialWhereInput
  }

  /**
   * MuestrasCountOutputType without action
   */
  export type MuestrasCountOutputTypeCountCajaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cajaWhereInput
  }


  /**
   * Count Type PacientesCountOutputType
   */

  export type PacientesCountOutputType = {
    muestras: number
  }

  export type PacientesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muestras?: boolean | PacientesCountOutputTypeCountMuestrasArgs
  }

  // Custom InputTypes
  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacientesCountOutputType
     */
    select?: PacientesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeCountMuestrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: muestrasWhereInput
  }


  /**
   * Count Type SecretariosCountOutputType
   */

  export type SecretariosCountOutputType = {
    muestras: number
  }

  export type SecretariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muestras?: boolean | SecretariosCountOutputTypeCountMuestrasArgs
  }

  // Custom InputTypes
  /**
   * SecretariosCountOutputType without action
   */
  export type SecretariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretariosCountOutputType
     */
    select?: SecretariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SecretariosCountOutputType without action
   */
  export type SecretariosCountOutputTypeCountMuestrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: muestrasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model caja
   */

  export type AggregateCaja = {
    _count: CajaCountAggregateOutputType | null
    _avg: CajaAvgAggregateOutputType | null
    _sum: CajaSumAggregateOutputType | null
    _min: CajaMinAggregateOutputType | null
    _max: CajaMaxAggregateOutputType | null
  }

  export type CajaAvgAggregateOutputType = {
    id: number | null
    monto: Decimal | null
    id_muestra: number | null
  }

  export type CajaSumAggregateOutputType = {
    id: bigint | null
    monto: Decimal | null
    id_muestra: bigint | null
  }

  export type CajaMinAggregateOutputType = {
    id: bigint | null
    fecha: Date | null
    tipo_transaccion: string | null
    categoria: string | null
    monto: Decimal | null
    fecha_transaccion: Date | null
    descripcion: string | null
    id_muestra: bigint | null
  }

  export type CajaMaxAggregateOutputType = {
    id: bigint | null
    fecha: Date | null
    tipo_transaccion: string | null
    categoria: string | null
    monto: Decimal | null
    fecha_transaccion: Date | null
    descripcion: string | null
    id_muestra: bigint | null
  }

  export type CajaCountAggregateOutputType = {
    id: number
    fecha: number
    tipo_transaccion: number
    categoria: number
    monto: number
    fecha_transaccion: number
    descripcion: number
    id_muestra: number
    _all: number
  }


  export type CajaAvgAggregateInputType = {
    id?: true
    monto?: true
    id_muestra?: true
  }

  export type CajaSumAggregateInputType = {
    id?: true
    monto?: true
    id_muestra?: true
  }

  export type CajaMinAggregateInputType = {
    id?: true
    fecha?: true
    tipo_transaccion?: true
    categoria?: true
    monto?: true
    fecha_transaccion?: true
    descripcion?: true
    id_muestra?: true
  }

  export type CajaMaxAggregateInputType = {
    id?: true
    fecha?: true
    tipo_transaccion?: true
    categoria?: true
    monto?: true
    fecha_transaccion?: true
    descripcion?: true
    id_muestra?: true
  }

  export type CajaCountAggregateInputType = {
    id?: true
    fecha?: true
    tipo_transaccion?: true
    categoria?: true
    monto?: true
    fecha_transaccion?: true
    descripcion?: true
    id_muestra?: true
    _all?: true
  }

  export type CajaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which caja to aggregate.
     */
    where?: cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cajas to fetch.
     */
    orderBy?: cajaOrderByWithRelationInput | cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cajas
    **/
    _count?: true | CajaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CajaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CajaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CajaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CajaMaxAggregateInputType
  }

  export type GetCajaAggregateType<T extends CajaAggregateArgs> = {
        [P in keyof T & keyof AggregateCaja]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaja[P]>
      : GetScalarType<T[P], AggregateCaja[P]>
  }




  export type cajaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cajaWhereInput
    orderBy?: cajaOrderByWithAggregationInput | cajaOrderByWithAggregationInput[]
    by: CajaScalarFieldEnum[] | CajaScalarFieldEnum
    having?: cajaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CajaCountAggregateInputType | true
    _avg?: CajaAvgAggregateInputType
    _sum?: CajaSumAggregateInputType
    _min?: CajaMinAggregateInputType
    _max?: CajaMaxAggregateInputType
  }

  export type CajaGroupByOutputType = {
    id: bigint
    fecha: Date
    tipo_transaccion: string
    categoria: string
    monto: Decimal
    fecha_transaccion: Date
    descripcion: string | null
    id_muestra: bigint | null
    _count: CajaCountAggregateOutputType | null
    _avg: CajaAvgAggregateOutputType | null
    _sum: CajaSumAggregateOutputType | null
    _min: CajaMinAggregateOutputType | null
    _max: CajaMaxAggregateOutputType | null
  }

  type GetCajaGroupByPayload<T extends cajaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CajaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CajaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CajaGroupByOutputType[P]>
            : GetScalarType<T[P], CajaGroupByOutputType[P]>
        }
      >
    >


  export type cajaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    tipo_transaccion?: boolean
    categoria?: boolean
    monto?: boolean
    fecha_transaccion?: boolean
    descripcion?: boolean
    id_muestra?: boolean
    muestra?: boolean | caja$muestraArgs<ExtArgs>
  }, ExtArgs["result"]["caja"]>

  export type cajaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    tipo_transaccion?: boolean
    categoria?: boolean
    monto?: boolean
    fecha_transaccion?: boolean
    descripcion?: boolean
    id_muestra?: boolean
    muestra?: boolean | caja$muestraArgs<ExtArgs>
  }, ExtArgs["result"]["caja"]>

  export type cajaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    tipo_transaccion?: boolean
    categoria?: boolean
    monto?: boolean
    fecha_transaccion?: boolean
    descripcion?: boolean
    id_muestra?: boolean
    muestra?: boolean | caja$muestraArgs<ExtArgs>
  }, ExtArgs["result"]["caja"]>

  export type cajaSelectScalar = {
    id?: boolean
    fecha?: boolean
    tipo_transaccion?: boolean
    categoria?: boolean
    monto?: boolean
    fecha_transaccion?: boolean
    descripcion?: boolean
    id_muestra?: boolean
  }

  export type cajaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "tipo_transaccion" | "categoria" | "monto" | "fecha_transaccion" | "descripcion" | "id_muestra", ExtArgs["result"]["caja"]>
  export type cajaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muestra?: boolean | caja$muestraArgs<ExtArgs>
  }
  export type cajaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muestra?: boolean | caja$muestraArgs<ExtArgs>
  }
  export type cajaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muestra?: boolean | caja$muestraArgs<ExtArgs>
  }

  export type $cajaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "caja"
    objects: {
      muestra: Prisma.$muestrasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      fecha: Date
      tipo_transaccion: string
      categoria: string
      monto: Prisma.Decimal
      fecha_transaccion: Date
      descripcion: string | null
      id_muestra: bigint | null
    }, ExtArgs["result"]["caja"]>
    composites: {}
  }

  type cajaGetPayload<S extends boolean | null | undefined | cajaDefaultArgs> = $Result.GetResult<Prisma.$cajaPayload, S>

  type cajaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cajaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CajaCountAggregateInputType | true
    }

  export interface cajaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['caja'], meta: { name: 'caja' } }
    /**
     * Find zero or one Caja that matches the filter.
     * @param {cajaFindUniqueArgs} args - Arguments to find a Caja
     * @example
     * // Get one Caja
     * const caja = await prisma.caja.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cajaFindUniqueArgs>(args: SelectSubset<T, cajaFindUniqueArgs<ExtArgs>>): Prisma__cajaClient<$Result.GetResult<Prisma.$cajaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Caja that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cajaFindUniqueOrThrowArgs} args - Arguments to find a Caja
     * @example
     * // Get one Caja
     * const caja = await prisma.caja.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cajaFindUniqueOrThrowArgs>(args: SelectSubset<T, cajaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cajaClient<$Result.GetResult<Prisma.$cajaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caja that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cajaFindFirstArgs} args - Arguments to find a Caja
     * @example
     * // Get one Caja
     * const caja = await prisma.caja.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cajaFindFirstArgs>(args?: SelectSubset<T, cajaFindFirstArgs<ExtArgs>>): Prisma__cajaClient<$Result.GetResult<Prisma.$cajaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caja that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cajaFindFirstOrThrowArgs} args - Arguments to find a Caja
     * @example
     * // Get one Caja
     * const caja = await prisma.caja.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cajaFindFirstOrThrowArgs>(args?: SelectSubset<T, cajaFindFirstOrThrowArgs<ExtArgs>>): Prisma__cajaClient<$Result.GetResult<Prisma.$cajaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cajas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cajaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cajas
     * const cajas = await prisma.caja.findMany()
     * 
     * // Get first 10 Cajas
     * const cajas = await prisma.caja.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cajaWithIdOnly = await prisma.caja.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cajaFindManyArgs>(args?: SelectSubset<T, cajaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cajaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Caja.
     * @param {cajaCreateArgs} args - Arguments to create a Caja.
     * @example
     * // Create one Caja
     * const Caja = await prisma.caja.create({
     *   data: {
     *     // ... data to create a Caja
     *   }
     * })
     * 
     */
    create<T extends cajaCreateArgs>(args: SelectSubset<T, cajaCreateArgs<ExtArgs>>): Prisma__cajaClient<$Result.GetResult<Prisma.$cajaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cajas.
     * @param {cajaCreateManyArgs} args - Arguments to create many Cajas.
     * @example
     * // Create many Cajas
     * const caja = await prisma.caja.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cajaCreateManyArgs>(args?: SelectSubset<T, cajaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cajas and returns the data saved in the database.
     * @param {cajaCreateManyAndReturnArgs} args - Arguments to create many Cajas.
     * @example
     * // Create many Cajas
     * const caja = await prisma.caja.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cajas and only return the `id`
     * const cajaWithIdOnly = await prisma.caja.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cajaCreateManyAndReturnArgs>(args?: SelectSubset<T, cajaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cajaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Caja.
     * @param {cajaDeleteArgs} args - Arguments to delete one Caja.
     * @example
     * // Delete one Caja
     * const Caja = await prisma.caja.delete({
     *   where: {
     *     // ... filter to delete one Caja
     *   }
     * })
     * 
     */
    delete<T extends cajaDeleteArgs>(args: SelectSubset<T, cajaDeleteArgs<ExtArgs>>): Prisma__cajaClient<$Result.GetResult<Prisma.$cajaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Caja.
     * @param {cajaUpdateArgs} args - Arguments to update one Caja.
     * @example
     * // Update one Caja
     * const caja = await prisma.caja.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cajaUpdateArgs>(args: SelectSubset<T, cajaUpdateArgs<ExtArgs>>): Prisma__cajaClient<$Result.GetResult<Prisma.$cajaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cajas.
     * @param {cajaDeleteManyArgs} args - Arguments to filter Cajas to delete.
     * @example
     * // Delete a few Cajas
     * const { count } = await prisma.caja.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cajaDeleteManyArgs>(args?: SelectSubset<T, cajaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cajaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cajas
     * const caja = await prisma.caja.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cajaUpdateManyArgs>(args: SelectSubset<T, cajaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cajas and returns the data updated in the database.
     * @param {cajaUpdateManyAndReturnArgs} args - Arguments to update many Cajas.
     * @example
     * // Update many Cajas
     * const caja = await prisma.caja.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cajas and only return the `id`
     * const cajaWithIdOnly = await prisma.caja.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cajaUpdateManyAndReturnArgs>(args: SelectSubset<T, cajaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cajaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Caja.
     * @param {cajaUpsertArgs} args - Arguments to update or create a Caja.
     * @example
     * // Update or create a Caja
     * const caja = await prisma.caja.upsert({
     *   create: {
     *     // ... data to create a Caja
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Caja we want to update
     *   }
     * })
     */
    upsert<T extends cajaUpsertArgs>(args: SelectSubset<T, cajaUpsertArgs<ExtArgs>>): Prisma__cajaClient<$Result.GetResult<Prisma.$cajaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cajaCountArgs} args - Arguments to filter Cajas to count.
     * @example
     * // Count the number of Cajas
     * const count = await prisma.caja.count({
     *   where: {
     *     // ... the filter for the Cajas we want to count
     *   }
     * })
    **/
    count<T extends cajaCountArgs>(
      args?: Subset<T, cajaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CajaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Caja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CajaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CajaAggregateArgs>(args: Subset<T, CajaAggregateArgs>): Prisma.PrismaPromise<GetCajaAggregateType<T>>

    /**
     * Group by Caja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cajaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cajaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cajaGroupByArgs['orderBy'] }
        : { orderBy?: cajaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cajaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCajaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the caja model
   */
  readonly fields: cajaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for caja.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cajaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    muestra<T extends caja$muestraArgs<ExtArgs> = {}>(args?: Subset<T, caja$muestraArgs<ExtArgs>>): Prisma__muestrasClient<$Result.GetResult<Prisma.$muestrasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the caja model
   */
  interface cajaFieldRefs {
    readonly id: FieldRef<"caja", 'BigInt'>
    readonly fecha: FieldRef<"caja", 'DateTime'>
    readonly tipo_transaccion: FieldRef<"caja", 'String'>
    readonly categoria: FieldRef<"caja", 'String'>
    readonly monto: FieldRef<"caja", 'Decimal'>
    readonly fecha_transaccion: FieldRef<"caja", 'DateTime'>
    readonly descripcion: FieldRef<"caja", 'String'>
    readonly id_muestra: FieldRef<"caja", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * caja findUnique
   */
  export type cajaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caja
     */
    omit?: cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cajaInclude<ExtArgs> | null
    /**
     * Filter, which caja to fetch.
     */
    where: cajaWhereUniqueInput
  }

  /**
   * caja findUniqueOrThrow
   */
  export type cajaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caja
     */
    omit?: cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cajaInclude<ExtArgs> | null
    /**
     * Filter, which caja to fetch.
     */
    where: cajaWhereUniqueInput
  }

  /**
   * caja findFirst
   */
  export type cajaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caja
     */
    omit?: cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cajaInclude<ExtArgs> | null
    /**
     * Filter, which caja to fetch.
     */
    where?: cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cajas to fetch.
     */
    orderBy?: cajaOrderByWithRelationInput | cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cajas.
     */
    cursor?: cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cajas.
     */
    distinct?: CajaScalarFieldEnum | CajaScalarFieldEnum[]
  }

  /**
   * caja findFirstOrThrow
   */
  export type cajaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caja
     */
    omit?: cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cajaInclude<ExtArgs> | null
    /**
     * Filter, which caja to fetch.
     */
    where?: cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cajas to fetch.
     */
    orderBy?: cajaOrderByWithRelationInput | cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cajas.
     */
    cursor?: cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cajas.
     */
    distinct?: CajaScalarFieldEnum | CajaScalarFieldEnum[]
  }

  /**
   * caja findMany
   */
  export type cajaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caja
     */
    omit?: cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cajaInclude<ExtArgs> | null
    /**
     * Filter, which cajas to fetch.
     */
    where?: cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cajas to fetch.
     */
    orderBy?: cajaOrderByWithRelationInput | cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cajas.
     */
    cursor?: cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cajas.
     */
    skip?: number
    distinct?: CajaScalarFieldEnum | CajaScalarFieldEnum[]
  }

  /**
   * caja create
   */
  export type cajaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caja
     */
    omit?: cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cajaInclude<ExtArgs> | null
    /**
     * The data needed to create a caja.
     */
    data: XOR<cajaCreateInput, cajaUncheckedCreateInput>
  }

  /**
   * caja createMany
   */
  export type cajaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cajas.
     */
    data: cajaCreateManyInput | cajaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * caja createManyAndReturn
   */
  export type cajaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the caja
     */
    omit?: cajaOmit<ExtArgs> | null
    /**
     * The data used to create many cajas.
     */
    data: cajaCreateManyInput | cajaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cajaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * caja update
   */
  export type cajaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caja
     */
    omit?: cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cajaInclude<ExtArgs> | null
    /**
     * The data needed to update a caja.
     */
    data: XOR<cajaUpdateInput, cajaUncheckedUpdateInput>
    /**
     * Choose, which caja to update.
     */
    where: cajaWhereUniqueInput
  }

  /**
   * caja updateMany
   */
  export type cajaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cajas.
     */
    data: XOR<cajaUpdateManyMutationInput, cajaUncheckedUpdateManyInput>
    /**
     * Filter which cajas to update
     */
    where?: cajaWhereInput
    /**
     * Limit how many cajas to update.
     */
    limit?: number
  }

  /**
   * caja updateManyAndReturn
   */
  export type cajaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the caja
     */
    omit?: cajaOmit<ExtArgs> | null
    /**
     * The data used to update cajas.
     */
    data: XOR<cajaUpdateManyMutationInput, cajaUncheckedUpdateManyInput>
    /**
     * Filter which cajas to update
     */
    where?: cajaWhereInput
    /**
     * Limit how many cajas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cajaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * caja upsert
   */
  export type cajaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caja
     */
    omit?: cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cajaInclude<ExtArgs> | null
    /**
     * The filter to search for the caja to update in case it exists.
     */
    where: cajaWhereUniqueInput
    /**
     * In case the caja found by the `where` argument doesn't exist, create a new caja with this data.
     */
    create: XOR<cajaCreateInput, cajaUncheckedCreateInput>
    /**
     * In case the caja was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cajaUpdateInput, cajaUncheckedUpdateInput>
  }

  /**
   * caja delete
   */
  export type cajaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caja
     */
    omit?: cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cajaInclude<ExtArgs> | null
    /**
     * Filter which caja to delete.
     */
    where: cajaWhereUniqueInput
  }

  /**
   * caja deleteMany
   */
  export type cajaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cajas to delete
     */
    where?: cajaWhereInput
    /**
     * Limit how many cajas to delete.
     */
    limit?: number
  }

  /**
   * caja.muestra
   */
  export type caja$muestraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestras
     */
    select?: muestrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestras
     */
    omit?: muestrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestrasInclude<ExtArgs> | null
    where?: muestrasWhereInput
  }

  /**
   * caja without action
   */
  export type cajaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caja
     */
    omit?: cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cajaInclude<ExtArgs> | null
  }


  /**
   * Model materiales
   */

  export type AggregateMateriales = {
    _count: MaterialesCountAggregateOutputType | null
    _avg: MaterialesAvgAggregateOutputType | null
    _sum: MaterialesSumAggregateOutputType | null
    _min: MaterialesMinAggregateOutputType | null
    _max: MaterialesMaxAggregateOutputType | null
  }

  export type MaterialesAvgAggregateOutputType = {
    id: number | null
  }

  export type MaterialesSumAggregateOutputType = {
    id: bigint | null
  }

  export type MaterialesMinAggregateOutputType = {
    id: bigint | null
    nombre: string | null
    descripcion: string | null
  }

  export type MaterialesMaxAggregateOutputType = {
    id: bigint | null
    nombre: string | null
    descripcion: string | null
  }

  export type MaterialesCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type MaterialesAvgAggregateInputType = {
    id?: true
  }

  export type MaterialesSumAggregateInputType = {
    id?: true
  }

  export type MaterialesMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type MaterialesMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type MaterialesCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type MaterialesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which materiales to aggregate.
     */
    where?: materialesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materiales to fetch.
     */
    orderBy?: materialesOrderByWithRelationInput | materialesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: materialesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materiales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materiales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned materiales
    **/
    _count?: true | MaterialesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialesMaxAggregateInputType
  }

  export type GetMaterialesAggregateType<T extends MaterialesAggregateArgs> = {
        [P in keyof T & keyof AggregateMateriales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateriales[P]>
      : GetScalarType<T[P], AggregateMateriales[P]>
  }




  export type materialesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: materialesWhereInput
    orderBy?: materialesOrderByWithAggregationInput | materialesOrderByWithAggregationInput[]
    by: MaterialesScalarFieldEnum[] | MaterialesScalarFieldEnum
    having?: materialesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialesCountAggregateInputType | true
    _avg?: MaterialesAvgAggregateInputType
    _sum?: MaterialesSumAggregateInputType
    _min?: MaterialesMinAggregateInputType
    _max?: MaterialesMaxAggregateInputType
  }

  export type MaterialesGroupByOutputType = {
    id: bigint
    nombre: string
    descripcion: string | null
    _count: MaterialesCountAggregateOutputType | null
    _avg: MaterialesAvgAggregateOutputType | null
    _sum: MaterialesSumAggregateOutputType | null
    _min: MaterialesMinAggregateOutputType | null
    _max: MaterialesMaxAggregateOutputType | null
  }

  type GetMaterialesGroupByPayload<T extends materialesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialesGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialesGroupByOutputType[P]>
        }
      >
    >


  export type materialesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    muestra_material?: boolean | materiales$muestra_materialArgs<ExtArgs>
    _count?: boolean | MaterialesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materiales"]>

  export type materialesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["materiales"]>

  export type materialesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["materiales"]>

  export type materialesSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type materialesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion", ExtArgs["result"]["materiales"]>
  export type materialesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muestra_material?: boolean | materiales$muestra_materialArgs<ExtArgs>
    _count?: boolean | MaterialesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type materialesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type materialesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $materialesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "materiales"
    objects: {
      muestra_material: Prisma.$muestra_materialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nombre: string
      descripcion: string | null
    }, ExtArgs["result"]["materiales"]>
    composites: {}
  }

  type materialesGetPayload<S extends boolean | null | undefined | materialesDefaultArgs> = $Result.GetResult<Prisma.$materialesPayload, S>

  type materialesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<materialesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialesCountAggregateInputType | true
    }

  export interface materialesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['materiales'], meta: { name: 'materiales' } }
    /**
     * Find zero or one Materiales that matches the filter.
     * @param {materialesFindUniqueArgs} args - Arguments to find a Materiales
     * @example
     * // Get one Materiales
     * const materiales = await prisma.materiales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends materialesFindUniqueArgs>(args: SelectSubset<T, materialesFindUniqueArgs<ExtArgs>>): Prisma__materialesClient<$Result.GetResult<Prisma.$materialesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materiales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {materialesFindUniqueOrThrowArgs} args - Arguments to find a Materiales
     * @example
     * // Get one Materiales
     * const materiales = await prisma.materiales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends materialesFindUniqueOrThrowArgs>(args: SelectSubset<T, materialesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__materialesClient<$Result.GetResult<Prisma.$materialesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materiales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialesFindFirstArgs} args - Arguments to find a Materiales
     * @example
     * // Get one Materiales
     * const materiales = await prisma.materiales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends materialesFindFirstArgs>(args?: SelectSubset<T, materialesFindFirstArgs<ExtArgs>>): Prisma__materialesClient<$Result.GetResult<Prisma.$materialesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materiales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialesFindFirstOrThrowArgs} args - Arguments to find a Materiales
     * @example
     * // Get one Materiales
     * const materiales = await prisma.materiales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends materialesFindFirstOrThrowArgs>(args?: SelectSubset<T, materialesFindFirstOrThrowArgs<ExtArgs>>): Prisma__materialesClient<$Result.GetResult<Prisma.$materialesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materiales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materiales
     * const materiales = await prisma.materiales.findMany()
     * 
     * // Get first 10 Materiales
     * const materiales = await prisma.materiales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialesWithIdOnly = await prisma.materiales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends materialesFindManyArgs>(args?: SelectSubset<T, materialesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materialesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materiales.
     * @param {materialesCreateArgs} args - Arguments to create a Materiales.
     * @example
     * // Create one Materiales
     * const Materiales = await prisma.materiales.create({
     *   data: {
     *     // ... data to create a Materiales
     *   }
     * })
     * 
     */
    create<T extends materialesCreateArgs>(args: SelectSubset<T, materialesCreateArgs<ExtArgs>>): Prisma__materialesClient<$Result.GetResult<Prisma.$materialesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materiales.
     * @param {materialesCreateManyArgs} args - Arguments to create many Materiales.
     * @example
     * // Create many Materiales
     * const materiales = await prisma.materiales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends materialesCreateManyArgs>(args?: SelectSubset<T, materialesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materiales and returns the data saved in the database.
     * @param {materialesCreateManyAndReturnArgs} args - Arguments to create many Materiales.
     * @example
     * // Create many Materiales
     * const materiales = await prisma.materiales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materiales and only return the `id`
     * const materialesWithIdOnly = await prisma.materiales.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends materialesCreateManyAndReturnArgs>(args?: SelectSubset<T, materialesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materialesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Materiales.
     * @param {materialesDeleteArgs} args - Arguments to delete one Materiales.
     * @example
     * // Delete one Materiales
     * const Materiales = await prisma.materiales.delete({
     *   where: {
     *     // ... filter to delete one Materiales
     *   }
     * })
     * 
     */
    delete<T extends materialesDeleteArgs>(args: SelectSubset<T, materialesDeleteArgs<ExtArgs>>): Prisma__materialesClient<$Result.GetResult<Prisma.$materialesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materiales.
     * @param {materialesUpdateArgs} args - Arguments to update one Materiales.
     * @example
     * // Update one Materiales
     * const materiales = await prisma.materiales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends materialesUpdateArgs>(args: SelectSubset<T, materialesUpdateArgs<ExtArgs>>): Prisma__materialesClient<$Result.GetResult<Prisma.$materialesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materiales.
     * @param {materialesDeleteManyArgs} args - Arguments to filter Materiales to delete.
     * @example
     * // Delete a few Materiales
     * const { count } = await prisma.materiales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends materialesDeleteManyArgs>(args?: SelectSubset<T, materialesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materiales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materiales
     * const materiales = await prisma.materiales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends materialesUpdateManyArgs>(args: SelectSubset<T, materialesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materiales and returns the data updated in the database.
     * @param {materialesUpdateManyAndReturnArgs} args - Arguments to update many Materiales.
     * @example
     * // Update many Materiales
     * const materiales = await prisma.materiales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materiales and only return the `id`
     * const materialesWithIdOnly = await prisma.materiales.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends materialesUpdateManyAndReturnArgs>(args: SelectSubset<T, materialesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materialesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Materiales.
     * @param {materialesUpsertArgs} args - Arguments to update or create a Materiales.
     * @example
     * // Update or create a Materiales
     * const materiales = await prisma.materiales.upsert({
     *   create: {
     *     // ... data to create a Materiales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materiales we want to update
     *   }
     * })
     */
    upsert<T extends materialesUpsertArgs>(args: SelectSubset<T, materialesUpsertArgs<ExtArgs>>): Prisma__materialesClient<$Result.GetResult<Prisma.$materialesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materiales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialesCountArgs} args - Arguments to filter Materiales to count.
     * @example
     * // Count the number of Materiales
     * const count = await prisma.materiales.count({
     *   where: {
     *     // ... the filter for the Materiales we want to count
     *   }
     * })
    **/
    count<T extends materialesCountArgs>(
      args?: Subset<T, materialesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materiales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaterialesAggregateArgs>(args: Subset<T, MaterialesAggregateArgs>): Prisma.PrismaPromise<GetMaterialesAggregateType<T>>

    /**
     * Group by Materiales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends materialesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: materialesGroupByArgs['orderBy'] }
        : { orderBy?: materialesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, materialesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the materiales model
   */
  readonly fields: materialesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for materiales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__materialesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    muestra_material<T extends materiales$muestra_materialArgs<ExtArgs> = {}>(args?: Subset<T, materiales$muestra_materialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$muestra_materialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the materiales model
   */
  interface materialesFieldRefs {
    readonly id: FieldRef<"materiales", 'BigInt'>
    readonly nombre: FieldRef<"materiales", 'String'>
    readonly descripcion: FieldRef<"materiales", 'String'>
  }
    

  // Custom InputTypes
  /**
   * materiales findUnique
   */
  export type materialesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materiales
     */
    select?: materialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materiales
     */
    omit?: materialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialesInclude<ExtArgs> | null
    /**
     * Filter, which materiales to fetch.
     */
    where: materialesWhereUniqueInput
  }

  /**
   * materiales findUniqueOrThrow
   */
  export type materialesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materiales
     */
    select?: materialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materiales
     */
    omit?: materialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialesInclude<ExtArgs> | null
    /**
     * Filter, which materiales to fetch.
     */
    where: materialesWhereUniqueInput
  }

  /**
   * materiales findFirst
   */
  export type materialesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materiales
     */
    select?: materialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materiales
     */
    omit?: materialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialesInclude<ExtArgs> | null
    /**
     * Filter, which materiales to fetch.
     */
    where?: materialesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materiales to fetch.
     */
    orderBy?: materialesOrderByWithRelationInput | materialesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for materiales.
     */
    cursor?: materialesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materiales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materiales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of materiales.
     */
    distinct?: MaterialesScalarFieldEnum | MaterialesScalarFieldEnum[]
  }

  /**
   * materiales findFirstOrThrow
   */
  export type materialesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materiales
     */
    select?: materialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materiales
     */
    omit?: materialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialesInclude<ExtArgs> | null
    /**
     * Filter, which materiales to fetch.
     */
    where?: materialesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materiales to fetch.
     */
    orderBy?: materialesOrderByWithRelationInput | materialesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for materiales.
     */
    cursor?: materialesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materiales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materiales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of materiales.
     */
    distinct?: MaterialesScalarFieldEnum | MaterialesScalarFieldEnum[]
  }

  /**
   * materiales findMany
   */
  export type materialesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materiales
     */
    select?: materialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materiales
     */
    omit?: materialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialesInclude<ExtArgs> | null
    /**
     * Filter, which materiales to fetch.
     */
    where?: materialesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materiales to fetch.
     */
    orderBy?: materialesOrderByWithRelationInput | materialesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing materiales.
     */
    cursor?: materialesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materiales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materiales.
     */
    skip?: number
    distinct?: MaterialesScalarFieldEnum | MaterialesScalarFieldEnum[]
  }

  /**
   * materiales create
   */
  export type materialesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materiales
     */
    select?: materialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materiales
     */
    omit?: materialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialesInclude<ExtArgs> | null
    /**
     * The data needed to create a materiales.
     */
    data: XOR<materialesCreateInput, materialesUncheckedCreateInput>
  }

  /**
   * materiales createMany
   */
  export type materialesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many materiales.
     */
    data: materialesCreateManyInput | materialesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * materiales createManyAndReturn
   */
  export type materialesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materiales
     */
    select?: materialesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the materiales
     */
    omit?: materialesOmit<ExtArgs> | null
    /**
     * The data used to create many materiales.
     */
    data: materialesCreateManyInput | materialesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * materiales update
   */
  export type materialesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materiales
     */
    select?: materialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materiales
     */
    omit?: materialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialesInclude<ExtArgs> | null
    /**
     * The data needed to update a materiales.
     */
    data: XOR<materialesUpdateInput, materialesUncheckedUpdateInput>
    /**
     * Choose, which materiales to update.
     */
    where: materialesWhereUniqueInput
  }

  /**
   * materiales updateMany
   */
  export type materialesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update materiales.
     */
    data: XOR<materialesUpdateManyMutationInput, materialesUncheckedUpdateManyInput>
    /**
     * Filter which materiales to update
     */
    where?: materialesWhereInput
    /**
     * Limit how many materiales to update.
     */
    limit?: number
  }

  /**
   * materiales updateManyAndReturn
   */
  export type materialesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materiales
     */
    select?: materialesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the materiales
     */
    omit?: materialesOmit<ExtArgs> | null
    /**
     * The data used to update materiales.
     */
    data: XOR<materialesUpdateManyMutationInput, materialesUncheckedUpdateManyInput>
    /**
     * Filter which materiales to update
     */
    where?: materialesWhereInput
    /**
     * Limit how many materiales to update.
     */
    limit?: number
  }

  /**
   * materiales upsert
   */
  export type materialesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materiales
     */
    select?: materialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materiales
     */
    omit?: materialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialesInclude<ExtArgs> | null
    /**
     * The filter to search for the materiales to update in case it exists.
     */
    where: materialesWhereUniqueInput
    /**
     * In case the materiales found by the `where` argument doesn't exist, create a new materiales with this data.
     */
    create: XOR<materialesCreateInput, materialesUncheckedCreateInput>
    /**
     * In case the materiales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<materialesUpdateInput, materialesUncheckedUpdateInput>
  }

  /**
   * materiales delete
   */
  export type materialesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materiales
     */
    select?: materialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materiales
     */
    omit?: materialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialesInclude<ExtArgs> | null
    /**
     * Filter which materiales to delete.
     */
    where: materialesWhereUniqueInput
  }

  /**
   * materiales deleteMany
   */
  export type materialesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which materiales to delete
     */
    where?: materialesWhereInput
    /**
     * Limit how many materiales to delete.
     */
    limit?: number
  }

  /**
   * materiales.muestra_material
   */
  export type materiales$muestra_materialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestra_material
     */
    select?: muestra_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestra_material
     */
    omit?: muestra_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestra_materialInclude<ExtArgs> | null
    where?: muestra_materialWhereInput
    orderBy?: muestra_materialOrderByWithRelationInput | muestra_materialOrderByWithRelationInput[]
    cursor?: muestra_materialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Muestra_materialScalarFieldEnum | Muestra_materialScalarFieldEnum[]
  }

  /**
   * materiales without action
   */
  export type materialesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materiales
     */
    select?: materialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materiales
     */
    omit?: materialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialesInclude<ExtArgs> | null
  }


  /**
   * Model medicos
   */

  export type AggregateMedicos = {
    _count: MedicosCountAggregateOutputType | null
    _avg: MedicosAvgAggregateOutputType | null
    _sum: MedicosSumAggregateOutputType | null
    _min: MedicosMinAggregateOutputType | null
    _max: MedicosMaxAggregateOutputType | null
  }

  export type MedicosAvgAggregateOutputType = {
    usuario_id: number | null
  }

  export type MedicosSumAggregateOutputType = {
    usuario_id: bigint | null
  }

  export type MedicosMinAggregateOutputType = {
    usuario_id: bigint | null
    matricula: string | null
    especialidad: string | null
  }

  export type MedicosMaxAggregateOutputType = {
    usuario_id: bigint | null
    matricula: string | null
    especialidad: string | null
  }

  export type MedicosCountAggregateOutputType = {
    usuario_id: number
    matricula: number
    especialidad: number
    _all: number
  }


  export type MedicosAvgAggregateInputType = {
    usuario_id?: true
  }

  export type MedicosSumAggregateInputType = {
    usuario_id?: true
  }

  export type MedicosMinAggregateInputType = {
    usuario_id?: true
    matricula?: true
    especialidad?: true
  }

  export type MedicosMaxAggregateInputType = {
    usuario_id?: true
    matricula?: true
    especialidad?: true
  }

  export type MedicosCountAggregateInputType = {
    usuario_id?: true
    matricula?: true
    especialidad?: true
    _all?: true
  }

  export type MedicosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medicos to aggregate.
     */
    where?: medicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicos to fetch.
     */
    orderBy?: medicosOrderByWithRelationInput | medicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: medicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned medicos
    **/
    _count?: true | MedicosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicosMaxAggregateInputType
  }

  export type GetMedicosAggregateType<T extends MedicosAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicos[P]>
      : GetScalarType<T[P], AggregateMedicos[P]>
  }




  export type medicosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medicosWhereInput
    orderBy?: medicosOrderByWithAggregationInput | medicosOrderByWithAggregationInput[]
    by: MedicosScalarFieldEnum[] | MedicosScalarFieldEnum
    having?: medicosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicosCountAggregateInputType | true
    _avg?: MedicosAvgAggregateInputType
    _sum?: MedicosSumAggregateInputType
    _min?: MedicosMinAggregateInputType
    _max?: MedicosMaxAggregateInputType
  }

  export type MedicosGroupByOutputType = {
    usuario_id: bigint
    matricula: string
    especialidad: string | null
    _count: MedicosCountAggregateOutputType | null
    _avg: MedicosAvgAggregateOutputType | null
    _sum: MedicosSumAggregateOutputType | null
    _min: MedicosMinAggregateOutputType | null
    _max: MedicosMaxAggregateOutputType | null
  }

  type GetMedicosGroupByPayload<T extends medicosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicosGroupByOutputType[P]>
            : GetScalarType<T[P], MedicosGroupByOutputType[P]>
        }
      >
    >


  export type medicosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    matricula?: boolean
    especialidad?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    muestras?: boolean | medicos$muestrasArgs<ExtArgs>
    _count?: boolean | MedicosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicos"]>

  export type medicosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    matricula?: boolean
    especialidad?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicos"]>

  export type medicosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    matricula?: boolean
    especialidad?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicos"]>

  export type medicosSelectScalar = {
    usuario_id?: boolean
    matricula?: boolean
    especialidad?: boolean
  }

  export type medicosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"usuario_id" | "matricula" | "especialidad", ExtArgs["result"]["medicos"]>
  export type medicosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    muestras?: boolean | medicos$muestrasArgs<ExtArgs>
    _count?: boolean | MedicosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type medicosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type medicosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $medicosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "medicos"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>
      muestras: Prisma.$muestrasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      usuario_id: bigint
      matricula: string
      especialidad: string | null
    }, ExtArgs["result"]["medicos"]>
    composites: {}
  }

  type medicosGetPayload<S extends boolean | null | undefined | medicosDefaultArgs> = $Result.GetResult<Prisma.$medicosPayload, S>

  type medicosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<medicosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicosCountAggregateInputType | true
    }

  export interface medicosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['medicos'], meta: { name: 'medicos' } }
    /**
     * Find zero or one Medicos that matches the filter.
     * @param {medicosFindUniqueArgs} args - Arguments to find a Medicos
     * @example
     * // Get one Medicos
     * const medicos = await prisma.medicos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends medicosFindUniqueArgs>(args: SelectSubset<T, medicosFindUniqueArgs<ExtArgs>>): Prisma__medicosClient<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medicos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {medicosFindUniqueOrThrowArgs} args - Arguments to find a Medicos
     * @example
     * // Get one Medicos
     * const medicos = await prisma.medicos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends medicosFindUniqueOrThrowArgs>(args: SelectSubset<T, medicosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__medicosClient<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicosFindFirstArgs} args - Arguments to find a Medicos
     * @example
     * // Get one Medicos
     * const medicos = await prisma.medicos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends medicosFindFirstArgs>(args?: SelectSubset<T, medicosFindFirstArgs<ExtArgs>>): Prisma__medicosClient<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicosFindFirstOrThrowArgs} args - Arguments to find a Medicos
     * @example
     * // Get one Medicos
     * const medicos = await prisma.medicos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends medicosFindFirstOrThrowArgs>(args?: SelectSubset<T, medicosFindFirstOrThrowArgs<ExtArgs>>): Prisma__medicosClient<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicos
     * const medicos = await prisma.medicos.findMany()
     * 
     * // Get first 10 Medicos
     * const medicos = await prisma.medicos.findMany({ take: 10 })
     * 
     * // Only select the `usuario_id`
     * const medicosWithUsuario_idOnly = await prisma.medicos.findMany({ select: { usuario_id: true } })
     * 
     */
    findMany<T extends medicosFindManyArgs>(args?: SelectSubset<T, medicosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medicos.
     * @param {medicosCreateArgs} args - Arguments to create a Medicos.
     * @example
     * // Create one Medicos
     * const Medicos = await prisma.medicos.create({
     *   data: {
     *     // ... data to create a Medicos
     *   }
     * })
     * 
     */
    create<T extends medicosCreateArgs>(args: SelectSubset<T, medicosCreateArgs<ExtArgs>>): Prisma__medicosClient<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicos.
     * @param {medicosCreateManyArgs} args - Arguments to create many Medicos.
     * @example
     * // Create many Medicos
     * const medicos = await prisma.medicos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends medicosCreateManyArgs>(args?: SelectSubset<T, medicosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicos and returns the data saved in the database.
     * @param {medicosCreateManyAndReturnArgs} args - Arguments to create many Medicos.
     * @example
     * // Create many Medicos
     * const medicos = await prisma.medicos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicos and only return the `usuario_id`
     * const medicosWithUsuario_idOnly = await prisma.medicos.createManyAndReturn({
     *   select: { usuario_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends medicosCreateManyAndReturnArgs>(args?: SelectSubset<T, medicosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medicos.
     * @param {medicosDeleteArgs} args - Arguments to delete one Medicos.
     * @example
     * // Delete one Medicos
     * const Medicos = await prisma.medicos.delete({
     *   where: {
     *     // ... filter to delete one Medicos
     *   }
     * })
     * 
     */
    delete<T extends medicosDeleteArgs>(args: SelectSubset<T, medicosDeleteArgs<ExtArgs>>): Prisma__medicosClient<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medicos.
     * @param {medicosUpdateArgs} args - Arguments to update one Medicos.
     * @example
     * // Update one Medicos
     * const medicos = await prisma.medicos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends medicosUpdateArgs>(args: SelectSubset<T, medicosUpdateArgs<ExtArgs>>): Prisma__medicosClient<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicos.
     * @param {medicosDeleteManyArgs} args - Arguments to filter Medicos to delete.
     * @example
     * // Delete a few Medicos
     * const { count } = await prisma.medicos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends medicosDeleteManyArgs>(args?: SelectSubset<T, medicosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicos
     * const medicos = await prisma.medicos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends medicosUpdateManyArgs>(args: SelectSubset<T, medicosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicos and returns the data updated in the database.
     * @param {medicosUpdateManyAndReturnArgs} args - Arguments to update many Medicos.
     * @example
     * // Update many Medicos
     * const medicos = await prisma.medicos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medicos and only return the `usuario_id`
     * const medicosWithUsuario_idOnly = await prisma.medicos.updateManyAndReturn({
     *   select: { usuario_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends medicosUpdateManyAndReturnArgs>(args: SelectSubset<T, medicosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medicos.
     * @param {medicosUpsertArgs} args - Arguments to update or create a Medicos.
     * @example
     * // Update or create a Medicos
     * const medicos = await prisma.medicos.upsert({
     *   create: {
     *     // ... data to create a Medicos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicos we want to update
     *   }
     * })
     */
    upsert<T extends medicosUpsertArgs>(args: SelectSubset<T, medicosUpsertArgs<ExtArgs>>): Prisma__medicosClient<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicosCountArgs} args - Arguments to filter Medicos to count.
     * @example
     * // Count the number of Medicos
     * const count = await prisma.medicos.count({
     *   where: {
     *     // ... the filter for the Medicos we want to count
     *   }
     * })
    **/
    count<T extends medicosCountArgs>(
      args?: Subset<T, medicosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicosAggregateArgs>(args: Subset<T, MedicosAggregateArgs>): Prisma.PrismaPromise<GetMedicosAggregateType<T>>

    /**
     * Group by Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends medicosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: medicosGroupByArgs['orderBy'] }
        : { orderBy?: medicosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, medicosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the medicos model
   */
  readonly fields: medicosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for medicos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__medicosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    muestras<T extends medicos$muestrasArgs<ExtArgs> = {}>(args?: Subset<T, medicos$muestrasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$muestrasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the medicos model
   */
  interface medicosFieldRefs {
    readonly usuario_id: FieldRef<"medicos", 'BigInt'>
    readonly matricula: FieldRef<"medicos", 'String'>
    readonly especialidad: FieldRef<"medicos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * medicos findUnique
   */
  export type medicosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicos
     */
    omit?: medicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
    /**
     * Filter, which medicos to fetch.
     */
    where: medicosWhereUniqueInput
  }

  /**
   * medicos findUniqueOrThrow
   */
  export type medicosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicos
     */
    omit?: medicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
    /**
     * Filter, which medicos to fetch.
     */
    where: medicosWhereUniqueInput
  }

  /**
   * medicos findFirst
   */
  export type medicosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicos
     */
    omit?: medicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
    /**
     * Filter, which medicos to fetch.
     */
    where?: medicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicos to fetch.
     */
    orderBy?: medicosOrderByWithRelationInput | medicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medicos.
     */
    cursor?: medicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medicos.
     */
    distinct?: MedicosScalarFieldEnum | MedicosScalarFieldEnum[]
  }

  /**
   * medicos findFirstOrThrow
   */
  export type medicosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicos
     */
    omit?: medicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
    /**
     * Filter, which medicos to fetch.
     */
    where?: medicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicos to fetch.
     */
    orderBy?: medicosOrderByWithRelationInput | medicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medicos.
     */
    cursor?: medicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medicos.
     */
    distinct?: MedicosScalarFieldEnum | MedicosScalarFieldEnum[]
  }

  /**
   * medicos findMany
   */
  export type medicosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicos
     */
    omit?: medicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
    /**
     * Filter, which medicos to fetch.
     */
    where?: medicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicos to fetch.
     */
    orderBy?: medicosOrderByWithRelationInput | medicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing medicos.
     */
    cursor?: medicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicos.
     */
    skip?: number
    distinct?: MedicosScalarFieldEnum | MedicosScalarFieldEnum[]
  }

  /**
   * medicos create
   */
  export type medicosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicos
     */
    omit?: medicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
    /**
     * The data needed to create a medicos.
     */
    data: XOR<medicosCreateInput, medicosUncheckedCreateInput>
  }

  /**
   * medicos createMany
   */
  export type medicosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many medicos.
     */
    data: medicosCreateManyInput | medicosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * medicos createManyAndReturn
   */
  export type medicosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the medicos
     */
    omit?: medicosOmit<ExtArgs> | null
    /**
     * The data used to create many medicos.
     */
    data: medicosCreateManyInput | medicosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * medicos update
   */
  export type medicosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicos
     */
    omit?: medicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
    /**
     * The data needed to update a medicos.
     */
    data: XOR<medicosUpdateInput, medicosUncheckedUpdateInput>
    /**
     * Choose, which medicos to update.
     */
    where: medicosWhereUniqueInput
  }

  /**
   * medicos updateMany
   */
  export type medicosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update medicos.
     */
    data: XOR<medicosUpdateManyMutationInput, medicosUncheckedUpdateManyInput>
    /**
     * Filter which medicos to update
     */
    where?: medicosWhereInput
    /**
     * Limit how many medicos to update.
     */
    limit?: number
  }

  /**
   * medicos updateManyAndReturn
   */
  export type medicosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the medicos
     */
    omit?: medicosOmit<ExtArgs> | null
    /**
     * The data used to update medicos.
     */
    data: XOR<medicosUpdateManyMutationInput, medicosUncheckedUpdateManyInput>
    /**
     * Filter which medicos to update
     */
    where?: medicosWhereInput
    /**
     * Limit how many medicos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * medicos upsert
   */
  export type medicosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicos
     */
    omit?: medicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
    /**
     * The filter to search for the medicos to update in case it exists.
     */
    where: medicosWhereUniqueInput
    /**
     * In case the medicos found by the `where` argument doesn't exist, create a new medicos with this data.
     */
    create: XOR<medicosCreateInput, medicosUncheckedCreateInput>
    /**
     * In case the medicos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<medicosUpdateInput, medicosUncheckedUpdateInput>
  }

  /**
   * medicos delete
   */
  export type medicosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicos
     */
    omit?: medicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
    /**
     * Filter which medicos to delete.
     */
    where: medicosWhereUniqueInput
  }

  /**
   * medicos deleteMany
   */
  export type medicosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medicos to delete
     */
    where?: medicosWhereInput
    /**
     * Limit how many medicos to delete.
     */
    limit?: number
  }

  /**
   * medicos.muestras
   */
  export type medicos$muestrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestras
     */
    select?: muestrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestras
     */
    omit?: muestrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestrasInclude<ExtArgs> | null
    where?: muestrasWhereInput
    orderBy?: muestrasOrderByWithRelationInput | muestrasOrderByWithRelationInput[]
    cursor?: muestrasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MuestrasScalarFieldEnum | MuestrasScalarFieldEnum[]
  }

  /**
   * medicos without action
   */
  export type medicosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicos
     */
    omit?: medicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
  }


  /**
   * Model muestra_material
   */

  export type AggregateMuestra_material = {
    _count: Muestra_materialCountAggregateOutputType | null
    _avg: Muestra_materialAvgAggregateOutputType | null
    _sum: Muestra_materialSumAggregateOutputType | null
    _min: Muestra_materialMinAggregateOutputType | null
    _max: Muestra_materialMaxAggregateOutputType | null
  }

  export type Muestra_materialAvgAggregateOutputType = {
    id_muestra: number | null
    id_material: number | null
  }

  export type Muestra_materialSumAggregateOutputType = {
    id_muestra: bigint | null
    id_material: bigint | null
  }

  export type Muestra_materialMinAggregateOutputType = {
    id_muestra: bigint | null
    id_material: bigint | null
  }

  export type Muestra_materialMaxAggregateOutputType = {
    id_muestra: bigint | null
    id_material: bigint | null
  }

  export type Muestra_materialCountAggregateOutputType = {
    id_muestra: number
    id_material: number
    _all: number
  }


  export type Muestra_materialAvgAggregateInputType = {
    id_muestra?: true
    id_material?: true
  }

  export type Muestra_materialSumAggregateInputType = {
    id_muestra?: true
    id_material?: true
  }

  export type Muestra_materialMinAggregateInputType = {
    id_muestra?: true
    id_material?: true
  }

  export type Muestra_materialMaxAggregateInputType = {
    id_muestra?: true
    id_material?: true
  }

  export type Muestra_materialCountAggregateInputType = {
    id_muestra?: true
    id_material?: true
    _all?: true
  }

  export type Muestra_materialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which muestra_material to aggregate.
     */
    where?: muestra_materialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of muestra_materials to fetch.
     */
    orderBy?: muestra_materialOrderByWithRelationInput | muestra_materialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: muestra_materialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` muestra_materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` muestra_materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned muestra_materials
    **/
    _count?: true | Muestra_materialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Muestra_materialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Muestra_materialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Muestra_materialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Muestra_materialMaxAggregateInputType
  }

  export type GetMuestra_materialAggregateType<T extends Muestra_materialAggregateArgs> = {
        [P in keyof T & keyof AggregateMuestra_material]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMuestra_material[P]>
      : GetScalarType<T[P], AggregateMuestra_material[P]>
  }




  export type muestra_materialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: muestra_materialWhereInput
    orderBy?: muestra_materialOrderByWithAggregationInput | muestra_materialOrderByWithAggregationInput[]
    by: Muestra_materialScalarFieldEnum[] | Muestra_materialScalarFieldEnum
    having?: muestra_materialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Muestra_materialCountAggregateInputType | true
    _avg?: Muestra_materialAvgAggregateInputType
    _sum?: Muestra_materialSumAggregateInputType
    _min?: Muestra_materialMinAggregateInputType
    _max?: Muestra_materialMaxAggregateInputType
  }

  export type Muestra_materialGroupByOutputType = {
    id_muestra: bigint
    id_material: bigint
    _count: Muestra_materialCountAggregateOutputType | null
    _avg: Muestra_materialAvgAggregateOutputType | null
    _sum: Muestra_materialSumAggregateOutputType | null
    _min: Muestra_materialMinAggregateOutputType | null
    _max: Muestra_materialMaxAggregateOutputType | null
  }

  type GetMuestra_materialGroupByPayload<T extends muestra_materialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Muestra_materialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Muestra_materialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Muestra_materialGroupByOutputType[P]>
            : GetScalarType<T[P], Muestra_materialGroupByOutputType[P]>
        }
      >
    >


  export type muestra_materialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_muestra?: boolean
    id_material?: boolean
    materiales?: boolean | materialesDefaultArgs<ExtArgs>
    muestras?: boolean | muestrasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["muestra_material"]>

  export type muestra_materialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_muestra?: boolean
    id_material?: boolean
    materiales?: boolean | materialesDefaultArgs<ExtArgs>
    muestras?: boolean | muestrasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["muestra_material"]>

  export type muestra_materialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_muestra?: boolean
    id_material?: boolean
    materiales?: boolean | materialesDefaultArgs<ExtArgs>
    muestras?: boolean | muestrasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["muestra_material"]>

  export type muestra_materialSelectScalar = {
    id_muestra?: boolean
    id_material?: boolean
  }

  export type muestra_materialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_muestra" | "id_material", ExtArgs["result"]["muestra_material"]>
  export type muestra_materialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materiales?: boolean | materialesDefaultArgs<ExtArgs>
    muestras?: boolean | muestrasDefaultArgs<ExtArgs>
  }
  export type muestra_materialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materiales?: boolean | materialesDefaultArgs<ExtArgs>
    muestras?: boolean | muestrasDefaultArgs<ExtArgs>
  }
  export type muestra_materialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materiales?: boolean | materialesDefaultArgs<ExtArgs>
    muestras?: boolean | muestrasDefaultArgs<ExtArgs>
  }

  export type $muestra_materialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "muestra_material"
    objects: {
      materiales: Prisma.$materialesPayload<ExtArgs>
      muestras: Prisma.$muestrasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_muestra: bigint
      id_material: bigint
    }, ExtArgs["result"]["muestra_material"]>
    composites: {}
  }

  type muestra_materialGetPayload<S extends boolean | null | undefined | muestra_materialDefaultArgs> = $Result.GetResult<Prisma.$muestra_materialPayload, S>

  type muestra_materialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<muestra_materialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Muestra_materialCountAggregateInputType | true
    }

  export interface muestra_materialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['muestra_material'], meta: { name: 'muestra_material' } }
    /**
     * Find zero or one Muestra_material that matches the filter.
     * @param {muestra_materialFindUniqueArgs} args - Arguments to find a Muestra_material
     * @example
     * // Get one Muestra_material
     * const muestra_material = await prisma.muestra_material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends muestra_materialFindUniqueArgs>(args: SelectSubset<T, muestra_materialFindUniqueArgs<ExtArgs>>): Prisma__muestra_materialClient<$Result.GetResult<Prisma.$muestra_materialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Muestra_material that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {muestra_materialFindUniqueOrThrowArgs} args - Arguments to find a Muestra_material
     * @example
     * // Get one Muestra_material
     * const muestra_material = await prisma.muestra_material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends muestra_materialFindUniqueOrThrowArgs>(args: SelectSubset<T, muestra_materialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__muestra_materialClient<$Result.GetResult<Prisma.$muestra_materialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Muestra_material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {muestra_materialFindFirstArgs} args - Arguments to find a Muestra_material
     * @example
     * // Get one Muestra_material
     * const muestra_material = await prisma.muestra_material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends muestra_materialFindFirstArgs>(args?: SelectSubset<T, muestra_materialFindFirstArgs<ExtArgs>>): Prisma__muestra_materialClient<$Result.GetResult<Prisma.$muestra_materialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Muestra_material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {muestra_materialFindFirstOrThrowArgs} args - Arguments to find a Muestra_material
     * @example
     * // Get one Muestra_material
     * const muestra_material = await prisma.muestra_material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends muestra_materialFindFirstOrThrowArgs>(args?: SelectSubset<T, muestra_materialFindFirstOrThrowArgs<ExtArgs>>): Prisma__muestra_materialClient<$Result.GetResult<Prisma.$muestra_materialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Muestra_materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {muestra_materialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Muestra_materials
     * const muestra_materials = await prisma.muestra_material.findMany()
     * 
     * // Get first 10 Muestra_materials
     * const muestra_materials = await prisma.muestra_material.findMany({ take: 10 })
     * 
     * // Only select the `id_muestra`
     * const muestra_materialWithId_muestraOnly = await prisma.muestra_material.findMany({ select: { id_muestra: true } })
     * 
     */
    findMany<T extends muestra_materialFindManyArgs>(args?: SelectSubset<T, muestra_materialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$muestra_materialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Muestra_material.
     * @param {muestra_materialCreateArgs} args - Arguments to create a Muestra_material.
     * @example
     * // Create one Muestra_material
     * const Muestra_material = await prisma.muestra_material.create({
     *   data: {
     *     // ... data to create a Muestra_material
     *   }
     * })
     * 
     */
    create<T extends muestra_materialCreateArgs>(args: SelectSubset<T, muestra_materialCreateArgs<ExtArgs>>): Prisma__muestra_materialClient<$Result.GetResult<Prisma.$muestra_materialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Muestra_materials.
     * @param {muestra_materialCreateManyArgs} args - Arguments to create many Muestra_materials.
     * @example
     * // Create many Muestra_materials
     * const muestra_material = await prisma.muestra_material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends muestra_materialCreateManyArgs>(args?: SelectSubset<T, muestra_materialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Muestra_materials and returns the data saved in the database.
     * @param {muestra_materialCreateManyAndReturnArgs} args - Arguments to create many Muestra_materials.
     * @example
     * // Create many Muestra_materials
     * const muestra_material = await prisma.muestra_material.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Muestra_materials and only return the `id_muestra`
     * const muestra_materialWithId_muestraOnly = await prisma.muestra_material.createManyAndReturn({
     *   select: { id_muestra: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends muestra_materialCreateManyAndReturnArgs>(args?: SelectSubset<T, muestra_materialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$muestra_materialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Muestra_material.
     * @param {muestra_materialDeleteArgs} args - Arguments to delete one Muestra_material.
     * @example
     * // Delete one Muestra_material
     * const Muestra_material = await prisma.muestra_material.delete({
     *   where: {
     *     // ... filter to delete one Muestra_material
     *   }
     * })
     * 
     */
    delete<T extends muestra_materialDeleteArgs>(args: SelectSubset<T, muestra_materialDeleteArgs<ExtArgs>>): Prisma__muestra_materialClient<$Result.GetResult<Prisma.$muestra_materialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Muestra_material.
     * @param {muestra_materialUpdateArgs} args - Arguments to update one Muestra_material.
     * @example
     * // Update one Muestra_material
     * const muestra_material = await prisma.muestra_material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends muestra_materialUpdateArgs>(args: SelectSubset<T, muestra_materialUpdateArgs<ExtArgs>>): Prisma__muestra_materialClient<$Result.GetResult<Prisma.$muestra_materialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Muestra_materials.
     * @param {muestra_materialDeleteManyArgs} args - Arguments to filter Muestra_materials to delete.
     * @example
     * // Delete a few Muestra_materials
     * const { count } = await prisma.muestra_material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends muestra_materialDeleteManyArgs>(args?: SelectSubset<T, muestra_materialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Muestra_materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {muestra_materialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Muestra_materials
     * const muestra_material = await prisma.muestra_material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends muestra_materialUpdateManyArgs>(args: SelectSubset<T, muestra_materialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Muestra_materials and returns the data updated in the database.
     * @param {muestra_materialUpdateManyAndReturnArgs} args - Arguments to update many Muestra_materials.
     * @example
     * // Update many Muestra_materials
     * const muestra_material = await prisma.muestra_material.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Muestra_materials and only return the `id_muestra`
     * const muestra_materialWithId_muestraOnly = await prisma.muestra_material.updateManyAndReturn({
     *   select: { id_muestra: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends muestra_materialUpdateManyAndReturnArgs>(args: SelectSubset<T, muestra_materialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$muestra_materialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Muestra_material.
     * @param {muestra_materialUpsertArgs} args - Arguments to update or create a Muestra_material.
     * @example
     * // Update or create a Muestra_material
     * const muestra_material = await prisma.muestra_material.upsert({
     *   create: {
     *     // ... data to create a Muestra_material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Muestra_material we want to update
     *   }
     * })
     */
    upsert<T extends muestra_materialUpsertArgs>(args: SelectSubset<T, muestra_materialUpsertArgs<ExtArgs>>): Prisma__muestra_materialClient<$Result.GetResult<Prisma.$muestra_materialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Muestra_materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {muestra_materialCountArgs} args - Arguments to filter Muestra_materials to count.
     * @example
     * // Count the number of Muestra_materials
     * const count = await prisma.muestra_material.count({
     *   where: {
     *     // ... the filter for the Muestra_materials we want to count
     *   }
     * })
    **/
    count<T extends muestra_materialCountArgs>(
      args?: Subset<T, muestra_materialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Muestra_materialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Muestra_material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Muestra_materialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Muestra_materialAggregateArgs>(args: Subset<T, Muestra_materialAggregateArgs>): Prisma.PrismaPromise<GetMuestra_materialAggregateType<T>>

    /**
     * Group by Muestra_material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {muestra_materialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends muestra_materialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: muestra_materialGroupByArgs['orderBy'] }
        : { orderBy?: muestra_materialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, muestra_materialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMuestra_materialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the muestra_material model
   */
  readonly fields: muestra_materialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for muestra_material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__muestra_materialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materiales<T extends materialesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, materialesDefaultArgs<ExtArgs>>): Prisma__materialesClient<$Result.GetResult<Prisma.$materialesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    muestras<T extends muestrasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, muestrasDefaultArgs<ExtArgs>>): Prisma__muestrasClient<$Result.GetResult<Prisma.$muestrasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the muestra_material model
   */
  interface muestra_materialFieldRefs {
    readonly id_muestra: FieldRef<"muestra_material", 'BigInt'>
    readonly id_material: FieldRef<"muestra_material", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * muestra_material findUnique
   */
  export type muestra_materialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestra_material
     */
    select?: muestra_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestra_material
     */
    omit?: muestra_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestra_materialInclude<ExtArgs> | null
    /**
     * Filter, which muestra_material to fetch.
     */
    where: muestra_materialWhereUniqueInput
  }

  /**
   * muestra_material findUniqueOrThrow
   */
  export type muestra_materialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestra_material
     */
    select?: muestra_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestra_material
     */
    omit?: muestra_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestra_materialInclude<ExtArgs> | null
    /**
     * Filter, which muestra_material to fetch.
     */
    where: muestra_materialWhereUniqueInput
  }

  /**
   * muestra_material findFirst
   */
  export type muestra_materialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestra_material
     */
    select?: muestra_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestra_material
     */
    omit?: muestra_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestra_materialInclude<ExtArgs> | null
    /**
     * Filter, which muestra_material to fetch.
     */
    where?: muestra_materialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of muestra_materials to fetch.
     */
    orderBy?: muestra_materialOrderByWithRelationInput | muestra_materialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for muestra_materials.
     */
    cursor?: muestra_materialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` muestra_materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` muestra_materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of muestra_materials.
     */
    distinct?: Muestra_materialScalarFieldEnum | Muestra_materialScalarFieldEnum[]
  }

  /**
   * muestra_material findFirstOrThrow
   */
  export type muestra_materialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestra_material
     */
    select?: muestra_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestra_material
     */
    omit?: muestra_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestra_materialInclude<ExtArgs> | null
    /**
     * Filter, which muestra_material to fetch.
     */
    where?: muestra_materialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of muestra_materials to fetch.
     */
    orderBy?: muestra_materialOrderByWithRelationInput | muestra_materialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for muestra_materials.
     */
    cursor?: muestra_materialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` muestra_materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` muestra_materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of muestra_materials.
     */
    distinct?: Muestra_materialScalarFieldEnum | Muestra_materialScalarFieldEnum[]
  }

  /**
   * muestra_material findMany
   */
  export type muestra_materialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestra_material
     */
    select?: muestra_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestra_material
     */
    omit?: muestra_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestra_materialInclude<ExtArgs> | null
    /**
     * Filter, which muestra_materials to fetch.
     */
    where?: muestra_materialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of muestra_materials to fetch.
     */
    orderBy?: muestra_materialOrderByWithRelationInput | muestra_materialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing muestra_materials.
     */
    cursor?: muestra_materialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` muestra_materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` muestra_materials.
     */
    skip?: number
    distinct?: Muestra_materialScalarFieldEnum | Muestra_materialScalarFieldEnum[]
  }

  /**
   * muestra_material create
   */
  export type muestra_materialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestra_material
     */
    select?: muestra_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestra_material
     */
    omit?: muestra_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestra_materialInclude<ExtArgs> | null
    /**
     * The data needed to create a muestra_material.
     */
    data: XOR<muestra_materialCreateInput, muestra_materialUncheckedCreateInput>
  }

  /**
   * muestra_material createMany
   */
  export type muestra_materialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many muestra_materials.
     */
    data: muestra_materialCreateManyInput | muestra_materialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * muestra_material createManyAndReturn
   */
  export type muestra_materialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestra_material
     */
    select?: muestra_materialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the muestra_material
     */
    omit?: muestra_materialOmit<ExtArgs> | null
    /**
     * The data used to create many muestra_materials.
     */
    data: muestra_materialCreateManyInput | muestra_materialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestra_materialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * muestra_material update
   */
  export type muestra_materialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestra_material
     */
    select?: muestra_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestra_material
     */
    omit?: muestra_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestra_materialInclude<ExtArgs> | null
    /**
     * The data needed to update a muestra_material.
     */
    data: XOR<muestra_materialUpdateInput, muestra_materialUncheckedUpdateInput>
    /**
     * Choose, which muestra_material to update.
     */
    where: muestra_materialWhereUniqueInput
  }

  /**
   * muestra_material updateMany
   */
  export type muestra_materialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update muestra_materials.
     */
    data: XOR<muestra_materialUpdateManyMutationInput, muestra_materialUncheckedUpdateManyInput>
    /**
     * Filter which muestra_materials to update
     */
    where?: muestra_materialWhereInput
    /**
     * Limit how many muestra_materials to update.
     */
    limit?: number
  }

  /**
   * muestra_material updateManyAndReturn
   */
  export type muestra_materialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestra_material
     */
    select?: muestra_materialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the muestra_material
     */
    omit?: muestra_materialOmit<ExtArgs> | null
    /**
     * The data used to update muestra_materials.
     */
    data: XOR<muestra_materialUpdateManyMutationInput, muestra_materialUncheckedUpdateManyInput>
    /**
     * Filter which muestra_materials to update
     */
    where?: muestra_materialWhereInput
    /**
     * Limit how many muestra_materials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestra_materialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * muestra_material upsert
   */
  export type muestra_materialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestra_material
     */
    select?: muestra_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestra_material
     */
    omit?: muestra_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestra_materialInclude<ExtArgs> | null
    /**
     * The filter to search for the muestra_material to update in case it exists.
     */
    where: muestra_materialWhereUniqueInput
    /**
     * In case the muestra_material found by the `where` argument doesn't exist, create a new muestra_material with this data.
     */
    create: XOR<muestra_materialCreateInput, muestra_materialUncheckedCreateInput>
    /**
     * In case the muestra_material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<muestra_materialUpdateInput, muestra_materialUncheckedUpdateInput>
  }

  /**
   * muestra_material delete
   */
  export type muestra_materialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestra_material
     */
    select?: muestra_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestra_material
     */
    omit?: muestra_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestra_materialInclude<ExtArgs> | null
    /**
     * Filter which muestra_material to delete.
     */
    where: muestra_materialWhereUniqueInput
  }

  /**
   * muestra_material deleteMany
   */
  export type muestra_materialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which muestra_materials to delete
     */
    where?: muestra_materialWhereInput
    /**
     * Limit how many muestra_materials to delete.
     */
    limit?: number
  }

  /**
   * muestra_material without action
   */
  export type muestra_materialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestra_material
     */
    select?: muestra_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestra_material
     */
    omit?: muestra_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestra_materialInclude<ExtArgs> | null
  }


  /**
   * Model muestras
   */

  export type AggregateMuestras = {
    _count: MuestrasCountAggregateOutputType | null
    _avg: MuestrasAvgAggregateOutputType | null
    _sum: MuestrasSumAggregateOutputType | null
    _min: MuestrasMinAggregateOutputType | null
    _max: MuestrasMaxAggregateOutputType | null
  }

  export type MuestrasAvgAggregateOutputType = {
    id: number | null
    monto: Decimal | null
    id_secretario: number | null
    id_paciente: number | null
    id_medico: number | null
    id_informe: number | null
  }

  export type MuestrasSumAggregateOutputType = {
    id: bigint | null
    monto: Decimal | null
    id_secretario: bigint | null
    id_paciente: bigint | null
    id_medico: bigint | null
    id_informe: bigint | null
  }

  export type MuestrasMinAggregateOutputType = {
    id: bigint | null
    fecha_ingreso: Date | null
    fecha_entrega: Date | null
    nro_autorizacion: string | null
    monto: Decimal | null
    tipo_cobertura: boolean | null
    tipo_patologia: string | null
    id_secretario: bigint | null
    id_paciente: bigint | null
    id_medico: bigint | null
    id_informe: bigint | null
  }

  export type MuestrasMaxAggregateOutputType = {
    id: bigint | null
    fecha_ingreso: Date | null
    fecha_entrega: Date | null
    nro_autorizacion: string | null
    monto: Decimal | null
    tipo_cobertura: boolean | null
    tipo_patologia: string | null
    id_secretario: bigint | null
    id_paciente: bigint | null
    id_medico: bigint | null
    id_informe: bigint | null
  }

  export type MuestrasCountAggregateOutputType = {
    id: number
    fecha_ingreso: number
    fecha_entrega: number
    nro_autorizacion: number
    monto: number
    tipo_cobertura: number
    tipo_patologia: number
    id_secretario: number
    id_paciente: number
    id_medico: number
    id_informe: number
    _all: number
  }


  export type MuestrasAvgAggregateInputType = {
    id?: true
    monto?: true
    id_secretario?: true
    id_paciente?: true
    id_medico?: true
    id_informe?: true
  }

  export type MuestrasSumAggregateInputType = {
    id?: true
    monto?: true
    id_secretario?: true
    id_paciente?: true
    id_medico?: true
    id_informe?: true
  }

  export type MuestrasMinAggregateInputType = {
    id?: true
    fecha_ingreso?: true
    fecha_entrega?: true
    nro_autorizacion?: true
    monto?: true
    tipo_cobertura?: true
    tipo_patologia?: true
    id_secretario?: true
    id_paciente?: true
    id_medico?: true
    id_informe?: true
  }

  export type MuestrasMaxAggregateInputType = {
    id?: true
    fecha_ingreso?: true
    fecha_entrega?: true
    nro_autorizacion?: true
    monto?: true
    tipo_cobertura?: true
    tipo_patologia?: true
    id_secretario?: true
    id_paciente?: true
    id_medico?: true
    id_informe?: true
  }

  export type MuestrasCountAggregateInputType = {
    id?: true
    fecha_ingreso?: true
    fecha_entrega?: true
    nro_autorizacion?: true
    monto?: true
    tipo_cobertura?: true
    tipo_patologia?: true
    id_secretario?: true
    id_paciente?: true
    id_medico?: true
    id_informe?: true
    _all?: true
  }

  export type MuestrasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which muestras to aggregate.
     */
    where?: muestrasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of muestras to fetch.
     */
    orderBy?: muestrasOrderByWithRelationInput | muestrasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: muestrasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` muestras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` muestras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned muestras
    **/
    _count?: true | MuestrasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MuestrasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MuestrasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MuestrasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MuestrasMaxAggregateInputType
  }

  export type GetMuestrasAggregateType<T extends MuestrasAggregateArgs> = {
        [P in keyof T & keyof AggregateMuestras]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMuestras[P]>
      : GetScalarType<T[P], AggregateMuestras[P]>
  }




  export type muestrasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: muestrasWhereInput
    orderBy?: muestrasOrderByWithAggregationInput | muestrasOrderByWithAggregationInput[]
    by: MuestrasScalarFieldEnum[] | MuestrasScalarFieldEnum
    having?: muestrasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MuestrasCountAggregateInputType | true
    _avg?: MuestrasAvgAggregateInputType
    _sum?: MuestrasSumAggregateInputType
    _min?: MuestrasMinAggregateInputType
    _max?: MuestrasMaxAggregateInputType
  }

  export type MuestrasGroupByOutputType = {
    id: bigint
    fecha_ingreso: Date
    fecha_entrega: Date
    nro_autorizacion: string
    monto: Decimal
    tipo_cobertura: boolean
    tipo_patologia: string
    id_secretario: bigint
    id_paciente: bigint
    id_medico: bigint
    id_informe: bigint
    _count: MuestrasCountAggregateOutputType | null
    _avg: MuestrasAvgAggregateOutputType | null
    _sum: MuestrasSumAggregateOutputType | null
    _min: MuestrasMinAggregateOutputType | null
    _max: MuestrasMaxAggregateOutputType | null
  }

  type GetMuestrasGroupByPayload<T extends muestrasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MuestrasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MuestrasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MuestrasGroupByOutputType[P]>
            : GetScalarType<T[P], MuestrasGroupByOutputType[P]>
        }
      >
    >


  export type muestrasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha_ingreso?: boolean
    fecha_entrega?: boolean
    nro_autorizacion?: boolean
    monto?: boolean
    tipo_cobertura?: boolean
    tipo_patologia?: boolean
    id_secretario?: boolean
    id_paciente?: boolean
    id_medico?: boolean
    id_informe?: boolean
    muestra_material?: boolean | muestras$muestra_materialArgs<ExtArgs>
    medicos?: boolean | medicosDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    secretarios?: boolean | secretariosDefaultArgs<ExtArgs>
    caja?: boolean | muestras$cajaArgs<ExtArgs>
    informe?: boolean | informesDefaultArgs<ExtArgs>
    _count?: boolean | MuestrasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["muestras"]>

  export type muestrasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha_ingreso?: boolean
    fecha_entrega?: boolean
    nro_autorizacion?: boolean
    monto?: boolean
    tipo_cobertura?: boolean
    tipo_patologia?: boolean
    id_secretario?: boolean
    id_paciente?: boolean
    id_medico?: boolean
    id_informe?: boolean
    medicos?: boolean | medicosDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    secretarios?: boolean | secretariosDefaultArgs<ExtArgs>
    informe?: boolean | informesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["muestras"]>

  export type muestrasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha_ingreso?: boolean
    fecha_entrega?: boolean
    nro_autorizacion?: boolean
    monto?: boolean
    tipo_cobertura?: boolean
    tipo_patologia?: boolean
    id_secretario?: boolean
    id_paciente?: boolean
    id_medico?: boolean
    id_informe?: boolean
    medicos?: boolean | medicosDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    secretarios?: boolean | secretariosDefaultArgs<ExtArgs>
    informe?: boolean | informesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["muestras"]>

  export type muestrasSelectScalar = {
    id?: boolean
    fecha_ingreso?: boolean
    fecha_entrega?: boolean
    nro_autorizacion?: boolean
    monto?: boolean
    tipo_cobertura?: boolean
    tipo_patologia?: boolean
    id_secretario?: boolean
    id_paciente?: boolean
    id_medico?: boolean
    id_informe?: boolean
  }

  export type muestrasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha_ingreso" | "fecha_entrega" | "nro_autorizacion" | "monto" | "tipo_cobertura" | "tipo_patologia" | "id_secretario" | "id_paciente" | "id_medico" | "id_informe", ExtArgs["result"]["muestras"]>
  export type muestrasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muestra_material?: boolean | muestras$muestra_materialArgs<ExtArgs>
    medicos?: boolean | medicosDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    secretarios?: boolean | secretariosDefaultArgs<ExtArgs>
    caja?: boolean | muestras$cajaArgs<ExtArgs>
    informe?: boolean | informesDefaultArgs<ExtArgs>
    _count?: boolean | MuestrasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type muestrasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicos?: boolean | medicosDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    secretarios?: boolean | secretariosDefaultArgs<ExtArgs>
    informe?: boolean | informesDefaultArgs<ExtArgs>
  }
  export type muestrasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicos?: boolean | medicosDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    secretarios?: boolean | secretariosDefaultArgs<ExtArgs>
    informe?: boolean | informesDefaultArgs<ExtArgs>
  }

  export type $muestrasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "muestras"
    objects: {
      muestra_material: Prisma.$muestra_materialPayload<ExtArgs>[]
      medicos: Prisma.$medicosPayload<ExtArgs>
      pacientes: Prisma.$pacientesPayload<ExtArgs>
      secretarios: Prisma.$secretariosPayload<ExtArgs>
      caja: Prisma.$cajaPayload<ExtArgs>[]
      informe: Prisma.$informesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      fecha_ingreso: Date
      fecha_entrega: Date
      nro_autorizacion: string
      monto: Prisma.Decimal
      tipo_cobertura: boolean
      tipo_patologia: string
      id_secretario: bigint
      id_paciente: bigint
      id_medico: bigint
      id_informe: bigint
    }, ExtArgs["result"]["muestras"]>
    composites: {}
  }

  type muestrasGetPayload<S extends boolean | null | undefined | muestrasDefaultArgs> = $Result.GetResult<Prisma.$muestrasPayload, S>

  type muestrasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<muestrasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MuestrasCountAggregateInputType | true
    }

  export interface muestrasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['muestras'], meta: { name: 'muestras' } }
    /**
     * Find zero or one Muestras that matches the filter.
     * @param {muestrasFindUniqueArgs} args - Arguments to find a Muestras
     * @example
     * // Get one Muestras
     * const muestras = await prisma.muestras.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends muestrasFindUniqueArgs>(args: SelectSubset<T, muestrasFindUniqueArgs<ExtArgs>>): Prisma__muestrasClient<$Result.GetResult<Prisma.$muestrasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Muestras that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {muestrasFindUniqueOrThrowArgs} args - Arguments to find a Muestras
     * @example
     * // Get one Muestras
     * const muestras = await prisma.muestras.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends muestrasFindUniqueOrThrowArgs>(args: SelectSubset<T, muestrasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__muestrasClient<$Result.GetResult<Prisma.$muestrasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Muestras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {muestrasFindFirstArgs} args - Arguments to find a Muestras
     * @example
     * // Get one Muestras
     * const muestras = await prisma.muestras.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends muestrasFindFirstArgs>(args?: SelectSubset<T, muestrasFindFirstArgs<ExtArgs>>): Prisma__muestrasClient<$Result.GetResult<Prisma.$muestrasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Muestras that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {muestrasFindFirstOrThrowArgs} args - Arguments to find a Muestras
     * @example
     * // Get one Muestras
     * const muestras = await prisma.muestras.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends muestrasFindFirstOrThrowArgs>(args?: SelectSubset<T, muestrasFindFirstOrThrowArgs<ExtArgs>>): Prisma__muestrasClient<$Result.GetResult<Prisma.$muestrasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Muestras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {muestrasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Muestras
     * const muestras = await prisma.muestras.findMany()
     * 
     * // Get first 10 Muestras
     * const muestras = await prisma.muestras.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const muestrasWithIdOnly = await prisma.muestras.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends muestrasFindManyArgs>(args?: SelectSubset<T, muestrasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$muestrasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Muestras.
     * @param {muestrasCreateArgs} args - Arguments to create a Muestras.
     * @example
     * // Create one Muestras
     * const Muestras = await prisma.muestras.create({
     *   data: {
     *     // ... data to create a Muestras
     *   }
     * })
     * 
     */
    create<T extends muestrasCreateArgs>(args: SelectSubset<T, muestrasCreateArgs<ExtArgs>>): Prisma__muestrasClient<$Result.GetResult<Prisma.$muestrasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Muestras.
     * @param {muestrasCreateManyArgs} args - Arguments to create many Muestras.
     * @example
     * // Create many Muestras
     * const muestras = await prisma.muestras.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends muestrasCreateManyArgs>(args?: SelectSubset<T, muestrasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Muestras and returns the data saved in the database.
     * @param {muestrasCreateManyAndReturnArgs} args - Arguments to create many Muestras.
     * @example
     * // Create many Muestras
     * const muestras = await prisma.muestras.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Muestras and only return the `id`
     * const muestrasWithIdOnly = await prisma.muestras.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends muestrasCreateManyAndReturnArgs>(args?: SelectSubset<T, muestrasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$muestrasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Muestras.
     * @param {muestrasDeleteArgs} args - Arguments to delete one Muestras.
     * @example
     * // Delete one Muestras
     * const Muestras = await prisma.muestras.delete({
     *   where: {
     *     // ... filter to delete one Muestras
     *   }
     * })
     * 
     */
    delete<T extends muestrasDeleteArgs>(args: SelectSubset<T, muestrasDeleteArgs<ExtArgs>>): Prisma__muestrasClient<$Result.GetResult<Prisma.$muestrasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Muestras.
     * @param {muestrasUpdateArgs} args - Arguments to update one Muestras.
     * @example
     * // Update one Muestras
     * const muestras = await prisma.muestras.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends muestrasUpdateArgs>(args: SelectSubset<T, muestrasUpdateArgs<ExtArgs>>): Prisma__muestrasClient<$Result.GetResult<Prisma.$muestrasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Muestras.
     * @param {muestrasDeleteManyArgs} args - Arguments to filter Muestras to delete.
     * @example
     * // Delete a few Muestras
     * const { count } = await prisma.muestras.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends muestrasDeleteManyArgs>(args?: SelectSubset<T, muestrasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Muestras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {muestrasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Muestras
     * const muestras = await prisma.muestras.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends muestrasUpdateManyArgs>(args: SelectSubset<T, muestrasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Muestras and returns the data updated in the database.
     * @param {muestrasUpdateManyAndReturnArgs} args - Arguments to update many Muestras.
     * @example
     * // Update many Muestras
     * const muestras = await prisma.muestras.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Muestras and only return the `id`
     * const muestrasWithIdOnly = await prisma.muestras.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends muestrasUpdateManyAndReturnArgs>(args: SelectSubset<T, muestrasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$muestrasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Muestras.
     * @param {muestrasUpsertArgs} args - Arguments to update or create a Muestras.
     * @example
     * // Update or create a Muestras
     * const muestras = await prisma.muestras.upsert({
     *   create: {
     *     // ... data to create a Muestras
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Muestras we want to update
     *   }
     * })
     */
    upsert<T extends muestrasUpsertArgs>(args: SelectSubset<T, muestrasUpsertArgs<ExtArgs>>): Prisma__muestrasClient<$Result.GetResult<Prisma.$muestrasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Muestras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {muestrasCountArgs} args - Arguments to filter Muestras to count.
     * @example
     * // Count the number of Muestras
     * const count = await prisma.muestras.count({
     *   where: {
     *     // ... the filter for the Muestras we want to count
     *   }
     * })
    **/
    count<T extends muestrasCountArgs>(
      args?: Subset<T, muestrasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MuestrasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Muestras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuestrasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MuestrasAggregateArgs>(args: Subset<T, MuestrasAggregateArgs>): Prisma.PrismaPromise<GetMuestrasAggregateType<T>>

    /**
     * Group by Muestras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {muestrasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends muestrasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: muestrasGroupByArgs['orderBy'] }
        : { orderBy?: muestrasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, muestrasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMuestrasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the muestras model
   */
  readonly fields: muestrasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for muestras.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__muestrasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    muestra_material<T extends muestras$muestra_materialArgs<ExtArgs> = {}>(args?: Subset<T, muestras$muestra_materialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$muestra_materialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medicos<T extends medicosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, medicosDefaultArgs<ExtArgs>>): Prisma__medicosClient<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pacientes<T extends pacientesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pacientesDefaultArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    secretarios<T extends secretariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, secretariosDefaultArgs<ExtArgs>>): Prisma__secretariosClient<$Result.GetResult<Prisma.$secretariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    caja<T extends muestras$cajaArgs<ExtArgs> = {}>(args?: Subset<T, muestras$cajaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cajaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    informe<T extends informesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, informesDefaultArgs<ExtArgs>>): Prisma__informesClient<$Result.GetResult<Prisma.$informesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the muestras model
   */
  interface muestrasFieldRefs {
    readonly id: FieldRef<"muestras", 'BigInt'>
    readonly fecha_ingreso: FieldRef<"muestras", 'DateTime'>
    readonly fecha_entrega: FieldRef<"muestras", 'DateTime'>
    readonly nro_autorizacion: FieldRef<"muestras", 'String'>
    readonly monto: FieldRef<"muestras", 'Decimal'>
    readonly tipo_cobertura: FieldRef<"muestras", 'Boolean'>
    readonly tipo_patologia: FieldRef<"muestras", 'String'>
    readonly id_secretario: FieldRef<"muestras", 'BigInt'>
    readonly id_paciente: FieldRef<"muestras", 'BigInt'>
    readonly id_medico: FieldRef<"muestras", 'BigInt'>
    readonly id_informe: FieldRef<"muestras", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * muestras findUnique
   */
  export type muestrasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestras
     */
    select?: muestrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestras
     */
    omit?: muestrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestrasInclude<ExtArgs> | null
    /**
     * Filter, which muestras to fetch.
     */
    where: muestrasWhereUniqueInput
  }

  /**
   * muestras findUniqueOrThrow
   */
  export type muestrasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestras
     */
    select?: muestrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestras
     */
    omit?: muestrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestrasInclude<ExtArgs> | null
    /**
     * Filter, which muestras to fetch.
     */
    where: muestrasWhereUniqueInput
  }

  /**
   * muestras findFirst
   */
  export type muestrasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestras
     */
    select?: muestrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestras
     */
    omit?: muestrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestrasInclude<ExtArgs> | null
    /**
     * Filter, which muestras to fetch.
     */
    where?: muestrasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of muestras to fetch.
     */
    orderBy?: muestrasOrderByWithRelationInput | muestrasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for muestras.
     */
    cursor?: muestrasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` muestras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` muestras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of muestras.
     */
    distinct?: MuestrasScalarFieldEnum | MuestrasScalarFieldEnum[]
  }

  /**
   * muestras findFirstOrThrow
   */
  export type muestrasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestras
     */
    select?: muestrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestras
     */
    omit?: muestrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestrasInclude<ExtArgs> | null
    /**
     * Filter, which muestras to fetch.
     */
    where?: muestrasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of muestras to fetch.
     */
    orderBy?: muestrasOrderByWithRelationInput | muestrasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for muestras.
     */
    cursor?: muestrasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` muestras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` muestras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of muestras.
     */
    distinct?: MuestrasScalarFieldEnum | MuestrasScalarFieldEnum[]
  }

  /**
   * muestras findMany
   */
  export type muestrasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestras
     */
    select?: muestrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestras
     */
    omit?: muestrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestrasInclude<ExtArgs> | null
    /**
     * Filter, which muestras to fetch.
     */
    where?: muestrasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of muestras to fetch.
     */
    orderBy?: muestrasOrderByWithRelationInput | muestrasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing muestras.
     */
    cursor?: muestrasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` muestras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` muestras.
     */
    skip?: number
    distinct?: MuestrasScalarFieldEnum | MuestrasScalarFieldEnum[]
  }

  /**
   * muestras create
   */
  export type muestrasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestras
     */
    select?: muestrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestras
     */
    omit?: muestrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestrasInclude<ExtArgs> | null
    /**
     * The data needed to create a muestras.
     */
    data: XOR<muestrasCreateInput, muestrasUncheckedCreateInput>
  }

  /**
   * muestras createMany
   */
  export type muestrasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many muestras.
     */
    data: muestrasCreateManyInput | muestrasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * muestras createManyAndReturn
   */
  export type muestrasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestras
     */
    select?: muestrasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the muestras
     */
    omit?: muestrasOmit<ExtArgs> | null
    /**
     * The data used to create many muestras.
     */
    data: muestrasCreateManyInput | muestrasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestrasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * muestras update
   */
  export type muestrasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestras
     */
    select?: muestrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestras
     */
    omit?: muestrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestrasInclude<ExtArgs> | null
    /**
     * The data needed to update a muestras.
     */
    data: XOR<muestrasUpdateInput, muestrasUncheckedUpdateInput>
    /**
     * Choose, which muestras to update.
     */
    where: muestrasWhereUniqueInput
  }

  /**
   * muestras updateMany
   */
  export type muestrasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update muestras.
     */
    data: XOR<muestrasUpdateManyMutationInput, muestrasUncheckedUpdateManyInput>
    /**
     * Filter which muestras to update
     */
    where?: muestrasWhereInput
    /**
     * Limit how many muestras to update.
     */
    limit?: number
  }

  /**
   * muestras updateManyAndReturn
   */
  export type muestrasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestras
     */
    select?: muestrasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the muestras
     */
    omit?: muestrasOmit<ExtArgs> | null
    /**
     * The data used to update muestras.
     */
    data: XOR<muestrasUpdateManyMutationInput, muestrasUncheckedUpdateManyInput>
    /**
     * Filter which muestras to update
     */
    where?: muestrasWhereInput
    /**
     * Limit how many muestras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestrasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * muestras upsert
   */
  export type muestrasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestras
     */
    select?: muestrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestras
     */
    omit?: muestrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestrasInclude<ExtArgs> | null
    /**
     * The filter to search for the muestras to update in case it exists.
     */
    where: muestrasWhereUniqueInput
    /**
     * In case the muestras found by the `where` argument doesn't exist, create a new muestras with this data.
     */
    create: XOR<muestrasCreateInput, muestrasUncheckedCreateInput>
    /**
     * In case the muestras was found with the provided `where` argument, update it with this data.
     */
    update: XOR<muestrasUpdateInput, muestrasUncheckedUpdateInput>
  }

  /**
   * muestras delete
   */
  export type muestrasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestras
     */
    select?: muestrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestras
     */
    omit?: muestrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestrasInclude<ExtArgs> | null
    /**
     * Filter which muestras to delete.
     */
    where: muestrasWhereUniqueInput
  }

  /**
   * muestras deleteMany
   */
  export type muestrasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which muestras to delete
     */
    where?: muestrasWhereInput
    /**
     * Limit how many muestras to delete.
     */
    limit?: number
  }

  /**
   * muestras.muestra_material
   */
  export type muestras$muestra_materialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestra_material
     */
    select?: muestra_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestra_material
     */
    omit?: muestra_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestra_materialInclude<ExtArgs> | null
    where?: muestra_materialWhereInput
    orderBy?: muestra_materialOrderByWithRelationInput | muestra_materialOrderByWithRelationInput[]
    cursor?: muestra_materialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Muestra_materialScalarFieldEnum | Muestra_materialScalarFieldEnum[]
  }

  /**
   * muestras.caja
   */
  export type muestras$cajaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caja
     */
    omit?: cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cajaInclude<ExtArgs> | null
    where?: cajaWhereInput
    orderBy?: cajaOrderByWithRelationInput | cajaOrderByWithRelationInput[]
    cursor?: cajaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CajaScalarFieldEnum | CajaScalarFieldEnum[]
  }

  /**
   * muestras without action
   */
  export type muestrasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestras
     */
    select?: muestrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestras
     */
    omit?: muestrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestrasInclude<ExtArgs> | null
  }


  /**
   * Model informes
   */

  export type AggregateInformes = {
    _count: InformesCountAggregateOutputType | null
    _avg: InformesAvgAggregateOutputType | null
    _sum: InformesSumAggregateOutputType | null
    _min: InformesMinAggregateOutputType | null
    _max: InformesMaxAggregateOutputType | null
  }

  export type InformesAvgAggregateOutputType = {
    id: number | null
  }

  export type InformesSumAggregateOutputType = {
    id: bigint | null
  }

  export type InformesMinAggregateOutputType = {
    id: bigint | null
    tipo_informe: string | null
    descripcion: string | null
    fecha_creacion: Date | null
  }

  export type InformesMaxAggregateOutputType = {
    id: bigint | null
    tipo_informe: string | null
    descripcion: string | null
    fecha_creacion: Date | null
  }

  export type InformesCountAggregateOutputType = {
    id: number
    tipo_informe: number
    descripcion: number
    fecha_creacion: number
    _all: number
  }


  export type InformesAvgAggregateInputType = {
    id?: true
  }

  export type InformesSumAggregateInputType = {
    id?: true
  }

  export type InformesMinAggregateInputType = {
    id?: true
    tipo_informe?: true
    descripcion?: true
    fecha_creacion?: true
  }

  export type InformesMaxAggregateInputType = {
    id?: true
    tipo_informe?: true
    descripcion?: true
    fecha_creacion?: true
  }

  export type InformesCountAggregateInputType = {
    id?: true
    tipo_informe?: true
    descripcion?: true
    fecha_creacion?: true
    _all?: true
  }

  export type InformesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which informes to aggregate.
     */
    where?: informesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of informes to fetch.
     */
    orderBy?: informesOrderByWithRelationInput | informesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: informesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` informes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` informes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned informes
    **/
    _count?: true | InformesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InformesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InformesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InformesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InformesMaxAggregateInputType
  }

  export type GetInformesAggregateType<T extends InformesAggregateArgs> = {
        [P in keyof T & keyof AggregateInformes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInformes[P]>
      : GetScalarType<T[P], AggregateInformes[P]>
  }




  export type informesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: informesWhereInput
    orderBy?: informesOrderByWithAggregationInput | informesOrderByWithAggregationInput[]
    by: InformesScalarFieldEnum[] | InformesScalarFieldEnum
    having?: informesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InformesCountAggregateInputType | true
    _avg?: InformesAvgAggregateInputType
    _sum?: InformesSumAggregateInputType
    _min?: InformesMinAggregateInputType
    _max?: InformesMaxAggregateInputType
  }

  export type InformesGroupByOutputType = {
    id: bigint
    tipo_informe: string
    descripcion: string
    fecha_creacion: Date | null
    _count: InformesCountAggregateOutputType | null
    _avg: InformesAvgAggregateOutputType | null
    _sum: InformesSumAggregateOutputType | null
    _min: InformesMinAggregateOutputType | null
    _max: InformesMaxAggregateOutputType | null
  }

  type GetInformesGroupByPayload<T extends informesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InformesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InformesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InformesGroupByOutputType[P]>
            : GetScalarType<T[P], InformesGroupByOutputType[P]>
        }
      >
    >


  export type informesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo_informe?: boolean
    descripcion?: boolean
    fecha_creacion?: boolean
    muestra?: boolean | informes$muestraArgs<ExtArgs>
  }, ExtArgs["result"]["informes"]>

  export type informesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo_informe?: boolean
    descripcion?: boolean
    fecha_creacion?: boolean
  }, ExtArgs["result"]["informes"]>

  export type informesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo_informe?: boolean
    descripcion?: boolean
    fecha_creacion?: boolean
  }, ExtArgs["result"]["informes"]>

  export type informesSelectScalar = {
    id?: boolean
    tipo_informe?: boolean
    descripcion?: boolean
    fecha_creacion?: boolean
  }

  export type informesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo_informe" | "descripcion" | "fecha_creacion", ExtArgs["result"]["informes"]>
  export type informesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muestra?: boolean | informes$muestraArgs<ExtArgs>
  }
  export type informesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type informesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $informesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "informes"
    objects: {
      muestra: Prisma.$muestrasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      tipo_informe: string
      descripcion: string
      fecha_creacion: Date | null
    }, ExtArgs["result"]["informes"]>
    composites: {}
  }

  type informesGetPayload<S extends boolean | null | undefined | informesDefaultArgs> = $Result.GetResult<Prisma.$informesPayload, S>

  type informesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<informesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InformesCountAggregateInputType | true
    }

  export interface informesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['informes'], meta: { name: 'informes' } }
    /**
     * Find zero or one Informes that matches the filter.
     * @param {informesFindUniqueArgs} args - Arguments to find a Informes
     * @example
     * // Get one Informes
     * const informes = await prisma.informes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends informesFindUniqueArgs>(args: SelectSubset<T, informesFindUniqueArgs<ExtArgs>>): Prisma__informesClient<$Result.GetResult<Prisma.$informesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Informes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {informesFindUniqueOrThrowArgs} args - Arguments to find a Informes
     * @example
     * // Get one Informes
     * const informes = await prisma.informes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends informesFindUniqueOrThrowArgs>(args: SelectSubset<T, informesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__informesClient<$Result.GetResult<Prisma.$informesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Informes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {informesFindFirstArgs} args - Arguments to find a Informes
     * @example
     * // Get one Informes
     * const informes = await prisma.informes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends informesFindFirstArgs>(args?: SelectSubset<T, informesFindFirstArgs<ExtArgs>>): Prisma__informesClient<$Result.GetResult<Prisma.$informesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Informes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {informesFindFirstOrThrowArgs} args - Arguments to find a Informes
     * @example
     * // Get one Informes
     * const informes = await prisma.informes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends informesFindFirstOrThrowArgs>(args?: SelectSubset<T, informesFindFirstOrThrowArgs<ExtArgs>>): Prisma__informesClient<$Result.GetResult<Prisma.$informesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Informes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {informesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Informes
     * const informes = await prisma.informes.findMany()
     * 
     * // Get first 10 Informes
     * const informes = await prisma.informes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const informesWithIdOnly = await prisma.informes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends informesFindManyArgs>(args?: SelectSubset<T, informesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$informesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Informes.
     * @param {informesCreateArgs} args - Arguments to create a Informes.
     * @example
     * // Create one Informes
     * const Informes = await prisma.informes.create({
     *   data: {
     *     // ... data to create a Informes
     *   }
     * })
     * 
     */
    create<T extends informesCreateArgs>(args: SelectSubset<T, informesCreateArgs<ExtArgs>>): Prisma__informesClient<$Result.GetResult<Prisma.$informesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Informes.
     * @param {informesCreateManyArgs} args - Arguments to create many Informes.
     * @example
     * // Create many Informes
     * const informes = await prisma.informes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends informesCreateManyArgs>(args?: SelectSubset<T, informesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Informes and returns the data saved in the database.
     * @param {informesCreateManyAndReturnArgs} args - Arguments to create many Informes.
     * @example
     * // Create many Informes
     * const informes = await prisma.informes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Informes and only return the `id`
     * const informesWithIdOnly = await prisma.informes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends informesCreateManyAndReturnArgs>(args?: SelectSubset<T, informesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$informesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Informes.
     * @param {informesDeleteArgs} args - Arguments to delete one Informes.
     * @example
     * // Delete one Informes
     * const Informes = await prisma.informes.delete({
     *   where: {
     *     // ... filter to delete one Informes
     *   }
     * })
     * 
     */
    delete<T extends informesDeleteArgs>(args: SelectSubset<T, informesDeleteArgs<ExtArgs>>): Prisma__informesClient<$Result.GetResult<Prisma.$informesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Informes.
     * @param {informesUpdateArgs} args - Arguments to update one Informes.
     * @example
     * // Update one Informes
     * const informes = await prisma.informes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends informesUpdateArgs>(args: SelectSubset<T, informesUpdateArgs<ExtArgs>>): Prisma__informesClient<$Result.GetResult<Prisma.$informesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Informes.
     * @param {informesDeleteManyArgs} args - Arguments to filter Informes to delete.
     * @example
     * // Delete a few Informes
     * const { count } = await prisma.informes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends informesDeleteManyArgs>(args?: SelectSubset<T, informesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Informes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {informesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Informes
     * const informes = await prisma.informes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends informesUpdateManyArgs>(args: SelectSubset<T, informesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Informes and returns the data updated in the database.
     * @param {informesUpdateManyAndReturnArgs} args - Arguments to update many Informes.
     * @example
     * // Update many Informes
     * const informes = await prisma.informes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Informes and only return the `id`
     * const informesWithIdOnly = await prisma.informes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends informesUpdateManyAndReturnArgs>(args: SelectSubset<T, informesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$informesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Informes.
     * @param {informesUpsertArgs} args - Arguments to update or create a Informes.
     * @example
     * // Update or create a Informes
     * const informes = await prisma.informes.upsert({
     *   create: {
     *     // ... data to create a Informes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Informes we want to update
     *   }
     * })
     */
    upsert<T extends informesUpsertArgs>(args: SelectSubset<T, informesUpsertArgs<ExtArgs>>): Prisma__informesClient<$Result.GetResult<Prisma.$informesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Informes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {informesCountArgs} args - Arguments to filter Informes to count.
     * @example
     * // Count the number of Informes
     * const count = await prisma.informes.count({
     *   where: {
     *     // ... the filter for the Informes we want to count
     *   }
     * })
    **/
    count<T extends informesCountArgs>(
      args?: Subset<T, informesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InformesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Informes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InformesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InformesAggregateArgs>(args: Subset<T, InformesAggregateArgs>): Prisma.PrismaPromise<GetInformesAggregateType<T>>

    /**
     * Group by Informes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {informesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends informesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: informesGroupByArgs['orderBy'] }
        : { orderBy?: informesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, informesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInformesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the informes model
   */
  readonly fields: informesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for informes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__informesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    muestra<T extends informes$muestraArgs<ExtArgs> = {}>(args?: Subset<T, informes$muestraArgs<ExtArgs>>): Prisma__muestrasClient<$Result.GetResult<Prisma.$muestrasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the informes model
   */
  interface informesFieldRefs {
    readonly id: FieldRef<"informes", 'BigInt'>
    readonly tipo_informe: FieldRef<"informes", 'String'>
    readonly descripcion: FieldRef<"informes", 'String'>
    readonly fecha_creacion: FieldRef<"informes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * informes findUnique
   */
  export type informesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informes
     */
    select?: informesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the informes
     */
    omit?: informesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: informesInclude<ExtArgs> | null
    /**
     * Filter, which informes to fetch.
     */
    where: informesWhereUniqueInput
  }

  /**
   * informes findUniqueOrThrow
   */
  export type informesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informes
     */
    select?: informesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the informes
     */
    omit?: informesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: informesInclude<ExtArgs> | null
    /**
     * Filter, which informes to fetch.
     */
    where: informesWhereUniqueInput
  }

  /**
   * informes findFirst
   */
  export type informesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informes
     */
    select?: informesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the informes
     */
    omit?: informesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: informesInclude<ExtArgs> | null
    /**
     * Filter, which informes to fetch.
     */
    where?: informesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of informes to fetch.
     */
    orderBy?: informesOrderByWithRelationInput | informesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for informes.
     */
    cursor?: informesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` informes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` informes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of informes.
     */
    distinct?: InformesScalarFieldEnum | InformesScalarFieldEnum[]
  }

  /**
   * informes findFirstOrThrow
   */
  export type informesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informes
     */
    select?: informesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the informes
     */
    omit?: informesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: informesInclude<ExtArgs> | null
    /**
     * Filter, which informes to fetch.
     */
    where?: informesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of informes to fetch.
     */
    orderBy?: informesOrderByWithRelationInput | informesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for informes.
     */
    cursor?: informesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` informes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` informes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of informes.
     */
    distinct?: InformesScalarFieldEnum | InformesScalarFieldEnum[]
  }

  /**
   * informes findMany
   */
  export type informesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informes
     */
    select?: informesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the informes
     */
    omit?: informesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: informesInclude<ExtArgs> | null
    /**
     * Filter, which informes to fetch.
     */
    where?: informesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of informes to fetch.
     */
    orderBy?: informesOrderByWithRelationInput | informesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing informes.
     */
    cursor?: informesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` informes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` informes.
     */
    skip?: number
    distinct?: InformesScalarFieldEnum | InformesScalarFieldEnum[]
  }

  /**
   * informes create
   */
  export type informesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informes
     */
    select?: informesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the informes
     */
    omit?: informesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: informesInclude<ExtArgs> | null
    /**
     * The data needed to create a informes.
     */
    data: XOR<informesCreateInput, informesUncheckedCreateInput>
  }

  /**
   * informes createMany
   */
  export type informesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many informes.
     */
    data: informesCreateManyInput | informesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * informes createManyAndReturn
   */
  export type informesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informes
     */
    select?: informesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the informes
     */
    omit?: informesOmit<ExtArgs> | null
    /**
     * The data used to create many informes.
     */
    data: informesCreateManyInput | informesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * informes update
   */
  export type informesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informes
     */
    select?: informesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the informes
     */
    omit?: informesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: informesInclude<ExtArgs> | null
    /**
     * The data needed to update a informes.
     */
    data: XOR<informesUpdateInput, informesUncheckedUpdateInput>
    /**
     * Choose, which informes to update.
     */
    where: informesWhereUniqueInput
  }

  /**
   * informes updateMany
   */
  export type informesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update informes.
     */
    data: XOR<informesUpdateManyMutationInput, informesUncheckedUpdateManyInput>
    /**
     * Filter which informes to update
     */
    where?: informesWhereInput
    /**
     * Limit how many informes to update.
     */
    limit?: number
  }

  /**
   * informes updateManyAndReturn
   */
  export type informesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informes
     */
    select?: informesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the informes
     */
    omit?: informesOmit<ExtArgs> | null
    /**
     * The data used to update informes.
     */
    data: XOR<informesUpdateManyMutationInput, informesUncheckedUpdateManyInput>
    /**
     * Filter which informes to update
     */
    where?: informesWhereInput
    /**
     * Limit how many informes to update.
     */
    limit?: number
  }

  /**
   * informes upsert
   */
  export type informesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informes
     */
    select?: informesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the informes
     */
    omit?: informesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: informesInclude<ExtArgs> | null
    /**
     * The filter to search for the informes to update in case it exists.
     */
    where: informesWhereUniqueInput
    /**
     * In case the informes found by the `where` argument doesn't exist, create a new informes with this data.
     */
    create: XOR<informesCreateInput, informesUncheckedCreateInput>
    /**
     * In case the informes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<informesUpdateInput, informesUncheckedUpdateInput>
  }

  /**
   * informes delete
   */
  export type informesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informes
     */
    select?: informesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the informes
     */
    omit?: informesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: informesInclude<ExtArgs> | null
    /**
     * Filter which informes to delete.
     */
    where: informesWhereUniqueInput
  }

  /**
   * informes deleteMany
   */
  export type informesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which informes to delete
     */
    where?: informesWhereInput
    /**
     * Limit how many informes to delete.
     */
    limit?: number
  }

  /**
   * informes.muestra
   */
  export type informes$muestraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestras
     */
    select?: muestrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestras
     */
    omit?: muestrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestrasInclude<ExtArgs> | null
    where?: muestrasWhereInput
  }

  /**
   * informes without action
   */
  export type informesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the informes
     */
    select?: informesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the informes
     */
    omit?: informesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: informesInclude<ExtArgs> | null
  }


  /**
   * Model pacientes
   */

  export type AggregatePacientes = {
    _count: PacientesCountAggregateOutputType | null
    _avg: PacientesAvgAggregateOutputType | null
    _sum: PacientesSumAggregateOutputType | null
    _min: PacientesMinAggregateOutputType | null
    _max: PacientesMaxAggregateOutputType | null
  }

  export type PacientesAvgAggregateOutputType = {
    usuario_id: number | null
  }

  export type PacientesSumAggregateOutputType = {
    usuario_id: bigint | null
  }

  export type PacientesMinAggregateOutputType = {
    usuario_id: bigint | null
    fecha_nacimiento: Date | null
    telefono: string | null
  }

  export type PacientesMaxAggregateOutputType = {
    usuario_id: bigint | null
    fecha_nacimiento: Date | null
    telefono: string | null
  }

  export type PacientesCountAggregateOutputType = {
    usuario_id: number
    fecha_nacimiento: number
    telefono: number
    _all: number
  }


  export type PacientesAvgAggregateInputType = {
    usuario_id?: true
  }

  export type PacientesSumAggregateInputType = {
    usuario_id?: true
  }

  export type PacientesMinAggregateInputType = {
    usuario_id?: true
    fecha_nacimiento?: true
    telefono?: true
  }

  export type PacientesMaxAggregateInputType = {
    usuario_id?: true
    fecha_nacimiento?: true
    telefono?: true
  }

  export type PacientesCountAggregateInputType = {
    usuario_id?: true
    fecha_nacimiento?: true
    telefono?: true
    _all?: true
  }

  export type PacientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pacientes to aggregate.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pacientes
    **/
    _count?: true | PacientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacientesMaxAggregateInputType
  }

  export type GetPacientesAggregateType<T extends PacientesAggregateArgs> = {
        [P in keyof T & keyof AggregatePacientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePacientes[P]>
      : GetScalarType<T[P], AggregatePacientes[P]>
  }




  export type pacientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pacientesWhereInput
    orderBy?: pacientesOrderByWithAggregationInput | pacientesOrderByWithAggregationInput[]
    by: PacientesScalarFieldEnum[] | PacientesScalarFieldEnum
    having?: pacientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacientesCountAggregateInputType | true
    _avg?: PacientesAvgAggregateInputType
    _sum?: PacientesSumAggregateInputType
    _min?: PacientesMinAggregateInputType
    _max?: PacientesMaxAggregateInputType
  }

  export type PacientesGroupByOutputType = {
    usuario_id: bigint
    fecha_nacimiento: Date | null
    telefono: string
    _count: PacientesCountAggregateOutputType | null
    _avg: PacientesAvgAggregateOutputType | null
    _sum: PacientesSumAggregateOutputType | null
    _min: PacientesMinAggregateOutputType | null
    _max: PacientesMaxAggregateOutputType | null
  }

  type GetPacientesGroupByPayload<T extends pacientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacientesGroupByOutputType[P]>
            : GetScalarType<T[P], PacientesGroupByOutputType[P]>
        }
      >
    >


  export type pacientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    fecha_nacimiento?: boolean
    telefono?: boolean
    muestras?: boolean | pacientes$muestrasArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    _count?: boolean | PacientesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacientes"]>

  export type pacientesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    fecha_nacimiento?: boolean
    telefono?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacientes"]>

  export type pacientesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    fecha_nacimiento?: boolean
    telefono?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacientes"]>

  export type pacientesSelectScalar = {
    usuario_id?: boolean
    fecha_nacimiento?: boolean
    telefono?: boolean
  }

  export type pacientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"usuario_id" | "fecha_nacimiento" | "telefono", ExtArgs["result"]["pacientes"]>
  export type pacientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muestras?: boolean | pacientes$muestrasArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    _count?: boolean | PacientesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pacientesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type pacientesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $pacientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pacientes"
    objects: {
      muestras: Prisma.$muestrasPayload<ExtArgs>[]
      usuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      usuario_id: bigint
      fecha_nacimiento: Date | null
      telefono: string
    }, ExtArgs["result"]["pacientes"]>
    composites: {}
  }

  type pacientesGetPayload<S extends boolean | null | undefined | pacientesDefaultArgs> = $Result.GetResult<Prisma.$pacientesPayload, S>

  type pacientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pacientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacientesCountAggregateInputType | true
    }

  export interface pacientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pacientes'], meta: { name: 'pacientes' } }
    /**
     * Find zero or one Pacientes that matches the filter.
     * @param {pacientesFindUniqueArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pacientesFindUniqueArgs>(args: SelectSubset<T, pacientesFindUniqueArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pacientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pacientesFindUniqueOrThrowArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pacientesFindUniqueOrThrowArgs>(args: SelectSubset<T, pacientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindFirstArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pacientesFindFirstArgs>(args?: SelectSubset<T, pacientesFindFirstArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pacientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindFirstOrThrowArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pacientesFindFirstOrThrowArgs>(args?: SelectSubset<T, pacientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.pacientes.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.pacientes.findMany({ take: 10 })
     * 
     * // Only select the `usuario_id`
     * const pacientesWithUsuario_idOnly = await prisma.pacientes.findMany({ select: { usuario_id: true } })
     * 
     */
    findMany<T extends pacientesFindManyArgs>(args?: SelectSubset<T, pacientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pacientes.
     * @param {pacientesCreateArgs} args - Arguments to create a Pacientes.
     * @example
     * // Create one Pacientes
     * const Pacientes = await prisma.pacientes.create({
     *   data: {
     *     // ... data to create a Pacientes
     *   }
     * })
     * 
     */
    create<T extends pacientesCreateArgs>(args: SelectSubset<T, pacientesCreateArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {pacientesCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const pacientes = await prisma.pacientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pacientesCreateManyArgs>(args?: SelectSubset<T, pacientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pacientes and returns the data saved in the database.
     * @param {pacientesCreateManyAndReturnArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const pacientes = await prisma.pacientes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pacientes and only return the `usuario_id`
     * const pacientesWithUsuario_idOnly = await prisma.pacientes.createManyAndReturn({
     *   select: { usuario_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pacientesCreateManyAndReturnArgs>(args?: SelectSubset<T, pacientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pacientes.
     * @param {pacientesDeleteArgs} args - Arguments to delete one Pacientes.
     * @example
     * // Delete one Pacientes
     * const Pacientes = await prisma.pacientes.delete({
     *   where: {
     *     // ... filter to delete one Pacientes
     *   }
     * })
     * 
     */
    delete<T extends pacientesDeleteArgs>(args: SelectSubset<T, pacientesDeleteArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pacientes.
     * @param {pacientesUpdateArgs} args - Arguments to update one Pacientes.
     * @example
     * // Update one Pacientes
     * const pacientes = await prisma.pacientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pacientesUpdateArgs>(args: SelectSubset<T, pacientesUpdateArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {pacientesDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.pacientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pacientesDeleteManyArgs>(args?: SelectSubset<T, pacientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const pacientes = await prisma.pacientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pacientesUpdateManyArgs>(args: SelectSubset<T, pacientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes and returns the data updated in the database.
     * @param {pacientesUpdateManyAndReturnArgs} args - Arguments to update many Pacientes.
     * @example
     * // Update many Pacientes
     * const pacientes = await prisma.pacientes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pacientes and only return the `usuario_id`
     * const pacientesWithUsuario_idOnly = await prisma.pacientes.updateManyAndReturn({
     *   select: { usuario_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pacientesUpdateManyAndReturnArgs>(args: SelectSubset<T, pacientesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pacientes.
     * @param {pacientesUpsertArgs} args - Arguments to update or create a Pacientes.
     * @example
     * // Update or create a Pacientes
     * const pacientes = await prisma.pacientes.upsert({
     *   create: {
     *     // ... data to create a Pacientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pacientes we want to update
     *   }
     * })
     */
    upsert<T extends pacientesUpsertArgs>(args: SelectSubset<T, pacientesUpsertArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.pacientes.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends pacientesCountArgs>(
      args?: Subset<T, pacientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PacientesAggregateArgs>(args: Subset<T, PacientesAggregateArgs>): Prisma.PrismaPromise<GetPacientesAggregateType<T>>

    /**
     * Group by Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pacientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pacientesGroupByArgs['orderBy'] }
        : { orderBy?: pacientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pacientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pacientes model
   */
  readonly fields: pacientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pacientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pacientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    muestras<T extends pacientes$muestrasArgs<ExtArgs> = {}>(args?: Subset<T, pacientes$muestrasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$muestrasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pacientes model
   */
  interface pacientesFieldRefs {
    readonly usuario_id: FieldRef<"pacientes", 'BigInt'>
    readonly fecha_nacimiento: FieldRef<"pacientes", 'DateTime'>
    readonly telefono: FieldRef<"pacientes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * pacientes findUnique
   */
  export type pacientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes findUniqueOrThrow
   */
  export type pacientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes findFirst
   */
  export type pacientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pacientes.
     */
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes findFirstOrThrow
   */
  export type pacientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pacientes.
     */
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes findMany
   */
  export type pacientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes create
   */
  export type pacientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * The data needed to create a pacientes.
     */
    data: XOR<pacientesCreateInput, pacientesUncheckedCreateInput>
  }

  /**
   * pacientes createMany
   */
  export type pacientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pacientes.
     */
    data: pacientesCreateManyInput | pacientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pacientes createManyAndReturn
   */
  export type pacientesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * The data used to create many pacientes.
     */
    data: pacientesCreateManyInput | pacientesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pacientes update
   */
  export type pacientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * The data needed to update a pacientes.
     */
    data: XOR<pacientesUpdateInput, pacientesUncheckedUpdateInput>
    /**
     * Choose, which pacientes to update.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes updateMany
   */
  export type pacientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pacientes.
     */
    data: XOR<pacientesUpdateManyMutationInput, pacientesUncheckedUpdateManyInput>
    /**
     * Filter which pacientes to update
     */
    where?: pacientesWhereInput
    /**
     * Limit how many pacientes to update.
     */
    limit?: number
  }

  /**
   * pacientes updateManyAndReturn
   */
  export type pacientesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * The data used to update pacientes.
     */
    data: XOR<pacientesUpdateManyMutationInput, pacientesUncheckedUpdateManyInput>
    /**
     * Filter which pacientes to update
     */
    where?: pacientesWhereInput
    /**
     * Limit how many pacientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pacientes upsert
   */
  export type pacientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * The filter to search for the pacientes to update in case it exists.
     */
    where: pacientesWhereUniqueInput
    /**
     * In case the pacientes found by the `where` argument doesn't exist, create a new pacientes with this data.
     */
    create: XOR<pacientesCreateInput, pacientesUncheckedCreateInput>
    /**
     * In case the pacientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pacientesUpdateInput, pacientesUncheckedUpdateInput>
  }

  /**
   * pacientes delete
   */
  export type pacientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter which pacientes to delete.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes deleteMany
   */
  export type pacientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pacientes to delete
     */
    where?: pacientesWhereInput
    /**
     * Limit how many pacientes to delete.
     */
    limit?: number
  }

  /**
   * pacientes.muestras
   */
  export type pacientes$muestrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestras
     */
    select?: muestrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestras
     */
    omit?: muestrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestrasInclude<ExtArgs> | null
    where?: muestrasWhereInput
    orderBy?: muestrasOrderByWithRelationInput | muestrasOrderByWithRelationInput[]
    cursor?: muestrasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MuestrasScalarFieldEnum | MuestrasScalarFieldEnum[]
  }

  /**
   * pacientes without action
   */
  export type pacientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
  }


  /**
   * Model secretarios
   */

  export type AggregateSecretarios = {
    _count: SecretariosCountAggregateOutputType | null
    _avg: SecretariosAvgAggregateOutputType | null
    _sum: SecretariosSumAggregateOutputType | null
    _min: SecretariosMinAggregateOutputType | null
    _max: SecretariosMaxAggregateOutputType | null
  }

  export type SecretariosAvgAggregateOutputType = {
    usuario_id: number | null
  }

  export type SecretariosSumAggregateOutputType = {
    usuario_id: bigint | null
  }

  export type SecretariosMinAggregateOutputType = {
    usuario_id: bigint | null
  }

  export type SecretariosMaxAggregateOutputType = {
    usuario_id: bigint | null
  }

  export type SecretariosCountAggregateOutputType = {
    usuario_id: number
    _all: number
  }


  export type SecretariosAvgAggregateInputType = {
    usuario_id?: true
  }

  export type SecretariosSumAggregateInputType = {
    usuario_id?: true
  }

  export type SecretariosMinAggregateInputType = {
    usuario_id?: true
  }

  export type SecretariosMaxAggregateInputType = {
    usuario_id?: true
  }

  export type SecretariosCountAggregateInputType = {
    usuario_id?: true
    _all?: true
  }

  export type SecretariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which secretarios to aggregate.
     */
    where?: secretariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of secretarios to fetch.
     */
    orderBy?: secretariosOrderByWithRelationInput | secretariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: secretariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` secretarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` secretarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned secretarios
    **/
    _count?: true | SecretariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SecretariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SecretariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecretariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecretariosMaxAggregateInputType
  }

  export type GetSecretariosAggregateType<T extends SecretariosAggregateArgs> = {
        [P in keyof T & keyof AggregateSecretarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecretarios[P]>
      : GetScalarType<T[P], AggregateSecretarios[P]>
  }




  export type secretariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: secretariosWhereInput
    orderBy?: secretariosOrderByWithAggregationInput | secretariosOrderByWithAggregationInput[]
    by: SecretariosScalarFieldEnum[] | SecretariosScalarFieldEnum
    having?: secretariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecretariosCountAggregateInputType | true
    _avg?: SecretariosAvgAggregateInputType
    _sum?: SecretariosSumAggregateInputType
    _min?: SecretariosMinAggregateInputType
    _max?: SecretariosMaxAggregateInputType
  }

  export type SecretariosGroupByOutputType = {
    usuario_id: bigint
    _count: SecretariosCountAggregateOutputType | null
    _avg: SecretariosAvgAggregateOutputType | null
    _sum: SecretariosSumAggregateOutputType | null
    _min: SecretariosMinAggregateOutputType | null
    _max: SecretariosMaxAggregateOutputType | null
  }

  type GetSecretariosGroupByPayload<T extends secretariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecretariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecretariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecretariosGroupByOutputType[P]>
            : GetScalarType<T[P], SecretariosGroupByOutputType[P]>
        }
      >
    >


  export type secretariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    muestras?: boolean | secretarios$muestrasArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    _count?: boolean | SecretariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secretarios"]>

  export type secretariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secretarios"]>

  export type secretariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secretarios"]>

  export type secretariosSelectScalar = {
    usuario_id?: boolean
  }

  export type secretariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"usuario_id", ExtArgs["result"]["secretarios"]>
  export type secretariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muestras?: boolean | secretarios$muestrasArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    _count?: boolean | SecretariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type secretariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type secretariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $secretariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "secretarios"
    objects: {
      muestras: Prisma.$muestrasPayload<ExtArgs>[]
      usuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      usuario_id: bigint
    }, ExtArgs["result"]["secretarios"]>
    composites: {}
  }

  type secretariosGetPayload<S extends boolean | null | undefined | secretariosDefaultArgs> = $Result.GetResult<Prisma.$secretariosPayload, S>

  type secretariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<secretariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecretariosCountAggregateInputType | true
    }

  export interface secretariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['secretarios'], meta: { name: 'secretarios' } }
    /**
     * Find zero or one Secretarios that matches the filter.
     * @param {secretariosFindUniqueArgs} args - Arguments to find a Secretarios
     * @example
     * // Get one Secretarios
     * const secretarios = await prisma.secretarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends secretariosFindUniqueArgs>(args: SelectSubset<T, secretariosFindUniqueArgs<ExtArgs>>): Prisma__secretariosClient<$Result.GetResult<Prisma.$secretariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Secretarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {secretariosFindUniqueOrThrowArgs} args - Arguments to find a Secretarios
     * @example
     * // Get one Secretarios
     * const secretarios = await prisma.secretarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends secretariosFindUniqueOrThrowArgs>(args: SelectSubset<T, secretariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__secretariosClient<$Result.GetResult<Prisma.$secretariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Secretarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {secretariosFindFirstArgs} args - Arguments to find a Secretarios
     * @example
     * // Get one Secretarios
     * const secretarios = await prisma.secretarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends secretariosFindFirstArgs>(args?: SelectSubset<T, secretariosFindFirstArgs<ExtArgs>>): Prisma__secretariosClient<$Result.GetResult<Prisma.$secretariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Secretarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {secretariosFindFirstOrThrowArgs} args - Arguments to find a Secretarios
     * @example
     * // Get one Secretarios
     * const secretarios = await prisma.secretarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends secretariosFindFirstOrThrowArgs>(args?: SelectSubset<T, secretariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__secretariosClient<$Result.GetResult<Prisma.$secretariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Secretarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {secretariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Secretarios
     * const secretarios = await prisma.secretarios.findMany()
     * 
     * // Get first 10 Secretarios
     * const secretarios = await prisma.secretarios.findMany({ take: 10 })
     * 
     * // Only select the `usuario_id`
     * const secretariosWithUsuario_idOnly = await prisma.secretarios.findMany({ select: { usuario_id: true } })
     * 
     */
    findMany<T extends secretariosFindManyArgs>(args?: SelectSubset<T, secretariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$secretariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Secretarios.
     * @param {secretariosCreateArgs} args - Arguments to create a Secretarios.
     * @example
     * // Create one Secretarios
     * const Secretarios = await prisma.secretarios.create({
     *   data: {
     *     // ... data to create a Secretarios
     *   }
     * })
     * 
     */
    create<T extends secretariosCreateArgs>(args: SelectSubset<T, secretariosCreateArgs<ExtArgs>>): Prisma__secretariosClient<$Result.GetResult<Prisma.$secretariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Secretarios.
     * @param {secretariosCreateManyArgs} args - Arguments to create many Secretarios.
     * @example
     * // Create many Secretarios
     * const secretarios = await prisma.secretarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends secretariosCreateManyArgs>(args?: SelectSubset<T, secretariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Secretarios and returns the data saved in the database.
     * @param {secretariosCreateManyAndReturnArgs} args - Arguments to create many Secretarios.
     * @example
     * // Create many Secretarios
     * const secretarios = await prisma.secretarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Secretarios and only return the `usuario_id`
     * const secretariosWithUsuario_idOnly = await prisma.secretarios.createManyAndReturn({
     *   select: { usuario_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends secretariosCreateManyAndReturnArgs>(args?: SelectSubset<T, secretariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$secretariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Secretarios.
     * @param {secretariosDeleteArgs} args - Arguments to delete one Secretarios.
     * @example
     * // Delete one Secretarios
     * const Secretarios = await prisma.secretarios.delete({
     *   where: {
     *     // ... filter to delete one Secretarios
     *   }
     * })
     * 
     */
    delete<T extends secretariosDeleteArgs>(args: SelectSubset<T, secretariosDeleteArgs<ExtArgs>>): Prisma__secretariosClient<$Result.GetResult<Prisma.$secretariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Secretarios.
     * @param {secretariosUpdateArgs} args - Arguments to update one Secretarios.
     * @example
     * // Update one Secretarios
     * const secretarios = await prisma.secretarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends secretariosUpdateArgs>(args: SelectSubset<T, secretariosUpdateArgs<ExtArgs>>): Prisma__secretariosClient<$Result.GetResult<Prisma.$secretariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Secretarios.
     * @param {secretariosDeleteManyArgs} args - Arguments to filter Secretarios to delete.
     * @example
     * // Delete a few Secretarios
     * const { count } = await prisma.secretarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends secretariosDeleteManyArgs>(args?: SelectSubset<T, secretariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Secretarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {secretariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Secretarios
     * const secretarios = await prisma.secretarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends secretariosUpdateManyArgs>(args: SelectSubset<T, secretariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Secretarios and returns the data updated in the database.
     * @param {secretariosUpdateManyAndReturnArgs} args - Arguments to update many Secretarios.
     * @example
     * // Update many Secretarios
     * const secretarios = await prisma.secretarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Secretarios and only return the `usuario_id`
     * const secretariosWithUsuario_idOnly = await prisma.secretarios.updateManyAndReturn({
     *   select: { usuario_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends secretariosUpdateManyAndReturnArgs>(args: SelectSubset<T, secretariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$secretariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Secretarios.
     * @param {secretariosUpsertArgs} args - Arguments to update or create a Secretarios.
     * @example
     * // Update or create a Secretarios
     * const secretarios = await prisma.secretarios.upsert({
     *   create: {
     *     // ... data to create a Secretarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Secretarios we want to update
     *   }
     * })
     */
    upsert<T extends secretariosUpsertArgs>(args: SelectSubset<T, secretariosUpsertArgs<ExtArgs>>): Prisma__secretariosClient<$Result.GetResult<Prisma.$secretariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Secretarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {secretariosCountArgs} args - Arguments to filter Secretarios to count.
     * @example
     * // Count the number of Secretarios
     * const count = await prisma.secretarios.count({
     *   where: {
     *     // ... the filter for the Secretarios we want to count
     *   }
     * })
    **/
    count<T extends secretariosCountArgs>(
      args?: Subset<T, secretariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecretariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Secretarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SecretariosAggregateArgs>(args: Subset<T, SecretariosAggregateArgs>): Prisma.PrismaPromise<GetSecretariosAggregateType<T>>

    /**
     * Group by Secretarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {secretariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends secretariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: secretariosGroupByArgs['orderBy'] }
        : { orderBy?: secretariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, secretariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecretariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the secretarios model
   */
  readonly fields: secretariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for secretarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__secretariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    muestras<T extends secretarios$muestrasArgs<ExtArgs> = {}>(args?: Subset<T, secretarios$muestrasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$muestrasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the secretarios model
   */
  interface secretariosFieldRefs {
    readonly usuario_id: FieldRef<"secretarios", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * secretarios findUnique
   */
  export type secretariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secretarios
     */
    select?: secretariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secretarios
     */
    omit?: secretariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretariosInclude<ExtArgs> | null
    /**
     * Filter, which secretarios to fetch.
     */
    where: secretariosWhereUniqueInput
  }

  /**
   * secretarios findUniqueOrThrow
   */
  export type secretariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secretarios
     */
    select?: secretariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secretarios
     */
    omit?: secretariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretariosInclude<ExtArgs> | null
    /**
     * Filter, which secretarios to fetch.
     */
    where: secretariosWhereUniqueInput
  }

  /**
   * secretarios findFirst
   */
  export type secretariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secretarios
     */
    select?: secretariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secretarios
     */
    omit?: secretariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretariosInclude<ExtArgs> | null
    /**
     * Filter, which secretarios to fetch.
     */
    where?: secretariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of secretarios to fetch.
     */
    orderBy?: secretariosOrderByWithRelationInput | secretariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for secretarios.
     */
    cursor?: secretariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` secretarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` secretarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of secretarios.
     */
    distinct?: SecretariosScalarFieldEnum | SecretariosScalarFieldEnum[]
  }

  /**
   * secretarios findFirstOrThrow
   */
  export type secretariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secretarios
     */
    select?: secretariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secretarios
     */
    omit?: secretariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretariosInclude<ExtArgs> | null
    /**
     * Filter, which secretarios to fetch.
     */
    where?: secretariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of secretarios to fetch.
     */
    orderBy?: secretariosOrderByWithRelationInput | secretariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for secretarios.
     */
    cursor?: secretariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` secretarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` secretarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of secretarios.
     */
    distinct?: SecretariosScalarFieldEnum | SecretariosScalarFieldEnum[]
  }

  /**
   * secretarios findMany
   */
  export type secretariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secretarios
     */
    select?: secretariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secretarios
     */
    omit?: secretariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretariosInclude<ExtArgs> | null
    /**
     * Filter, which secretarios to fetch.
     */
    where?: secretariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of secretarios to fetch.
     */
    orderBy?: secretariosOrderByWithRelationInput | secretariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing secretarios.
     */
    cursor?: secretariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` secretarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` secretarios.
     */
    skip?: number
    distinct?: SecretariosScalarFieldEnum | SecretariosScalarFieldEnum[]
  }

  /**
   * secretarios create
   */
  export type secretariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secretarios
     */
    select?: secretariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secretarios
     */
    omit?: secretariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretariosInclude<ExtArgs> | null
    /**
     * The data needed to create a secretarios.
     */
    data: XOR<secretariosCreateInput, secretariosUncheckedCreateInput>
  }

  /**
   * secretarios createMany
   */
  export type secretariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many secretarios.
     */
    data: secretariosCreateManyInput | secretariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * secretarios createManyAndReturn
   */
  export type secretariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secretarios
     */
    select?: secretariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the secretarios
     */
    omit?: secretariosOmit<ExtArgs> | null
    /**
     * The data used to create many secretarios.
     */
    data: secretariosCreateManyInput | secretariosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretariosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * secretarios update
   */
  export type secretariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secretarios
     */
    select?: secretariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secretarios
     */
    omit?: secretariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretariosInclude<ExtArgs> | null
    /**
     * The data needed to update a secretarios.
     */
    data: XOR<secretariosUpdateInput, secretariosUncheckedUpdateInput>
    /**
     * Choose, which secretarios to update.
     */
    where: secretariosWhereUniqueInput
  }

  /**
   * secretarios updateMany
   */
  export type secretariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update secretarios.
     */
    data: XOR<secretariosUpdateManyMutationInput, secretariosUncheckedUpdateManyInput>
    /**
     * Filter which secretarios to update
     */
    where?: secretariosWhereInput
    /**
     * Limit how many secretarios to update.
     */
    limit?: number
  }

  /**
   * secretarios updateManyAndReturn
   */
  export type secretariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secretarios
     */
    select?: secretariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the secretarios
     */
    omit?: secretariosOmit<ExtArgs> | null
    /**
     * The data used to update secretarios.
     */
    data: XOR<secretariosUpdateManyMutationInput, secretariosUncheckedUpdateManyInput>
    /**
     * Filter which secretarios to update
     */
    where?: secretariosWhereInput
    /**
     * Limit how many secretarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretariosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * secretarios upsert
   */
  export type secretariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secretarios
     */
    select?: secretariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secretarios
     */
    omit?: secretariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretariosInclude<ExtArgs> | null
    /**
     * The filter to search for the secretarios to update in case it exists.
     */
    where: secretariosWhereUniqueInput
    /**
     * In case the secretarios found by the `where` argument doesn't exist, create a new secretarios with this data.
     */
    create: XOR<secretariosCreateInput, secretariosUncheckedCreateInput>
    /**
     * In case the secretarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<secretariosUpdateInput, secretariosUncheckedUpdateInput>
  }

  /**
   * secretarios delete
   */
  export type secretariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secretarios
     */
    select?: secretariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secretarios
     */
    omit?: secretariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretariosInclude<ExtArgs> | null
    /**
     * Filter which secretarios to delete.
     */
    where: secretariosWhereUniqueInput
  }

  /**
   * secretarios deleteMany
   */
  export type secretariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which secretarios to delete
     */
    where?: secretariosWhereInput
    /**
     * Limit how many secretarios to delete.
     */
    limit?: number
  }

  /**
   * secretarios.muestras
   */
  export type secretarios$muestrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the muestras
     */
    select?: muestrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the muestras
     */
    omit?: muestrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muestrasInclude<ExtArgs> | null
    where?: muestrasWhereInput
    orderBy?: muestrasOrderByWithRelationInput | muestrasOrderByWithRelationInput[]
    cursor?: muestrasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MuestrasScalarFieldEnum | MuestrasScalarFieldEnum[]
  }

  /**
   * secretarios without action
   */
  export type secretariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secretarios
     */
    select?: secretariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secretarios
     */
    omit?: secretariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretariosInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: bigint | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: bigint | null
    nombre: string | null
    apellido: string | null
    documento: string | null
    correo: string | null
    contrasenia: string | null
    tipo_usuario: string | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: bigint | null
    nombre: string | null
    apellido: string | null
    documento: string | null
    correo: string | null
    contrasenia: string | null
    tipo_usuario: string | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nombre: number
    apellido: number
    documento: number
    correo: number
    contrasenia: number
    tipo_usuario: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    documento?: true
    correo?: true
    contrasenia?: true
    tipo_usuario?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    documento?: true
    correo?: true
    contrasenia?: true
    tipo_usuario?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    documento?: true
    correo?: true
    contrasenia?: true
    tipo_usuario?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: bigint
    nombre: string
    apellido: string
    documento: string
    correo: string
    contrasenia: string
    tipo_usuario: string
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    documento?: boolean
    correo?: boolean
    contrasenia?: boolean
    tipo_usuario?: boolean
    medicos?: boolean | usuarios$medicosArgs<ExtArgs>
    pacientes?: boolean | usuarios$pacientesArgs<ExtArgs>
    secretarios?: boolean | usuarios$secretariosArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    documento?: boolean
    correo?: boolean
    contrasenia?: boolean
    tipo_usuario?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    documento?: boolean
    correo?: boolean
    contrasenia?: boolean
    tipo_usuario?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    documento?: boolean
    correo?: boolean
    contrasenia?: boolean
    tipo_usuario?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "apellido" | "documento" | "correo" | "contrasenia" | "tipo_usuario", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicos?: boolean | usuarios$medicosArgs<ExtArgs>
    pacientes?: boolean | usuarios$pacientesArgs<ExtArgs>
    secretarios?: boolean | usuarios$secretariosArgs<ExtArgs>
  }
  export type usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      medicos: Prisma.$medicosPayload<ExtArgs> | null
      pacientes: Prisma.$pacientesPayload<ExtArgs> | null
      secretarios: Prisma.$secretariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nombre: string
      apellido: string
      documento: string
      correo: string
      contrasenia: string
      tipo_usuario: string
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicos<T extends usuarios$medicosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$medicosArgs<ExtArgs>>): Prisma__medicosClient<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pacientes<T extends usuarios$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$pacientesArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    secretarios<T extends usuarios$secretariosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$secretariosArgs<ExtArgs>>): Prisma__secretariosClient<$Result.GetResult<Prisma.$secretariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'BigInt'>
    readonly nombre: FieldRef<"usuarios", 'String'>
    readonly apellido: FieldRef<"usuarios", 'String'>
    readonly documento: FieldRef<"usuarios", 'String'>
    readonly correo: FieldRef<"usuarios", 'String'>
    readonly contrasenia: FieldRef<"usuarios", 'String'>
    readonly tipo_usuario: FieldRef<"usuarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.medicos
   */
  export type usuarios$medicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicos
     */
    omit?: medicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
    where?: medicosWhereInput
  }

  /**
   * usuarios.pacientes
   */
  export type usuarios$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    where?: pacientesWhereInput
  }

  /**
   * usuarios.secretarios
   */
  export type usuarios$secretariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secretarios
     */
    select?: secretariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secretarios
     */
    omit?: secretariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: secretariosInclude<ExtArgs> | null
    where?: secretariosWhereInput
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CajaScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    tipo_transaccion: 'tipo_transaccion',
    categoria: 'categoria',
    monto: 'monto',
    fecha_transaccion: 'fecha_transaccion',
    descripcion: 'descripcion',
    id_muestra: 'id_muestra'
  };

  export type CajaScalarFieldEnum = (typeof CajaScalarFieldEnum)[keyof typeof CajaScalarFieldEnum]


  export const MaterialesScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type MaterialesScalarFieldEnum = (typeof MaterialesScalarFieldEnum)[keyof typeof MaterialesScalarFieldEnum]


  export const MedicosScalarFieldEnum: {
    usuario_id: 'usuario_id',
    matricula: 'matricula',
    especialidad: 'especialidad'
  };

  export type MedicosScalarFieldEnum = (typeof MedicosScalarFieldEnum)[keyof typeof MedicosScalarFieldEnum]


  export const Muestra_materialScalarFieldEnum: {
    id_muestra: 'id_muestra',
    id_material: 'id_material'
  };

  export type Muestra_materialScalarFieldEnum = (typeof Muestra_materialScalarFieldEnum)[keyof typeof Muestra_materialScalarFieldEnum]


  export const MuestrasScalarFieldEnum: {
    id: 'id',
    fecha_ingreso: 'fecha_ingreso',
    fecha_entrega: 'fecha_entrega',
    nro_autorizacion: 'nro_autorizacion',
    monto: 'monto',
    tipo_cobertura: 'tipo_cobertura',
    tipo_patologia: 'tipo_patologia',
    id_secretario: 'id_secretario',
    id_paciente: 'id_paciente',
    id_medico: 'id_medico',
    id_informe: 'id_informe'
  };

  export type MuestrasScalarFieldEnum = (typeof MuestrasScalarFieldEnum)[keyof typeof MuestrasScalarFieldEnum]


  export const InformesScalarFieldEnum: {
    id: 'id',
    tipo_informe: 'tipo_informe',
    descripcion: 'descripcion',
    fecha_creacion: 'fecha_creacion'
  };

  export type InformesScalarFieldEnum = (typeof InformesScalarFieldEnum)[keyof typeof InformesScalarFieldEnum]


  export const PacientesScalarFieldEnum: {
    usuario_id: 'usuario_id',
    fecha_nacimiento: 'fecha_nacimiento',
    telefono: 'telefono'
  };

  export type PacientesScalarFieldEnum = (typeof PacientesScalarFieldEnum)[keyof typeof PacientesScalarFieldEnum]


  export const SecretariosScalarFieldEnum: {
    usuario_id: 'usuario_id'
  };

  export type SecretariosScalarFieldEnum = (typeof SecretariosScalarFieldEnum)[keyof typeof SecretariosScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    documento: 'documento',
    correo: 'correo',
    contrasenia: 'contrasenia',
    tipo_usuario: 'tipo_usuario'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type cajaWhereInput = {
    AND?: cajaWhereInput | cajaWhereInput[]
    OR?: cajaWhereInput[]
    NOT?: cajaWhereInput | cajaWhereInput[]
    id?: BigIntFilter<"caja"> | bigint | number
    fecha?: DateTimeFilter<"caja"> | Date | string
    tipo_transaccion?: StringFilter<"caja"> | string
    categoria?: StringFilter<"caja"> | string
    monto?: DecimalFilter<"caja"> | Decimal | DecimalJsLike | number | string
    fecha_transaccion?: DateTimeFilter<"caja"> | Date | string
    descripcion?: StringNullableFilter<"caja"> | string | null
    id_muestra?: BigIntNullableFilter<"caja"> | bigint | number | null
    muestra?: XOR<MuestrasNullableScalarRelationFilter, muestrasWhereInput> | null
  }

  export type cajaOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    tipo_transaccion?: SortOrder
    categoria?: SortOrder
    monto?: SortOrder
    fecha_transaccion?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    id_muestra?: SortOrderInput | SortOrder
    muestra?: muestrasOrderByWithRelationInput
  }

  export type cajaWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: cajaWhereInput | cajaWhereInput[]
    OR?: cajaWhereInput[]
    NOT?: cajaWhereInput | cajaWhereInput[]
    fecha?: DateTimeFilter<"caja"> | Date | string
    tipo_transaccion?: StringFilter<"caja"> | string
    categoria?: StringFilter<"caja"> | string
    monto?: DecimalFilter<"caja"> | Decimal | DecimalJsLike | number | string
    fecha_transaccion?: DateTimeFilter<"caja"> | Date | string
    descripcion?: StringNullableFilter<"caja"> | string | null
    id_muestra?: BigIntNullableFilter<"caja"> | bigint | number | null
    muestra?: XOR<MuestrasNullableScalarRelationFilter, muestrasWhereInput> | null
  }, "id">

  export type cajaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    tipo_transaccion?: SortOrder
    categoria?: SortOrder
    monto?: SortOrder
    fecha_transaccion?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    id_muestra?: SortOrderInput | SortOrder
    _count?: cajaCountOrderByAggregateInput
    _avg?: cajaAvgOrderByAggregateInput
    _max?: cajaMaxOrderByAggregateInput
    _min?: cajaMinOrderByAggregateInput
    _sum?: cajaSumOrderByAggregateInput
  }

  export type cajaScalarWhereWithAggregatesInput = {
    AND?: cajaScalarWhereWithAggregatesInput | cajaScalarWhereWithAggregatesInput[]
    OR?: cajaScalarWhereWithAggregatesInput[]
    NOT?: cajaScalarWhereWithAggregatesInput | cajaScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"caja"> | bigint | number
    fecha?: DateTimeWithAggregatesFilter<"caja"> | Date | string
    tipo_transaccion?: StringWithAggregatesFilter<"caja"> | string
    categoria?: StringWithAggregatesFilter<"caja"> | string
    monto?: DecimalWithAggregatesFilter<"caja"> | Decimal | DecimalJsLike | number | string
    fecha_transaccion?: DateTimeWithAggregatesFilter<"caja"> | Date | string
    descripcion?: StringNullableWithAggregatesFilter<"caja"> | string | null
    id_muestra?: BigIntNullableWithAggregatesFilter<"caja"> | bigint | number | null
  }

  export type materialesWhereInput = {
    AND?: materialesWhereInput | materialesWhereInput[]
    OR?: materialesWhereInput[]
    NOT?: materialesWhereInput | materialesWhereInput[]
    id?: BigIntFilter<"materiales"> | bigint | number
    nombre?: StringFilter<"materiales"> | string
    descripcion?: StringNullableFilter<"materiales"> | string | null
    muestra_material?: Muestra_materialListRelationFilter
  }

  export type materialesOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    muestra_material?: muestra_materialOrderByRelationAggregateInput
  }

  export type materialesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: materialesWhereInput | materialesWhereInput[]
    OR?: materialesWhereInput[]
    NOT?: materialesWhereInput | materialesWhereInput[]
    nombre?: StringFilter<"materiales"> | string
    descripcion?: StringNullableFilter<"materiales"> | string | null
    muestra_material?: Muestra_materialListRelationFilter
  }, "id">

  export type materialesOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: materialesCountOrderByAggregateInput
    _avg?: materialesAvgOrderByAggregateInput
    _max?: materialesMaxOrderByAggregateInput
    _min?: materialesMinOrderByAggregateInput
    _sum?: materialesSumOrderByAggregateInput
  }

  export type materialesScalarWhereWithAggregatesInput = {
    AND?: materialesScalarWhereWithAggregatesInput | materialesScalarWhereWithAggregatesInput[]
    OR?: materialesScalarWhereWithAggregatesInput[]
    NOT?: materialesScalarWhereWithAggregatesInput | materialesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"materiales"> | bigint | number
    nombre?: StringWithAggregatesFilter<"materiales"> | string
    descripcion?: StringNullableWithAggregatesFilter<"materiales"> | string | null
  }

  export type medicosWhereInput = {
    AND?: medicosWhereInput | medicosWhereInput[]
    OR?: medicosWhereInput[]
    NOT?: medicosWhereInput | medicosWhereInput[]
    usuario_id?: BigIntFilter<"medicos"> | bigint | number
    matricula?: StringFilter<"medicos"> | string
    especialidad?: StringNullableFilter<"medicos"> | string | null
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    muestras?: MuestrasListRelationFilter
  }

  export type medicosOrderByWithRelationInput = {
    usuario_id?: SortOrder
    matricula?: SortOrder
    especialidad?: SortOrderInput | SortOrder
    usuarios?: usuariosOrderByWithRelationInput
    muestras?: muestrasOrderByRelationAggregateInput
  }

  export type medicosWhereUniqueInput = Prisma.AtLeast<{
    usuario_id?: bigint | number
    AND?: medicosWhereInput | medicosWhereInput[]
    OR?: medicosWhereInput[]
    NOT?: medicosWhereInput | medicosWhereInput[]
    matricula?: StringFilter<"medicos"> | string
    especialidad?: StringNullableFilter<"medicos"> | string | null
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    muestras?: MuestrasListRelationFilter
  }, "usuario_id">

  export type medicosOrderByWithAggregationInput = {
    usuario_id?: SortOrder
    matricula?: SortOrder
    especialidad?: SortOrderInput | SortOrder
    _count?: medicosCountOrderByAggregateInput
    _avg?: medicosAvgOrderByAggregateInput
    _max?: medicosMaxOrderByAggregateInput
    _min?: medicosMinOrderByAggregateInput
    _sum?: medicosSumOrderByAggregateInput
  }

  export type medicosScalarWhereWithAggregatesInput = {
    AND?: medicosScalarWhereWithAggregatesInput | medicosScalarWhereWithAggregatesInput[]
    OR?: medicosScalarWhereWithAggregatesInput[]
    NOT?: medicosScalarWhereWithAggregatesInput | medicosScalarWhereWithAggregatesInput[]
    usuario_id?: BigIntWithAggregatesFilter<"medicos"> | bigint | number
    matricula?: StringWithAggregatesFilter<"medicos"> | string
    especialidad?: StringNullableWithAggregatesFilter<"medicos"> | string | null
  }

  export type muestra_materialWhereInput = {
    AND?: muestra_materialWhereInput | muestra_materialWhereInput[]
    OR?: muestra_materialWhereInput[]
    NOT?: muestra_materialWhereInput | muestra_materialWhereInput[]
    id_muestra?: BigIntFilter<"muestra_material"> | bigint | number
    id_material?: BigIntFilter<"muestra_material"> | bigint | number
    materiales?: XOR<MaterialesScalarRelationFilter, materialesWhereInput>
    muestras?: XOR<MuestrasScalarRelationFilter, muestrasWhereInput>
  }

  export type muestra_materialOrderByWithRelationInput = {
    id_muestra?: SortOrder
    id_material?: SortOrder
    materiales?: materialesOrderByWithRelationInput
    muestras?: muestrasOrderByWithRelationInput
  }

  export type muestra_materialWhereUniqueInput = Prisma.AtLeast<{
    id_muestra_id_material?: muestra_materialId_muestraId_materialCompoundUniqueInput
    AND?: muestra_materialWhereInput | muestra_materialWhereInput[]
    OR?: muestra_materialWhereInput[]
    NOT?: muestra_materialWhereInput | muestra_materialWhereInput[]
    id_muestra?: BigIntFilter<"muestra_material"> | bigint | number
    id_material?: BigIntFilter<"muestra_material"> | bigint | number
    materiales?: XOR<MaterialesScalarRelationFilter, materialesWhereInput>
    muestras?: XOR<MuestrasScalarRelationFilter, muestrasWhereInput>
  }, "id_muestra_id_material">

  export type muestra_materialOrderByWithAggregationInput = {
    id_muestra?: SortOrder
    id_material?: SortOrder
    _count?: muestra_materialCountOrderByAggregateInput
    _avg?: muestra_materialAvgOrderByAggregateInput
    _max?: muestra_materialMaxOrderByAggregateInput
    _min?: muestra_materialMinOrderByAggregateInput
    _sum?: muestra_materialSumOrderByAggregateInput
  }

  export type muestra_materialScalarWhereWithAggregatesInput = {
    AND?: muestra_materialScalarWhereWithAggregatesInput | muestra_materialScalarWhereWithAggregatesInput[]
    OR?: muestra_materialScalarWhereWithAggregatesInput[]
    NOT?: muestra_materialScalarWhereWithAggregatesInput | muestra_materialScalarWhereWithAggregatesInput[]
    id_muestra?: BigIntWithAggregatesFilter<"muestra_material"> | bigint | number
    id_material?: BigIntWithAggregatesFilter<"muestra_material"> | bigint | number
  }

  export type muestrasWhereInput = {
    AND?: muestrasWhereInput | muestrasWhereInput[]
    OR?: muestrasWhereInput[]
    NOT?: muestrasWhereInput | muestrasWhereInput[]
    id?: BigIntFilter<"muestras"> | bigint | number
    fecha_ingreso?: DateTimeFilter<"muestras"> | Date | string
    fecha_entrega?: DateTimeFilter<"muestras"> | Date | string
    nro_autorizacion?: StringFilter<"muestras"> | string
    monto?: DecimalFilter<"muestras"> | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFilter<"muestras"> | boolean
    tipo_patologia?: StringFilter<"muestras"> | string
    id_secretario?: BigIntFilter<"muestras"> | bigint | number
    id_paciente?: BigIntFilter<"muestras"> | bigint | number
    id_medico?: BigIntFilter<"muestras"> | bigint | number
    id_informe?: BigIntFilter<"muestras"> | bigint | number
    muestra_material?: Muestra_materialListRelationFilter
    medicos?: XOR<MedicosScalarRelationFilter, medicosWhereInput>
    pacientes?: XOR<PacientesScalarRelationFilter, pacientesWhereInput>
    secretarios?: XOR<SecretariosScalarRelationFilter, secretariosWhereInput>
    caja?: CajaListRelationFilter
    informe?: XOR<InformesScalarRelationFilter, informesWhereInput>
  }

  export type muestrasOrderByWithRelationInput = {
    id?: SortOrder
    fecha_ingreso?: SortOrder
    fecha_entrega?: SortOrder
    nro_autorizacion?: SortOrder
    monto?: SortOrder
    tipo_cobertura?: SortOrder
    tipo_patologia?: SortOrder
    id_secretario?: SortOrder
    id_paciente?: SortOrder
    id_medico?: SortOrder
    id_informe?: SortOrder
    muestra_material?: muestra_materialOrderByRelationAggregateInput
    medicos?: medicosOrderByWithRelationInput
    pacientes?: pacientesOrderByWithRelationInput
    secretarios?: secretariosOrderByWithRelationInput
    caja?: cajaOrderByRelationAggregateInput
    informe?: informesOrderByWithRelationInput
  }

  export type muestrasWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    id_informe?: bigint | number
    AND?: muestrasWhereInput | muestrasWhereInput[]
    OR?: muestrasWhereInput[]
    NOT?: muestrasWhereInput | muestrasWhereInput[]
    fecha_ingreso?: DateTimeFilter<"muestras"> | Date | string
    fecha_entrega?: DateTimeFilter<"muestras"> | Date | string
    nro_autorizacion?: StringFilter<"muestras"> | string
    monto?: DecimalFilter<"muestras"> | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFilter<"muestras"> | boolean
    tipo_patologia?: StringFilter<"muestras"> | string
    id_secretario?: BigIntFilter<"muestras"> | bigint | number
    id_paciente?: BigIntFilter<"muestras"> | bigint | number
    id_medico?: BigIntFilter<"muestras"> | bigint | number
    muestra_material?: Muestra_materialListRelationFilter
    medicos?: XOR<MedicosScalarRelationFilter, medicosWhereInput>
    pacientes?: XOR<PacientesScalarRelationFilter, pacientesWhereInput>
    secretarios?: XOR<SecretariosScalarRelationFilter, secretariosWhereInput>
    caja?: CajaListRelationFilter
    informe?: XOR<InformesScalarRelationFilter, informesWhereInput>
  }, "id" | "id_informe">

  export type muestrasOrderByWithAggregationInput = {
    id?: SortOrder
    fecha_ingreso?: SortOrder
    fecha_entrega?: SortOrder
    nro_autorizacion?: SortOrder
    monto?: SortOrder
    tipo_cobertura?: SortOrder
    tipo_patologia?: SortOrder
    id_secretario?: SortOrder
    id_paciente?: SortOrder
    id_medico?: SortOrder
    id_informe?: SortOrder
    _count?: muestrasCountOrderByAggregateInput
    _avg?: muestrasAvgOrderByAggregateInput
    _max?: muestrasMaxOrderByAggregateInput
    _min?: muestrasMinOrderByAggregateInput
    _sum?: muestrasSumOrderByAggregateInput
  }

  export type muestrasScalarWhereWithAggregatesInput = {
    AND?: muestrasScalarWhereWithAggregatesInput | muestrasScalarWhereWithAggregatesInput[]
    OR?: muestrasScalarWhereWithAggregatesInput[]
    NOT?: muestrasScalarWhereWithAggregatesInput | muestrasScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"muestras"> | bigint | number
    fecha_ingreso?: DateTimeWithAggregatesFilter<"muestras"> | Date | string
    fecha_entrega?: DateTimeWithAggregatesFilter<"muestras"> | Date | string
    nro_autorizacion?: StringWithAggregatesFilter<"muestras"> | string
    monto?: DecimalWithAggregatesFilter<"muestras"> | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolWithAggregatesFilter<"muestras"> | boolean
    tipo_patologia?: StringWithAggregatesFilter<"muestras"> | string
    id_secretario?: BigIntWithAggregatesFilter<"muestras"> | bigint | number
    id_paciente?: BigIntWithAggregatesFilter<"muestras"> | bigint | number
    id_medico?: BigIntWithAggregatesFilter<"muestras"> | bigint | number
    id_informe?: BigIntWithAggregatesFilter<"muestras"> | bigint | number
  }

  export type informesWhereInput = {
    AND?: informesWhereInput | informesWhereInput[]
    OR?: informesWhereInput[]
    NOT?: informesWhereInput | informesWhereInput[]
    id?: BigIntFilter<"informes"> | bigint | number
    tipo_informe?: StringFilter<"informes"> | string
    descripcion?: StringFilter<"informes"> | string
    fecha_creacion?: DateTimeNullableFilter<"informes"> | Date | string | null
    muestra?: XOR<MuestrasNullableScalarRelationFilter, muestrasWhereInput> | null
  }

  export type informesOrderByWithRelationInput = {
    id?: SortOrder
    tipo_informe?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    muestra?: muestrasOrderByWithRelationInput
  }

  export type informesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: informesWhereInput | informesWhereInput[]
    OR?: informesWhereInput[]
    NOT?: informesWhereInput | informesWhereInput[]
    tipo_informe?: StringFilter<"informes"> | string
    descripcion?: StringFilter<"informes"> | string
    fecha_creacion?: DateTimeNullableFilter<"informes"> | Date | string | null
    muestra?: XOR<MuestrasNullableScalarRelationFilter, muestrasWhereInput> | null
  }, "id">

  export type informesOrderByWithAggregationInput = {
    id?: SortOrder
    tipo_informe?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    _count?: informesCountOrderByAggregateInput
    _avg?: informesAvgOrderByAggregateInput
    _max?: informesMaxOrderByAggregateInput
    _min?: informesMinOrderByAggregateInput
    _sum?: informesSumOrderByAggregateInput
  }

  export type informesScalarWhereWithAggregatesInput = {
    AND?: informesScalarWhereWithAggregatesInput | informesScalarWhereWithAggregatesInput[]
    OR?: informesScalarWhereWithAggregatesInput[]
    NOT?: informesScalarWhereWithAggregatesInput | informesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"informes"> | bigint | number
    tipo_informe?: StringWithAggregatesFilter<"informes"> | string
    descripcion?: StringWithAggregatesFilter<"informes"> | string
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"informes"> | Date | string | null
  }

  export type pacientesWhereInput = {
    AND?: pacientesWhereInput | pacientesWhereInput[]
    OR?: pacientesWhereInput[]
    NOT?: pacientesWhereInput | pacientesWhereInput[]
    usuario_id?: BigIntFilter<"pacientes"> | bigint | number
    fecha_nacimiento?: DateTimeNullableFilter<"pacientes"> | Date | string | null
    telefono?: StringFilter<"pacientes"> | string
    muestras?: MuestrasListRelationFilter
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type pacientesOrderByWithRelationInput = {
    usuario_id?: SortOrder
    fecha_nacimiento?: SortOrderInput | SortOrder
    telefono?: SortOrder
    muestras?: muestrasOrderByRelationAggregateInput
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type pacientesWhereUniqueInput = Prisma.AtLeast<{
    usuario_id?: bigint | number
    AND?: pacientesWhereInput | pacientesWhereInput[]
    OR?: pacientesWhereInput[]
    NOT?: pacientesWhereInput | pacientesWhereInput[]
    fecha_nacimiento?: DateTimeNullableFilter<"pacientes"> | Date | string | null
    telefono?: StringFilter<"pacientes"> | string
    muestras?: MuestrasListRelationFilter
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "usuario_id">

  export type pacientesOrderByWithAggregationInput = {
    usuario_id?: SortOrder
    fecha_nacimiento?: SortOrderInput | SortOrder
    telefono?: SortOrder
    _count?: pacientesCountOrderByAggregateInput
    _avg?: pacientesAvgOrderByAggregateInput
    _max?: pacientesMaxOrderByAggregateInput
    _min?: pacientesMinOrderByAggregateInput
    _sum?: pacientesSumOrderByAggregateInput
  }

  export type pacientesScalarWhereWithAggregatesInput = {
    AND?: pacientesScalarWhereWithAggregatesInput | pacientesScalarWhereWithAggregatesInput[]
    OR?: pacientesScalarWhereWithAggregatesInput[]
    NOT?: pacientesScalarWhereWithAggregatesInput | pacientesScalarWhereWithAggregatesInput[]
    usuario_id?: BigIntWithAggregatesFilter<"pacientes"> | bigint | number
    fecha_nacimiento?: DateTimeNullableWithAggregatesFilter<"pacientes"> | Date | string | null
    telefono?: StringWithAggregatesFilter<"pacientes"> | string
  }

  export type secretariosWhereInput = {
    AND?: secretariosWhereInput | secretariosWhereInput[]
    OR?: secretariosWhereInput[]
    NOT?: secretariosWhereInput | secretariosWhereInput[]
    usuario_id?: BigIntFilter<"secretarios"> | bigint | number
    muestras?: MuestrasListRelationFilter
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type secretariosOrderByWithRelationInput = {
    usuario_id?: SortOrder
    muestras?: muestrasOrderByRelationAggregateInput
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type secretariosWhereUniqueInput = Prisma.AtLeast<{
    usuario_id?: bigint | number
    AND?: secretariosWhereInput | secretariosWhereInput[]
    OR?: secretariosWhereInput[]
    NOT?: secretariosWhereInput | secretariosWhereInput[]
    muestras?: MuestrasListRelationFilter
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "usuario_id">

  export type secretariosOrderByWithAggregationInput = {
    usuario_id?: SortOrder
    _count?: secretariosCountOrderByAggregateInput
    _avg?: secretariosAvgOrderByAggregateInput
    _max?: secretariosMaxOrderByAggregateInput
    _min?: secretariosMinOrderByAggregateInput
    _sum?: secretariosSumOrderByAggregateInput
  }

  export type secretariosScalarWhereWithAggregatesInput = {
    AND?: secretariosScalarWhereWithAggregatesInput | secretariosScalarWhereWithAggregatesInput[]
    OR?: secretariosScalarWhereWithAggregatesInput[]
    NOT?: secretariosScalarWhereWithAggregatesInput | secretariosScalarWhereWithAggregatesInput[]
    usuario_id?: BigIntWithAggregatesFilter<"secretarios"> | bigint | number
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: BigIntFilter<"usuarios"> | bigint | number
    nombre?: StringFilter<"usuarios"> | string
    apellido?: StringFilter<"usuarios"> | string
    documento?: StringFilter<"usuarios"> | string
    correo?: StringFilter<"usuarios"> | string
    contrasenia?: StringFilter<"usuarios"> | string
    tipo_usuario?: StringFilter<"usuarios"> | string
    medicos?: XOR<MedicosNullableScalarRelationFilter, medicosWhereInput> | null
    pacientes?: XOR<PacientesNullableScalarRelationFilter, pacientesWhereInput> | null
    secretarios?: XOR<SecretariosNullableScalarRelationFilter, secretariosWhereInput> | null
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    documento?: SortOrder
    correo?: SortOrder
    contrasenia?: SortOrder
    tipo_usuario?: SortOrder
    medicos?: medicosOrderByWithRelationInput
    pacientes?: pacientesOrderByWithRelationInput
    secretarios?: secretariosOrderByWithRelationInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    documento?: string
    correo?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nombre?: StringFilter<"usuarios"> | string
    apellido?: StringFilter<"usuarios"> | string
    contrasenia?: StringFilter<"usuarios"> | string
    tipo_usuario?: StringFilter<"usuarios"> | string
    medicos?: XOR<MedicosNullableScalarRelationFilter, medicosWhereInput> | null
    pacientes?: XOR<PacientesNullableScalarRelationFilter, pacientesWhereInput> | null
    secretarios?: XOR<SecretariosNullableScalarRelationFilter, secretariosWhereInput> | null
  }, "id" | "documento" | "correo">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    documento?: SortOrder
    correo?: SortOrder
    contrasenia?: SortOrder
    tipo_usuario?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"usuarios"> | bigint | number
    nombre?: StringWithAggregatesFilter<"usuarios"> | string
    apellido?: StringWithAggregatesFilter<"usuarios"> | string
    documento?: StringWithAggregatesFilter<"usuarios"> | string
    correo?: StringWithAggregatesFilter<"usuarios"> | string
    contrasenia?: StringWithAggregatesFilter<"usuarios"> | string
    tipo_usuario?: StringWithAggregatesFilter<"usuarios"> | string
  }

  export type cajaCreateInput = {
    id?: bigint | number
    fecha?: Date | string
    tipo_transaccion: string
    categoria: string
    monto: Decimal | DecimalJsLike | number | string
    fecha_transaccion?: Date | string
    descripcion?: string | null
    muestra?: muestrasCreateNestedOneWithoutCajaInput
  }

  export type cajaUncheckedCreateInput = {
    id?: bigint | number
    fecha?: Date | string
    tipo_transaccion: string
    categoria: string
    monto: Decimal | DecimalJsLike | number | string
    fecha_transaccion?: Date | string
    descripcion?: string | null
    id_muestra?: bigint | number | null
  }

  export type cajaUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_transaccion?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    muestra?: muestrasUpdateOneWithoutCajaNestedInput
  }

  export type cajaUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_transaccion?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_muestra?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type cajaCreateManyInput = {
    id?: bigint | number
    fecha?: Date | string
    tipo_transaccion: string
    categoria: string
    monto: Decimal | DecimalJsLike | number | string
    fecha_transaccion?: Date | string
    descripcion?: string | null
    id_muestra?: bigint | number | null
  }

  export type cajaUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_transaccion?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cajaUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_transaccion?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_muestra?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type materialesCreateInput = {
    id?: bigint | number
    nombre: string
    descripcion?: string | null
    muestra_material?: muestra_materialCreateNestedManyWithoutMaterialesInput
  }

  export type materialesUncheckedCreateInput = {
    id?: bigint | number
    nombre: string
    descripcion?: string | null
    muestra_material?: muestra_materialUncheckedCreateNestedManyWithoutMaterialesInput
  }

  export type materialesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    muestra_material?: muestra_materialUpdateManyWithoutMaterialesNestedInput
  }

  export type materialesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    muestra_material?: muestra_materialUncheckedUpdateManyWithoutMaterialesNestedInput
  }

  export type materialesCreateManyInput = {
    id?: bigint | number
    nombre: string
    descripcion?: string | null
  }

  export type materialesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type materialesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type medicosCreateInput = {
    matricula: string
    especialidad?: string | null
    usuarios: usuariosCreateNestedOneWithoutMedicosInput
    muestras?: muestrasCreateNestedManyWithoutMedicosInput
  }

  export type medicosUncheckedCreateInput = {
    usuario_id: bigint | number
    matricula: string
    especialidad?: string | null
    muestras?: muestrasUncheckedCreateNestedManyWithoutMedicosInput
  }

  export type medicosUpdateInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: usuariosUpdateOneRequiredWithoutMedicosNestedInput
    muestras?: muestrasUpdateManyWithoutMedicosNestedInput
  }

  export type medicosUncheckedUpdateInput = {
    usuario_id?: BigIntFieldUpdateOperationsInput | bigint | number
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    muestras?: muestrasUncheckedUpdateManyWithoutMedicosNestedInput
  }

  export type medicosCreateManyInput = {
    usuario_id: bigint | number
    matricula: string
    especialidad?: string | null
  }

  export type medicosUpdateManyMutationInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type medicosUncheckedUpdateManyInput = {
    usuario_id?: BigIntFieldUpdateOperationsInput | bigint | number
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type muestra_materialCreateInput = {
    materiales: materialesCreateNestedOneWithoutMuestra_materialInput
    muestras: muestrasCreateNestedOneWithoutMuestra_materialInput
  }

  export type muestra_materialUncheckedCreateInput = {
    id_muestra: bigint | number
    id_material: bigint | number
  }

  export type muestra_materialUpdateInput = {
    materiales?: materialesUpdateOneRequiredWithoutMuestra_materialNestedInput
    muestras?: muestrasUpdateOneRequiredWithoutMuestra_materialNestedInput
  }

  export type muestra_materialUncheckedUpdateInput = {
    id_muestra?: BigIntFieldUpdateOperationsInput | bigint | number
    id_material?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type muestra_materialCreateManyInput = {
    id_muestra: bigint | number
    id_material: bigint | number
  }

  export type muestra_materialUpdateManyMutationInput = {

  }

  export type muestra_materialUncheckedUpdateManyInput = {
    id_muestra?: BigIntFieldUpdateOperationsInput | bigint | number
    id_material?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type muestrasCreateInput = {
    id?: bigint | number
    fecha_ingreso?: Date | string
    fecha_entrega: Date | string
    nro_autorizacion: string
    monto: Decimal | DecimalJsLike | number | string
    tipo_cobertura?: boolean
    tipo_patologia: string
    muestra_material?: muestra_materialCreateNestedManyWithoutMuestrasInput
    medicos: medicosCreateNestedOneWithoutMuestrasInput
    pacientes: pacientesCreateNestedOneWithoutMuestrasInput
    secretarios: secretariosCreateNestedOneWithoutMuestrasInput
    caja?: cajaCreateNestedManyWithoutMuestraInput
    informe: informesCreateNestedOneWithoutMuestraInput
  }

  export type muestrasUncheckedCreateInput = {
    id?: bigint | number
    fecha_ingreso?: Date | string
    fecha_entrega: Date | string
    nro_autorizacion: string
    monto: Decimal | DecimalJsLike | number | string
    tipo_cobertura?: boolean
    tipo_patologia: string
    id_secretario: bigint | number
    id_paciente: bigint | number
    id_medico: bigint | number
    id_informe: bigint | number
    muestra_material?: muestra_materialUncheckedCreateNestedManyWithoutMuestrasInput
    caja?: cajaUncheckedCreateNestedManyWithoutMuestraInput
  }

  export type muestrasUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_autorizacion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFieldUpdateOperationsInput | boolean
    tipo_patologia?: StringFieldUpdateOperationsInput | string
    muestra_material?: muestra_materialUpdateManyWithoutMuestrasNestedInput
    medicos?: medicosUpdateOneRequiredWithoutMuestrasNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutMuestrasNestedInput
    secretarios?: secretariosUpdateOneRequiredWithoutMuestrasNestedInput
    caja?: cajaUpdateManyWithoutMuestraNestedInput
    informe?: informesUpdateOneRequiredWithoutMuestraNestedInput
  }

  export type muestrasUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_autorizacion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFieldUpdateOperationsInput | boolean
    tipo_patologia?: StringFieldUpdateOperationsInput | string
    id_secretario?: BigIntFieldUpdateOperationsInput | bigint | number
    id_paciente?: BigIntFieldUpdateOperationsInput | bigint | number
    id_medico?: BigIntFieldUpdateOperationsInput | bigint | number
    id_informe?: BigIntFieldUpdateOperationsInput | bigint | number
    muestra_material?: muestra_materialUncheckedUpdateManyWithoutMuestrasNestedInput
    caja?: cajaUncheckedUpdateManyWithoutMuestraNestedInput
  }

  export type muestrasCreateManyInput = {
    id?: bigint | number
    fecha_ingreso?: Date | string
    fecha_entrega: Date | string
    nro_autorizacion: string
    monto: Decimal | DecimalJsLike | number | string
    tipo_cobertura?: boolean
    tipo_patologia: string
    id_secretario: bigint | number
    id_paciente: bigint | number
    id_medico: bigint | number
    id_informe: bigint | number
  }

  export type muestrasUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_autorizacion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFieldUpdateOperationsInput | boolean
    tipo_patologia?: StringFieldUpdateOperationsInput | string
  }

  export type muestrasUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_autorizacion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFieldUpdateOperationsInput | boolean
    tipo_patologia?: StringFieldUpdateOperationsInput | string
    id_secretario?: BigIntFieldUpdateOperationsInput | bigint | number
    id_paciente?: BigIntFieldUpdateOperationsInput | bigint | number
    id_medico?: BigIntFieldUpdateOperationsInput | bigint | number
    id_informe?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type informesCreateInput = {
    id?: bigint | number
    tipo_informe: string
    descripcion: string
    fecha_creacion?: Date | string | null
    muestra?: muestrasCreateNestedOneWithoutInformeInput
  }

  export type informesUncheckedCreateInput = {
    id?: bigint | number
    tipo_informe: string
    descripcion: string
    fecha_creacion?: Date | string | null
    muestra?: muestrasUncheckedCreateNestedOneWithoutInformeInput
  }

  export type informesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tipo_informe?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    muestra?: muestrasUpdateOneWithoutInformeNestedInput
  }

  export type informesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tipo_informe?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    muestra?: muestrasUncheckedUpdateOneWithoutInformeNestedInput
  }

  export type informesCreateManyInput = {
    id?: bigint | number
    tipo_informe: string
    descripcion: string
    fecha_creacion?: Date | string | null
  }

  export type informesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tipo_informe?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type informesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tipo_informe?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pacientesCreateInput = {
    fecha_nacimiento?: Date | string | null
    telefono: string
    muestras?: muestrasCreateNestedManyWithoutPacientesInput
    usuarios: usuariosCreateNestedOneWithoutPacientesInput
  }

  export type pacientesUncheckedCreateInput = {
    usuario_id: bigint | number
    fecha_nacimiento?: Date | string | null
    telefono: string
    muestras?: muestrasUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesUpdateInput = {
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: StringFieldUpdateOperationsInput | string
    muestras?: muestrasUpdateManyWithoutPacientesNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateInput = {
    usuario_id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: StringFieldUpdateOperationsInput | string
    muestras?: muestrasUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesCreateManyInput = {
    usuario_id: bigint | number
    fecha_nacimiento?: Date | string | null
    telefono: string
  }

  export type pacientesUpdateManyMutationInput = {
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type pacientesUncheckedUpdateManyInput = {
    usuario_id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type secretariosCreateInput = {
    muestras?: muestrasCreateNestedManyWithoutSecretariosInput
    usuarios: usuariosCreateNestedOneWithoutSecretariosInput
  }

  export type secretariosUncheckedCreateInput = {
    usuario_id: bigint | number
    muestras?: muestrasUncheckedCreateNestedManyWithoutSecretariosInput
  }

  export type secretariosUpdateInput = {
    muestras?: muestrasUpdateManyWithoutSecretariosNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutSecretariosNestedInput
  }

  export type secretariosUncheckedUpdateInput = {
    usuario_id?: BigIntFieldUpdateOperationsInput | bigint | number
    muestras?: muestrasUncheckedUpdateManyWithoutSecretariosNestedInput
  }

  export type secretariosCreateManyInput = {
    usuario_id: bigint | number
  }

  export type secretariosUpdateManyMutationInput = {

  }

  export type secretariosUncheckedUpdateManyInput = {
    usuario_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type usuariosCreateInput = {
    id?: bigint | number
    nombre: string
    apellido: string
    documento: string
    correo: string
    contrasenia: string
    tipo_usuario: string
    medicos?: medicosCreateNestedOneWithoutUsuariosInput
    pacientes?: pacientesCreateNestedOneWithoutUsuariosInput
    secretarios?: secretariosCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id?: bigint | number
    nombre: string
    apellido: string
    documento: string
    correo: string
    contrasenia: string
    tipo_usuario: string
    medicos?: medicosUncheckedCreateNestedOneWithoutUsuariosInput
    pacientes?: pacientesUncheckedCreateNestedOneWithoutUsuariosInput
    secretarios?: secretariosUncheckedCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    medicos?: medicosUpdateOneWithoutUsuariosNestedInput
    pacientes?: pacientesUpdateOneWithoutUsuariosNestedInput
    secretarios?: secretariosUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    medicos?: medicosUncheckedUpdateOneWithoutUsuariosNestedInput
    pacientes?: pacientesUncheckedUpdateOneWithoutUsuariosNestedInput
    secretarios?: secretariosUncheckedUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id?: bigint | number
    nombre: string
    apellido: string
    documento: string
    correo: string
    contrasenia: string
    tipo_usuario: string
  }

  export type usuariosUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type MuestrasNullableScalarRelationFilter = {
    is?: muestrasWhereInput | null
    isNot?: muestrasWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type cajaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    tipo_transaccion?: SortOrder
    categoria?: SortOrder
    monto?: SortOrder
    fecha_transaccion?: SortOrder
    descripcion?: SortOrder
    id_muestra?: SortOrder
  }

  export type cajaAvgOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    id_muestra?: SortOrder
  }

  export type cajaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    tipo_transaccion?: SortOrder
    categoria?: SortOrder
    monto?: SortOrder
    fecha_transaccion?: SortOrder
    descripcion?: SortOrder
    id_muestra?: SortOrder
  }

  export type cajaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    tipo_transaccion?: SortOrder
    categoria?: SortOrder
    monto?: SortOrder
    fecha_transaccion?: SortOrder
    descripcion?: SortOrder
    id_muestra?: SortOrder
  }

  export type cajaSumOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    id_muestra?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type Muestra_materialListRelationFilter = {
    every?: muestra_materialWhereInput
    some?: muestra_materialWhereInput
    none?: muestra_materialWhereInput
  }

  export type muestra_materialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type materialesCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type materialesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type materialesMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type materialesMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type materialesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type MuestrasListRelationFilter = {
    every?: muestrasWhereInput
    some?: muestrasWhereInput
    none?: muestrasWhereInput
  }

  export type muestrasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type medicosCountOrderByAggregateInput = {
    usuario_id?: SortOrder
    matricula?: SortOrder
    especialidad?: SortOrder
  }

  export type medicosAvgOrderByAggregateInput = {
    usuario_id?: SortOrder
  }

  export type medicosMaxOrderByAggregateInput = {
    usuario_id?: SortOrder
    matricula?: SortOrder
    especialidad?: SortOrder
  }

  export type medicosMinOrderByAggregateInput = {
    usuario_id?: SortOrder
    matricula?: SortOrder
    especialidad?: SortOrder
  }

  export type medicosSumOrderByAggregateInput = {
    usuario_id?: SortOrder
  }

  export type MaterialesScalarRelationFilter = {
    is?: materialesWhereInput
    isNot?: materialesWhereInput
  }

  export type MuestrasScalarRelationFilter = {
    is?: muestrasWhereInput
    isNot?: muestrasWhereInput
  }

  export type muestra_materialId_muestraId_materialCompoundUniqueInput = {
    id_muestra: bigint | number
    id_material: bigint | number
  }

  export type muestra_materialCountOrderByAggregateInput = {
    id_muestra?: SortOrder
    id_material?: SortOrder
  }

  export type muestra_materialAvgOrderByAggregateInput = {
    id_muestra?: SortOrder
    id_material?: SortOrder
  }

  export type muestra_materialMaxOrderByAggregateInput = {
    id_muestra?: SortOrder
    id_material?: SortOrder
  }

  export type muestra_materialMinOrderByAggregateInput = {
    id_muestra?: SortOrder
    id_material?: SortOrder
  }

  export type muestra_materialSumOrderByAggregateInput = {
    id_muestra?: SortOrder
    id_material?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MedicosScalarRelationFilter = {
    is?: medicosWhereInput
    isNot?: medicosWhereInput
  }

  export type PacientesScalarRelationFilter = {
    is?: pacientesWhereInput
    isNot?: pacientesWhereInput
  }

  export type SecretariosScalarRelationFilter = {
    is?: secretariosWhereInput
    isNot?: secretariosWhereInput
  }

  export type CajaListRelationFilter = {
    every?: cajaWhereInput
    some?: cajaWhereInput
    none?: cajaWhereInput
  }

  export type InformesScalarRelationFilter = {
    is?: informesWhereInput
    isNot?: informesWhereInput
  }

  export type cajaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type muestrasCountOrderByAggregateInput = {
    id?: SortOrder
    fecha_ingreso?: SortOrder
    fecha_entrega?: SortOrder
    nro_autorizacion?: SortOrder
    monto?: SortOrder
    tipo_cobertura?: SortOrder
    tipo_patologia?: SortOrder
    id_secretario?: SortOrder
    id_paciente?: SortOrder
    id_medico?: SortOrder
    id_informe?: SortOrder
  }

  export type muestrasAvgOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    id_secretario?: SortOrder
    id_paciente?: SortOrder
    id_medico?: SortOrder
    id_informe?: SortOrder
  }

  export type muestrasMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha_ingreso?: SortOrder
    fecha_entrega?: SortOrder
    nro_autorizacion?: SortOrder
    monto?: SortOrder
    tipo_cobertura?: SortOrder
    tipo_patologia?: SortOrder
    id_secretario?: SortOrder
    id_paciente?: SortOrder
    id_medico?: SortOrder
    id_informe?: SortOrder
  }

  export type muestrasMinOrderByAggregateInput = {
    id?: SortOrder
    fecha_ingreso?: SortOrder
    fecha_entrega?: SortOrder
    nro_autorizacion?: SortOrder
    monto?: SortOrder
    tipo_cobertura?: SortOrder
    tipo_patologia?: SortOrder
    id_secretario?: SortOrder
    id_paciente?: SortOrder
    id_medico?: SortOrder
    id_informe?: SortOrder
  }

  export type muestrasSumOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    id_secretario?: SortOrder
    id_paciente?: SortOrder
    id_medico?: SortOrder
    id_informe?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type informesCountOrderByAggregateInput = {
    id?: SortOrder
    tipo_informe?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type informesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type informesMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo_informe?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type informesMinOrderByAggregateInput = {
    id?: SortOrder
    tipo_informe?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type informesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type pacientesCountOrderByAggregateInput = {
    usuario_id?: SortOrder
    fecha_nacimiento?: SortOrder
    telefono?: SortOrder
  }

  export type pacientesAvgOrderByAggregateInput = {
    usuario_id?: SortOrder
  }

  export type pacientesMaxOrderByAggregateInput = {
    usuario_id?: SortOrder
    fecha_nacimiento?: SortOrder
    telefono?: SortOrder
  }

  export type pacientesMinOrderByAggregateInput = {
    usuario_id?: SortOrder
    fecha_nacimiento?: SortOrder
    telefono?: SortOrder
  }

  export type pacientesSumOrderByAggregateInput = {
    usuario_id?: SortOrder
  }

  export type secretariosCountOrderByAggregateInput = {
    usuario_id?: SortOrder
  }

  export type secretariosAvgOrderByAggregateInput = {
    usuario_id?: SortOrder
  }

  export type secretariosMaxOrderByAggregateInput = {
    usuario_id?: SortOrder
  }

  export type secretariosMinOrderByAggregateInput = {
    usuario_id?: SortOrder
  }

  export type secretariosSumOrderByAggregateInput = {
    usuario_id?: SortOrder
  }

  export type MedicosNullableScalarRelationFilter = {
    is?: medicosWhereInput | null
    isNot?: medicosWhereInput | null
  }

  export type PacientesNullableScalarRelationFilter = {
    is?: pacientesWhereInput | null
    isNot?: pacientesWhereInput | null
  }

  export type SecretariosNullableScalarRelationFilter = {
    is?: secretariosWhereInput | null
    isNot?: secretariosWhereInput | null
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    documento?: SortOrder
    correo?: SortOrder
    contrasenia?: SortOrder
    tipo_usuario?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    documento?: SortOrder
    correo?: SortOrder
    contrasenia?: SortOrder
    tipo_usuario?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    documento?: SortOrder
    correo?: SortOrder
    contrasenia?: SortOrder
    tipo_usuario?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type muestrasCreateNestedOneWithoutCajaInput = {
    create?: XOR<muestrasCreateWithoutCajaInput, muestrasUncheckedCreateWithoutCajaInput>
    connectOrCreate?: muestrasCreateOrConnectWithoutCajaInput
    connect?: muestrasWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type muestrasUpdateOneWithoutCajaNestedInput = {
    create?: XOR<muestrasCreateWithoutCajaInput, muestrasUncheckedCreateWithoutCajaInput>
    connectOrCreate?: muestrasCreateOrConnectWithoutCajaInput
    upsert?: muestrasUpsertWithoutCajaInput
    disconnect?: muestrasWhereInput | boolean
    delete?: muestrasWhereInput | boolean
    connect?: muestrasWhereUniqueInput
    update?: XOR<XOR<muestrasUpdateToOneWithWhereWithoutCajaInput, muestrasUpdateWithoutCajaInput>, muestrasUncheckedUpdateWithoutCajaInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type muestra_materialCreateNestedManyWithoutMaterialesInput = {
    create?: XOR<muestra_materialCreateWithoutMaterialesInput, muestra_materialUncheckedCreateWithoutMaterialesInput> | muestra_materialCreateWithoutMaterialesInput[] | muestra_materialUncheckedCreateWithoutMaterialesInput[]
    connectOrCreate?: muestra_materialCreateOrConnectWithoutMaterialesInput | muestra_materialCreateOrConnectWithoutMaterialesInput[]
    createMany?: muestra_materialCreateManyMaterialesInputEnvelope
    connect?: muestra_materialWhereUniqueInput | muestra_materialWhereUniqueInput[]
  }

  export type muestra_materialUncheckedCreateNestedManyWithoutMaterialesInput = {
    create?: XOR<muestra_materialCreateWithoutMaterialesInput, muestra_materialUncheckedCreateWithoutMaterialesInput> | muestra_materialCreateWithoutMaterialesInput[] | muestra_materialUncheckedCreateWithoutMaterialesInput[]
    connectOrCreate?: muestra_materialCreateOrConnectWithoutMaterialesInput | muestra_materialCreateOrConnectWithoutMaterialesInput[]
    createMany?: muestra_materialCreateManyMaterialesInputEnvelope
    connect?: muestra_materialWhereUniqueInput | muestra_materialWhereUniqueInput[]
  }

  export type muestra_materialUpdateManyWithoutMaterialesNestedInput = {
    create?: XOR<muestra_materialCreateWithoutMaterialesInput, muestra_materialUncheckedCreateWithoutMaterialesInput> | muestra_materialCreateWithoutMaterialesInput[] | muestra_materialUncheckedCreateWithoutMaterialesInput[]
    connectOrCreate?: muestra_materialCreateOrConnectWithoutMaterialesInput | muestra_materialCreateOrConnectWithoutMaterialesInput[]
    upsert?: muestra_materialUpsertWithWhereUniqueWithoutMaterialesInput | muestra_materialUpsertWithWhereUniqueWithoutMaterialesInput[]
    createMany?: muestra_materialCreateManyMaterialesInputEnvelope
    set?: muestra_materialWhereUniqueInput | muestra_materialWhereUniqueInput[]
    disconnect?: muestra_materialWhereUniqueInput | muestra_materialWhereUniqueInput[]
    delete?: muestra_materialWhereUniqueInput | muestra_materialWhereUniqueInput[]
    connect?: muestra_materialWhereUniqueInput | muestra_materialWhereUniqueInput[]
    update?: muestra_materialUpdateWithWhereUniqueWithoutMaterialesInput | muestra_materialUpdateWithWhereUniqueWithoutMaterialesInput[]
    updateMany?: muestra_materialUpdateManyWithWhereWithoutMaterialesInput | muestra_materialUpdateManyWithWhereWithoutMaterialesInput[]
    deleteMany?: muestra_materialScalarWhereInput | muestra_materialScalarWhereInput[]
  }

  export type muestra_materialUncheckedUpdateManyWithoutMaterialesNestedInput = {
    create?: XOR<muestra_materialCreateWithoutMaterialesInput, muestra_materialUncheckedCreateWithoutMaterialesInput> | muestra_materialCreateWithoutMaterialesInput[] | muestra_materialUncheckedCreateWithoutMaterialesInput[]
    connectOrCreate?: muestra_materialCreateOrConnectWithoutMaterialesInput | muestra_materialCreateOrConnectWithoutMaterialesInput[]
    upsert?: muestra_materialUpsertWithWhereUniqueWithoutMaterialesInput | muestra_materialUpsertWithWhereUniqueWithoutMaterialesInput[]
    createMany?: muestra_materialCreateManyMaterialesInputEnvelope
    set?: muestra_materialWhereUniqueInput | muestra_materialWhereUniqueInput[]
    disconnect?: muestra_materialWhereUniqueInput | muestra_materialWhereUniqueInput[]
    delete?: muestra_materialWhereUniqueInput | muestra_materialWhereUniqueInput[]
    connect?: muestra_materialWhereUniqueInput | muestra_materialWhereUniqueInput[]
    update?: muestra_materialUpdateWithWhereUniqueWithoutMaterialesInput | muestra_materialUpdateWithWhereUniqueWithoutMaterialesInput[]
    updateMany?: muestra_materialUpdateManyWithWhereWithoutMaterialesInput | muestra_materialUpdateManyWithWhereWithoutMaterialesInput[]
    deleteMany?: muestra_materialScalarWhereInput | muestra_materialScalarWhereInput[]
  }

  export type usuariosCreateNestedOneWithoutMedicosInput = {
    create?: XOR<usuariosCreateWithoutMedicosInput, usuariosUncheckedCreateWithoutMedicosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutMedicosInput
    connect?: usuariosWhereUniqueInput
  }

  export type muestrasCreateNestedManyWithoutMedicosInput = {
    create?: XOR<muestrasCreateWithoutMedicosInput, muestrasUncheckedCreateWithoutMedicosInput> | muestrasCreateWithoutMedicosInput[] | muestrasUncheckedCreateWithoutMedicosInput[]
    connectOrCreate?: muestrasCreateOrConnectWithoutMedicosInput | muestrasCreateOrConnectWithoutMedicosInput[]
    createMany?: muestrasCreateManyMedicosInputEnvelope
    connect?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
  }

  export type muestrasUncheckedCreateNestedManyWithoutMedicosInput = {
    create?: XOR<muestrasCreateWithoutMedicosInput, muestrasUncheckedCreateWithoutMedicosInput> | muestrasCreateWithoutMedicosInput[] | muestrasUncheckedCreateWithoutMedicosInput[]
    connectOrCreate?: muestrasCreateOrConnectWithoutMedicosInput | muestrasCreateOrConnectWithoutMedicosInput[]
    createMany?: muestrasCreateManyMedicosInputEnvelope
    connect?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
  }

  export type usuariosUpdateOneRequiredWithoutMedicosNestedInput = {
    create?: XOR<usuariosCreateWithoutMedicosInput, usuariosUncheckedCreateWithoutMedicosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutMedicosInput
    upsert?: usuariosUpsertWithoutMedicosInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutMedicosInput, usuariosUpdateWithoutMedicosInput>, usuariosUncheckedUpdateWithoutMedicosInput>
  }

  export type muestrasUpdateManyWithoutMedicosNestedInput = {
    create?: XOR<muestrasCreateWithoutMedicosInput, muestrasUncheckedCreateWithoutMedicosInput> | muestrasCreateWithoutMedicosInput[] | muestrasUncheckedCreateWithoutMedicosInput[]
    connectOrCreate?: muestrasCreateOrConnectWithoutMedicosInput | muestrasCreateOrConnectWithoutMedicosInput[]
    upsert?: muestrasUpsertWithWhereUniqueWithoutMedicosInput | muestrasUpsertWithWhereUniqueWithoutMedicosInput[]
    createMany?: muestrasCreateManyMedicosInputEnvelope
    set?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    disconnect?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    delete?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    connect?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    update?: muestrasUpdateWithWhereUniqueWithoutMedicosInput | muestrasUpdateWithWhereUniqueWithoutMedicosInput[]
    updateMany?: muestrasUpdateManyWithWhereWithoutMedicosInput | muestrasUpdateManyWithWhereWithoutMedicosInput[]
    deleteMany?: muestrasScalarWhereInput | muestrasScalarWhereInput[]
  }

  export type muestrasUncheckedUpdateManyWithoutMedicosNestedInput = {
    create?: XOR<muestrasCreateWithoutMedicosInput, muestrasUncheckedCreateWithoutMedicosInput> | muestrasCreateWithoutMedicosInput[] | muestrasUncheckedCreateWithoutMedicosInput[]
    connectOrCreate?: muestrasCreateOrConnectWithoutMedicosInput | muestrasCreateOrConnectWithoutMedicosInput[]
    upsert?: muestrasUpsertWithWhereUniqueWithoutMedicosInput | muestrasUpsertWithWhereUniqueWithoutMedicosInput[]
    createMany?: muestrasCreateManyMedicosInputEnvelope
    set?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    disconnect?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    delete?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    connect?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    update?: muestrasUpdateWithWhereUniqueWithoutMedicosInput | muestrasUpdateWithWhereUniqueWithoutMedicosInput[]
    updateMany?: muestrasUpdateManyWithWhereWithoutMedicosInput | muestrasUpdateManyWithWhereWithoutMedicosInput[]
    deleteMany?: muestrasScalarWhereInput | muestrasScalarWhereInput[]
  }

  export type materialesCreateNestedOneWithoutMuestra_materialInput = {
    create?: XOR<materialesCreateWithoutMuestra_materialInput, materialesUncheckedCreateWithoutMuestra_materialInput>
    connectOrCreate?: materialesCreateOrConnectWithoutMuestra_materialInput
    connect?: materialesWhereUniqueInput
  }

  export type muestrasCreateNestedOneWithoutMuestra_materialInput = {
    create?: XOR<muestrasCreateWithoutMuestra_materialInput, muestrasUncheckedCreateWithoutMuestra_materialInput>
    connectOrCreate?: muestrasCreateOrConnectWithoutMuestra_materialInput
    connect?: muestrasWhereUniqueInput
  }

  export type materialesUpdateOneRequiredWithoutMuestra_materialNestedInput = {
    create?: XOR<materialesCreateWithoutMuestra_materialInput, materialesUncheckedCreateWithoutMuestra_materialInput>
    connectOrCreate?: materialesCreateOrConnectWithoutMuestra_materialInput
    upsert?: materialesUpsertWithoutMuestra_materialInput
    connect?: materialesWhereUniqueInput
    update?: XOR<XOR<materialesUpdateToOneWithWhereWithoutMuestra_materialInput, materialesUpdateWithoutMuestra_materialInput>, materialesUncheckedUpdateWithoutMuestra_materialInput>
  }

  export type muestrasUpdateOneRequiredWithoutMuestra_materialNestedInput = {
    create?: XOR<muestrasCreateWithoutMuestra_materialInput, muestrasUncheckedCreateWithoutMuestra_materialInput>
    connectOrCreate?: muestrasCreateOrConnectWithoutMuestra_materialInput
    upsert?: muestrasUpsertWithoutMuestra_materialInput
    connect?: muestrasWhereUniqueInput
    update?: XOR<XOR<muestrasUpdateToOneWithWhereWithoutMuestra_materialInput, muestrasUpdateWithoutMuestra_materialInput>, muestrasUncheckedUpdateWithoutMuestra_materialInput>
  }

  export type muestra_materialCreateNestedManyWithoutMuestrasInput = {
    create?: XOR<muestra_materialCreateWithoutMuestrasInput, muestra_materialUncheckedCreateWithoutMuestrasInput> | muestra_materialCreateWithoutMuestrasInput[] | muestra_materialUncheckedCreateWithoutMuestrasInput[]
    connectOrCreate?: muestra_materialCreateOrConnectWithoutMuestrasInput | muestra_materialCreateOrConnectWithoutMuestrasInput[]
    createMany?: muestra_materialCreateManyMuestrasInputEnvelope
    connect?: muestra_materialWhereUniqueInput | muestra_materialWhereUniqueInput[]
  }

  export type medicosCreateNestedOneWithoutMuestrasInput = {
    create?: XOR<medicosCreateWithoutMuestrasInput, medicosUncheckedCreateWithoutMuestrasInput>
    connectOrCreate?: medicosCreateOrConnectWithoutMuestrasInput
    connect?: medicosWhereUniqueInput
  }

  export type pacientesCreateNestedOneWithoutMuestrasInput = {
    create?: XOR<pacientesCreateWithoutMuestrasInput, pacientesUncheckedCreateWithoutMuestrasInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutMuestrasInput
    connect?: pacientesWhereUniqueInput
  }

  export type secretariosCreateNestedOneWithoutMuestrasInput = {
    create?: XOR<secretariosCreateWithoutMuestrasInput, secretariosUncheckedCreateWithoutMuestrasInput>
    connectOrCreate?: secretariosCreateOrConnectWithoutMuestrasInput
    connect?: secretariosWhereUniqueInput
  }

  export type cajaCreateNestedManyWithoutMuestraInput = {
    create?: XOR<cajaCreateWithoutMuestraInput, cajaUncheckedCreateWithoutMuestraInput> | cajaCreateWithoutMuestraInput[] | cajaUncheckedCreateWithoutMuestraInput[]
    connectOrCreate?: cajaCreateOrConnectWithoutMuestraInput | cajaCreateOrConnectWithoutMuestraInput[]
    createMany?: cajaCreateManyMuestraInputEnvelope
    connect?: cajaWhereUniqueInput | cajaWhereUniqueInput[]
  }

  export type informesCreateNestedOneWithoutMuestraInput = {
    create?: XOR<informesCreateWithoutMuestraInput, informesUncheckedCreateWithoutMuestraInput>
    connectOrCreate?: informesCreateOrConnectWithoutMuestraInput
    connect?: informesWhereUniqueInput
  }

  export type muestra_materialUncheckedCreateNestedManyWithoutMuestrasInput = {
    create?: XOR<muestra_materialCreateWithoutMuestrasInput, muestra_materialUncheckedCreateWithoutMuestrasInput> | muestra_materialCreateWithoutMuestrasInput[] | muestra_materialUncheckedCreateWithoutMuestrasInput[]
    connectOrCreate?: muestra_materialCreateOrConnectWithoutMuestrasInput | muestra_materialCreateOrConnectWithoutMuestrasInput[]
    createMany?: muestra_materialCreateManyMuestrasInputEnvelope
    connect?: muestra_materialWhereUniqueInput | muestra_materialWhereUniqueInput[]
  }

  export type cajaUncheckedCreateNestedManyWithoutMuestraInput = {
    create?: XOR<cajaCreateWithoutMuestraInput, cajaUncheckedCreateWithoutMuestraInput> | cajaCreateWithoutMuestraInput[] | cajaUncheckedCreateWithoutMuestraInput[]
    connectOrCreate?: cajaCreateOrConnectWithoutMuestraInput | cajaCreateOrConnectWithoutMuestraInput[]
    createMany?: cajaCreateManyMuestraInputEnvelope
    connect?: cajaWhereUniqueInput | cajaWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type muestra_materialUpdateManyWithoutMuestrasNestedInput = {
    create?: XOR<muestra_materialCreateWithoutMuestrasInput, muestra_materialUncheckedCreateWithoutMuestrasInput> | muestra_materialCreateWithoutMuestrasInput[] | muestra_materialUncheckedCreateWithoutMuestrasInput[]
    connectOrCreate?: muestra_materialCreateOrConnectWithoutMuestrasInput | muestra_materialCreateOrConnectWithoutMuestrasInput[]
    upsert?: muestra_materialUpsertWithWhereUniqueWithoutMuestrasInput | muestra_materialUpsertWithWhereUniqueWithoutMuestrasInput[]
    createMany?: muestra_materialCreateManyMuestrasInputEnvelope
    set?: muestra_materialWhereUniqueInput | muestra_materialWhereUniqueInput[]
    disconnect?: muestra_materialWhereUniqueInput | muestra_materialWhereUniqueInput[]
    delete?: muestra_materialWhereUniqueInput | muestra_materialWhereUniqueInput[]
    connect?: muestra_materialWhereUniqueInput | muestra_materialWhereUniqueInput[]
    update?: muestra_materialUpdateWithWhereUniqueWithoutMuestrasInput | muestra_materialUpdateWithWhereUniqueWithoutMuestrasInput[]
    updateMany?: muestra_materialUpdateManyWithWhereWithoutMuestrasInput | muestra_materialUpdateManyWithWhereWithoutMuestrasInput[]
    deleteMany?: muestra_materialScalarWhereInput | muestra_materialScalarWhereInput[]
  }

  export type medicosUpdateOneRequiredWithoutMuestrasNestedInput = {
    create?: XOR<medicosCreateWithoutMuestrasInput, medicosUncheckedCreateWithoutMuestrasInput>
    connectOrCreate?: medicosCreateOrConnectWithoutMuestrasInput
    upsert?: medicosUpsertWithoutMuestrasInput
    connect?: medicosWhereUniqueInput
    update?: XOR<XOR<medicosUpdateToOneWithWhereWithoutMuestrasInput, medicosUpdateWithoutMuestrasInput>, medicosUncheckedUpdateWithoutMuestrasInput>
  }

  export type pacientesUpdateOneRequiredWithoutMuestrasNestedInput = {
    create?: XOR<pacientesCreateWithoutMuestrasInput, pacientesUncheckedCreateWithoutMuestrasInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutMuestrasInput
    upsert?: pacientesUpsertWithoutMuestrasInput
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutMuestrasInput, pacientesUpdateWithoutMuestrasInput>, pacientesUncheckedUpdateWithoutMuestrasInput>
  }

  export type secretariosUpdateOneRequiredWithoutMuestrasNestedInput = {
    create?: XOR<secretariosCreateWithoutMuestrasInput, secretariosUncheckedCreateWithoutMuestrasInput>
    connectOrCreate?: secretariosCreateOrConnectWithoutMuestrasInput
    upsert?: secretariosUpsertWithoutMuestrasInput
    connect?: secretariosWhereUniqueInput
    update?: XOR<XOR<secretariosUpdateToOneWithWhereWithoutMuestrasInput, secretariosUpdateWithoutMuestrasInput>, secretariosUncheckedUpdateWithoutMuestrasInput>
  }

  export type cajaUpdateManyWithoutMuestraNestedInput = {
    create?: XOR<cajaCreateWithoutMuestraInput, cajaUncheckedCreateWithoutMuestraInput> | cajaCreateWithoutMuestraInput[] | cajaUncheckedCreateWithoutMuestraInput[]
    connectOrCreate?: cajaCreateOrConnectWithoutMuestraInput | cajaCreateOrConnectWithoutMuestraInput[]
    upsert?: cajaUpsertWithWhereUniqueWithoutMuestraInput | cajaUpsertWithWhereUniqueWithoutMuestraInput[]
    createMany?: cajaCreateManyMuestraInputEnvelope
    set?: cajaWhereUniqueInput | cajaWhereUniqueInput[]
    disconnect?: cajaWhereUniqueInput | cajaWhereUniqueInput[]
    delete?: cajaWhereUniqueInput | cajaWhereUniqueInput[]
    connect?: cajaWhereUniqueInput | cajaWhereUniqueInput[]
    update?: cajaUpdateWithWhereUniqueWithoutMuestraInput | cajaUpdateWithWhereUniqueWithoutMuestraInput[]
    updateMany?: cajaUpdateManyWithWhereWithoutMuestraInput | cajaUpdateManyWithWhereWithoutMuestraInput[]
    deleteMany?: cajaScalarWhereInput | cajaScalarWhereInput[]
  }

  export type informesUpdateOneRequiredWithoutMuestraNestedInput = {
    create?: XOR<informesCreateWithoutMuestraInput, informesUncheckedCreateWithoutMuestraInput>
    connectOrCreate?: informesCreateOrConnectWithoutMuestraInput
    upsert?: informesUpsertWithoutMuestraInput
    connect?: informesWhereUniqueInput
    update?: XOR<XOR<informesUpdateToOneWithWhereWithoutMuestraInput, informesUpdateWithoutMuestraInput>, informesUncheckedUpdateWithoutMuestraInput>
  }

  export type muestra_materialUncheckedUpdateManyWithoutMuestrasNestedInput = {
    create?: XOR<muestra_materialCreateWithoutMuestrasInput, muestra_materialUncheckedCreateWithoutMuestrasInput> | muestra_materialCreateWithoutMuestrasInput[] | muestra_materialUncheckedCreateWithoutMuestrasInput[]
    connectOrCreate?: muestra_materialCreateOrConnectWithoutMuestrasInput | muestra_materialCreateOrConnectWithoutMuestrasInput[]
    upsert?: muestra_materialUpsertWithWhereUniqueWithoutMuestrasInput | muestra_materialUpsertWithWhereUniqueWithoutMuestrasInput[]
    createMany?: muestra_materialCreateManyMuestrasInputEnvelope
    set?: muestra_materialWhereUniqueInput | muestra_materialWhereUniqueInput[]
    disconnect?: muestra_materialWhereUniqueInput | muestra_materialWhereUniqueInput[]
    delete?: muestra_materialWhereUniqueInput | muestra_materialWhereUniqueInput[]
    connect?: muestra_materialWhereUniqueInput | muestra_materialWhereUniqueInput[]
    update?: muestra_materialUpdateWithWhereUniqueWithoutMuestrasInput | muestra_materialUpdateWithWhereUniqueWithoutMuestrasInput[]
    updateMany?: muestra_materialUpdateManyWithWhereWithoutMuestrasInput | muestra_materialUpdateManyWithWhereWithoutMuestrasInput[]
    deleteMany?: muestra_materialScalarWhereInput | muestra_materialScalarWhereInput[]
  }

  export type cajaUncheckedUpdateManyWithoutMuestraNestedInput = {
    create?: XOR<cajaCreateWithoutMuestraInput, cajaUncheckedCreateWithoutMuestraInput> | cajaCreateWithoutMuestraInput[] | cajaUncheckedCreateWithoutMuestraInput[]
    connectOrCreate?: cajaCreateOrConnectWithoutMuestraInput | cajaCreateOrConnectWithoutMuestraInput[]
    upsert?: cajaUpsertWithWhereUniqueWithoutMuestraInput | cajaUpsertWithWhereUniqueWithoutMuestraInput[]
    createMany?: cajaCreateManyMuestraInputEnvelope
    set?: cajaWhereUniqueInput | cajaWhereUniqueInput[]
    disconnect?: cajaWhereUniqueInput | cajaWhereUniqueInput[]
    delete?: cajaWhereUniqueInput | cajaWhereUniqueInput[]
    connect?: cajaWhereUniqueInput | cajaWhereUniqueInput[]
    update?: cajaUpdateWithWhereUniqueWithoutMuestraInput | cajaUpdateWithWhereUniqueWithoutMuestraInput[]
    updateMany?: cajaUpdateManyWithWhereWithoutMuestraInput | cajaUpdateManyWithWhereWithoutMuestraInput[]
    deleteMany?: cajaScalarWhereInput | cajaScalarWhereInput[]
  }

  export type muestrasCreateNestedOneWithoutInformeInput = {
    create?: XOR<muestrasCreateWithoutInformeInput, muestrasUncheckedCreateWithoutInformeInput>
    connectOrCreate?: muestrasCreateOrConnectWithoutInformeInput
    connect?: muestrasWhereUniqueInput
  }

  export type muestrasUncheckedCreateNestedOneWithoutInformeInput = {
    create?: XOR<muestrasCreateWithoutInformeInput, muestrasUncheckedCreateWithoutInformeInput>
    connectOrCreate?: muestrasCreateOrConnectWithoutInformeInput
    connect?: muestrasWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type muestrasUpdateOneWithoutInformeNestedInput = {
    create?: XOR<muestrasCreateWithoutInformeInput, muestrasUncheckedCreateWithoutInformeInput>
    connectOrCreate?: muestrasCreateOrConnectWithoutInformeInput
    upsert?: muestrasUpsertWithoutInformeInput
    disconnect?: muestrasWhereInput | boolean
    delete?: muestrasWhereInput | boolean
    connect?: muestrasWhereUniqueInput
    update?: XOR<XOR<muestrasUpdateToOneWithWhereWithoutInformeInput, muestrasUpdateWithoutInformeInput>, muestrasUncheckedUpdateWithoutInformeInput>
  }

  export type muestrasUncheckedUpdateOneWithoutInformeNestedInput = {
    create?: XOR<muestrasCreateWithoutInformeInput, muestrasUncheckedCreateWithoutInformeInput>
    connectOrCreate?: muestrasCreateOrConnectWithoutInformeInput
    upsert?: muestrasUpsertWithoutInformeInput
    disconnect?: muestrasWhereInput | boolean
    delete?: muestrasWhereInput | boolean
    connect?: muestrasWhereUniqueInput
    update?: XOR<XOR<muestrasUpdateToOneWithWhereWithoutInformeInput, muestrasUpdateWithoutInformeInput>, muestrasUncheckedUpdateWithoutInformeInput>
  }

  export type muestrasCreateNestedManyWithoutPacientesInput = {
    create?: XOR<muestrasCreateWithoutPacientesInput, muestrasUncheckedCreateWithoutPacientesInput> | muestrasCreateWithoutPacientesInput[] | muestrasUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: muestrasCreateOrConnectWithoutPacientesInput | muestrasCreateOrConnectWithoutPacientesInput[]
    createMany?: muestrasCreateManyPacientesInputEnvelope
    connect?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
  }

  export type usuariosCreateNestedOneWithoutPacientesInput = {
    create?: XOR<usuariosCreateWithoutPacientesInput, usuariosUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutPacientesInput
    connect?: usuariosWhereUniqueInput
  }

  export type muestrasUncheckedCreateNestedManyWithoutPacientesInput = {
    create?: XOR<muestrasCreateWithoutPacientesInput, muestrasUncheckedCreateWithoutPacientesInput> | muestrasCreateWithoutPacientesInput[] | muestrasUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: muestrasCreateOrConnectWithoutPacientesInput | muestrasCreateOrConnectWithoutPacientesInput[]
    createMany?: muestrasCreateManyPacientesInputEnvelope
    connect?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
  }

  export type muestrasUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<muestrasCreateWithoutPacientesInput, muestrasUncheckedCreateWithoutPacientesInput> | muestrasCreateWithoutPacientesInput[] | muestrasUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: muestrasCreateOrConnectWithoutPacientesInput | muestrasCreateOrConnectWithoutPacientesInput[]
    upsert?: muestrasUpsertWithWhereUniqueWithoutPacientesInput | muestrasUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: muestrasCreateManyPacientesInputEnvelope
    set?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    disconnect?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    delete?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    connect?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    update?: muestrasUpdateWithWhereUniqueWithoutPacientesInput | muestrasUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: muestrasUpdateManyWithWhereWithoutPacientesInput | muestrasUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: muestrasScalarWhereInput | muestrasScalarWhereInput[]
  }

  export type usuariosUpdateOneRequiredWithoutPacientesNestedInput = {
    create?: XOR<usuariosCreateWithoutPacientesInput, usuariosUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutPacientesInput
    upsert?: usuariosUpsertWithoutPacientesInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutPacientesInput, usuariosUpdateWithoutPacientesInput>, usuariosUncheckedUpdateWithoutPacientesInput>
  }

  export type muestrasUncheckedUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<muestrasCreateWithoutPacientesInput, muestrasUncheckedCreateWithoutPacientesInput> | muestrasCreateWithoutPacientesInput[] | muestrasUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: muestrasCreateOrConnectWithoutPacientesInput | muestrasCreateOrConnectWithoutPacientesInput[]
    upsert?: muestrasUpsertWithWhereUniqueWithoutPacientesInput | muestrasUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: muestrasCreateManyPacientesInputEnvelope
    set?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    disconnect?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    delete?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    connect?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    update?: muestrasUpdateWithWhereUniqueWithoutPacientesInput | muestrasUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: muestrasUpdateManyWithWhereWithoutPacientesInput | muestrasUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: muestrasScalarWhereInput | muestrasScalarWhereInput[]
  }

  export type muestrasCreateNestedManyWithoutSecretariosInput = {
    create?: XOR<muestrasCreateWithoutSecretariosInput, muestrasUncheckedCreateWithoutSecretariosInput> | muestrasCreateWithoutSecretariosInput[] | muestrasUncheckedCreateWithoutSecretariosInput[]
    connectOrCreate?: muestrasCreateOrConnectWithoutSecretariosInput | muestrasCreateOrConnectWithoutSecretariosInput[]
    createMany?: muestrasCreateManySecretariosInputEnvelope
    connect?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
  }

  export type usuariosCreateNestedOneWithoutSecretariosInput = {
    create?: XOR<usuariosCreateWithoutSecretariosInput, usuariosUncheckedCreateWithoutSecretariosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutSecretariosInput
    connect?: usuariosWhereUniqueInput
  }

  export type muestrasUncheckedCreateNestedManyWithoutSecretariosInput = {
    create?: XOR<muestrasCreateWithoutSecretariosInput, muestrasUncheckedCreateWithoutSecretariosInput> | muestrasCreateWithoutSecretariosInput[] | muestrasUncheckedCreateWithoutSecretariosInput[]
    connectOrCreate?: muestrasCreateOrConnectWithoutSecretariosInput | muestrasCreateOrConnectWithoutSecretariosInput[]
    createMany?: muestrasCreateManySecretariosInputEnvelope
    connect?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
  }

  export type muestrasUpdateManyWithoutSecretariosNestedInput = {
    create?: XOR<muestrasCreateWithoutSecretariosInput, muestrasUncheckedCreateWithoutSecretariosInput> | muestrasCreateWithoutSecretariosInput[] | muestrasUncheckedCreateWithoutSecretariosInput[]
    connectOrCreate?: muestrasCreateOrConnectWithoutSecretariosInput | muestrasCreateOrConnectWithoutSecretariosInput[]
    upsert?: muestrasUpsertWithWhereUniqueWithoutSecretariosInput | muestrasUpsertWithWhereUniqueWithoutSecretariosInput[]
    createMany?: muestrasCreateManySecretariosInputEnvelope
    set?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    disconnect?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    delete?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    connect?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    update?: muestrasUpdateWithWhereUniqueWithoutSecretariosInput | muestrasUpdateWithWhereUniqueWithoutSecretariosInput[]
    updateMany?: muestrasUpdateManyWithWhereWithoutSecretariosInput | muestrasUpdateManyWithWhereWithoutSecretariosInput[]
    deleteMany?: muestrasScalarWhereInput | muestrasScalarWhereInput[]
  }

  export type usuariosUpdateOneRequiredWithoutSecretariosNestedInput = {
    create?: XOR<usuariosCreateWithoutSecretariosInput, usuariosUncheckedCreateWithoutSecretariosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutSecretariosInput
    upsert?: usuariosUpsertWithoutSecretariosInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutSecretariosInput, usuariosUpdateWithoutSecretariosInput>, usuariosUncheckedUpdateWithoutSecretariosInput>
  }

  export type muestrasUncheckedUpdateManyWithoutSecretariosNestedInput = {
    create?: XOR<muestrasCreateWithoutSecretariosInput, muestrasUncheckedCreateWithoutSecretariosInput> | muestrasCreateWithoutSecretariosInput[] | muestrasUncheckedCreateWithoutSecretariosInput[]
    connectOrCreate?: muestrasCreateOrConnectWithoutSecretariosInput | muestrasCreateOrConnectWithoutSecretariosInput[]
    upsert?: muestrasUpsertWithWhereUniqueWithoutSecretariosInput | muestrasUpsertWithWhereUniqueWithoutSecretariosInput[]
    createMany?: muestrasCreateManySecretariosInputEnvelope
    set?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    disconnect?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    delete?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    connect?: muestrasWhereUniqueInput | muestrasWhereUniqueInput[]
    update?: muestrasUpdateWithWhereUniqueWithoutSecretariosInput | muestrasUpdateWithWhereUniqueWithoutSecretariosInput[]
    updateMany?: muestrasUpdateManyWithWhereWithoutSecretariosInput | muestrasUpdateManyWithWhereWithoutSecretariosInput[]
    deleteMany?: muestrasScalarWhereInput | muestrasScalarWhereInput[]
  }

  export type medicosCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<medicosCreateWithoutUsuariosInput, medicosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: medicosCreateOrConnectWithoutUsuariosInput
    connect?: medicosWhereUniqueInput
  }

  export type pacientesCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutUsuariosInput
    connect?: pacientesWhereUniqueInput
  }

  export type secretariosCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<secretariosCreateWithoutUsuariosInput, secretariosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: secretariosCreateOrConnectWithoutUsuariosInput
    connect?: secretariosWhereUniqueInput
  }

  export type medicosUncheckedCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<medicosCreateWithoutUsuariosInput, medicosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: medicosCreateOrConnectWithoutUsuariosInput
    connect?: medicosWhereUniqueInput
  }

  export type pacientesUncheckedCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutUsuariosInput
    connect?: pacientesWhereUniqueInput
  }

  export type secretariosUncheckedCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<secretariosCreateWithoutUsuariosInput, secretariosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: secretariosCreateOrConnectWithoutUsuariosInput
    connect?: secretariosWhereUniqueInput
  }

  export type medicosUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<medicosCreateWithoutUsuariosInput, medicosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: medicosCreateOrConnectWithoutUsuariosInput
    upsert?: medicosUpsertWithoutUsuariosInput
    disconnect?: medicosWhereInput | boolean
    delete?: medicosWhereInput | boolean
    connect?: medicosWhereUniqueInput
    update?: XOR<XOR<medicosUpdateToOneWithWhereWithoutUsuariosInput, medicosUpdateWithoutUsuariosInput>, medicosUncheckedUpdateWithoutUsuariosInput>
  }

  export type pacientesUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutUsuariosInput
    upsert?: pacientesUpsertWithoutUsuariosInput
    disconnect?: pacientesWhereInput | boolean
    delete?: pacientesWhereInput | boolean
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutUsuariosInput, pacientesUpdateWithoutUsuariosInput>, pacientesUncheckedUpdateWithoutUsuariosInput>
  }

  export type secretariosUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<secretariosCreateWithoutUsuariosInput, secretariosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: secretariosCreateOrConnectWithoutUsuariosInput
    upsert?: secretariosUpsertWithoutUsuariosInput
    disconnect?: secretariosWhereInput | boolean
    delete?: secretariosWhereInput | boolean
    connect?: secretariosWhereUniqueInput
    update?: XOR<XOR<secretariosUpdateToOneWithWhereWithoutUsuariosInput, secretariosUpdateWithoutUsuariosInput>, secretariosUncheckedUpdateWithoutUsuariosInput>
  }

  export type medicosUncheckedUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<medicosCreateWithoutUsuariosInput, medicosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: medicosCreateOrConnectWithoutUsuariosInput
    upsert?: medicosUpsertWithoutUsuariosInput
    disconnect?: medicosWhereInput | boolean
    delete?: medicosWhereInput | boolean
    connect?: medicosWhereUniqueInput
    update?: XOR<XOR<medicosUpdateToOneWithWhereWithoutUsuariosInput, medicosUpdateWithoutUsuariosInput>, medicosUncheckedUpdateWithoutUsuariosInput>
  }

  export type pacientesUncheckedUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutUsuariosInput
    upsert?: pacientesUpsertWithoutUsuariosInput
    disconnect?: pacientesWhereInput | boolean
    delete?: pacientesWhereInput | boolean
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutUsuariosInput, pacientesUpdateWithoutUsuariosInput>, pacientesUncheckedUpdateWithoutUsuariosInput>
  }

  export type secretariosUncheckedUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<secretariosCreateWithoutUsuariosInput, secretariosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: secretariosCreateOrConnectWithoutUsuariosInput
    upsert?: secretariosUpsertWithoutUsuariosInput
    disconnect?: secretariosWhereInput | boolean
    delete?: secretariosWhereInput | boolean
    connect?: secretariosWhereUniqueInput
    update?: XOR<XOR<secretariosUpdateToOneWithWhereWithoutUsuariosInput, secretariosUpdateWithoutUsuariosInput>, secretariosUncheckedUpdateWithoutUsuariosInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type muestrasCreateWithoutCajaInput = {
    id?: bigint | number
    fecha_ingreso?: Date | string
    fecha_entrega: Date | string
    nro_autorizacion: string
    monto: Decimal | DecimalJsLike | number | string
    tipo_cobertura?: boolean
    tipo_patologia: string
    muestra_material?: muestra_materialCreateNestedManyWithoutMuestrasInput
    medicos: medicosCreateNestedOneWithoutMuestrasInput
    pacientes: pacientesCreateNestedOneWithoutMuestrasInput
    secretarios: secretariosCreateNestedOneWithoutMuestrasInput
    informe: informesCreateNestedOneWithoutMuestraInput
  }

  export type muestrasUncheckedCreateWithoutCajaInput = {
    id?: bigint | number
    fecha_ingreso?: Date | string
    fecha_entrega: Date | string
    nro_autorizacion: string
    monto: Decimal | DecimalJsLike | number | string
    tipo_cobertura?: boolean
    tipo_patologia: string
    id_secretario: bigint | number
    id_paciente: bigint | number
    id_medico: bigint | number
    id_informe: bigint | number
    muestra_material?: muestra_materialUncheckedCreateNestedManyWithoutMuestrasInput
  }

  export type muestrasCreateOrConnectWithoutCajaInput = {
    where: muestrasWhereUniqueInput
    create: XOR<muestrasCreateWithoutCajaInput, muestrasUncheckedCreateWithoutCajaInput>
  }

  export type muestrasUpsertWithoutCajaInput = {
    update: XOR<muestrasUpdateWithoutCajaInput, muestrasUncheckedUpdateWithoutCajaInput>
    create: XOR<muestrasCreateWithoutCajaInput, muestrasUncheckedCreateWithoutCajaInput>
    where?: muestrasWhereInput
  }

  export type muestrasUpdateToOneWithWhereWithoutCajaInput = {
    where?: muestrasWhereInput
    data: XOR<muestrasUpdateWithoutCajaInput, muestrasUncheckedUpdateWithoutCajaInput>
  }

  export type muestrasUpdateWithoutCajaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_autorizacion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFieldUpdateOperationsInput | boolean
    tipo_patologia?: StringFieldUpdateOperationsInput | string
    muestra_material?: muestra_materialUpdateManyWithoutMuestrasNestedInput
    medicos?: medicosUpdateOneRequiredWithoutMuestrasNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutMuestrasNestedInput
    secretarios?: secretariosUpdateOneRequiredWithoutMuestrasNestedInput
    informe?: informesUpdateOneRequiredWithoutMuestraNestedInput
  }

  export type muestrasUncheckedUpdateWithoutCajaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_autorizacion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFieldUpdateOperationsInput | boolean
    tipo_patologia?: StringFieldUpdateOperationsInput | string
    id_secretario?: BigIntFieldUpdateOperationsInput | bigint | number
    id_paciente?: BigIntFieldUpdateOperationsInput | bigint | number
    id_medico?: BigIntFieldUpdateOperationsInput | bigint | number
    id_informe?: BigIntFieldUpdateOperationsInput | bigint | number
    muestra_material?: muestra_materialUncheckedUpdateManyWithoutMuestrasNestedInput
  }

  export type muestra_materialCreateWithoutMaterialesInput = {
    muestras: muestrasCreateNestedOneWithoutMuestra_materialInput
  }

  export type muestra_materialUncheckedCreateWithoutMaterialesInput = {
    id_muestra: bigint | number
  }

  export type muestra_materialCreateOrConnectWithoutMaterialesInput = {
    where: muestra_materialWhereUniqueInput
    create: XOR<muestra_materialCreateWithoutMaterialesInput, muestra_materialUncheckedCreateWithoutMaterialesInput>
  }

  export type muestra_materialCreateManyMaterialesInputEnvelope = {
    data: muestra_materialCreateManyMaterialesInput | muestra_materialCreateManyMaterialesInput[]
    skipDuplicates?: boolean
  }

  export type muestra_materialUpsertWithWhereUniqueWithoutMaterialesInput = {
    where: muestra_materialWhereUniqueInput
    update: XOR<muestra_materialUpdateWithoutMaterialesInput, muestra_materialUncheckedUpdateWithoutMaterialesInput>
    create: XOR<muestra_materialCreateWithoutMaterialesInput, muestra_materialUncheckedCreateWithoutMaterialesInput>
  }

  export type muestra_materialUpdateWithWhereUniqueWithoutMaterialesInput = {
    where: muestra_materialWhereUniqueInput
    data: XOR<muestra_materialUpdateWithoutMaterialesInput, muestra_materialUncheckedUpdateWithoutMaterialesInput>
  }

  export type muestra_materialUpdateManyWithWhereWithoutMaterialesInput = {
    where: muestra_materialScalarWhereInput
    data: XOR<muestra_materialUpdateManyMutationInput, muestra_materialUncheckedUpdateManyWithoutMaterialesInput>
  }

  export type muestra_materialScalarWhereInput = {
    AND?: muestra_materialScalarWhereInput | muestra_materialScalarWhereInput[]
    OR?: muestra_materialScalarWhereInput[]
    NOT?: muestra_materialScalarWhereInput | muestra_materialScalarWhereInput[]
    id_muestra?: BigIntFilter<"muestra_material"> | bigint | number
    id_material?: BigIntFilter<"muestra_material"> | bigint | number
  }

  export type usuariosCreateWithoutMedicosInput = {
    id?: bigint | number
    nombre: string
    apellido: string
    documento: string
    correo: string
    contrasenia: string
    tipo_usuario: string
    pacientes?: pacientesCreateNestedOneWithoutUsuariosInput
    secretarios?: secretariosCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutMedicosInput = {
    id?: bigint | number
    nombre: string
    apellido: string
    documento: string
    correo: string
    contrasenia: string
    tipo_usuario: string
    pacientes?: pacientesUncheckedCreateNestedOneWithoutUsuariosInput
    secretarios?: secretariosUncheckedCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutMedicosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutMedicosInput, usuariosUncheckedCreateWithoutMedicosInput>
  }

  export type muestrasCreateWithoutMedicosInput = {
    id?: bigint | number
    fecha_ingreso?: Date | string
    fecha_entrega: Date | string
    nro_autorizacion: string
    monto: Decimal | DecimalJsLike | number | string
    tipo_cobertura?: boolean
    tipo_patologia: string
    muestra_material?: muestra_materialCreateNestedManyWithoutMuestrasInput
    pacientes: pacientesCreateNestedOneWithoutMuestrasInput
    secretarios: secretariosCreateNestedOneWithoutMuestrasInput
    caja?: cajaCreateNestedManyWithoutMuestraInput
    informe: informesCreateNestedOneWithoutMuestraInput
  }

  export type muestrasUncheckedCreateWithoutMedicosInput = {
    id?: bigint | number
    fecha_ingreso?: Date | string
    fecha_entrega: Date | string
    nro_autorizacion: string
    monto: Decimal | DecimalJsLike | number | string
    tipo_cobertura?: boolean
    tipo_patologia: string
    id_secretario: bigint | number
    id_paciente: bigint | number
    id_informe: bigint | number
    muestra_material?: muestra_materialUncheckedCreateNestedManyWithoutMuestrasInput
    caja?: cajaUncheckedCreateNestedManyWithoutMuestraInput
  }

  export type muestrasCreateOrConnectWithoutMedicosInput = {
    where: muestrasWhereUniqueInput
    create: XOR<muestrasCreateWithoutMedicosInput, muestrasUncheckedCreateWithoutMedicosInput>
  }

  export type muestrasCreateManyMedicosInputEnvelope = {
    data: muestrasCreateManyMedicosInput | muestrasCreateManyMedicosInput[]
    skipDuplicates?: boolean
  }

  export type usuariosUpsertWithoutMedicosInput = {
    update: XOR<usuariosUpdateWithoutMedicosInput, usuariosUncheckedUpdateWithoutMedicosInput>
    create: XOR<usuariosCreateWithoutMedicosInput, usuariosUncheckedCreateWithoutMedicosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutMedicosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutMedicosInput, usuariosUncheckedUpdateWithoutMedicosInput>
  }

  export type usuariosUpdateWithoutMedicosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    pacientes?: pacientesUpdateOneWithoutUsuariosNestedInput
    secretarios?: secretariosUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutMedicosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    pacientes?: pacientesUncheckedUpdateOneWithoutUsuariosNestedInput
    secretarios?: secretariosUncheckedUpdateOneWithoutUsuariosNestedInput
  }

  export type muestrasUpsertWithWhereUniqueWithoutMedicosInput = {
    where: muestrasWhereUniqueInput
    update: XOR<muestrasUpdateWithoutMedicosInput, muestrasUncheckedUpdateWithoutMedicosInput>
    create: XOR<muestrasCreateWithoutMedicosInput, muestrasUncheckedCreateWithoutMedicosInput>
  }

  export type muestrasUpdateWithWhereUniqueWithoutMedicosInput = {
    where: muestrasWhereUniqueInput
    data: XOR<muestrasUpdateWithoutMedicosInput, muestrasUncheckedUpdateWithoutMedicosInput>
  }

  export type muestrasUpdateManyWithWhereWithoutMedicosInput = {
    where: muestrasScalarWhereInput
    data: XOR<muestrasUpdateManyMutationInput, muestrasUncheckedUpdateManyWithoutMedicosInput>
  }

  export type muestrasScalarWhereInput = {
    AND?: muestrasScalarWhereInput | muestrasScalarWhereInput[]
    OR?: muestrasScalarWhereInput[]
    NOT?: muestrasScalarWhereInput | muestrasScalarWhereInput[]
    id?: BigIntFilter<"muestras"> | bigint | number
    fecha_ingreso?: DateTimeFilter<"muestras"> | Date | string
    fecha_entrega?: DateTimeFilter<"muestras"> | Date | string
    nro_autorizacion?: StringFilter<"muestras"> | string
    monto?: DecimalFilter<"muestras"> | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFilter<"muestras"> | boolean
    tipo_patologia?: StringFilter<"muestras"> | string
    id_secretario?: BigIntFilter<"muestras"> | bigint | number
    id_paciente?: BigIntFilter<"muestras"> | bigint | number
    id_medico?: BigIntFilter<"muestras"> | bigint | number
    id_informe?: BigIntFilter<"muestras"> | bigint | number
  }

  export type materialesCreateWithoutMuestra_materialInput = {
    id?: bigint | number
    nombre: string
    descripcion?: string | null
  }

  export type materialesUncheckedCreateWithoutMuestra_materialInput = {
    id?: bigint | number
    nombre: string
    descripcion?: string | null
  }

  export type materialesCreateOrConnectWithoutMuestra_materialInput = {
    where: materialesWhereUniqueInput
    create: XOR<materialesCreateWithoutMuestra_materialInput, materialesUncheckedCreateWithoutMuestra_materialInput>
  }

  export type muestrasCreateWithoutMuestra_materialInput = {
    id?: bigint | number
    fecha_ingreso?: Date | string
    fecha_entrega: Date | string
    nro_autorizacion: string
    monto: Decimal | DecimalJsLike | number | string
    tipo_cobertura?: boolean
    tipo_patologia: string
    medicos: medicosCreateNestedOneWithoutMuestrasInput
    pacientes: pacientesCreateNestedOneWithoutMuestrasInput
    secretarios: secretariosCreateNestedOneWithoutMuestrasInput
    caja?: cajaCreateNestedManyWithoutMuestraInput
    informe: informesCreateNestedOneWithoutMuestraInput
  }

  export type muestrasUncheckedCreateWithoutMuestra_materialInput = {
    id?: bigint | number
    fecha_ingreso?: Date | string
    fecha_entrega: Date | string
    nro_autorizacion: string
    monto: Decimal | DecimalJsLike | number | string
    tipo_cobertura?: boolean
    tipo_patologia: string
    id_secretario: bigint | number
    id_paciente: bigint | number
    id_medico: bigint | number
    id_informe: bigint | number
    caja?: cajaUncheckedCreateNestedManyWithoutMuestraInput
  }

  export type muestrasCreateOrConnectWithoutMuestra_materialInput = {
    where: muestrasWhereUniqueInput
    create: XOR<muestrasCreateWithoutMuestra_materialInput, muestrasUncheckedCreateWithoutMuestra_materialInput>
  }

  export type materialesUpsertWithoutMuestra_materialInput = {
    update: XOR<materialesUpdateWithoutMuestra_materialInput, materialesUncheckedUpdateWithoutMuestra_materialInput>
    create: XOR<materialesCreateWithoutMuestra_materialInput, materialesUncheckedCreateWithoutMuestra_materialInput>
    where?: materialesWhereInput
  }

  export type materialesUpdateToOneWithWhereWithoutMuestra_materialInput = {
    where?: materialesWhereInput
    data: XOR<materialesUpdateWithoutMuestra_materialInput, materialesUncheckedUpdateWithoutMuestra_materialInput>
  }

  export type materialesUpdateWithoutMuestra_materialInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type materialesUncheckedUpdateWithoutMuestra_materialInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type muestrasUpsertWithoutMuestra_materialInput = {
    update: XOR<muestrasUpdateWithoutMuestra_materialInput, muestrasUncheckedUpdateWithoutMuestra_materialInput>
    create: XOR<muestrasCreateWithoutMuestra_materialInput, muestrasUncheckedCreateWithoutMuestra_materialInput>
    where?: muestrasWhereInput
  }

  export type muestrasUpdateToOneWithWhereWithoutMuestra_materialInput = {
    where?: muestrasWhereInput
    data: XOR<muestrasUpdateWithoutMuestra_materialInput, muestrasUncheckedUpdateWithoutMuestra_materialInput>
  }

  export type muestrasUpdateWithoutMuestra_materialInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_autorizacion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFieldUpdateOperationsInput | boolean
    tipo_patologia?: StringFieldUpdateOperationsInput | string
    medicos?: medicosUpdateOneRequiredWithoutMuestrasNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutMuestrasNestedInput
    secretarios?: secretariosUpdateOneRequiredWithoutMuestrasNestedInput
    caja?: cajaUpdateManyWithoutMuestraNestedInput
    informe?: informesUpdateOneRequiredWithoutMuestraNestedInput
  }

  export type muestrasUncheckedUpdateWithoutMuestra_materialInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_autorizacion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFieldUpdateOperationsInput | boolean
    tipo_patologia?: StringFieldUpdateOperationsInput | string
    id_secretario?: BigIntFieldUpdateOperationsInput | bigint | number
    id_paciente?: BigIntFieldUpdateOperationsInput | bigint | number
    id_medico?: BigIntFieldUpdateOperationsInput | bigint | number
    id_informe?: BigIntFieldUpdateOperationsInput | bigint | number
    caja?: cajaUncheckedUpdateManyWithoutMuestraNestedInput
  }

  export type muestra_materialCreateWithoutMuestrasInput = {
    materiales: materialesCreateNestedOneWithoutMuestra_materialInput
  }

  export type muestra_materialUncheckedCreateWithoutMuestrasInput = {
    id_material: bigint | number
  }

  export type muestra_materialCreateOrConnectWithoutMuestrasInput = {
    where: muestra_materialWhereUniqueInput
    create: XOR<muestra_materialCreateWithoutMuestrasInput, muestra_materialUncheckedCreateWithoutMuestrasInput>
  }

  export type muestra_materialCreateManyMuestrasInputEnvelope = {
    data: muestra_materialCreateManyMuestrasInput | muestra_materialCreateManyMuestrasInput[]
    skipDuplicates?: boolean
  }

  export type medicosCreateWithoutMuestrasInput = {
    matricula: string
    especialidad?: string | null
    usuarios: usuariosCreateNestedOneWithoutMedicosInput
  }

  export type medicosUncheckedCreateWithoutMuestrasInput = {
    usuario_id: bigint | number
    matricula: string
    especialidad?: string | null
  }

  export type medicosCreateOrConnectWithoutMuestrasInput = {
    where: medicosWhereUniqueInput
    create: XOR<medicosCreateWithoutMuestrasInput, medicosUncheckedCreateWithoutMuestrasInput>
  }

  export type pacientesCreateWithoutMuestrasInput = {
    fecha_nacimiento?: Date | string | null
    telefono: string
    usuarios: usuariosCreateNestedOneWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutMuestrasInput = {
    usuario_id: bigint | number
    fecha_nacimiento?: Date | string | null
    telefono: string
  }

  export type pacientesCreateOrConnectWithoutMuestrasInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutMuestrasInput, pacientesUncheckedCreateWithoutMuestrasInput>
  }

  export type secretariosCreateWithoutMuestrasInput = {
    usuarios: usuariosCreateNestedOneWithoutSecretariosInput
  }

  export type secretariosUncheckedCreateWithoutMuestrasInput = {
    usuario_id: bigint | number
  }

  export type secretariosCreateOrConnectWithoutMuestrasInput = {
    where: secretariosWhereUniqueInput
    create: XOR<secretariosCreateWithoutMuestrasInput, secretariosUncheckedCreateWithoutMuestrasInput>
  }

  export type cajaCreateWithoutMuestraInput = {
    id?: bigint | number
    fecha?: Date | string
    tipo_transaccion: string
    categoria: string
    monto: Decimal | DecimalJsLike | number | string
    fecha_transaccion?: Date | string
    descripcion?: string | null
  }

  export type cajaUncheckedCreateWithoutMuestraInput = {
    id?: bigint | number
    fecha?: Date | string
    tipo_transaccion: string
    categoria: string
    monto: Decimal | DecimalJsLike | number | string
    fecha_transaccion?: Date | string
    descripcion?: string | null
  }

  export type cajaCreateOrConnectWithoutMuestraInput = {
    where: cajaWhereUniqueInput
    create: XOR<cajaCreateWithoutMuestraInput, cajaUncheckedCreateWithoutMuestraInput>
  }

  export type cajaCreateManyMuestraInputEnvelope = {
    data: cajaCreateManyMuestraInput | cajaCreateManyMuestraInput[]
    skipDuplicates?: boolean
  }

  export type informesCreateWithoutMuestraInput = {
    id?: bigint | number
    tipo_informe: string
    descripcion: string
    fecha_creacion?: Date | string | null
  }

  export type informesUncheckedCreateWithoutMuestraInput = {
    id?: bigint | number
    tipo_informe: string
    descripcion: string
    fecha_creacion?: Date | string | null
  }

  export type informesCreateOrConnectWithoutMuestraInput = {
    where: informesWhereUniqueInput
    create: XOR<informesCreateWithoutMuestraInput, informesUncheckedCreateWithoutMuestraInput>
  }

  export type muestra_materialUpsertWithWhereUniqueWithoutMuestrasInput = {
    where: muestra_materialWhereUniqueInput
    update: XOR<muestra_materialUpdateWithoutMuestrasInput, muestra_materialUncheckedUpdateWithoutMuestrasInput>
    create: XOR<muestra_materialCreateWithoutMuestrasInput, muestra_materialUncheckedCreateWithoutMuestrasInput>
  }

  export type muestra_materialUpdateWithWhereUniqueWithoutMuestrasInput = {
    where: muestra_materialWhereUniqueInput
    data: XOR<muestra_materialUpdateWithoutMuestrasInput, muestra_materialUncheckedUpdateWithoutMuestrasInput>
  }

  export type muestra_materialUpdateManyWithWhereWithoutMuestrasInput = {
    where: muestra_materialScalarWhereInput
    data: XOR<muestra_materialUpdateManyMutationInput, muestra_materialUncheckedUpdateManyWithoutMuestrasInput>
  }

  export type medicosUpsertWithoutMuestrasInput = {
    update: XOR<medicosUpdateWithoutMuestrasInput, medicosUncheckedUpdateWithoutMuestrasInput>
    create: XOR<medicosCreateWithoutMuestrasInput, medicosUncheckedCreateWithoutMuestrasInput>
    where?: medicosWhereInput
  }

  export type medicosUpdateToOneWithWhereWithoutMuestrasInput = {
    where?: medicosWhereInput
    data: XOR<medicosUpdateWithoutMuestrasInput, medicosUncheckedUpdateWithoutMuestrasInput>
  }

  export type medicosUpdateWithoutMuestrasInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: usuariosUpdateOneRequiredWithoutMedicosNestedInput
  }

  export type medicosUncheckedUpdateWithoutMuestrasInput = {
    usuario_id?: BigIntFieldUpdateOperationsInput | bigint | number
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pacientesUpsertWithoutMuestrasInput = {
    update: XOR<pacientesUpdateWithoutMuestrasInput, pacientesUncheckedUpdateWithoutMuestrasInput>
    create: XOR<pacientesCreateWithoutMuestrasInput, pacientesUncheckedCreateWithoutMuestrasInput>
    where?: pacientesWhereInput
  }

  export type pacientesUpdateToOneWithWhereWithoutMuestrasInput = {
    where?: pacientesWhereInput
    data: XOR<pacientesUpdateWithoutMuestrasInput, pacientesUncheckedUpdateWithoutMuestrasInput>
  }

  export type pacientesUpdateWithoutMuestrasInput = {
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: StringFieldUpdateOperationsInput | string
    usuarios?: usuariosUpdateOneRequiredWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutMuestrasInput = {
    usuario_id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type secretariosUpsertWithoutMuestrasInput = {
    update: XOR<secretariosUpdateWithoutMuestrasInput, secretariosUncheckedUpdateWithoutMuestrasInput>
    create: XOR<secretariosCreateWithoutMuestrasInput, secretariosUncheckedCreateWithoutMuestrasInput>
    where?: secretariosWhereInput
  }

  export type secretariosUpdateToOneWithWhereWithoutMuestrasInput = {
    where?: secretariosWhereInput
    data: XOR<secretariosUpdateWithoutMuestrasInput, secretariosUncheckedUpdateWithoutMuestrasInput>
  }

  export type secretariosUpdateWithoutMuestrasInput = {
    usuarios?: usuariosUpdateOneRequiredWithoutSecretariosNestedInput
  }

  export type secretariosUncheckedUpdateWithoutMuestrasInput = {
    usuario_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type cajaUpsertWithWhereUniqueWithoutMuestraInput = {
    where: cajaWhereUniqueInput
    update: XOR<cajaUpdateWithoutMuestraInput, cajaUncheckedUpdateWithoutMuestraInput>
    create: XOR<cajaCreateWithoutMuestraInput, cajaUncheckedCreateWithoutMuestraInput>
  }

  export type cajaUpdateWithWhereUniqueWithoutMuestraInput = {
    where: cajaWhereUniqueInput
    data: XOR<cajaUpdateWithoutMuestraInput, cajaUncheckedUpdateWithoutMuestraInput>
  }

  export type cajaUpdateManyWithWhereWithoutMuestraInput = {
    where: cajaScalarWhereInput
    data: XOR<cajaUpdateManyMutationInput, cajaUncheckedUpdateManyWithoutMuestraInput>
  }

  export type cajaScalarWhereInput = {
    AND?: cajaScalarWhereInput | cajaScalarWhereInput[]
    OR?: cajaScalarWhereInput[]
    NOT?: cajaScalarWhereInput | cajaScalarWhereInput[]
    id?: BigIntFilter<"caja"> | bigint | number
    fecha?: DateTimeFilter<"caja"> | Date | string
    tipo_transaccion?: StringFilter<"caja"> | string
    categoria?: StringFilter<"caja"> | string
    monto?: DecimalFilter<"caja"> | Decimal | DecimalJsLike | number | string
    fecha_transaccion?: DateTimeFilter<"caja"> | Date | string
    descripcion?: StringNullableFilter<"caja"> | string | null
    id_muestra?: BigIntNullableFilter<"caja"> | bigint | number | null
  }

  export type informesUpsertWithoutMuestraInput = {
    update: XOR<informesUpdateWithoutMuestraInput, informesUncheckedUpdateWithoutMuestraInput>
    create: XOR<informesCreateWithoutMuestraInput, informesUncheckedCreateWithoutMuestraInput>
    where?: informesWhereInput
  }

  export type informesUpdateToOneWithWhereWithoutMuestraInput = {
    where?: informesWhereInput
    data: XOR<informesUpdateWithoutMuestraInput, informesUncheckedUpdateWithoutMuestraInput>
  }

  export type informesUpdateWithoutMuestraInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tipo_informe?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type informesUncheckedUpdateWithoutMuestraInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tipo_informe?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type muestrasCreateWithoutInformeInput = {
    id?: bigint | number
    fecha_ingreso?: Date | string
    fecha_entrega: Date | string
    nro_autorizacion: string
    monto: Decimal | DecimalJsLike | number | string
    tipo_cobertura?: boolean
    tipo_patologia: string
    muestra_material?: muestra_materialCreateNestedManyWithoutMuestrasInput
    medicos: medicosCreateNestedOneWithoutMuestrasInput
    pacientes: pacientesCreateNestedOneWithoutMuestrasInput
    secretarios: secretariosCreateNestedOneWithoutMuestrasInput
    caja?: cajaCreateNestedManyWithoutMuestraInput
  }

  export type muestrasUncheckedCreateWithoutInformeInput = {
    id?: bigint | number
    fecha_ingreso?: Date | string
    fecha_entrega: Date | string
    nro_autorizacion: string
    monto: Decimal | DecimalJsLike | number | string
    tipo_cobertura?: boolean
    tipo_patologia: string
    id_secretario: bigint | number
    id_paciente: bigint | number
    id_medico: bigint | number
    muestra_material?: muestra_materialUncheckedCreateNestedManyWithoutMuestrasInput
    caja?: cajaUncheckedCreateNestedManyWithoutMuestraInput
  }

  export type muestrasCreateOrConnectWithoutInformeInput = {
    where: muestrasWhereUniqueInput
    create: XOR<muestrasCreateWithoutInformeInput, muestrasUncheckedCreateWithoutInformeInput>
  }

  export type muestrasUpsertWithoutInformeInput = {
    update: XOR<muestrasUpdateWithoutInformeInput, muestrasUncheckedUpdateWithoutInformeInput>
    create: XOR<muestrasCreateWithoutInformeInput, muestrasUncheckedCreateWithoutInformeInput>
    where?: muestrasWhereInput
  }

  export type muestrasUpdateToOneWithWhereWithoutInformeInput = {
    where?: muestrasWhereInput
    data: XOR<muestrasUpdateWithoutInformeInput, muestrasUncheckedUpdateWithoutInformeInput>
  }

  export type muestrasUpdateWithoutInformeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_autorizacion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFieldUpdateOperationsInput | boolean
    tipo_patologia?: StringFieldUpdateOperationsInput | string
    muestra_material?: muestra_materialUpdateManyWithoutMuestrasNestedInput
    medicos?: medicosUpdateOneRequiredWithoutMuestrasNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutMuestrasNestedInput
    secretarios?: secretariosUpdateOneRequiredWithoutMuestrasNestedInput
    caja?: cajaUpdateManyWithoutMuestraNestedInput
  }

  export type muestrasUncheckedUpdateWithoutInformeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_autorizacion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFieldUpdateOperationsInput | boolean
    tipo_patologia?: StringFieldUpdateOperationsInput | string
    id_secretario?: BigIntFieldUpdateOperationsInput | bigint | number
    id_paciente?: BigIntFieldUpdateOperationsInput | bigint | number
    id_medico?: BigIntFieldUpdateOperationsInput | bigint | number
    muestra_material?: muestra_materialUncheckedUpdateManyWithoutMuestrasNestedInput
    caja?: cajaUncheckedUpdateManyWithoutMuestraNestedInput
  }

  export type muestrasCreateWithoutPacientesInput = {
    id?: bigint | number
    fecha_ingreso?: Date | string
    fecha_entrega: Date | string
    nro_autorizacion: string
    monto: Decimal | DecimalJsLike | number | string
    tipo_cobertura?: boolean
    tipo_patologia: string
    muestra_material?: muestra_materialCreateNestedManyWithoutMuestrasInput
    medicos: medicosCreateNestedOneWithoutMuestrasInput
    secretarios: secretariosCreateNestedOneWithoutMuestrasInput
    caja?: cajaCreateNestedManyWithoutMuestraInput
    informe: informesCreateNestedOneWithoutMuestraInput
  }

  export type muestrasUncheckedCreateWithoutPacientesInput = {
    id?: bigint | number
    fecha_ingreso?: Date | string
    fecha_entrega: Date | string
    nro_autorizacion: string
    monto: Decimal | DecimalJsLike | number | string
    tipo_cobertura?: boolean
    tipo_patologia: string
    id_secretario: bigint | number
    id_medico: bigint | number
    id_informe: bigint | number
    muestra_material?: muestra_materialUncheckedCreateNestedManyWithoutMuestrasInput
    caja?: cajaUncheckedCreateNestedManyWithoutMuestraInput
  }

  export type muestrasCreateOrConnectWithoutPacientesInput = {
    where: muestrasWhereUniqueInput
    create: XOR<muestrasCreateWithoutPacientesInput, muestrasUncheckedCreateWithoutPacientesInput>
  }

  export type muestrasCreateManyPacientesInputEnvelope = {
    data: muestrasCreateManyPacientesInput | muestrasCreateManyPacientesInput[]
    skipDuplicates?: boolean
  }

  export type usuariosCreateWithoutPacientesInput = {
    id?: bigint | number
    nombre: string
    apellido: string
    documento: string
    correo: string
    contrasenia: string
    tipo_usuario: string
    medicos?: medicosCreateNestedOneWithoutUsuariosInput
    secretarios?: secretariosCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutPacientesInput = {
    id?: bigint | number
    nombre: string
    apellido: string
    documento: string
    correo: string
    contrasenia: string
    tipo_usuario: string
    medicos?: medicosUncheckedCreateNestedOneWithoutUsuariosInput
    secretarios?: secretariosUncheckedCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutPacientesInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutPacientesInput, usuariosUncheckedCreateWithoutPacientesInput>
  }

  export type muestrasUpsertWithWhereUniqueWithoutPacientesInput = {
    where: muestrasWhereUniqueInput
    update: XOR<muestrasUpdateWithoutPacientesInput, muestrasUncheckedUpdateWithoutPacientesInput>
    create: XOR<muestrasCreateWithoutPacientesInput, muestrasUncheckedCreateWithoutPacientesInput>
  }

  export type muestrasUpdateWithWhereUniqueWithoutPacientesInput = {
    where: muestrasWhereUniqueInput
    data: XOR<muestrasUpdateWithoutPacientesInput, muestrasUncheckedUpdateWithoutPacientesInput>
  }

  export type muestrasUpdateManyWithWhereWithoutPacientesInput = {
    where: muestrasScalarWhereInput
    data: XOR<muestrasUpdateManyMutationInput, muestrasUncheckedUpdateManyWithoutPacientesInput>
  }

  export type usuariosUpsertWithoutPacientesInput = {
    update: XOR<usuariosUpdateWithoutPacientesInput, usuariosUncheckedUpdateWithoutPacientesInput>
    create: XOR<usuariosCreateWithoutPacientesInput, usuariosUncheckedCreateWithoutPacientesInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutPacientesInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutPacientesInput, usuariosUncheckedUpdateWithoutPacientesInput>
  }

  export type usuariosUpdateWithoutPacientesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    medicos?: medicosUpdateOneWithoutUsuariosNestedInput
    secretarios?: secretariosUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutPacientesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    medicos?: medicosUncheckedUpdateOneWithoutUsuariosNestedInput
    secretarios?: secretariosUncheckedUpdateOneWithoutUsuariosNestedInput
  }

  export type muestrasCreateWithoutSecretariosInput = {
    id?: bigint | number
    fecha_ingreso?: Date | string
    fecha_entrega: Date | string
    nro_autorizacion: string
    monto: Decimal | DecimalJsLike | number | string
    tipo_cobertura?: boolean
    tipo_patologia: string
    muestra_material?: muestra_materialCreateNestedManyWithoutMuestrasInput
    medicos: medicosCreateNestedOneWithoutMuestrasInput
    pacientes: pacientesCreateNestedOneWithoutMuestrasInput
    caja?: cajaCreateNestedManyWithoutMuestraInput
    informe: informesCreateNestedOneWithoutMuestraInput
  }

  export type muestrasUncheckedCreateWithoutSecretariosInput = {
    id?: bigint | number
    fecha_ingreso?: Date | string
    fecha_entrega: Date | string
    nro_autorizacion: string
    monto: Decimal | DecimalJsLike | number | string
    tipo_cobertura?: boolean
    tipo_patologia: string
    id_paciente: bigint | number
    id_medico: bigint | number
    id_informe: bigint | number
    muestra_material?: muestra_materialUncheckedCreateNestedManyWithoutMuestrasInput
    caja?: cajaUncheckedCreateNestedManyWithoutMuestraInput
  }

  export type muestrasCreateOrConnectWithoutSecretariosInput = {
    where: muestrasWhereUniqueInput
    create: XOR<muestrasCreateWithoutSecretariosInput, muestrasUncheckedCreateWithoutSecretariosInput>
  }

  export type muestrasCreateManySecretariosInputEnvelope = {
    data: muestrasCreateManySecretariosInput | muestrasCreateManySecretariosInput[]
    skipDuplicates?: boolean
  }

  export type usuariosCreateWithoutSecretariosInput = {
    id?: bigint | number
    nombre: string
    apellido: string
    documento: string
    correo: string
    contrasenia: string
    tipo_usuario: string
    medicos?: medicosCreateNestedOneWithoutUsuariosInput
    pacientes?: pacientesCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutSecretariosInput = {
    id?: bigint | number
    nombre: string
    apellido: string
    documento: string
    correo: string
    contrasenia: string
    tipo_usuario: string
    medicos?: medicosUncheckedCreateNestedOneWithoutUsuariosInput
    pacientes?: pacientesUncheckedCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutSecretariosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutSecretariosInput, usuariosUncheckedCreateWithoutSecretariosInput>
  }

  export type muestrasUpsertWithWhereUniqueWithoutSecretariosInput = {
    where: muestrasWhereUniqueInput
    update: XOR<muestrasUpdateWithoutSecretariosInput, muestrasUncheckedUpdateWithoutSecretariosInput>
    create: XOR<muestrasCreateWithoutSecretariosInput, muestrasUncheckedCreateWithoutSecretariosInput>
  }

  export type muestrasUpdateWithWhereUniqueWithoutSecretariosInput = {
    where: muestrasWhereUniqueInput
    data: XOR<muestrasUpdateWithoutSecretariosInput, muestrasUncheckedUpdateWithoutSecretariosInput>
  }

  export type muestrasUpdateManyWithWhereWithoutSecretariosInput = {
    where: muestrasScalarWhereInput
    data: XOR<muestrasUpdateManyMutationInput, muestrasUncheckedUpdateManyWithoutSecretariosInput>
  }

  export type usuariosUpsertWithoutSecretariosInput = {
    update: XOR<usuariosUpdateWithoutSecretariosInput, usuariosUncheckedUpdateWithoutSecretariosInput>
    create: XOR<usuariosCreateWithoutSecretariosInput, usuariosUncheckedCreateWithoutSecretariosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutSecretariosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutSecretariosInput, usuariosUncheckedUpdateWithoutSecretariosInput>
  }

  export type usuariosUpdateWithoutSecretariosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    medicos?: medicosUpdateOneWithoutUsuariosNestedInput
    pacientes?: pacientesUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutSecretariosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    medicos?: medicosUncheckedUpdateOneWithoutUsuariosNestedInput
    pacientes?: pacientesUncheckedUpdateOneWithoutUsuariosNestedInput
  }

  export type medicosCreateWithoutUsuariosInput = {
    matricula: string
    especialidad?: string | null
    muestras?: muestrasCreateNestedManyWithoutMedicosInput
  }

  export type medicosUncheckedCreateWithoutUsuariosInput = {
    matricula: string
    especialidad?: string | null
    muestras?: muestrasUncheckedCreateNestedManyWithoutMedicosInput
  }

  export type medicosCreateOrConnectWithoutUsuariosInput = {
    where: medicosWhereUniqueInput
    create: XOR<medicosCreateWithoutUsuariosInput, medicosUncheckedCreateWithoutUsuariosInput>
  }

  export type pacientesCreateWithoutUsuariosInput = {
    fecha_nacimiento?: Date | string | null
    telefono: string
    muestras?: muestrasCreateNestedManyWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutUsuariosInput = {
    fecha_nacimiento?: Date | string | null
    telefono: string
    muestras?: muestrasUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesCreateOrConnectWithoutUsuariosInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput>
  }

  export type secretariosCreateWithoutUsuariosInput = {
    muestras?: muestrasCreateNestedManyWithoutSecretariosInput
  }

  export type secretariosUncheckedCreateWithoutUsuariosInput = {
    muestras?: muestrasUncheckedCreateNestedManyWithoutSecretariosInput
  }

  export type secretariosCreateOrConnectWithoutUsuariosInput = {
    where: secretariosWhereUniqueInput
    create: XOR<secretariosCreateWithoutUsuariosInput, secretariosUncheckedCreateWithoutUsuariosInput>
  }

  export type medicosUpsertWithoutUsuariosInput = {
    update: XOR<medicosUpdateWithoutUsuariosInput, medicosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<medicosCreateWithoutUsuariosInput, medicosUncheckedCreateWithoutUsuariosInput>
    where?: medicosWhereInput
  }

  export type medicosUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: medicosWhereInput
    data: XOR<medicosUpdateWithoutUsuariosInput, medicosUncheckedUpdateWithoutUsuariosInput>
  }

  export type medicosUpdateWithoutUsuariosInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    muestras?: muestrasUpdateManyWithoutMedicosNestedInput
  }

  export type medicosUncheckedUpdateWithoutUsuariosInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    muestras?: muestrasUncheckedUpdateManyWithoutMedicosNestedInput
  }

  export type pacientesUpsertWithoutUsuariosInput = {
    update: XOR<pacientesUpdateWithoutUsuariosInput, pacientesUncheckedUpdateWithoutUsuariosInput>
    create: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput>
    where?: pacientesWhereInput
  }

  export type pacientesUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: pacientesWhereInput
    data: XOR<pacientesUpdateWithoutUsuariosInput, pacientesUncheckedUpdateWithoutUsuariosInput>
  }

  export type pacientesUpdateWithoutUsuariosInput = {
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: StringFieldUpdateOperationsInput | string
    muestras?: muestrasUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutUsuariosInput = {
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: StringFieldUpdateOperationsInput | string
    muestras?: muestrasUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type secretariosUpsertWithoutUsuariosInput = {
    update: XOR<secretariosUpdateWithoutUsuariosInput, secretariosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<secretariosCreateWithoutUsuariosInput, secretariosUncheckedCreateWithoutUsuariosInput>
    where?: secretariosWhereInput
  }

  export type secretariosUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: secretariosWhereInput
    data: XOR<secretariosUpdateWithoutUsuariosInput, secretariosUncheckedUpdateWithoutUsuariosInput>
  }

  export type secretariosUpdateWithoutUsuariosInput = {
    muestras?: muestrasUpdateManyWithoutSecretariosNestedInput
  }

  export type secretariosUncheckedUpdateWithoutUsuariosInput = {
    muestras?: muestrasUncheckedUpdateManyWithoutSecretariosNestedInput
  }

  export type muestra_materialCreateManyMaterialesInput = {
    id_muestra: bigint | number
  }

  export type muestra_materialUpdateWithoutMaterialesInput = {
    muestras?: muestrasUpdateOneRequiredWithoutMuestra_materialNestedInput
  }

  export type muestra_materialUncheckedUpdateWithoutMaterialesInput = {
    id_muestra?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type muestra_materialUncheckedUpdateManyWithoutMaterialesInput = {
    id_muestra?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type muestrasCreateManyMedicosInput = {
    id?: bigint | number
    fecha_ingreso?: Date | string
    fecha_entrega: Date | string
    nro_autorizacion: string
    monto: Decimal | DecimalJsLike | number | string
    tipo_cobertura?: boolean
    tipo_patologia: string
    id_secretario: bigint | number
    id_paciente: bigint | number
    id_informe: bigint | number
  }

  export type muestrasUpdateWithoutMedicosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_autorizacion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFieldUpdateOperationsInput | boolean
    tipo_patologia?: StringFieldUpdateOperationsInput | string
    muestra_material?: muestra_materialUpdateManyWithoutMuestrasNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutMuestrasNestedInput
    secretarios?: secretariosUpdateOneRequiredWithoutMuestrasNestedInput
    caja?: cajaUpdateManyWithoutMuestraNestedInput
    informe?: informesUpdateOneRequiredWithoutMuestraNestedInput
  }

  export type muestrasUncheckedUpdateWithoutMedicosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_autorizacion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFieldUpdateOperationsInput | boolean
    tipo_patologia?: StringFieldUpdateOperationsInput | string
    id_secretario?: BigIntFieldUpdateOperationsInput | bigint | number
    id_paciente?: BigIntFieldUpdateOperationsInput | bigint | number
    id_informe?: BigIntFieldUpdateOperationsInput | bigint | number
    muestra_material?: muestra_materialUncheckedUpdateManyWithoutMuestrasNestedInput
    caja?: cajaUncheckedUpdateManyWithoutMuestraNestedInput
  }

  export type muestrasUncheckedUpdateManyWithoutMedicosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_autorizacion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFieldUpdateOperationsInput | boolean
    tipo_patologia?: StringFieldUpdateOperationsInput | string
    id_secretario?: BigIntFieldUpdateOperationsInput | bigint | number
    id_paciente?: BigIntFieldUpdateOperationsInput | bigint | number
    id_informe?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type muestra_materialCreateManyMuestrasInput = {
    id_material: bigint | number
  }

  export type cajaCreateManyMuestraInput = {
    id?: bigint | number
    fecha?: Date | string
    tipo_transaccion: string
    categoria: string
    monto: Decimal | DecimalJsLike | number | string
    fecha_transaccion?: Date | string
    descripcion?: string | null
  }

  export type muestra_materialUpdateWithoutMuestrasInput = {
    materiales?: materialesUpdateOneRequiredWithoutMuestra_materialNestedInput
  }

  export type muestra_materialUncheckedUpdateWithoutMuestrasInput = {
    id_material?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type muestra_materialUncheckedUpdateManyWithoutMuestrasInput = {
    id_material?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type cajaUpdateWithoutMuestraInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_transaccion?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cajaUncheckedUpdateWithoutMuestraInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_transaccion?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cajaUncheckedUpdateManyWithoutMuestraInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_transaccion?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type muestrasCreateManyPacientesInput = {
    id?: bigint | number
    fecha_ingreso?: Date | string
    fecha_entrega: Date | string
    nro_autorizacion: string
    monto: Decimal | DecimalJsLike | number | string
    tipo_cobertura?: boolean
    tipo_patologia: string
    id_secretario: bigint | number
    id_medico: bigint | number
    id_informe: bigint | number
  }

  export type muestrasUpdateWithoutPacientesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_autorizacion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFieldUpdateOperationsInput | boolean
    tipo_patologia?: StringFieldUpdateOperationsInput | string
    muestra_material?: muestra_materialUpdateManyWithoutMuestrasNestedInput
    medicos?: medicosUpdateOneRequiredWithoutMuestrasNestedInput
    secretarios?: secretariosUpdateOneRequiredWithoutMuestrasNestedInput
    caja?: cajaUpdateManyWithoutMuestraNestedInput
    informe?: informesUpdateOneRequiredWithoutMuestraNestedInput
  }

  export type muestrasUncheckedUpdateWithoutPacientesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_autorizacion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFieldUpdateOperationsInput | boolean
    tipo_patologia?: StringFieldUpdateOperationsInput | string
    id_secretario?: BigIntFieldUpdateOperationsInput | bigint | number
    id_medico?: BigIntFieldUpdateOperationsInput | bigint | number
    id_informe?: BigIntFieldUpdateOperationsInput | bigint | number
    muestra_material?: muestra_materialUncheckedUpdateManyWithoutMuestrasNestedInput
    caja?: cajaUncheckedUpdateManyWithoutMuestraNestedInput
  }

  export type muestrasUncheckedUpdateManyWithoutPacientesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_autorizacion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFieldUpdateOperationsInput | boolean
    tipo_patologia?: StringFieldUpdateOperationsInput | string
    id_secretario?: BigIntFieldUpdateOperationsInput | bigint | number
    id_medico?: BigIntFieldUpdateOperationsInput | bigint | number
    id_informe?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type muestrasCreateManySecretariosInput = {
    id?: bigint | number
    fecha_ingreso?: Date | string
    fecha_entrega: Date | string
    nro_autorizacion: string
    monto: Decimal | DecimalJsLike | number | string
    tipo_cobertura?: boolean
    tipo_patologia: string
    id_paciente: bigint | number
    id_medico: bigint | number
    id_informe: bigint | number
  }

  export type muestrasUpdateWithoutSecretariosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_autorizacion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFieldUpdateOperationsInput | boolean
    tipo_patologia?: StringFieldUpdateOperationsInput | string
    muestra_material?: muestra_materialUpdateManyWithoutMuestrasNestedInput
    medicos?: medicosUpdateOneRequiredWithoutMuestrasNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutMuestrasNestedInput
    caja?: cajaUpdateManyWithoutMuestraNestedInput
    informe?: informesUpdateOneRequiredWithoutMuestraNestedInput
  }

  export type muestrasUncheckedUpdateWithoutSecretariosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_autorizacion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFieldUpdateOperationsInput | boolean
    tipo_patologia?: StringFieldUpdateOperationsInput | string
    id_paciente?: BigIntFieldUpdateOperationsInput | bigint | number
    id_medico?: BigIntFieldUpdateOperationsInput | bigint | number
    id_informe?: BigIntFieldUpdateOperationsInput | bigint | number
    muestra_material?: muestra_materialUncheckedUpdateManyWithoutMuestrasNestedInput
    caja?: cajaUncheckedUpdateManyWithoutMuestraNestedInput
  }

  export type muestrasUncheckedUpdateManyWithoutSecretariosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_autorizacion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo_cobertura?: BoolFieldUpdateOperationsInput | boolean
    tipo_patologia?: StringFieldUpdateOperationsInput | string
    id_paciente?: BigIntFieldUpdateOperationsInput | bigint | number
    id_medico?: BigIntFieldUpdateOperationsInput | bigint | number
    id_informe?: BigIntFieldUpdateOperationsInput | bigint | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}