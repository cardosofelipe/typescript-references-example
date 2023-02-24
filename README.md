# TypeScript References Example

## Files in this repository

The structure of this repo is as follows:

#### Source Code Folders
```
/core                  Base library for this application
  /tsconfig.json         Config file for 'core' project
  /utilities.ts          Submodule that exposes two utility functions
/animals               Depends on 'core'
  /tsconfig.json         Config file for 'animal' project
  /animal.ts             Defines the 'animal' type
  /dog.ts                Defines the 'dog' type
  /index.ts              Entry point module that re-exposes types from animal.ts and dog.ts
/zoo                   Depends on 'animals' (directly) and 'core' (indirectly)
  /tsconfig.json         Config file for 'zoo' project
  /zoo.ts                Creates a zoo with some dogs in it (OK it's a weird zoo)
/tsconfig.json           Solution file for the application
```

#### Build and Build Configuration
```
/core                  Base library for this application
/lib                   Output folder (not checked in)
/tsconfig-base.json    Shared configuration file for common compiler options
```
