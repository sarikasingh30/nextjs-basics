
import { Metadata } from "next"

export const metadata:Metadata={
  title:{
    absolute:"",
    default:"Demo-NextJS",
    template:"%s | Demo-NextJS"
  }
}



//Static Metadata
/*
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{backgroundColor:"burlywood",padding:"1rem"}}>
          <p>Header</p>
        </header>
        {children}
        
        <footer style={{backgroundColor:"yellow ",padding:"1rem"}}>
          <p>Footer</p>
        </footer>
        </body>
    </html>
  )
}
