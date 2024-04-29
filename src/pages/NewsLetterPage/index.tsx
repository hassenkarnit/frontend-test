import NewsletterSection from '@/components/organisms/NewsletterSection';
import { getNewsletters } from '@/data/api/getNewsletters';
import { getSelf, TUserType } from '@/data/api/getSelf';

const NewsletterPage = async () => {
  const newsletters = await getNewsletters();
  // this is a mock of a function that retrieves the user's data
  // in theory this would've been done using a token or a session
  const me = await getSelf(TUserType.ONE_SUBSCRIPTION);

  return (
    <>
      {!newsletters || !me ? (
        <></>
      ) : (
        <>
          <section>
            <NewsletterSection
              userRights={me.subscriptions}
              newsletters={newsletters.SAN}
              sectionTitle="Les Echos"
            />
          </section>
          <section>
            <NewsletterSection
              userRights={me.subscriptions}
              newsletters={newsletters.DAN}
              sectionTitle="Invistigation"
            />
          </section>
          <section>
            <NewsletterSection
              userRights={me.subscriptions}
              newsletters={newsletters.LAN}
              sectionTitle="Le Parisien"
            />
          </section>
          <section>
            <NewsletterSection
              userRights={me.subscriptions}
              newsletters={newsletters.DEN}
              sectionTitle="Analyses et enquêtes exclusives"
            />
          </section>
        </>
      )}
    </>
  );
};

export default NewsletterPage;
