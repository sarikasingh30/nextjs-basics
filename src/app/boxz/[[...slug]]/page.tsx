export default function Boxz({params}:{params:{slug:string[]}}){
    
    if(params.slug?.length==2){
        return <h1> Boxz for Handicraft - {params.slug[0]}  , Artist - {params.slug[1]}</h1>
    }
    else if(params.slug?.length==1){
        return <h1> Boxz for Handicraft - {params.slug[0]}</h1>
    }
    return <h1> Boxz Page</h1>
}