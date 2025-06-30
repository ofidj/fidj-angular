# System Patterns: fidj-angular

## System Architecture
fidj-angular follows a modular architecture that aligns with Angular's module system:

- **FidjModule**: The main Angular module that provides all fidj services
- **FidjService**: The primary service that exposes fidj functionality to Angular components
- **SDK Layer**: Wrapper around fidj-node functionality adapted for Angular

The architecture follows a layered approach:
1. Angular Components/Services (user code)
2. fidj-angular services and modules
3. fidj-node core functionality

## Key Technical Decisions
- Use Angular's dependency injection system for service management
- Leverage TypeScript for strong typing and better developer experience
- Maintain compatibility with Angular 15.x
- Follow Angular's module pattern for organization
- Use RxJS for handling asynchronous operations

## Design Patterns in Use
- **Facade Pattern**: FidjService provides a simplified interface to the more complex fidj-node functionality
- **Dependency Injection**: Services are provided through Angular's DI system
- **Observer Pattern**: Using RxJS Observables for asynchronous operations
- **Module Pattern**: Organizing code into cohesive Angular modules
- **Singleton Pattern**: Services are typically provided as singletons

## Component Relationships
- **FidjModule** imports and configures all necessary dependencies
- **FidjService** depends on fidj-node for core functionality
- **Angular Applications** import FidjModule and inject FidjService where needed

The system is designed to be modular and extensible, allowing for easy integration with Angular applications while maintaining a clean separation of concerns.
