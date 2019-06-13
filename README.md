# Angular Developer Assesment
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.1.
Submission Author: Jason "Jay" Hodges, hodgesjaso@verizon.net

## Technologies:  
Angular 7.1.1 (Angular CLI), Karma/Jasmine, SCSS (SASS)

## Project Requirements
The objective is to implement a TABLE component according to the specifications outlined below, using the listed technologies only – please do not use 3rd party table components such as those included with Bootstrap, Angular Material, etc.

### High-level Specifications:
-	The component should display Sample Data in a table
-	User should be able to select how many rows are displayed in the table
-	Table should be paginated if not all rows are displayed on the screen based on the user’s selection
-	Pagination options should be displayed in the table footer
-	Column names should be displayed in the table header
-	Entire table, table header and table footer should always be displayed on the screen while scrolling
-	If number of rows exceeds the size of the table body, a vertical scrollbar should be displayed within the table body – only table body shall scroll vertically, table header and footer shall remain as is
-	If number of columns exceed the size of the table body, a horizontal scrollbar should be displayed within the table body – only table body and table header shall scroll to reveal the additional columns, table footer shall remain as is
-	Each row should contain a button which shall submit the row ID and row status to /api/submit as a POST request – You are not expected to create the POST endpoint, but you can mock one if you like

### Technologies
-	Angular 4+ (solution completed in Angular 7.1.1)
-	Angular CLI
-	Karma / Jasmine
-	Sass/Scss (optional)

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
Sample JSON data was provided.

## Thanks!
This was a fun project and I appreciate the time you will spend in evaluation of this effort.  Feel free to reach out if you have any questions or feedback.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run `npm start` for a dev server with AOT. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


