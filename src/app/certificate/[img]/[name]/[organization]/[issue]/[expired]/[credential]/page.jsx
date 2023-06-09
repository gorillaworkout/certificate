// import PDFJS from 'pdfjs-dist';

export async function generateMetadata({ params }) {
    return { 
        title: params.img ,
        twitter:{
            card:'summary_large_image',
            title:decodeURIComponent(params.badge),
            description:decodeURIComponent(params.badge),
            siteId:'12971917292',
            creator:'myDigiLearn',
            creatorId:'myDigiLearn',
            images:decodeURIComponent(params.img)
          },
          openGraph:{
            title:decodeURIComponent(params.badge),
            url:'myDigilearn.id',
            siteName:'next.js',
            images:[{
              url:decodeURIComponent(params.img),
              width:400,
              height:400
            }]
          }
    };
  }
export default async function Page({params}){

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
                                Course Name 
                            </p>
                            <p className="text-black text-[30px] font-semibold leading-10 ">
                                {decodeURIComponent(params.name)}
                            </p>
                        </div>
                        <div className="flex flex-col mb-5">
                            <p className="text-[#818181] text-[30px] font-medium leading-10 ">
                                Organization
                            </p>
                            <p className="text-[#DA4A4A] text-[30px] font-semibold leading-10 ">
                            {decodeURIComponent(params.organization)}
                            </p>
                        </div>
                        <div className="flex flex-col mb-5">
                            <p className="text-[#818181] text-[30px] font-medium leading-10 ">
                                Issue Date
                            </p>
                            <p className="text-[#282828] text-[30px] font-semibold leading-10 ">
                            {decodeURIComponent(params.issue)}
                            </p>
                        </div>
                        <div className="flex flex-col mb-5">
                            <p className="text-[#818181] text-[30px] font-medium leading-10 ">
                                Expired Date
                            </p>
                            <p className="text-[#282828] text-[30px] font-semibold leading-10 ">
                            {decodeURIComponent(params.expired)}
                            </p>
                        </div>
                        <div className="flex flex-col mb-5">
                            <p className="text-[#818181] text-[30px] font-medium leading-10 ">
                                Credential
                            </p>
                            <p className="text-[#282828] text-[30px] font-semibold leading-10 ">
                            {decodeURIComponent(params.credential)}
                            </p>
                        </div>
                    </div>  
            </div>  
        </>
        
    )
}
