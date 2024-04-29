import React from 'react';

import { INewsLetter } from '@/data/mock/newsletters';

import NewsletterCard from '../../molecules/NewsletterCard';

interface IProps {
  userRights: string[];
  newsletters: INewsLetter[];
  sectionTitle: string;
}

const NewsletterSection: React.FC<IProps> = ({
  userRights,
  newsletters,
  sectionTitle,
}) => {
  return (
    <>
      <h2>{sectionTitle}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {newsletters.map((newsletter) => (
          <NewsletterCard
            key={newsletter.id}
            newsletter={newsletter}
            userRights={userRights}
          />
        ))}
      </div>
    </>
  );
};

export default NewsletterSection;
