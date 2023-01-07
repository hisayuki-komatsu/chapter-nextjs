import { NextPage } from 'next'
import Image from 'next/image'
// import images
import HisaDevImg from '../public/images/hisa-dev.png'

const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <h1>画像表示の比較</h1>
      <p>imgタグで表示した場合</p>
      <img src="/images/hisa-dev.png" alt="dev" width={100} height={100} />
      <p>Imageコンポーネントで表示した場合</p>
      <Image src={HisaDevImg} alt="dev" width={100} height={100} />
      <p>Imageで表示した場合は事前に描写エリアが確保されます</p>
    </div>
  )
}

export default ImageSample
