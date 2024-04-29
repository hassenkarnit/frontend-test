import Image from 'next/image';

import { INewsLetter } from '@/data/mock/newsletters';

interface IProps {
  userRights: string[];
  newsletter: INewsLetter;
}

// Since all the images are linked to placeholde/150 it imlpies that the dimensions of the images are 150x150
const NewsletterCard: React.FC<IProps> = ({ userRights, newsletter }) => {
  const hasAcceessToNewsletter = userRights.some((right) =>
    newsletter.subscriptions.includes(right),
  );

  return (
    <div className="flex flex-col gap-4 ">
      <div className="relative">
        <Image
          className="z-0 aspect-[3/2] h-full w-full object-cover"
          src={newsletter.image}
          width={150}
          height={150}
          alt={newsletter.title}
        />
        <h3 className="absolute left-0 top-1/2 z-10 w-full -translate-y-1/2 text-center text-black">
          {newsletter.title}
        </h3>
      </div>
      <p className="flex-1">{newsletter.description}</p>
      <div className="flex justify-center rounded-3xl">
        <button
          type="button"
          role="button"
          className={
            hasAcceessToNewsletter
              ? 'rounded-3xl bg-red-500 p-2 dark:bg-red-900'
              : 'rounded-3xl bg-yellow-500 p-2 dark:bg-yellow-900'
          }
        >
          {hasAcceessToNewsletter ? "S'inscrire" : "S'abonner"}
        </button>
      </div>
    </div>
  );
};

export default NewsletterCard;
