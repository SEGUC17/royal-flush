import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'location'
})
export class LocationPipe implements PipeTransform {

  transform(results: any, term: any): any {
    //check if no term provided
    if(term === undefined) return results;
    

    return results.filter(function(result){
      return result.address.toLowerCase().includes(term.toLowerCase());
    });
  }

}
