export const setLoginInfo = (data) => {
  const { token, isRememberMe } = data;
  if (isRememberMe) {
    localStorage.setItem("token", token);
  } else {
    sessionStorage.setItem("token", token);
  }
};

export const setAdmin = (data) => {
  const { isRememberMe, isAdmin } = data;
  if (isRememberMe) {
    localStorage.setItem("isAdmin", isAdmin);
  } else {
    sessionStorage.setItem("isAdmin", isAdmin);
  }
};

export const getToken = () => {
  const token =
    sessionStorage.getItem("token") || localStorage.getItem("token");
  return token;
};

export const getIsAdmin = () => {
  const isAdmin =
    sessionStorage.getItem("isAdmin") || localStorage.getItem("isAdmin");
  return isAdmin;
};
export const isAdmin = () => {
  const admin = getIsAdmin();
  if (admin) {
    return true;
  }
  return false;
};

export const isUserLogin = () => {
  const token = getToken();

  if (token) {
    return true;
  }
  return false;
};

export const resetlogin = () => {
  localStorage.clear();
  sessionStorage.clear();

  return;
};
