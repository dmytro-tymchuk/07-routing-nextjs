import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';
import css from '../../../page.module.css';
import SidebarNotes from '@/components/SidebarNotes/SidebarNotes';

type PageProps = {
  params: Promise<{ filters: string[] }>;
  searchParams?: { page?: string; searchValue?: string };
};

export default async function NotesByFilter({ params, searchParams }: PageProps) {
    const { filters } = await params;
    const [tag] = filters
    const sp = await searchParams;

  const page = Number(sp?.page ?? 1);
  const searchValue = sp?.searchValue ?? '';

  
  
  const tagParam = tag === 'All' || tag === 'all' ? undefined : tag;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', { page, searchValue, tag: tagParam }],
    queryFn: () => fetchNotes(page, searchValue, tagParam),
  });

  return (
    <div className={css.app}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesClient
          initialPage={page}
          initialSearchValue={searchValue}
          initialTag={tagParam}
              />
      </HydrationBoundary>
    </div>
  );
}
