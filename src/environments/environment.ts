// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    config: {
        api: "<YOUR_API>",
        client_secret: "<YOUR_SECRET>",
        client_id: 0,
        resource: {
            point: "api",// = "api" or "web"
            version: "<VERSION_API>",// = v1
            app: "<APP_RESOURCE>" // = inventory
        }
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
