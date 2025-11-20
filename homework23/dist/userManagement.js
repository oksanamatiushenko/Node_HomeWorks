"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagement = void 0;
var UserManagement;
(function (UserManagement) {
    let Admin;
    (function (Admin) {
        class AdminUser {
            constructor(name, email, isSuperAdmin = false) {
                this.name = name;
                this.email = email;
                this.isSuperAdmin = isSuperAdmin;
            }
            setSuperAdmin(status) {
                this.isSuperAdmin = status;
            }
            getInfo() {
                return `${this.name} (${this.email}) - SuperAdmin: ${this.isSuperAdmin}`;
            }
        }
        Admin.AdminUser = AdminUser;
    })(Admin = UserManagement.Admin || (UserManagement.Admin = {}));
})(UserManagement || (exports.UserManagement = UserManagement = {}));
console.log("--- Задание 3 ---");
const admin = new UserManagement.Admin.AdminUser("Oksana", "oksana@gmail.com");
console.log(admin.getInfo());
admin.setSuperAdmin(true);
console.log(admin.getInfo());
