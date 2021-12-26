import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Popover, Spacer, Collapse, Text, Divider } from '@geist-ui/react'

import { CodeBlock } from '@atlaskit/code';

import { ChevronDown, Database, Key, HardDrive, FileFunction } from '@geist-ui/react-icons'
import { useState } from 'react';
import { ComparisonList, FeatureList, } from '../components/Comparison';
import { pricingCard, globalCard, fastCard, puzzleCard } from '../components/SVG';
import FeatureCard from '../components/FeatureCard'

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

// Subscribe to files channel
val realtime = Realtime(client)

realtime.subscribe("files", callback = { response ->
    if(response.event === 'storage.files.create') {
        // Log when a new file is uploaded
        print(response.payload.toString());
    }
})`,





  'js': `// Init your Web SDK
const sdk = new Appwrite();

sdk
    .setEndpoint('http://localhost/v1') // Your Appwrite Endpoint
    .setProject('455x34dfkj')
;

// Register User
sdk.account.create('me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
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
    }
    
    // Subscribe to files channel
    let realtime = Realtime(client: client)
    
    let subscription = realtime.subscribe(channels: ["files"]) { message in
        if(message.event == "storage.files.create") {
            // Log when a new file is uploaded
            print(String(describing: message.payload))
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
    
    
      // Register User
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
    <div className='flex space-x-4 h-12 items-center'>
      <div className='mt-6'> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="48" height="48"
        viewBox="0 0 48 48"
        style={{ fill: '#0080f2' }}>    <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path></svg></div>

      <div className='text-xl'>
        {text}
      </div>

    </div>
  )
  return (
    <div className='pt-24 mt-10'>

      <div className='flex w-full justify-center h-24 items-center ml-0 pl-0'>
        <h1 className='text-6xl font-extrabold flex'>
          <div className='pr-3'>
            {'Serverless Managed '}
          </div>

          <div className=' text-blue-700'>
            Appwrite
          </div>


        </h1>
      </div>
      <div className='flex w-full justify-center items-center text-6xl font-extrabold'>
        for web and mobile Apps
      </div>
      <div className='flex w-full justify-center items-center text-2xl mt-10 font-medium text-gray-600'>
        Create an affordable autoscaling backend in less than 5 minutes.


      </div>
      <div className='flex w-full justify-center items-center text-2xl mt-2 font-medium text-gray-600'>
        Start your project with Database, Authentication, Storage and Functions.
      </div>

      <div className='flex w-full justify-center items-center text-2xl mt-2 text-black font-bold'>
        Appwrite is open source so, No vendor lock-in.
      </div>
      <div className='flex w-full justify-center items-center py-12 font-medium space-x-4'>
        <Button auto type="success">Get Started</Button>  <Link href={'https://appwrite.io/'}  ><a target="_blank"><Button auto type="">Read more about Appwrite</Button></a></Link>

      </div>
      <div className='flex justify-center space-x-10'>
        <div className='w-150 flex flex-col rounded-3xl shadow-xl ml-10'>
          <div className='flex justify-start bg-gray-200 h-8 w-full rounded-t-lg'>
            <div className='px-2 flex justify-between items-center h-8 w-10 ml-2'>

              <div className='h-2.5 w-2.5 rounded-full bg-white'></div>
              <div className='h-2.5 w-2.5 rounded-full bg-white'></div>
              <div className='h-2.5 w-2.5 rounded-full bg-white'></div>
            </div>
            <Popover content={codeSelector}>

              <button className='flex rounded-t-lg bg-gray-100 h-7 mt-1 px-4 ml-2 items-center'>

                {lang[1]}  <ChevronDown size={20} /></button></Popover>
          </div>
          <div className='w-150 h-72'>
            <CodeBlock language={lang[0]} showLineNumbers={true} text={codes[lang[0]]} className='rounded-b-3xl' />
          </div>

        </div>

        <div className='
        flex flex-col w-150 space-y-10'>
          <Feature text={'Read/Write latency of less than 10 ms.'} />
          <Feature text={'Replicated instances across multiple datacenters around the world for best user experience.'} />
          <Feature text={'Autoscaling Serverless Infrastructure.'} />

          <div></div>
        </div>
      </div>



      <div className='py-10 flex flex-col mt-20 items-center'>
        <div className=' text-5xl font-bold'>Core Features</div>
        <div className=' grid gap-10 grid-cols-2 my-8'>
          <FeatureCard icon={pricingCard()} title={"Storage based pricing"} data={'We only charge by the amount of storage you are using. Network egress and Compute time is totally free.'} />
          <FeatureCard icon={globalCard()} title={"Global Low Latency"} data={'With Global Appwrite Instances, you can access your database from anywhere with very low latency.'} />
          <FeatureCard icon={fastCard()} title={"Ultra fast machines"} data={'We run your instances on dedicated machines with NVMe to acheive the best performance.'} />
          <FeatureCard icon={puzzleCard()} title={"Easier Integration"} data={'Using Netinc you can benefit from our software ecosystem with easier integration.'} />


        </div>


      </div>



      <div className='flex flex-col justify-center items-center space-y-2'>
        <div className=' text-5xl font-bold'>Comparison</div>
        <div className=' text-xl text-gray-500 pb-8'>See how cost-effective our service is compared to Firebase and Supabase</div>
        <div className='flex justify-center items-start  my-20'>
          <FeatureList features={comparisonFeatures} />
          <ComparisonList features={[null, 'free', true, '15GB then $0.08 per GB', 'Free', null, true, true, true, null, '100GB then $0.012 per GB', true, 'free', null, 'free', 'free', 'free', '15 types of runtimes']} info={{ type: "Netinc's Appwrite", action: 'Start Using Now', 'function': () => { }, 'pricing': 'Starts at $9' }} />
          <ComparisonList features={[null, 'free', true, '8GB then $0.125 per GB', '$0.09 per GB', null, true, true, true, null, '100GB then $0.021 per GB', true, '$0.09 per GB', null, false, false, false, 'SQL functions']} info={{ type: "Supabase", action: 'Know More', 'function': () => { }, 'secondary': true, 'pricing': 'Starts at $25' }} />
          <ComparisonList features={[null, '$0.01-0.09 per 100,000', true, '1GB then $0.108 per GB', '5GB then $0.12 per GB', null, true, true, false, null, '5GB then $0.026 per GB', true, '$0.12 per GB', null, '2M then $0.4 per million', '5GB then $0.12 per GB', '$0.009 GB-hr & $0.036 GHz-hr', 'Nodejs']} info={{ type: 'Firebase', action: 'Know More', 'function': () => { }, 'secondary': true, 'pricing': 'Pay as you go' }} />
        </div>      </div>
      <div className='flex flex-col mt-20 items-center'>
        <div className='py-8 flex flex-col items-center space-y-2'>
          <div className=' text-5xl font-bold'>FAQ</div>
          <div className=' text-xl text-gray-500'>Frequently Asked Questions</div>
        </div>




        <div className='  max-w-4xl'>
          <Collapse.Group>
            <Collapse title="What is a serverless infrastructure?">
              <Text>{"With servers/instances, you pay per-hour or a fixed price. With Serverless, you pay per-request. This means you're not charged when the database isn't in use. Netinc configures and manages the database for you."}</Text>
            </Collapse>
            <Collapse title="How does Netinc compare to self hosted appwrite instance?">
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Collapse>
            <Collapse title="How does Netinc compare to self hosted appwrite instance?">
              <Text>{"Self hosted solutions have obvious limitations. Netinc provides managed apperite instances which gives your users very low latency. Our instances autoscale based on the the amount of usage they get which keeps your costs low. Moreover, we provide enterprise cloud solutions which simply Isn't possible possible when you host your own cloud."}</Text>
            </Collapse>
            <Collapse title="How does Netinc compare to self hosted appwrite instance?">
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Collapse>
          </Collapse.Group>
        </div>



      </div>




    </div>
  )
}
