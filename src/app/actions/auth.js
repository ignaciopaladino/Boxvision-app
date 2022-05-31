const axios = require("axios");

export const AUTH_START = "AUTH_START";

export const authStart = () => {
  return {
    type: AUTH_START
  };
};

export const AUTH_SUCCESS = "AUTH_SUCCESS";

export const authSuccess = (token, expiresIn) => {
  const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  localStorage.setItem("boxvisionToken2", token);
  localStorage.setItem("boxvisionExpirationDate", expirationDate);

  return {
    type: AUTH_SUCCESS,
    token: token,
    expirationDate: expirationDate
  };
};
export const AUTH_FAIL = "AUTH_FAIL";

export const authFail = data => {
  return {
    type: AUTH_FAIL,
    error: data.error
  };
};

export const authCheckState = () => {
  return function(dispatch) {
    const token = localStorage.getItem("boxvisionToken2");
    if (!token) {
      return dispatch(authLogOut());
    } else {
      const expirationDate = new Date(
        localStorage.getItem("boxvisionExpirationDate")
      );
      if (expirationDate > new Date()) {
        checkAuthTimeOut(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        );
        return dispatch(
          authSuccess(token, expirationDate.getTime() - new Date().getTime())
        );
      } else {
        return dispatch(authLogOut());
      }
    }
  };
};

export const AUTH_LOGOUT = "AUTH_LOGOUT";

export const authLogOut = () => {
  return {
    type: AUTH_LOGOUT,
    token: null,
    expirationDate: null,
    isAuthenticated: false
  };
};

const checkAuthTimeOut = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(authLogOut());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    return axios
      .post("https://boxvision.com.ar/boxvision/tablets/login", {
        user: {
          usuario: email,
          password: password
        }
      })
      .then(response => {
        if (response.data.error == 0) {
          dispatch(authSuccess(response.data.token, response.data.expiresIn));
        } else {
          dispatch(authFail({ error: "Usuario/Contraseña incorrectas" }));

          //this.setState({ error: "Usuario/Contraseña incorrectas" });
        }
      })
      .catch(error => {});
  };
};
