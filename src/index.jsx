// eslint-disable-next-line no-unused-vars
import React from "react";
import { createRoot } from "react-dom/client";

import CounterApp from "./components/CounterApp";

const root = createRoot(document.getElementById("root"));
root.render(<CounterApp />);
