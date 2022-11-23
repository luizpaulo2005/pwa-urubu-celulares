import Head from 'next/head'
import Image from 'next/image'

const Fallback = () => (
  <div className='container d-flex p-3 justify-content-center flex-column text-center'>
    <Head>
      <title>Offline</title>
    </Head>
    <h1>Você está offline</h1>
    <h2>Os items irão aparecer quando você se conectar a internet novamente</h2>
    <Image src="/no-internet.png" width={100} height={100} alt="offline"/>
  </div>
)

export default Fallback