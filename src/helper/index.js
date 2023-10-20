const getAuthorizationConfig = () => {
  const user = JSON.parse(localStorage.getItem("user")) || "";
  const token = user?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return config;
};

module.exports = { getAuthorizationConfig };
