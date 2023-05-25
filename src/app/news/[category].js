function ArticleListByCategory({articles,category}){

    return (
        <>
            {/* <h1>
                showing news for category {category}
            </h1>
            <h2>{articles},articles</h2> */}
            <h1>
                brobro
            </h1>
        </>
    )
}

export default ArticleListByCategory

export async function getServerSideProps(context){
    const {params} = context
    console.log(params,'params')
    const {category} = params
    const reponse= await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data = await reponse.json()

    return {
        props:{
            articles:data,
            category
        }
    }
}