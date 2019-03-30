import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, PRIMARY_OUTLET, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface Breadcrumb {
    label: string;
    params: Params;
    url: string;
}

@Component({
    selector: 'app-breadcrumb',
    templateUrl: 'breadcrumb.component.html',
    styleUrls: ['breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
    breadcrumbs: Breadcrumb[] = [];

    constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.breadcrumbs = this.getBreadcrumbs(this.activatedRoute.root);
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd)
            ).subscribe(event => {
                this.breadcrumbs = this.getBreadcrumbs(this.activatedRoute.root);
            });
    }

    private getBreadcrumbs(
        route: ActivatedRoute,
        url: string = '',
        breadcrumbs: Breadcrumb[] = []
    ): Breadcrumb[] {
        const routerBreadcrumbsData = "title";
        const children: ActivatedRoute[] = route.children;
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (const child of children) {
            if (child.outlet === PRIMARY_OUTLET) {
                const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
                const nextUrl = url + `/${routeURL}`;
                if (child.snapshot.data.hasOwnProperty(routerBreadcrumbsData)) {
                    const breadcrumb: Breadcrumb = {
                        label: child.snapshot.data[routerBreadcrumbsData] || 'Breadcrumb',
                        params: child.snapshot.params,
                        url: nextUrl
                    };
                    breadcrumbs.push(breadcrumb);
                }
                return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
            }
        }
    }
}