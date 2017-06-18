import { Pipe, PipeTransform } from '@angular/core';

//import {KnowledgeModel} from '../models/knowledge.model';
//import {DataInterface} from '../models/objectData.model';

@Pipe({
    name: 'associationfilter',
    pure: false
})
export class AssociationFilterPipe implements PipeTransform {
    transform(items: any[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item =>item.type.indexOf(filter) !== -1);
    }
}
