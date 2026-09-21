# Repo rules for agents

## Changelog

Every change to this repo must be reflected in [CHANGELOG.md](CHANGELOG.md) as part of the same commit.

- Add an entry under `## [Unreleased]`, using the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) categories: `Added`, `Changed`, `Fixed`, `Removed`, `Security`.
- When cutting a release (or at the end of a work session touching production code), move the `Unreleased` entries under a new `## [YYYY-MM-DD]` heading.
- Keep entries short (one line) and link the commit hash once it exists, e.g. `([abc1234](https://github.com/Colosson/Landing_Colosson-/commit/abc1234))`.
- Skip only for changes with no user- or repo-visible effect (formatting-only diffs, comment tweaks, dependency lockfile churn with no behavior change).
