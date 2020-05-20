import React from "react";
import { toast } from "react-toastify";
import "../index.css";
import { FaExclamation, FaCheckDouble } from "react-icons/fa";

export function loginMessage(props) {
  toast.success(`Success, ${props}! You are logged in!`, {
    className: "login-message",
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
  });
}

export function logoutMessage() {
  toast.success(`Bye-bye!`, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
  });
}

export function loginFailEmpty() {
  toast.warn("Username and Passowrd cannot be empty!", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
  });
}

export function loginFailCredentials() {
  toast.warn(
    <div>
      Something went wrong!
      <br /> Make sure your username and password is correct and try again!
    </div>,
    {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
    }
  );
}

export function registerMessage(props) {
  toast.success(`Great, you are registered!`, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
}

export function usernameTakenMessage(props) {
  toast.warn(
    <div>
      <FaExclamation />
      {props} is taken
      <br />
      Pick a different username.
    </div>,
    {
      position: toast.POSITION.BOTTOM_RIGHT,
    }
  );
}

export function emailAlreadyInUse(props) {
  toast.warn(
    <div>
      <div style={{ color: "red" }}>
        <FaExclamation />
        {props}
      </div>
      <div> already has an account associated with it.</div>
    </div>,
    {
      position: toast.POSITION.BOTTOM_RIGHT,
    }
  );
}

export function adminAddUser(props) {
  toast.info(`${props} is being added to the queue.`, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
  });
}

export function adminRemoveUser(props) {
  toast.info(`Removing ${props} from queue!`, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
  });
}
export function messageSent(props) {
  toast.success(
    <div>
      <FaCheckDouble /> {props}, your messge was sent
    </div>,
    {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
    }
  );
}

export function emptyFields() {
  toast.warn("Please make sure all fields are filled out!", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 4000,
  });
}

export function passwordChanged() {
  toast.success("Your password has been been changed", {
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
  messageSent,
  emptyFields,
  passwordChanged,
};
