import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LoginGuard } from 'app/guards/login.guard';
import { DatosPapaComponent } from 'app/datos-papa/datos-papa.component';

export const AdminLayoutRoutes: Routes = [
    
    { path: 'principal',          component: DashboardComponent },
    { path: 'perfil-usuario',     component: UserProfileComponent },
    { path: 'datos-papa',         component: DatosPapaComponent },
    { path: 'lista-niños',        component: TableListComponent },
    { path: 'typography',         component: TypographyComponent },
    { path: 'icons',              component: IconsComponent },
    { path: 'maps',               component: MapsComponent },
    { path: 'notifications',      component: NotificationsComponent },
    { path: 'permiso-tutores',    component: UpgradeComponent },
];
