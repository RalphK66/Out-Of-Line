import React from 'react'
import { store } from "react-notifications-component";

export function loginMessage(props) {
    store.addNotification({
      title: `Success, ${props}!`,
      message: "You are now logged in!",
      type: "success",
      insert: "top",
      container: "botom-right",
      dismiss: {
        duration: 5000,
        onScreen: false,
      },
    })
  }

  export function  logoutMessage() {
    store.addNotification({
      title: `Bye-bye!`,
      message: "See you next time!",
      type: "success",
      insert: "top",
      container: "botom-right",
      dismiss: {
        duration: 3000,
        onScreen: false,
      },
    })
  }

  export function loginFail() {
    store.addNotification({
      title: "Oh No!",
      message: "Something went wrong! Please check your email and password and try again!",
      type: "warning",
      insert: "top",
      container: "botom-right",
      dismiss: {
        duration: 5000,
        onScreen: false,
      },
    })
  }

  export function registerMessage(props) {
    store.addNotification({
      title: `Hi, ${props}!`,
      message: "You are signed up and logged in!",
      type: "success",
      insert: "top",
      container: "botom-right",
      dismiss: {
        duration: 5000,
        onScreen: false,
      },
    })
  }

  export function adminAddUser(props) {
    store.addNotification({
      title: `${props},`,
      message: "has been added to the queue",
      type: "info",
      insert: "top",
      container: "botom-right",
      dismiss: {
        duration: 5000,
        onScreen: false,
      },
    })
  }

  export function adminRemoveUser(props) {
    store.addNotification({
      title: `${props},`,
      message: "has been removed from the queue",
      type: "warning",
      insert: "top",
      container: "botom-right",
      dismiss: {
        duration: 5000,
        onScreen: false,
      },
    })
  }

  export default { loginMessage, logoutMessage, loginFail, registerMessage, adminAddUser, adminRemoveUser }