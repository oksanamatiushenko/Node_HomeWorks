type IdType = string | number;

function displayId(id: IdType): void {
  if (typeof id === "string") {
    console.log(`ID: ${id.toUpperCase()}`);
  } else {
    console.log(`ID: ${id * 10}`);
  }
}

console.log("--- Задание 2 ---")
displayId("abc");
displayId(7);