
import Image from 'next/image'
// import MyPic from '../../../../public/Assets/test.jpg'
import Head from 'next/head';


export async function generateMetadata({ params }) {
    return { 
        title: params.img ,
        twitter:{
            card:'summary_large_image',
            title:`${decodeURIComponent(params.content)} - issue Date: ${decodeURIComponent(params.issue)} - Badge Id: ${decodeURIComponent(params.badge)}`,
            description:decodeURIComponent(params.content),
            siteId:'02081996',
            creator:'MyDigilearn',
            creatorId:'MyDigilearn',
            images:decodeURIComponent(params.img)
          },
          openGraph:{
            title:`${decodeURIComponent(params.content)} - issue Date: ${decodeURIComponent(params.issue)} - Badge Id: ${decodeURIComponent(params.badge)}`,
            url:'https://gorillaworkout.space',
            siteName:'mydigilearn.id',
            images:[{
              url:decodeURIComponent(params.img),
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
            <div className="grid grid-cols-2 lg:py-28 lg:px-28 md:py-20 md:px-20 sm:px-14 sm:py-14 bg-white w-screen h-screen">
                    <div className="bg-white flex justify-center items-center p-5">
                        <img src={decodeURIComponent(params.img)} alt="" className="w-full h-full rounded-md" />
                    </div>
                    <div className="bg-white flex flex-col items-start justify-start p-5">
                        <h1 className="text-[#DA4A4A] text-[30px] lg:mb-10">Badges Information</h1>
                        <div className="flex flex-col mb-5">
                            <p className="text-[#818181] text-[30px] font-medium leading-10 ">
                                BADGE ID
                            </p>
                            <p className="text-black text-[30px] font-semibold leading-10 ">
                                {decodeURIComponent(params.badge)}
                            </p>
                        </div>
                        <div className="flex flex-col mb-5">
                            <p className="text-[#818181] text-[30px] font-medium leading-10 ">
                                Content Name
                            </p>
                            <p className="text-[#DA4A4A] text-[30px] font-semibold leading-10 ">
                            {decodeURIComponent(params.content)}
                            </p>
                        </div>
                        <div className="flex flex-col mb-5">
                            <p className="text-[#818181] text-[30px] font-medium leading-10 ">
                                ISSUE DATE
                            </p>
                            <p className="text-[#282828] text-[30px] font-semibold leading-10 ">
                            {decodeURIComponent(params.issue)}
                            </p>
                        </div>
                    </div>  
            </div>  
        </>
        
    )
}
