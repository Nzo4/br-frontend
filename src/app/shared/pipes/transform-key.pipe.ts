import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformKey'
})
export class TransformKeyPipe implements PipeTransform {
  keyTranslaterMap = new Map([
    ['WxD', 'Размеры (ШхГ)'],
    ['WxHxD', 'Размеры (ШхВхГ)'],
    ['color', 'Цвет'],
    ['transformationMechanism', 'Механизм трансформации'],
    ['filler', 'Наполнитель'],
    ['guarantee', 'Гарантия'],
    ['lifeTime', 'Срок жизни'],
    ['manufacturer', 'Производитель'],
    ['seatBase', 'Основание'],
    ['upholstery', 'Обивка'],
    ['frame', 'Каркас']
  ]);

  transform(key: string): string {
    return this.keyTranslaterMap.get(key) || key;
  }
}
