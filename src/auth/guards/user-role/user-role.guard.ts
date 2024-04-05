import { Reflector } from '@nestjs/core';
import { 
  BadRequestException, 
  CanActivate, 
  ExecutionContext, 
  ForbiddenException, 
  Injectable 
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { User } from 'src/entities/user.entity';
import { META_ROLES } from 'src/auth/decorator/role-protected.decorator';

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector // El método Reflector#get nos permite acceder fácilmente a los metadatos pasando dos argumentos...
  ) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const validRoles: string[] = this.reflector.get( META_ROLES, context.getHandler()) // como lo explico en el comentario anterior, pasamos 2 argumentos al metodo.

    if (!validRoles) return true;
    if ( validRoles.length === 0 ) return true;

    const req = context.switchToHttp().getRequest();
    const user = req.user as User;

    if (!user) throw new BadRequestException('User not found');

    for (const role of user.roles ) {
      if ( validRoles.includes( role ))

      return true;
    }
    
    throw new ForbiddenException( `User ${user.name} need a valid role to access`);
  }
}
