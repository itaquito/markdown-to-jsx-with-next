import NextMarkdown from "../components/NextMarkdown";

export default function Home() {
  const md = `
  # Hello

  Go to [another page](/another-page).

  Don't forget to add the "height" and "width" aparameters to the image.

  <NextImage src='/cat-jam.jpg' height={500} width={500} alt='' />
  `

  return (
    <NextMarkdown md={md} />
  )
}
