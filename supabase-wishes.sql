create table if not exists public.place_wishes (
  id uuid primary key default gen_random_uuid(),
  trip_id uuid not null references public.trips(id) on delete cascade,
  place_id uuid not null references public.places(id) on delete cascade,
  person text not null check (person in ('Malin','Louise','Elin')),
  created_at timestamptz not null default now(),
  unique(trip_id, place_id, person)
);
alter table public.place_wishes enable row level security;
