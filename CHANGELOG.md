# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [15.1.12] - 2025-06-30

## [1.0.0] - 2026-05-27

### Changed

- **Renamed package from `fidj-angular` to `@ofidj/angular`.** Scope aligns with the `ofidj` GitHub organisation and the
  `@ofidj/*` family. Reset semver to `1.0.0`.
- Peer-dep convention with Angular kept: future majors track Angular's major (current build targets Angular 20).
- Internal dependency `fidj-node` → `@ofidj/node` (both `package.json` and `package.ofidj.json` local/remote variants).
- Update imports: `from 'fidj-node'` → `from '@ofidj/node'` in `src/index.ts` and `src/sdk/FidjService.ts`.
- The old `fidj-angular` and legacy `fidj` npm packages are deprecated; migrate to `@ofidj/angular`.

## [legacy-15.1.12] - 2025-06-30

### Added

- Linted and prettier
- ESLint configuration
- Prettier configuration
- BP scripts for development workflow

## [legacy-15.0.0] - 2024-10-15

### Added

- Initial extraction
