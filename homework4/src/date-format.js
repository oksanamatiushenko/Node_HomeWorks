import { DateTime } from "luxon";

const now = DateTime.local();

console.log("DD-MM-YYYY:", now.toFormat("dd-MM-yyyy"));
console.log("MMM Do, YY:", now.toFormat("MMM dd, yy"));
console.log("dddd:", now.toFormat("cccc"));
