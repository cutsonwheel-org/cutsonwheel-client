import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'book',
        loadChildren: () => import('../book/book.module').then( m => m.BookPageModule)
      },
      {
        path: 'pro',
        loadChildren: () => import('../pro/pro.module').then( m => m.ProPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('../news/news.module').then( m => m.NewsPageModule)
      },
      {
        path: '',
        redirectTo: '/t/pro',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/t/jobs',
    pathMatch: 'full'
  }
];
// const routes: Routes = [
//     {
//       path: 'offers',
//       loadChildren: () => import('../offers/offers.module').then( m => m.OffersPageModule)
//     },
//     {
//       path: 'jobs',
//       loadChildren: () => import('../jobs/jobs.module').then( m => m.JobsPageModule)
//     },
//     {
//       path: '',
//       redirectTo: '/t/jobs',
//       pathMatch: 'full'
//     }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
