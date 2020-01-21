import MysqlDao from 'dao/MysqlDao';
export default class UserDao extends MysqlDao {
    constructor(options?: any);
    getSqlDir(): string;
    getById(id: number, options?: any): Promise<unknown>;
}
//# sourceMappingURL=UserDao.d.ts.map