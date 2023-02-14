import parse from 'html-react-parser';

export async function getStaticProps() {
  const aboutPage = await fetch(process.env.WORDPRESS_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        {
          page(id: "/about", idType:URI) {
            slug
            date
            title
            content
          }
        }
      `
    })
  }).then((res) => res.json())

  return {
    props: {
      aboutPage: aboutPage.data.page,
    },
  }
}

export default function About({ aboutPage }) {
  return (
    <div className='flex flex-col items-center p-[5em]'>
      <h1 className='text-2xl py-[2em]'>This is the about page</h1>
      <hr />
      <div>
        { parse( aboutPage.content ) }
      </div>
    </div>
  )
}