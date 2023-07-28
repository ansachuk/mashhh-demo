const selectUser = ({ auth }) => auth.user;
const selectIsAuth = ({ auth }) => auth.isAuth;
const selectToken = ({ auth }) => auth.token;

export { selectIsAuth, selectToken, selectUser };
