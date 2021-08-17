import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenes'
})
export class ImagenesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    switch (value) {
      case 1:
        return 'https://i.blogs.es/4c7bfd/star-wars1/450_1000.jpeg'
        
      case 2:
        return 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E9A2393D1981A056059B35BDE74459F6FFB471AF43A3F9A3AE781EA285E95D1F/scale?width=1200&aspectRatio=1.78&format=jpeg'
        
      case 3:
        return 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0C9D5ACB57AB28A83F08B3C487616429659AE48D82E06B98B1A5F29F8A16B788/scale?width=1200&aspectRatio=1.78&format=jpeg'
        
      case 4:
        return 'https://www.tonica.la/__export/1593539343008/sites/debate/img/2020/06/30/star_wars-_a_new_hope-mark_hamill-disneyx_1.jpg_1037907269.jpg'
        
      case 5:
        return 'https://kinefilia.files.wordpress.com/2014/02/el-imperio-contraataca-0.jpg?w=584'
        
      case 6:
        return 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/656988220DE1DEA4E1630D7A302EB47CC73E53781F95215DE0459B54331356EE/scale?width=1200&aspectRatio=1.78&format=jpeg'
        
    
      default:
        break;
    }
  }

}
