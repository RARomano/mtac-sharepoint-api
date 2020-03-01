export class Categoria {
  public ID?: Number;
  public Nome?: string;

  /**
   *
   */
  constructor(item?: any) {
    this.ID = item?.Id;
    this.Nome = item?.Title;
  }
}
