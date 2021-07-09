import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatResult'
})
export class FormatResultPipe implements PipeTransform {

  transform(marks:number, total:number): string {
    let percent = parseFloat(((marks/total) * 100).toFixed(2));
    let message='';
    if(percent >= 40.00)
      message= ' Congratulations! You scored '+ percent + '%.';
    else
      message= ' Failed! You scored '+ percent + '%.';
    return message;
  }
}
