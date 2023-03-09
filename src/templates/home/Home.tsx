import dynamic from 'next/dynamic'

import Default from '@/layout/Default'

const BarGraph = dynamic(() => import('../../components/graphs/BarGraph'), { ssr: false })

const Home = () => {

  return (
    <Default title='Home | Dashboard'>
      <BarGraph height={500} width={800}/>      
    </Default>
  )
}

export default Home