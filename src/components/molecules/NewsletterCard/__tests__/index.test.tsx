import { render, screen } from '@testing-library/react';

import { INewsLetter } from '@/data/mock/newsletters';

import NewsletterCard from '..';
const newsletterRight1: INewsLetter = {
  id: '000000000000000000000000',
  image: 'https://via.placeholder.com/150',
  description: "Dive into the unknown with this week's spotlight!",
  title: 'Weekly Wonders',
  site: 'DEN',
  subscriptions: ['RIGHT_1'],
};

const newsletterRight2: INewsLetter = {
  id: '000000000000000000000000',
  image: 'https://via.placeholder.com/150',
  description: "Dive into the unknown with this week's spotlight!",
  title: 'Weekly Wonders',
  site: 'DEN',
  subscriptions: ['RIGHT_2'],
};

const subscriptionsRight1 = ['RIGHT_1'];

describe('NewsletterCard', () => {
  it("should render S'inscrire", async () => {
    render(
      <NewsletterCard
        newsletter={newsletterRight1}
        userRights={subscriptionsRight1}
      />,
    );
    const buttons = await screen.findAllByRole('button');

    expect(buttons.length).toEqual(1);
    expect(buttons[0].textContent).toEqual("S'inscrire");
  });

  it("should render S'abonner", async () => {
    render(
      <NewsletterCard
        newsletter={newsletterRight2}
        userRights={subscriptionsRight1}
      />,
    );

    const buttons = await screen.findAllByRole('button');

    expect(buttons.length).toEqual(1);
    expect(buttons[0].textContent).toEqual("S'abonner");
  });
});
