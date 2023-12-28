import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout.js'

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>WebTech - About us</title>
        <meta name="description" content="david.ramirez@edu.ece.fr" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
          <h1 className='text-center text-4xl font-bold mt-8 mb-4'>About us</h1>
      <div class=" max-w-sm rounded overflow-hidden shadow-lg ">
  <div class="px-3 py-8">
    <div class="font-bold text-xl mb-2 text-center">Team 4, Webtech Group 3</div>
    <p class="text-gray-700 text-base">
    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras sit amet enim sit amet nibh auctor interdum sit amet sed lacus. Nam consequat hendrerit lobortis. Mauris nec facilisis turpis. Nullam neque sem, ultricies in facilisis nec, rhoncus et nibh. Curabitur et risus in risus maximus scelerisque non at justo. Nullam blandit massa id justo elementum rutrum. Phasellus id facilisis lacus, vel dignissim magna. Duis at lacus a mi varius lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ultrices justo bibendum aliquam tempus. Vivamus consequat metus eros, sit amet malesuada mi placerat a. Vivamus efficitur faucibus odio vel vulputate. Suspendisse eros dolor, pellentesque ac aliquam vel, rutrum eu ipsum. Donec quis nunc felis. 
    </p>
  </div>
 
</div>


    </Layout>
  )
}