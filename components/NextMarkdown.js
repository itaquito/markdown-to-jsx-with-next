import Markdown from "markdown-to-jsx";

import Image from "next/image";
import Link from "next/link";

const NextLink = ({ href, children }) => (
  <Link href={href}><a>{children}</a></Link>
);

const NextMarkdown = ({ md }) => {
  return (
    <Markdown
      children={md}
      options={{
        overrides: {
          // We create an override for the [text](link) syntax.
          a: NextLink,

          // We cannot do the same here with the image because next/image requieres height and width.
          NextImage: {
            component: Image
          },
        }
      }}
    />
  );
}

export default NextMarkdown;
