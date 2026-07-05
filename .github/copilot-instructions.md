# GitHub Copilot Instructions

## Commit Messages

When generating commit messages, always use the Angular Conventional Commit format:

```text
<type>(<scope>): <subject>

<body>

<footer>
```

Use one of these types:

- `feat`: a new feature
- `fix`: a bug fix
- `docs`: documentation-only changes
- `style`: formatting, whitespace, or punctuation changes that do not affect behavior
- `refactor`: code changes that neither fix a bug nor add a feature
- `perf`: performance improvements
- `test`: adding or updating tests
- `build`: build system or dependency changes
- `ci`: CI/CD configuration changes
- `chore`: maintenance tasks that do not affect source or test files
- `revert`: reverting a previous commit

Rules:

- Use a short, imperative subject, such as `add`, `fix`, `update`, or `remove`.
- Keep the subject lowercase and do not end it with a period.
- Keep the first line under 72 characters when practical.
- Include a scope only when it adds useful context, such as `site`, `deps`, `ci`, `content`, or `assets`.
- Use `!` after the type or scope for breaking changes, for example `feat(api)!: remove legacy endpoint`.
- Add a body only when it helps explain why the change was made or what impact it has.
- Add footers for breaking changes and issue references, such as `BREAKING CHANGE: ...` or `Refs #123`.
- Do not include markdown formatting in generated commit messages.

Examples:

```text
feat(site): add project showcase section
fix(styles): prevent mobile nav overflow
docs(readme): update setup instructions
chore(deps): update development dependencies
ci(github): add deployment workflow
```
