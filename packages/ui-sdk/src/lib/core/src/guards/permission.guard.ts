import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../services';

@Injectable()
export class PermissionGuard implements CanActivate {
	constructor(private readonly router: Router, private readonly authService: AuthService) {}

	/**
	 * Checks if the user has the necessary permissions to activate a route.
	 *
	 * @param {ActivatedRouteSnapshot} route - The route to be activated.
	 * @return {Promise<boolean>} - A promise that resolves to true if the user has the necessary permissions, false otherwise.
	 */
	async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
		const expectedPermissions = route.data.expectedPermissions;
		const hasPermission = await firstValueFrom(this.authService.hasPermissions(expectedPermissions));

		if (hasPermission) {
			return true;
		}

		this.router.navigate(['/']);
		return false;
	}
}
