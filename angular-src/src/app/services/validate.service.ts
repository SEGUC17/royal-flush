import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }
// <<<<<<< HEAD

  validateRegister(user) {
    if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
      return false;
    } else {
      return true;
    }
  }
//   validateEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// =======
  validateClientProfile(clientprof){
    if(clientprof.clientName == undefined || clientprof.email == undefined || clientprof.category == undefined || clientprof.fullname == undefined || clientprof.contactNo == undefined || clientprof.clientDescription == undefined || clientprof.clientInfo == undefined || clientprof.paymentInfo == undefined){
      return false;
    }else{
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// >>>>>>> f1d3e2d180b4d1a2f1311d8ec95e74d4de216215
    return re.test(email);
  }
}
