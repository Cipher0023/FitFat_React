// Página inicial (home)

async function Home() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    console.log(response)
    if(!response.ok) throw new Error("failed to fecth data");
  
    const albuns = await response.json();
  
    return (
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols">
        {albuns.map((album: {id: number, title:string})=> (
          <div
            key={album.id}
            className="bg-white shadow-md rounded-lg p-4 transition t.."
          >
            <h3 className="text-lg font-bold mb-2">{album.title}</h3>
            <p className="text-grey-600">Album ID: {album.id}</p>
          </div>
        ))}
      </div>
    );
  
    
  }
  
  export default Home