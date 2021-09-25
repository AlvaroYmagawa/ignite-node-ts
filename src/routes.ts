import { Request, Response } from "express";
import CreateCourse from "./CreateCourse";

export function createCourse(request: Request, response: Response) {
  CreateCourse.execute({
    duration: 10,
    educator: "Dani",
    name: "NodeJS",
  });

  return response.send();
}
