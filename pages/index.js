import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Popover, Spacer, Collapse, Text, Divider, Slider } from '@geist-ui/react'
import { server } from '../config'
import ReviewCard from '../components/ReviewCard'
import { ChevronDown, Database, Key, HardDrive, FileFunction, Zap, CreditCard, ZeroConfig, Globe, Check } from '@geist-ui/react-icons'
import { useState } from 'react';
import { ComparisonList, FeatureList, } from '../components/Comparison';
import { pricingCard, globalCard, fastCard, puzzleCard, CloudRun, Fargate as AzureContainerApps, Logo, Icon } from '../components/SVG';
import FeatureCard from '../components/FeatureCard'
import Script from 'next/script'

import { Fragment } from 'react'
import { DockerOriginal, JavaOriginal, NodejsOriginal, ApacheOriginalWordmark, GoOriginal, DotNetOriginal, NginxOriginal, PhpOriginal, ApacheOriginal, RubyOriginal, PythonOriginal } from 'devicons-react'


const codes = {
  'java': `import io.appwrite.Client
import io.appwrite.services.Account

val client = Client(context)
  .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
  .setProject("5df5acd0d48c2") // Your project ID
  .setSelfSigned(status: true) // For self signed certificates, only use for development

// Register User
val account = Account(client)
val response = account.create("email@example.com", "password")
val json = response.body?.string()
`,





  'js': `// Init your Web SDK
const sdk = new Appwrite();

sdk
    .setEndpoint('http://localhost/v1') // Your Appwrite Endpoint
    .setProject('455x34dfkj')
;

// Register User
sdk.account.create('me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
    }, function (error) {
    });`,

  'swift': `import io.appwrite.Client
    import Appwrite
    
    let client = Client()
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setSelfSigned(status: true) // For self signed certificates, only use for development
    
    // Register User
    let account = Account(client: client)
    account.create(email: "email@example.com", password: "password") { result in
        switch result {
        case .failure(let error): print(error.message)
        case .success(let user): print(String(describing: user))
        }
    }`,
  'dart': `import 'package:appwrite/appwrite.dart';

    void main() {
      Client client = Client();
     client
        .setEndpoint('https://localhost/v1') // Your Appwrite Endpoint
        .setProject('5e8cf4f46b5e8') // Your project ID
        .setSelfSigned() // Use only on dev mode with a self-signed SSL cert
        ;
     Account account = Account(client);
    
      Response user = await account
        .create(
          email: 'me@appwrite.io',
          password: 'password',
          name: 'My Name'
        );
    }`

};






export default function Home() {
  const initRam = 1;
  const initCpu = 1;
  const initReq = 1;
  const [ram, setRam] = useState(initRam)
  const [cpu, setCpu] = useState(initCpu)
  const [req, setReq] = useState(initReq)

  const comparisonFeatures = [{ 'name': "Database", 'section': true, 'icon': <Database /> }, { 'name': "Api Requests", 'info': 'Read, write, or delete requests to the database' }, { 'name': "Realtime functionality", 'info': 'Realtime allows you to listen to any events on the server-side in realtime' }, { 'name': "Database space", }, { 'name': "Transfer Limits", },
  { 'name': "Authentication", 'section': true, 'icon': <Key /> }, { 'name': "Unlimited Users", }, { 'name': "Custom SMTP server", 'info': 'Mail server that you can use to send emails' }, { 'name': "Audit logs", },
  { 'name': "Object Storage", 'section': true, 'icon': <HardDrive /> }, { 'name': "Storage", }, { 'name': "Customizable Access Controls", }, { 'name': "Outgoing Transfer Limits", },
  { 'name': "Functions", 'section': true, 'icon': <FileFunction /> }, { 'name': "Invocations", 'info': 'Number of times your function is triggered' }, { 'name': "Networking", 'info': 'Data usage by functions' }, { 'name': "Compute", 'info': 'Computation power used by functions' }, { 'name': "Type", }];

  const [lang, selectLang] = useState(['js', 'Web']);
  const codeSelector = () => (
    <div className=' px-4'>
      <button onClick={() => { selectLang(['js', 'Web']) }}>Web</button>
      <Spacer h={.5} />
      <button onClick={() => { selectLang(['dart', 'Flutter']) }}>Flutter</button>
      <Spacer h={.5} />
      <button onClick={() => { selectLang(['swift', 'Apple']) }}>Apple</button>
      <Spacer h={.5} />
      <button onClick={() => { selectLang(['java', 'Android']) }}>Android</button>
    </div>
  )

  const Feature = ({ text }) => (
    <div className='flex space-x-4 h-10 items-center '>
      <div className='mt-6'> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="48" height="48"
        viewBox="0 0 48 48"
        style={{ fill: '#0080f2' }}>    <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path></svg></div>

      <div className='text-base  sm:text-xl w-full lg:w-120'>
        {text}
      </div>

    </div>
  )
  return (

    <div className='pt-24 mt-10'>
      <Script id='chat support' type="text/javascript"
        src='https://userlike-cdn-widgets.s3-eu-west-1.amazonaws.com/90be7d04fb9c43a4967ca1b35f87e2f5ad572e3dc0ab4a71ae5455f4a948cf2e.js'
      />

      <section>
        <div className="relative items-center w-full px-5 pb-12 pt-8 mx-auto md:px-12 lg:px-16 max-w-7xl lg:pb-24">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="text-center">
                <h1 className="max-w-5xl text-3xl font-bold leading-none tracking-tighter text-neutral-800 md:text-5xl lg:text-6xl lg:max-w-7xl">
                  Run your Containers and Apps <br className="hidden lg:block" />
                  Serverlessly Everywhere
                </h1>
                <p className="max-w-xl mx-auto mt-8 lg:text-2xl leading-relaxed text-gray-500">Deploy apps globally without managing any infrastructure. Your apps can autoscale from zero to infinity.

                </p>
                <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                  <a href='https://console.coplane.co/auth'> <Button type='success-light'>Coming Soon</Button></a>
                </div>
              </div>
            </div>
          </div>
          <section id="intro">
            <div className="p-10 gradient-background flex flex-col items-center justify-center mt-10  mx-auto rounded-xl max-w-7xl ">
              <img className="object-cover  object-center shadow-2xl w-full  rounded-lg" alt="hero" src="/ui/console1.png" />
            </div>
          </section>
        </div>
      </section>

      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-4">
            <div className="p-6">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-blue-600 rounded-full bg-blue-50">
                <Zap />
              </div>
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl">Global Low latency</h1>
              <p className="mx-auto text-base leading-relaxed text-gray-500">With 38ms average latency, deliver consistent experience no matter where the request are coming from.</p>
            </div>
            <div className="p-6">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-blue-600 rounded-full bg-blue-50">
                <CreditCard />
              </div>
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl">Usage based billing</h1>
              <p className="mx-auto text-base leading-relaxed text-gray-500">With per second billling, You will only be charged for the exact amount of resources used by your apps.</p>
            </div>
            <div className="p-6">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-blue-600 rounded-full bg-blue-50">
                <Globe />
              </div>
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl">Edge Network</h1>
              <p className="mx-auto text-base leading-relaxed text-gray-500">Our Edge Network sits in-between the internet and your app instances. It prefetches and caches dynamic data to provide even better performance, reliability and security. </p>
            </div>
            <div className="p-6">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-blue-600 rounded-full bg-blue-50">
                <ZeroConfig />
              </div>
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl">Zero Config</h1>
              <p className="mx-auto text-base leading-relaxed text-gray-500">Deploy any app in a few clicks with deployments that are automated and abstracted from the underlying global infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col px-2 justify-center items-center space-y-2 bg-black/90 py-10'>
        <h2 className="mx-auto mb-8 text-3xl font-semibold leading-none tracking-tighter text-white lg:text-4xl">{'Coplane vs.  Cloud Run vs.  Azure Container Apps'}</h2>



        <div className='h-5'></div>
        <div className='px-3 lg:px-0'>


          <div className='rounded-xl max-w-7xl bg-[#222]    flex flex-col xl:flex-row justify-center px-4 space-x-0 lg:space-x-5 mb-8 mt-2'>
            <div className=' w-80 md:w-150 lg:w-150 space-y-2 pt-10'>
              <div className='flex   items-center'>
                <div className='w-44 pr-7 text-white/50'>  CPU Usage in million vCPU-s</div>

                <Slider type="success" initialValue={initCpu} onChange={(n) => { setCpu(n) }} min={1} max={50} step={1} />
                <Spacer />      </div>
              <div className='flex  items-center'>
                <div className='w-44 pr-7 text-white/50'>  RAM Usage in million GB-s</div>

                <Slider type="success" initialValue={initRam} onChange={(n) => { setRam(n) }} min={1} max={128} step={1} />
                <Spacer />
              </div>
              <div className='flex  items-center'>
                <div className='w-44 pr-7 text-white/50'>Requests Usage in millions</div>

                <Slider type="success" initialValue={initReq} onChange={(n) => { setReq(n) }} min={1} max={1000} step={1} />
                <Spacer /> </div>  </div>
            <div className='w-80 md:w-150 scale-90 lg:scale-100 lg:w-150 flex flex-col  space-y-5 md:space-y-0 md:flex-row justify-around py-10  '>

              <div className='flex flex-col items-center pl-4' >
                <Icon customClass={"h-28 w-28 "} color={'#fff'} size={20} />  <div className='font-semibold pt-2 text-white'>Coplane</div>
                <div className='text-gray-500 text-xl'>{'$'}{(6 * cpu + 2 * ram + 0 * req).toFixed(2)}</div></div>
              <div className='flex flex-col items-center '>
                <div className='h-20'>
                  <CloudRun />
                </div>   <div className=' pt-10 font-semibold text-white'>GCP Cloud Run</div>
                <div className='text-gray-500  text-xl'>{'$'}{(24 * cpu + 2.5 * ram + 0.4 * req).toFixed(2)}</div></div>
              <div className='flex flex-col items-center '>
                <AzureContainerApps />
                <div className='font-semibold pt-2 text-white'>Azure Container Apps</div>

                <div className='text-gray-500 text-xl'>{'$'}{(24 * cpu + 3 * ram + 0.4 * req).toFixed(2)}</div>
              </div>
            </div>
          </div> </div>

        <h2 className="mx-auto mb-8 text-3xl font-semibold leading-none tracking-tighter text-white pt-10 lg:text-4xl">{"What makes Coplane Superior"}</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white text-xl py-10'>
          <div className='flex space-x-4'><Check color='#48f' /> Global Edge Network</div>
          <div className='flex space-x-4'><Check color='#48f' /> Dynamic Site Acceleration</div>
          <div className='flex space-x-4'><Check color='#48f' /> Global Load balancing</div>
          <div className='flex space-x-4'><Check color='#48f' /> Static Website caching</div>
          <div className='flex space-x-4'><Check color='#48f' /> Multi Region Deployments</div>
          <div className='flex space-x-4'><Check color='#48f' />Protection from DDoS Attacks</div>
          <div className='flex space-x-4'>... And so much more.</div>
        </div>

      </section>



      <section className="flex flex-col px-2 justify-center items-center   py-10">
        <h2 className="mx-auto mb-8 text-3xl font-semibold leading-none tracking-tighter text-black lg:text-4xl">{"Deploy any language or framework"}</h2>
        <div className=' max-w-5xl w-full grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-10 text-white text-xl md:py-8 scale-75 lg:scale-90   md:px-10 rounded-2xl'>

          <div className='p-4 bg-gray-100 rounded-lg'> < DockerOriginal /></div>
          <div className='p-4 bg-gray-100 rounded-lg'>   < JavaOriginal /> </div>
          <div className='p-4 bg-gray-100 rounded-lg'> < NodejsOriginal /></div>
          <div className='p-4 bg-gray-100 rounded-lg'><GoOriginal /></div>
          <div className='p-4 bg-gray-100 rounded-lg'><DotNetOriginal /></div>
          <div className='p-4 bg-gray-100 rounded-lg'><NginxOriginal /></div>
          <div className='p-4 bg-gray-100 rounded-lg'><PhpOriginal /></div>
          <div className='p-4 bg-gray-100 rounded-lg'><ApacheOriginalWordmark /></div>
          <div className='p-4 bg-gray-100 rounded-lg'><RubyOriginal /></div>
          <div className='p-4 bg-gray-100 rounded-lg'><PythonOriginal /></div>



        </div>

      </section>













      <div className='flex flex-col mt-8 items-center bg-gray-100'>
        <div className='py-8 flex flex-col items-center space-y-2'>
          <h2 className="mx-auto mb-8 text-3xl font-semibold leading-none tracking-tighter text-black pt-10 lg:text-4xl">{"Frequently Asked Questions"}</h2>
        </div>




        <div className='px-2  max-w-7xl'>
          <Collapse.Group>
            <Collapse title="What is a serverless infrastructure?">
              <Text>{"With servers/instances, you pay per-hour or a fixed price. With Serverless you're not charged when the service isn't in use. Coplane configures, manages and scales the services for you."}</Text>
            </Collapse>
            <Collapse title="Do you provide free credits?">
              <Text>{"Yes, first 100,000 vCPU-seconds and 200,000 GiB-seconds each month are free. Beyond that, you pay for what you use on a per second basis based on the number of vCPU-s and GiB-s your applications are allocated. There is no charge for number of requests."}</Text>
            </Collapse>
            <Collapse title="Can I export my data?
">
              <Text>Yes. You have full access to the services you use. If you decide to leave and want to export all your data, we will help you. Coplane has no vendor lock-in.
              </Text>
            </Collapse>
          </Collapse.Group>
        </div>



      </div>

      <div className='px-10 pt-20 pb-10 bg-gray-100 '>
        <div className='

      rounded-lg
  bg-[#141414]
    w-full sm:h-56 flex flex-col sm:flex-row  blur-none justify-evenly text-white text-5xl font-extrabold items-center'>

          <div className='flex   flex-col text-3xl md:text-5xl space-y-4 mx-4'>
            <div className='leading-none tracking-tighter'>
              Start Deploying Now →
            </div>

            <div className=' text-white text-opacity-75 text-lg font-normal'>
              Your Serverless application within 2 minutes
            </div>
          </div>
          <Button type='success-light' onClick={() => { window.location.assign('https://console.coplane.co/auth') }} >Create Account</Button>



        </div>
      </div>













    </div>
  )
}
