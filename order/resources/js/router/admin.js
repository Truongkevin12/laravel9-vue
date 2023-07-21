const admin = [
    {
        path: "/admin",
        component: () =>import ("../layout/index.vue"),
        children: [
            {
                path: "users",
                name: "admin-users",
                component: () =>import ("../page/admin/users/index.vue"),
            },

        ]
    }
]
export default admin;
