import MysqlDao from 'dao/MysqlDao';
export default class Service<T> {
    getDao(): MysqlDao;
    getById<T>(id: any, options?: {}): Promise<unknown>;
    getAll<T>(options?: {}): Promise<unknown>;
    insert<T>(item: any, options?: {}): Promise<unknown>;
    update<T>(item: any, options?: {}): Promise<unknown>;
}
//# sourceMappingURL=Service.d.ts.map