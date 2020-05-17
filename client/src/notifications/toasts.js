import React from 'react'
import { toast } from "react-toastify";
import "../index.css"
import {FaExclamation} from "react-icons/fa";

export function loginMessage(props) {
  toast.success(`Success, ${props}! You are logged in!`, {
    className: "login-message",
    position: toast.POSITION.BOTTOM_RIGHT,
  });
}

// export function logoutMessage(props) {
//   // toast.success(`Bye-bye ${props}!`, {
//   toast.success(`Bye-bye, ${props}!`, {
//     className: "logout-message",
//     position: toast.POSITION.BOTTOM_RIGHT,
//   });
// }

export function logoutMessage() {
  toast.success(`Bye-bye!`, {
    className: "logout-message",
    position: toast.POSITION.BOTTOM_RIGHT,
  });
}

export function loginFailEmpty() {
  toast.warn("Username and Passowrd cannot be empty!",
    {
      className: "login-fail-message",
      position: toast.POSITION.BOTTOM_RIGHT,
    }
  );
}

export function loginFailCredentials() {
  toast.warn(<div>Something went wrong!<br /> Make sure your username and password is correct and try again!</div>,
    {
      className: "login-fail-message",
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

export function usernameTakenMessage(props) {
  toast.warn(<div><FaExclamation/>{props} is taken<br />Pick a different username.</div>, {
    className: "register-message",
    position: toast.POSITION.BOTTOM_RIGHT,
  });
}

export function emailAlreadyInUse(props) {
  toast.warn(
    <div>
      <div style={{color: "red"}}><FaExclamation/>{props}</div>
      <div> already has an account associated with it.</div>
    </div>, 
    {
    className: "register-message",
    position: toast.POSITION.BOTTOM_RIGHT,
  });
}

export function adminAddUser(props) {
  toast.info(`${props} is being added to the queue.`, {
    className: "admin-add-user-message",
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
  });
}

export function adminRemoveUser(props) {
  toast.info(`Removing ${props} from queue!`, {
    className: "admin-remove-user-message",
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
  });
}

export default {
  loginMessage,
  logoutMessage,
  loginFailEmpty,
  loginFailCredentials,
  registerMessage,
  usernameTakenMessage,
  emailAlreadyInUse,
  adminAddUser,
  adminRemoveUser,
};
