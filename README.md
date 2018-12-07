# Angular Developer Assesment
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.1.
Submission Author: Jason Hodges, hodgesjaso@verizon.net in December, 2018.

## Technologies:  
Angular 7.1.1 (Angular CLI), Karma/Jasmine, SCSS (SASS)

## Solution Notes
The container for this table is scrollable horzontally.
Results from pagination logic will display in the console so the logic may be evaluated more simply.
The single, default route is "/" for simpicity.
Sample Data is served locally via the Angular Development server from /assets/ and may be changed easily from within the XhrDataService. 
Pagination options are: 15 (default), 25, 50 and All.
The page counter has a maximum limit of 1000.  Anything over 1000 pages will display "Page X of 1000+"

App-table accepts the following attribute/inputs:
[tableData] - Your data object 
[paginatorCounterMax] -  The maximum number of available pages
[PaginationItemsPerPage] - default page size
[headerData] - Your header object
(ifRowClicked) - Output and event emitter for row-level button click action.

App-paginator accepts the following attribute/inputs:
[max] - accepts the [paginatorCounterMax] property from app-table
[length] - accepts the length property of app-table's [tableData]
[perPage] - accepts the [PaginationItemsPerPage] property from app-table
(paginationAction) - Output and event emitter for specific app-paginator events.

Recommended build:  ng build --aot=true --buildOptimizer=true --prod=true
*Depending on your hosting location, you may require a --base-href

## Additional Notes
As discussed with Ameya, I am currently beginning training in Jasmine.  Therefore, tests are functional, but basic only.

## Thanks!
This was a fun project and I appreciate the time you will spend in evaluation of this effort.  Feel free to reach out if you have any questions or feedback.

Jason Hodges, hodgesjaso@verizon.net


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run `npm start` for a dev server with AOT. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


