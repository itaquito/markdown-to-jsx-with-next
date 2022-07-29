import NextMarkdown from "../components/NextMarkdown";

function AnotherPage() {
  const md = `
  # This is another page

  Take me [back](/).
  `

  return (
    <NextMarkdown md={md} />
  )
}

export default AnotherPage;
