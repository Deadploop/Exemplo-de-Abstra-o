import {Eletrodomestico} from './eletrodomestico';

class Geladeira extends Eletrodomestico{
  private cor: string = 'branca';
  private marca: string = 'eletrolux';
  private frostfree: boolean = false;

  public abrirGeladeira(): void {

    console.log("A geladeira foi aberta!");
  }

}

