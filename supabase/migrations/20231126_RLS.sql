create table public.contacts (
  id bigint generated by default as identity primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  firstname text,
  lastname text, 
  email text,
  message text
);

alter table public.contacts enable row level security;
create policy "Allow insert for everyone" on public.contacts for insert with check (true);
create policy "Deny select for everyone" on public.contacts for select using (false);