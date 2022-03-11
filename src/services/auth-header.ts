const authHeader = () => {
  const userData = localStorage.getItem("user");
  const user = userData && JSON.parse(userData);

  if (user && user.accessToken) {
    return {
      authorization: `Bearer ${user.accessToken}`,
    };
  } else {
    return {};
  }
};
export default authHeader;
