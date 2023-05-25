import Image from 'next/image'
// import MyPic from '@/app/certificate/img/bayu.jpg'
import Head from 'next/head';



export default function Home(props) {
  return (
    <>
      <Head>
        <title>CERTIFICATE</title>
        <meta name="description" content="this is from @gorillaworkout." />
        {/* <meta property="og:image" content={MyPic} /> */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <div className="w-screen h-screen flex justify-center items-center"> 
          <h1>
            BAYU DARMAWAN
          </h1>
      {/* <Image
        src={MyPic}
        alt="Image description"
        width={300}
        height={300}
      /> */}
      </div>
    </>
  )
}

