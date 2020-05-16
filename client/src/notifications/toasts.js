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

export function logoutMessage(props) {
  // toast.success(`Bye-bye ${props}!`, {
  toast.success(`Bye-bye, ${props}!`, {
    className: "logout-message",
    position: toast.POSITION.BOTTOM_RIGHT,
  });
}

export function loginFail() {
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
      <div> already has an account.</div>
    </div>, 
    {
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
  registerMessage,
  usernameTakenMessage,
  emailAlreadyInUse,
  adminAddUser,
  adminRemoveUser,
};
