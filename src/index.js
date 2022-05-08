import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import { PlaylistProvider } from "./context/playlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PlaylistProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </PlaylistProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
