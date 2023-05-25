async function MyPage({ data }) {
    // Render your page component using the data fetched from getServerSideProps
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    console.log(response,'response')
    return (
      <div>
        <h1>Data: {data}</h1>
      </div>
    );
  }
  
  export async function getServerSideProps() {
    // Fetch data from an API or perform any server-side operations
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    console.log(response,'response')
    const data = 'bayu darmawan'
  
    // Return the data as props
    return {
      props: {
        data
      }
    };
  }
  
  export default MyPage;