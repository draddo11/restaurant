import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div >
    <Head>
    <title>Chefster</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>
    
      <h1>Welcome to Chefster </h1>
      <Image
    src="/background.jpg"
    alt="abstract black bakground"
    layout="fill" 
    // width={880}
    // height={450}
    // objectFit="cover"
    quality={100}
    sizes="100%"
  ></Image>
  <h1>2WELCOME TO CHEFSTER </h1>
  <p>Welcome to my homepage!</p>
       
       
        <div className="grid">
          
        </div>
    

      <footer>
       
      </footer>

      <style jsx>{`
        .container {
          /* background-image: src='../public/background.jpg'  */
          /* no-repeat center center fixed;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center; */
        }

        /* main {
          /* background: url(../public/background.jpg) no-repeat center center fixed; */
  /* background-size: cover; 
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center; */
        } */
        /* h1{
          color:white;
          text-transform:italic;
          padding:20em;
        } */
        /* footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        } */

        
/* 
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        } */

        /* .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        } */

        /* .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        } */
        
            }

        h1{
          background: red;
       
         
          font-size: 1.1rem;
          font-family:poppins, Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        } */

        /* .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        } */

        /* .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        } */

       

        }

        /* @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column; */
          }
        }
      `}</style>

     
    </div>
  )
}
