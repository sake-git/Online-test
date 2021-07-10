import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class MyAuthGuard implements CanActivate{
  canActivate(){
    let user=sessionStorage.getItem("key");
    if(user)
        return true;     
    else
        return false;
  }
}