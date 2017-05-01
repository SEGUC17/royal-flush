import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationEvent'
})
export class LocationEventPipe implements PipeTransform {

 transform(results: any, term: any): any {
    //check if no term provided
    if(term === undefined) return results;
    

    return results.filter(function(result){
      return result.location.toLowerCase().includes(term.toLowerCase());
    });
  }

}
