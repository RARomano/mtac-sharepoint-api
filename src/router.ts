import { Express, Request, Response } from "express";
import Handler from "./handler";
import { Categoria } from "./Models/categoria";

export default class Router {
  constructor(private server: Express, private handler: Handler) {
    this.setRoutes();
  }

  private setRoutes = () => {
    this.server.get("/categorias", this.categorias);
  };

  private categorias = async (request: Request, response: Response) => {
    response.send(await this.handler.getServiceByModel(Categoria)?.getAll());
  };
}
