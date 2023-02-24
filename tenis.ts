import {Calcado} from './calcado';

class Tenis extends Calcado {
  private cor: string = 'preto';
  private tamanho: number = 27;
  private cadarco: boolean = true;

  public pintarTenis(cor: string): void {
    this.cor = cor;

    console.log('O tênis agora é da cor' + cor);
  }

}
