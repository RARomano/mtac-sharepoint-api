import { sp } from "@pnp/sp-commonjs";

export class BaseService<T> {
  /**
   *
   */
  constructor(protected listName: string, protected t: new (data: any) => T) {}

  public getAll = async (): Promise<any[]> =>
    (await sp.web.lists.getByTitle(this.listName).items.getAll()).map(
      data => new this.t(data)
    );
}