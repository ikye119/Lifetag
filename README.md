# LifeTag

LifeTag is an emergency identity web app built with Next.js, React, TypeScript, and Tailwind CSS. It provides public emergency profiles, private recovery-key owner access, responder actions, an installable web app, and a dual-QR emergency card.

- The red QR contains readable emergency text and works in an ordinary scanner without internet.
- The blue QR opens the latest online profile.
- Editing a profile increments its QR version and tells the owner to replace the old printed card.

## Start the project

```bash
npx pnpm install
npx pnpm dev
```

Open `http://localhost:3000`.

## Collaborating

Commit the extracted project to GitHub, then invite collaborators from the repository's **Settings → Collaborators** page. Each contributor should clone the repository and run the commands above.

Development records are stored in `data/lifetag.json`, which is ignored by Git so personal medical data is never committed accidentally.

## Production database

The included file storage is intended for local development and prototypes. Before public production deployment, replace `lib/storage.ts` with a managed database adapter such as PostgreSQL, Supabase, Neon, or another service chosen by the team.

## Recovery keys

Recovery keys are hashed before storage and displayed only when a profile is created. A lost key cannot currently be recovered.
