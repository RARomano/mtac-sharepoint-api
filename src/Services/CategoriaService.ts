import { Categoria } from "../Models/categoria";
import { BaseService } from "./BaseService";

export class CategoriaService extends BaseService<Categoria> {
  /**
   *
   */
  constructor() {
    super('Categorias', Categoria);
  }
}
