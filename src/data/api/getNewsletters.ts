import { groupBy } from '@/lib/groupBy';

export const getNewsletters = async () => {
  const { NEWSLETTER_ITEMS } = await import('@/data/mock/newsletters');

  return groupBy(NEWSLETTER_ITEMS, (item) => item.site);
};
