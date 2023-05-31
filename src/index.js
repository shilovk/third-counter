import React from "react";
import { createRoot } from "react-dom/client";
import Counter from "./Counter";
import Person from "./Person";
import EventListener from "./EventListener"

const counter = createRoot(document.getElementById("counter"));
counter.render(
  <Counter value={1} />
);

const person = createRoot(document.getElementById("person"));
person.render(
  <Person />
);

const eventListener = createRoot(document.getElementById("event-listener"));
eventListener.render(
  <EventListener />
);
