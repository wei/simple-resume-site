import { Head } from "vite-react-ssg/single-page";

type SiteHeadProps = {
  title: string;
  description: string;
};

export default function SiteHead({ title, description }: SiteHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}
