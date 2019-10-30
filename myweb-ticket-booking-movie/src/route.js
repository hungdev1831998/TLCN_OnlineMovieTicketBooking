import React from 'react';

const SignUp = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp'));
const SignIn = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn'));

const route = [
    { path: '/auth/signup', exact: true, name: 'Signup 1', component: SignUp },
    { path: '/auth/signin', exact: true, name: 'Signin 1', component: SignIn }
];

export default route;