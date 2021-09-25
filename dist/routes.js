"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
var CreateCourse_1 = __importDefault(require("./CreateCourse"));
function createCourse(request, response) {
    CreateCourse_1.default.execute({
        duration: 10,
        educator: 'Dani',
        name: 'NodeJS'
    });
    return response.send();
}
exports.createCourse = createCourse;
