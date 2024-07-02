export default function Docs({params}:{params:{slug:string[]}}){
    
    if(params.slug.length==2){
        return <h1 style={{color:"red", textDecorationLine:"underline", textDecorationColor:"blue"}}> Docs for Feature - {params.slug[0]}  , Concept - {params.slug[1]}</h1>
    }
    else if(params.slug.length==1){
        return <h1> Docs for Feature - {params.slug[0]}</h1>
    }
    return <h1> Docs Page</h1>
}