
import Image from 'next/image'
// import MyPic from '../../../../public/Assets/test.jpg'
import Head from 'next/head';


export async function generateMetadata({ params }) {
    // const product = await getProduct(params.id);
    console.log(params.id,'params id')
    console.log(decodeURIComponent(params.id),'params id')
    return { 
        title: params.id ,
        twitter:{
            card:'summary_large_image',
            title:decodeURIComponent(params.description.split('|')[0]),
            description:decodeURIComponent(params.description.split('|')[0]),
            siteId:'12971917292',
            creator:'Gorillaworkoutjs',
            creatorId:'asdasdasdasd',
            images:decodeURIComponent(params.id)
          },
          openGraph:{
            title:decodeURIComponent(params.description.split('|')[0]),
            title:decodeURIComponent(params.description.split('|')[0]),
            url:'https://gorillaworkout.space',
            siteName:'next.js',
            images:[{
              url:decodeURIComponent(params.id),
              width:400,
              height:400
            }]
          }
    };
  }
export default function Page({params}){

    let splitParams = params
    console.log(splitParams,'splitparams')
    return (
        <>
            <Head>
                <title>CERTIFICATE {params.id}</title>
                <meta name="description" content="this is from @gorillaworkout." />
                {/* <meta property="og:image" content={MyPic} /> */}
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>
            <div className="w-screen h-screen flex flex-col justify-center items-center"> 
                <h1>CERTIFICATE {params.id}, {decodeURIComponent(params.description)}</h1>
                <h1>{decodeURIComponent(params.description).split('|')}</h1>
                <h1>{decodeURIComponent(params.description).split('|')[0]}</h1>
                {/* <h2>{decodeURIComponent(params.id)}</h2> */}
            </div>
            <div className="grid grid-cols-2 lg:py-28 lg:px-28 md:py-20 md:px-20 sm:px-14 sm:py-14 bg-white w-screen h-screen">
                    <div className="bg-white flex justify-center items-center p-5">
                        <img src={decodeURIComponent(params.id)} alt="" className="w-full h-full rounded-md" />
                    </div>
                    <div className="bg-white flex flex-col items-start justify-start p-5">
                        <h1 className="text-[#DA4A4A] text-[30px] lg:mb-10">Badges Information</h1>
                        <div className="flex flex-col mb-5">
                            <p className="text-[#818181] text-[30px] font-medium leading-10 ">
                                BADGE ID
                            </p>
                            <p className="text-black text-[30px] font-semibold leading-10 ">
                                {decodeURIComponent(params.description.split('|')[0])}
                            </p>
                        </div>
                        <div className="flex flex-col mb-5">
                            <p className="text-[#818181] text-[30px] font-medium leading-10 ">
                                Content Name
                            </p>
                            <p className="text-[#DA4A4A] text-[30px] font-semibold leading-10 ">
                            {decodeURIComponent(params.description.split('|')[0])}
                            </p>
                        </div>
                        <div className="flex flex-col mb-5">
                            <p className="text-[#818181] text-[30px] font-medium leading-10 ">
                                Description
                            </p>
                            <p className="text-[#282828] text-[30px] font-semibold leading-10 ">
                            {decodeURIComponent(params.description.split('|')[0])}
                            </p>
                        </div>
                        <div className="flex flex-col mb-5">
                            <p className="text-[#818181] text-[30px] font-medium leading-10 ">
                                ISSUE DATE
                            </p>
                            <p className="text-[#282828] text-[30px] font-semibold leading-10 ">
                            {decodeURIComponent(params.description.split('|')[0])}
                            </p>
                        </div>
                    </div>  
            </div>  
        </>
        
    )
}

// export const getServerSideProps =  () => {
//     // const res = await fetch('https://api.github.com/repos/vercel/next.js');
//     // const repo = await res.json();
//     // return { props: { repo } };
//     return {
//         props:{
//             data:'asdasdasd'
//         }
//     }
//   };