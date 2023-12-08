"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMysqlAdapterRepository = void 0;
class AuthMysqlAdapterRepository {
    // verifyUser(credentials: AuthCredential): Promise<AuthCredential | null> {
    //     let sql = "SELECT * FROM users where email = ?";
    //     let params = [credentials.email];
    //     //let user = query.execute(sql,params);
    //     return AuthCredential;
    // }
    verifyUser(credentials) {
        throw new Error("Method not implemented.");
    }
}
exports.AuthMysqlAdapterRepository = AuthMysqlAdapterRepository;
