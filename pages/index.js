import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Popover, Spacer, Collapse, Text, Divider, Slider } from '@geist-ui/react'
import { server } from '../config'
import { CodeBlock } from '@atlaskit/code';
import ReviewCard from '../components/ReviewCard'
import { ChevronDown, Database, Key, HardDrive, FileFunction, Zap, CreditCard, ZeroConfig, Globe, Check } from '@geist-ui/react-icons'
import { useState } from 'react';
import { ComparisonList, FeatureList, } from '../components/Comparison';
import { pricingCard, globalCard, fastCard, puzzleCard, CloudRun, Fargate as AzureContainerApps, Logo, Icon } from '../components/SVG';
import FeatureCard from '../components/FeatureCard'
import GlobalTheme from '@atlaskit/theme/components';
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


        // dangerouslySetInnerHTML={{
        //   __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="cdbf43c8-33e3-4b5d-bc84-3e883e89be30";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
        // }}
        src='https://userlike-cdn-widgets.s3-eu-west-1.amazonaws.com/90be7d04fb9c43a4967ca1b35f87e2f5ad572e3dc0ab4a71ae5455f4a948cf2e.js'

      />

      <section>
        <div class="relative items-center w-full px-5 pb-12 pt-8 mx-auto md:px-12 lg:px-16 max-w-7xl lg:pb-24">
          <div class="flex w-full mx-auto text-left">
            <div class="relative inline-flex items-center mx-auto align-middle">
              <div class="text-center">
                <h1 class="max-w-5xl text-3xl font-bold leading-none tracking-tighter text-neutral-800 md:text-5xl lg:text-6xl lg:max-w-7xl">
                  Run your Containers and Apps <br class="hidden lg:block" />
                  Serverlessly @ Edge
                </h1>
                <p class="max-w-xl mx-auto mt-8 lg:text-2xl leading-relaxed text-gray-500">Deploy apps globally without managing any infrastructure. Your apps can autoscale from zero to infinity.

                </p>
                <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                  <a href='https://console.coplane.co/auth'> <Button type='success-light'>Start Deploying Now</Button></a>
                </div>
              </div>
            </div>
          </div>
          <section id="intro">
            <div class="flex flex-col items-center justify-center pt-24 mx-auto rounded-lg lg:px-10 max-w-7xl">
              <img class="object-cover object-center w-full rounded-xl" alt="hero" src="https://www.twingate.com/static/2191016f02395f5bb4cc893a57feb104/ec5f9/macbook-client.webp" />
            </div>
          </section>
        </div>
      </section>

      <section>
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div class="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-4">
            <div class="p-6">
              <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-blue-600 rounded-full bg-blue-50">
                <Zap />
              </div>
              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl">Global Low latency</h1>
              <p class="mx-auto text-base leading-relaxed text-gray-500">With 38ms average latency, deliver consistent experience no matter where the request are coming from.</p>
            </div>
            <div class="p-6">
              <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-blue-600 rounded-full bg-blue-50">
                <CreditCard />
              </div>
              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl">Usage based billing</h1>
              <p class="mx-auto text-base leading-relaxed text-gray-500">With per second billling, You will only be charged for the exact amount of resources used by your apps.</p>
            </div>
            <div class="p-6">
              <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-blue-600 rounded-full bg-blue-50">
                <Globe />
              </div>
              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl">Edge Network</h1>
              <p class="mx-auto text-base leading-relaxed text-gray-500">Our Edge Network sits in-between the internet and your app instances. It prefetches and caches dynamic data to provide even better performance, reliability and security. </p>
            </div>
            <div class="p-6">
              <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-blue-600 rounded-full bg-blue-50">
                <ZeroConfig />
              </div>
              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl">Zero Config</h1>
              <p class="mx-auto text-base leading-relaxed text-gray-500">Deploy any app in a few clicks with deployments that are automated and abstracted from the underlying global infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col px-2 justify-center items-center space-y-2 bg-black/90 py-10'>
        <h2 class="mx-auto mb-8 text-3xl font-semibold leading-none tracking-tighter text-white lg:text-4xl">{'Coplane vs.  Cloud Run vs.  Azure Container Apps'}</h2>



        <div className='h-5'></div>
        <div className='px-3 lg:px-0'>


          <div className='rounded-xl max-w-7xl bg-[#222]  mx-2   flex flex-col lg:flex-row justify-center px-8 space-x-0 lg:space-x-5 mb-8 mt-2'>
            <div className=' w-80 md:w-150 lg:w-200 space-y-2 pt-10'>
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
            <div className='w-80 md:w-150 scale-90 lg:scale-100 lg:w-200 flex flex-col  space-y-5 md:space-y-0 md:flex-row justify-between py-10  '>

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

        <h2 class="mx-auto mb-8 text-3xl font-semibold leading-none tracking-tighter text-white pt-10 lg:text-4xl">{"What makes Coplane Superior"}</h2>

        <div className='grid grid-cols-3 gap-4 text-white text-xl py-10'>
          <div className='flex space-x-4'><Check color='#48f' /> Global Edge Network</div>
          <div className='flex space-x-4'><Check color='#48f' /> Dynamic Site Acceleration</div>
          <div className='flex space-x-4'><Check color='#48f' /> Global Load balancing</div>
          <div className='flex space-x-4'><Check color='#48f' /> Static Website caching</div>
          <div className='flex space-x-4'><Check color='#48f' /> Multi Region Deployments</div>
          <div className='flex space-x-4'><Check color='#48f' />Protection from DDoS Attacks</div>
          <div className='flex space-x-4'>... And so much more.</div>
        </div>

      </section>



      <section className="flex flex-col px-2 justify-center items-center space-y-2  py-10">
        <h2 class="mx-auto mb-8 text-3xl font-semibold leading-none tracking-tighter text-black lg:text-4xl">{"Run almost any language or framework"}</h2>
        <div className='grid grid-cols-3 lg:grid-cols-5 gap-10 text-white text-xl py-8 scale-75 lg:scale-90 border-black  border-4  px-10 rounded-2xl'>


          < DockerOriginal height="180" width="180" />   < JavaOriginal height="150" width="150" />  < NodejsOriginal height="130" width="130" /><GoOriginal hheight="130" width="130" /><DotNetOriginal height="150" width="150" /><NginxOriginal height="150" width="150" /><PhpOriginal height="150" width="150" /><ApacheOriginalWordmark height="150" width="150" /><RubyOriginal height="120" width="120" /><PythonOriginal height="130" width="130" />



        </div>

      </section>








      <section className="flex items-center px-2 justify-center pb-14 pt-10 bg-white min-w-screen">
        <div className="px-4 bg-white">
          <div className="container flex flex-col items-start mx-auto lg:items-center">
            <p className="relative flex items-start justify-start w-full font-normal text-primary tracking-wide text-lg uppercase   lg:justify-center lg:items-center">{"Don't just take our word for it"}</p>


            <h2 className="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#1f76ff" className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                </path>
              </svg>
              See what others are saying</h2>
            <div className="block w-full h-0.5 max-w-lg mt-6 bg-blue-100 rounded-full"></div>

            <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
              <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                <div className="flex items-center justify-center">
                  <div className="w-14 h-14 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img src='/reviews/antonio_review.png' className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-800 h-10 sm:h-1  mt-4">Antonis Mouzourakis (Beta User)</h4>
                    <p className="text-gray-600 ">Front end developer at Distic</p>
                  </div>
                </div>
                <div className="mt-8 text-lg text-gray-500">{"\"We used to use firebase for our android app which was kind of a black box. Later, we found appwrite which was an open source alternative to firebase and so we chose Coplane's appwrite serverless offering. Using it we can scale our app without any operational difficulty.\""}</div>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                <div className="flex items-center justify-center">
                  <div className="w-14 h-14 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img src='/reviews/nathan_review.png' className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-800 h-10 sm:h-1  mt-4">Nathan Suarez (Beta User)</h4>
                    <p className="text-gray-600">Freelance Developer</p>
                  </div>
                </div>
                <div className="mt-8 text-lg text-gray-500">{"\"Coplane is awesome. It is a lot cheaper than any other backend service I've used. And the best part is that it's serverless which makes it crazy scalable without any overhead. My clients love it too.\""}</div>
              </div>

            </div>
          </div>
        </div>
      </section>








      <div className='flex flex-col mt-8 items-center'>
        <div className='py-8 flex flex-col items-center space-y-2'>
          <h2 class="mx-auto mb-8 text-3xl font-semibold leading-none tracking-tighter text-black pt-10 lg:text-4xl">{"Frequently Asked Questions"}</h2>
        </div>




        <div className='px-2  max-w-4xl'>
          <Collapse.Group>
            <Collapse title="What is a serverless infrastructure?">
              <Text>{"With servers/instances, you pay per-hour or a fixed price. With Serverless you're not charged when the service isn't in use. Coplane configures, manages and scales the services for you."}</Text>
            </Collapse>
            <Collapse title="How affordable is Coplane?">
              <Text>{"We run our services on servers provided by our low cost vendor which makes our services accessible to anyone."}</Text>
            </Collapse>
            <Collapse title="Can I export my data?
">
              <Text>Yes. You have full access to whatever services you use. If you decide to leave and want to export all your data, we will help you. Coplane has no vendor lock-in.
              </Text>
            </Collapse>
          </Collapse.Group>
        </div>



      </div>
      <section className="pt-10 sm:py-20 bg-gray-50 mt-20 px-4 ">
        <div className=" items-center max-w-6xl  px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
          <div className="flex flex-col-reverse lg:flex-row  items-center -mx-3">
            <div className="order-1 w-full lg:w-1/2 lg:order-0">
              <div className="w-full lg:max-w-md">
                <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">All-in-one deployment & monitoring of managed auto-scaling projects</h2>
                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">Frictionless serverless application development for everyone. Our tools will help you with the following:</p>
                <ul>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                    <span className="font-medium text-gray-500">Faster Processing and Deployments</span>
                  </li>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                    <span className="font-medium text-gray-500">Out of the Box Autoscaling</span>
                  </li>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    <span className="font-medium text-gray-500">Total Protection and Security for Your Project</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-3 mb-0 lg:w-1/2 order-0 lg:order-1 lg:mb-0 "><img className="mx-auto sm:max-w-sm lg:max-w-full" src="/images/feature-graphic.png" alt="feature image" /></div>
          </div>
        </div>
      </section>
      <div className='px-10 py-10 bg-gray-50'>
        <div className='

      rounded-xl
  bg-primary w-full h-72 sm:h-56 flex flex-col sm:flex-row  blur-none justify-evenly text-white text-5xl font-extrabold items-center'>

          <div className='flex flex-col text-3xl md:text-5xl space-y-4 mx-4'>
            <div>
              Start Deploying Now →
            </div>

            <div className=' text-white text-opacity-75 text-lg font-normal'>
              Your Serverless application within 2 minutes
            </div>
          </div>
          <Button type='secondary' onClick={() => { window.location.assign(server) }} >Create Account(Coming Soon)</Button>
        </div>
      </div>













    </div>
  )
}
