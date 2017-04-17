import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }
  validateClientProfile(clientprof){
    if(clientprof.clientName == undefined || clientprof.email == undefined || clientprof.category == undefined || clientprof.fullname == undefined || clientprof.contactNo == undefined || clientprof.clientDescription == undefined || clientprof.clientInfo == undefined || clientprof.paymentInfo == undefined){
      return false;
    }else{
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
