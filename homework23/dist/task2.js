"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function processString(str) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(str.toUpperCase());
        }, Math.random() * 1000);
    });
}
function processAllStrings(array) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = array.map((str) => processString(str));
        const results = yield Promise.all(promises);
        console.log("Результат:", results);
    });
}
console.log("--- Задание 2 ---");
processAllStrings(["hello", "world", "typescript"]);
