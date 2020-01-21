export default class MysqlDao {
    dbConfig: any;
    sqlDir: string;
    loadSql: any;
    constructor(options?: any);
    openConnection(): any;
    getConnection(options?: any): Promise<unknown>;
    commit(tx?: any): Promise<any>;
    getSqlDir(): string;
    getAll<T>(options?: {}): Promise<unknown>;
    getAllCount<T>(options?: {}): Promise<unknown>;
    getById<T>(id: any, options?: {}): Promise<unknown>;
    insert<T>(item: any, options?: {}): Promise<unknown>;
    update<T>(item: any, options?: {}): Promise<unknown>;
    queryOne<T>(options?: {}): Promise<unknown>;
    query<T>(options?: any): Promise<unknown>;
}
//# sourceMappingURL=MysqlDao.d.ts.map