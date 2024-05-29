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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var nextJoke = document.getElementById("nextJoke"); //importem boto
var jokeText = document.getElementById("jokeText"); //importem text acudit
var norrisJokeText = document.getElementById("norrisJokeText"); //importem text acudit
var boto1 = document.getElementById("boto1");
var boto2 = document.getElementById("boto2");
var boto3 = document.getElementById("boto3");
var iconHtml = document.getElementById("iconhtml");
var temperature2 = document.getElementById("temperature2");
document.addEventListener("DOMContentLoaded", getJoke);
document.addEventListener("DOMContentLoaded", getNorrisJoke);
// variables
var reportJokes = [];
// MOSTRAR ACUDITS
nextJoke.addEventListener("click", getJoke); //inicialitzem la funció al clicar
function getJoke() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://icanhazdadjoke.com/", {
                            headers: {
                                Accept: "application/json",
                            }, // amb el get fem un fetch per aconseguir la data i ara l'hem de fer llegible
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    if (jokeText) {
                        jokeText.innerHTML = data.joke;
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error getting the joke:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Function norris joke
nextJoke.addEventListener("click", getNorrisJoke);
function getNorrisJoke() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
                            headers: {
                                "x-rapidapi-key": "f4403c7ad0msh04c93825d4e43ecp138fe3jsndca77ab58afc",
                                "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
                                Accept: "application/json",
                            },
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    if (norrisJokeText) {
                        norrisJokeText.innerHTML = data.value;
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error("Error getting the norrisJoke", error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
//Function getWeather
function getWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var apiKey, city, response, data, iconCode, iconUrl, tempCode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiKey = "3dd738c2fa4e8c524c12451eebab3cfb";
                    city = "Barcelona";
                    return [4 /*yield*/, fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(apiKey, "&units=metric"), {
                            headers: {
                                Accept: "application/json",
                            },
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    iconCode = data.weather[0].icon;
                    iconUrl = "https://openweathermap.org/img/wn/".concat(iconCode, "@2x.png");
                    iconHtml.innerHTML = "<img src=\"".concat(iconUrl, "\">");
                    tempCode = data.main.temp;
                    temperature2.innerHTML = tempCode;
                    return [2 /*return*/];
            }
        });
    });
}
getWeather();
//Assignem valor a botons
boto1 === null || boto1 === void 0 ? void 0 : boto1.addEventListener("click", function () { return vote(1); }); //Cridem la funcio vote amb l'argumen (valor 1,2 0 3)
boto2 === null || boto2 === void 0 ? void 0 : boto2.addEventListener("click", function () { return vote(2); });
boto3 === null || boto3 === void 0 ? void 0 : boto3.addEventListener("click", function () { return vote(3); });
function vote(score) {
    // let jokeText = document.getElementById("jokeText");
    var jokeScore = score;
    if (jokeText) {
        var jokeHtml = jokeText.innerHTML;
        var jokeAcudits = {
            joke: jokeHtml,
            score: jokeScore,
            date: new Date().toISOString(),
        };
        reportJokes.push(jokeAcudits);
        console.log(reportJokes);
    }
}
