import { notFound } from "next/navigation"

function getRandomInt(n:number){
    return Math.floor(Math.random()*n)

}

export default function ReviewDetail({params}:{params:{productId:string, reviewId:string}}){
    const random=getRandomInt(4)

    if(random==1){
        throw new Error("Error in ReviewId")
    }
    if(parseInt(params.reviewId)>1000){
        notFound()
    }

    return (<h1>
        Review {params.reviewId} for Product {params.productId} 
    </h1>)
}

// Review can't be more than 1000 So for that we need to show page not found 