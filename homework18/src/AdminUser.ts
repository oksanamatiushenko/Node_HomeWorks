type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

export function AdminUser () {
  const adminUser = { 
    name: "Oksana", 
    email: "oksana@example.com", 
    permissions: ["manager", "content maker"] };
  console.log(adminUser);
};

console.log("--- Задание 1 ---")
AdminUser();