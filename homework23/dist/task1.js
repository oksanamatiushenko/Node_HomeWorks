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
const delay = (ms, value) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Завершен: ${value}`);
            resolve(value);
        }, ms);
    });
};
function runSequentially() {
    return __awaiter(this, void 0, void 0, function* () {
        const result1 = yield delay(1000, "One");
        const result2 = yield delay(500, "Two");
        const result3 = yield delay(800, "Three");
        console.log("Все выполнены:", result1, result2, result3);
    });
}
console.log("--- Задание 1 ---");
runSequentially();
