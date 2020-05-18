import { toast } from "react-toastify";
import "../index.css"

export function loginMessage(props) {
  toast.success(`Success, ${props}! You are logged in!`, {
    className: "login-message",
    position: toast.POSITION.BOTTOM_RIGHT,
  });
}

export function logoutMessage(props) {
  // toast.success(`Bye-bye ${props}!`, {
  toast.success(`Bye-bye!`, {
    className: "logout-message",
    position: toast.POSITION.BOTTOM_RIGHT,
  });
}

export function loginFail() {
  toast.warn(
    `Oh, no, something went wrong! 
    Make sure your information is correct and try again!`,
    {
      className: "login-fail-message",
      position: toast.POSITION.BOTTOM_RIGHT,
    }
  );
}

export function signInFail() {
  toast.warn(
    `Something went wrong with the information you inputted, check that it's correct!`,
    {
      className: "signin-fail-message",
      position: toast.POSITION.BOTTOM_RIGHT,
    }
  );
}

export function alreadyLoggedIn() {
  toast.warn(
    `You're already logged in!`,
    {
      className: "already-logged-in-message",
      position: toast.POSITION.BOTTOM_RIGHT,
    }
  );
}

export function registerMessage(props) {
  toast.success(`Great, you are registered!`, {
    className: "register-message",
    position: toast.POSITION.BOTTOM_RIGHT,
  });
}

export function adminAddUser(props) {
  toast.info(`${props} has been ADDED to the queue!`, {
    className: "admin-add-user-message",
    position: toast.POSITION.BOTTOM_RIGHT,
  });
}

export function adminRemoveUser() {
  toast.info(`Customer has been removed from the queue!`, {
    className: "admin-remove-user-message",
    position: toast.POSITION.BOTTOM_RIGHT,
  });
}

export default {
  loginMessage,
  logoutMessage,
  loginFail,
  signInFail,
  alreadyLoggedIn,
  registerMessage,
  adminAddUser,
  adminRemoveUser,
};
