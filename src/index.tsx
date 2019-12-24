import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();

// (function() {
//   if ("serviceWorker" in navigator) {
//     window.addEventListener("load", function() {
//       navigator.serviceWorker
//         .register("http://localhost:9000/service-worker.js")
//         .then(
//           function(registration) {
//             debugger
//             // Registration was successful
//             console.log(
//               "ServiceWorker registration successful with scope: ",
//               registration.scope
//             );
//           },
//           function(err) {
//             // registration failed :(
//             console.log("ServiceWorker registration failed: ", err);
//           }
//         );
//     });
//   }
// })();
