# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed

- Rebuilt the Docker build pipeline to install dependencies with `pnpm` (matching `pnpm-lock.yaml`) instead of a lockfile-less `npm install`, added a BuildKit cache mount for the pnpm store, and added `[timing]` log markers around each build stage so build duration is visible in Dokploy's deploy logs. Also added `.dockerignore` to shrink the build context. Verified locally: dependency install dropped from a cold, unmatched-lockfile install to ~17s, full image build to ~34s.

### Fixed

- Corrected the stale "Last updated" date on the privacy policy (EN/ES) to match its content changes, and added an `AGENTS.md` rule requiring the date to be bumped whenever legal page content changes.

## [2026-09-21]

### Changed

- Expanded the privacy policy (EN/ES) with explicit data security mechanisms — encryption in transit/at rest, access controls, sensitive data handling and retention — to satisfy Google OAuth app verification requirements. ([34bdec0](https://github.com/Colosson/Landing_Colosson-/commit/34bdec0))

## [2026-09-03]

### Added

- Privacy Policy and Terms of Service pages (`/privacy-policy`, `/terms-of-service`), bilingual EN/ES, aligned with Colombian data protection law (Law 1581 of 2012, Decree 1074 of 2015). ([c3f3566](https://github.com/Colosson/Landing_Colosson-/commit/c3f3566))

## [2026-08-18]

### Added

- SEO clusters and technical search foundations. ([d75be38](https://github.com/Colosson/Landing_Colosson-/commit/d75be38))

### Changed

- Polished motion lifecycle and intro assets. ([5328a60](https://github.com/Colosson/Landing_Colosson-/commit/5328a60))

## [2026-07-31]

### Fixed

- Refined Spanish mobile layout styles for the CTA glyph, hero bottom paragraph and work title. ([f7b8aa7](https://github.com/Colosson/Landing_Colosson-/commit/f7b8aa7))

## [2026-07-30]

### Fixed

- Spanish mobile layout issues: inverted question mark on the CTA, hero button separation and work title typography. ([146412b](https://github.com/Colosson/Landing_Colosson-/commit/146412b))

## [2026-07-27]

### Added

- Initial commit — Colosson website with Dokploy & Hostinger deployment setup. ([e7c9948](https://github.com/Colosson/Landing_Colosson-/commit/e7c9948))

### Removed

- Arrow icons from mobile and desktop layouts. ([42f1feb](https://github.com/Colosson/Landing_Colosson-/commit/42f1feb))
