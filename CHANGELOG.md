# Changelog

All notable changes to this project will be documented in this file.

## [0.0.4] - 2026-06-18

### Changed
- Updated Node.js to v24 in CI and deploy workflows

## [0.0.3] - 2026-06-18

### Fixed
- Added `sys_dictionary_override` to remove mandatory enforcement on `short_description` at the server level, allowing incident form submission without the field

## [0.0.2] - 2026-06-18

### Fixed
- Client script now defers `g_form.setMandatory` via `setTimeout` to ensure it runs after OOB UI policies

## [0.0.1] - 2026-06-18

### Added
- Initial release of Incident Helper
- Client script to remove mandatory requirement from `short_description` on the incident form
