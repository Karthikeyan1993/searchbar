import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'myfilterString',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: String, configuration: any): any {
        if (!items || !filter) {
            return [];
        }
        return items.filter(item => item[configuration.condition].toLowerCase().indexOf(filter.toLowerCase()) !== - 1);
    }
}
