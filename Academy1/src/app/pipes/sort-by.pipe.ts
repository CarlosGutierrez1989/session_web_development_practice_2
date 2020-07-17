import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';

@Pipe({
  name: 'sortBy',
  pure: false
})
export class SortByPipe implements PipeTransform {

  transform(value:Array<any>, like: boolean): Array<any> {

    if(!value){
      return[]
    }

    if(like){
      console.log("like")
      return _.sortBy(value, function(album){return album.like}).sort()
    }else{
      return _.sortBy(value, function(album){return album.id})
    }
    
  }


}
