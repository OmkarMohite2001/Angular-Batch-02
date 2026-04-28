import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authinticationGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
 const router = inject(Router);
  if(token){
    return true;
  }else{
    // window.location.href= '/login';
    router.navigate(['/login']);
    return false;
  }
};
