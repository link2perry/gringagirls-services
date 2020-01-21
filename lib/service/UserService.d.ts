import Service from 'service/Service';
import UserDao from 'dao/user/UserDao';
import User from 'model/User';
export default class UserService extends Service<User> {
    getDao(): UserDao;
    save(user: User): Promise<void>;
}
//# sourceMappingURL=UserService.d.ts.map