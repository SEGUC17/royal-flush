import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(results: any, term: any): any {
    //check if no term provided
    if(term === undefined) return results;
    

    return results.filter(function(result){
      return result.category.toLowerCase().includes(term.toLowerCase());
    });
  }
}
