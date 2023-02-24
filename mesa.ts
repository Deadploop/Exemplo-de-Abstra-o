import {Movel} from './movel';

class Mesa extends Movel{

  private cor: string = 'branco';
  private material: string = 'madeira';
  private formato: string = 'redonda';

  public colocarMesa(): void{

    console.log("Coloquei os pratos na mesa!");

  }


}