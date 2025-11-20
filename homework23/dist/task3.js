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
function successAfter(ms, value) {
    return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}
function failAfter(ms, message) {
    return new Promise((_, reject) => setTimeout(() => reject(new Error(message)), ms));
}
function runWithErrorHandling() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const results = yield Promise.all([
                successAfter(500, "OK 1"),
                failAfter(300, "Promise Error"),
                successAfter(400, "OK 2"),
            ]);
            console.log("Результаты:", results);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Error:", error.message);
            }
            else {
                console.error("Неизвестная ошибка", error);
            }
        }
    });
}
console.log("--- Задание 3 ---");
runWithErrorHandling();
