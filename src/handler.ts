import { CategoriaService } from "./Services/CategoriaService";
import { BaseService } from "./Services/BaseService";

export default class Handler {
  private handlers: object;
  constructor() {
    this.handlers = {
      Categoria: new CategoriaService()
    };
  }

  public getServiceByModel = (model: object) => {
    const key = Object.keys(this.handlers).find(key => key === (model as any).name);
    if (key) {
      return this.handlers[key];
    }
  };
}
