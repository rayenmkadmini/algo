# ALGO LAB — Security Architecture

## 1. Zero-Trust Sandboxed Execution
Student Python code execution is executed entirely client-side using Pyodide inside an isolated `WebWorker`.
- **Isolation:** WebWorkers operate in a separate thread without DOM access, without access to localStorage, cookies, or window object.
- **Network Isolation:** No arbitrary network requests are permitted.
- **Execution Limits:** Strict 5-second watchdog timer terminates and restarts the worker if a student creates an infinite loop (`while True:`).
- **Zero Secrets Exposure:** Supabase Service Role keys and admin credentials are NEVER shipped in client bundles or public repositories. Only `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are exposed, protected by Row Level Security (RLS).

## 2. Row Level Security (RLS)
Every table in Supabase has explicit policies:
- Lessons & Exercises: Read-only for public if `status = 'published'`. Writes restricted to administrators.
- Progress & Submissions: Bound to `auth.uid() = user_id`.
