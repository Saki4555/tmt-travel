import { Helmet } from 'react-helmet-async';

export default function TitleProvider({ title }) {
  const finalTitle = title ? `${title} | TMT-Travel` : 'TMT-Travel';

  return (
    <Helmet>
      <title>{finalTitle}</title>
    </Helmet>
  );
}
