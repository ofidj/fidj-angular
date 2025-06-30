# Technical Context: fidj-angular

## Technologies Used
- **TypeScript**: Primary programming language
- **Angular**: Framework (version 15.x)
- **RxJS**: Library for reactive programming
- **ng-packagr**: Tool for building Angular libraries
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **TypeDoc**: Documentation generation
- **fidj-node**: Core functionality dependency

## Development Setup
The project uses a standard Angular library development setup:

- **Build System**: ng-packagr for Angular library packaging
- **Testing**: No specific testing framework mentioned in package.json
- **Documentation**: TypeDoc for API documentation
- **Code Quality**: ESLint and Prettier for code quality and formatting
- **Version Control**: Git
- **CI/CD**: GitHub Actions

## Technical Constraints
- Must maintain compatibility with Angular 15.x
- Must work with fidj-node version 15.1.13 or compatible
- Must follow Angular's module and service patterns
- Must support TypeScript's strict mode
- Must be compatible with Angular's AOT compilation

## Dependencies
### Main Dependencies:
- **fidj-node**: ^15.1.13 - Core functionality

### Dev Dependencies:
- **Angular**: ^15.0.0 (various packages)
- **ng-packagr**: ^15.2.2
- **TypeScript**: 4.9.5
- **TypeDoc**: ^0.26.11
- **ESLint**: ^9.28.0 and related plugins
- **Prettier**: ^3.5.3

The project follows a modular dependency structure, with clear separation between runtime dependencies and development tools.
