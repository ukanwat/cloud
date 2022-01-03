import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Popover, Spacer, Collapse, Text, Divider } from '@geist-ui/react'
import { server } from '../config'
import { CodeBlock } from '@atlaskit/code';
import ReviewCard from '../components/ReviewCard'
import { ChevronDown, Database, Key, HardDrive, FileFunction } from '@geist-ui/react-icons'
import { useState } from 'react';
import { ComparisonList, FeatureList, } from '../components/Comparison';
import { pricingCard, globalCard, fastCard, puzzleCard } from '../components/SVG';
import FeatureCard from '../components/FeatureCard'
import GlobalTheme from '@atlaskit/theme/components';





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

      <div className='flex w-full justify-center  items-center ml-0 pl-0 px-2'>
        <h1 className='text-3xl sm:text-4xl lg:text-6xl items-center justify-center flex-wrap font-extrabold flex px-2 '>
          <div className='pr-3 text-primary font-leagueSpartan text-center'>
            {'Serverless Managed Services'}
          </div>


        </h1>
      </div>
      <div className=' flex font-leagueSpartan w-full justify-center items-center text-3xl sm:text-4xl lg:text-6xl px-4 text-center font-extrabold'>
        for web and mobile Apps
      </div>
      <div className='px-4 text-center flex w-full justify-center items-center text-xl sm:text-2xl mt-4 sm:mt-10 font-medium text-gray-600'>
        Create an affordable autoscaling backend in less than 5 minutes.


      </div>
      <div className='hidden sm:flex w-full justify-center items-center px-4  text-xl sm:text-2xl text-center mt-2 font-medium text-gray-600'>
        Start your project with Database, Authentication, Storage and Functions.
      </div>

      <div className='flex w-full  text-xl sm:text-2xl px-4  justify-center items-center  text-center mt-2 text-black font-bold'>
        Appwrite is open source so, No vendor lock-in.
      </div>


      <div className='flex w-full px-2 justify-center items-center py-12 font-medium space-y-2 sm:space-y-0 sm:space-x-4 flex-col sm:flex-row'>
        <Button auto type="success">Get Started(coming soon)</Button>  <Link href={'https://appwrite.io/'}  ><a target="_blank"><Button auto type="">Read more about Appwrite</Button></a></Link>

      </div>
      <div className='flex flex-col px-2 lg:flex-row space-y-12 justify-center items-center space-x-10'>
        <div className='w-full sm:w-120 md:w-150 flex flex-col rounded-3xl shadow-xl'>
          <div className='flex justify-start bg-gray-700 h-8 w-full rounded-t-lg'>
            <div className='px-2 flex justify-between items-center h-8 w-10 ml-2'>

              <div className='h-2.5 w-2.5 rounded-full bg-gray-500'></div>
              <div className='h-2.5 w-2.5 rounded-full bg-gray-500'></div>
              <div className='h-2.5 w-2.5 rounded-full bg-gray-500'></div>
            </div>
            <Popover content={codeSelector}>

              <button className='flex rounded-t-lg bg-gray-900 text-white h-7 mt-1 px-4 ml-2 items-center'>

                {lang[1]}  <ChevronDown size={20} /></button></Popover>
          </div>
          <div className='w-full sm:w-120 md:w-150 h-72'>
            <GlobalTheme.Provider value={() => ({ mode: 'dark' })}>

              <CodeBlock language={lang[0]} showLineNumbers={true} text={codes[lang[0]]} className='rounded-b-3xl' />
            </GlobalTheme.Provider>        </div>

        </div>

        <div className='
        flex flex-col w-full sm:w-120 md:w-150 space-y-10'>
          <Feature text={'Read/Write latency of less than 3 ms.'} />
          <Feature text={'Replicated instances across multiple datacenters around the world.'} />
          <Feature text={'Autoscaling Serverless Infrastructure.'} />


          <Feature text={'99.99% SLA'} />

          <div></div>
        </div>
      </div>


      <section className=" mt-20 bg-white px-2">
        <div className="max-w-7xl px-10 mx-auto sm:text-center">
          <p className="text-blue-500 font-bold text-lg tracking-wide uppercase">Our serverless Offerings</p>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3">Serverless Products We Manage For You</h2>
          <p className="mt-4 text-gray-500 text-base sm:text-xl lg:text-2xl"><br className="lg:hidden hidden sm:block" />{"Check'em out below 👇"}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16">
            <div className="rounded-3xl py-10 flex flex-col items-center justify-center bg-pink-50 ">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 64 60" width="100" height="100" xmlSpace="preserve" fill='#f02e65'>

                <g>
                  <g>
                    <path d="M22.9,24.3h-1.1l-0.2,0.8c-0.1,0.4-0.3,1.2-0.4,1.7c-0.1,0.5-0.3,1.4-0.5,2.2c-0.2,0.7-0.5,2-0.7,2.8
			c-0.4,1.7-0.8,3.6-1.2,4.8c-0.1,0.4-0.1,0.7,0,0.8c0,0.1,0.5,0.1,1,0.1c1,0,1,0,1.5-1.9c0.1-0.3,0.1-0.6,0.2-1
			c0.1-0.5,0.2-1.1,0.3-1.5c0.2-0.6,0.5-1.9,0.7-2.8c0.2-0.9,0.5-2.2,0.7-2.9c0.4-1.7,0.7-2.8,0.7-3C23.9,24.3,23.4,24.3,22.9,24.3z
			 M18,29.7c0.4-0.5,0.8-1,0.8-1.1c0-0.1-0.6-0.2-1.3-0.2h-1.3L15,29.9l-1.2,1.3l1.3,1.4l1.3,1.4h1.2c0.7,0,1.2-0.1,1.2-0.2
			c0-0.1-0.5-0.7-1.1-1.4C16.5,31.2,16.5,31.4,18,29.7z M27.6,29.9l-1.2-1.4h-1.3c-0.7,0-1.3,0.1-1.3,0.2c0,0.1,0.4,0.5,0.8,1.1
			c1.5,1.6,1.5,1.4,0.2,2.7c-0.6,0.7-1.1,1.2-1.1,1.4c0,0.1,0.5,0.2,1.2,0.2h1.2l1-1c0.5-0.5,1.1-1.2,1.3-1.4
			C28.8,31.3,28.8,31.2,27.6,29.9z"/>
                  </g>
                  <path d="M64,31.5C63.7,20,54.3,10.7,42.7,10.7c-3.9,0-7.5,1.1-10.7,2.9c-3.1-1.8-6.8-2.9-10.7-2.9
		C10,10.7,0.7,19.5,0.1,30.8c0,0,0,0.1,0,0.2C0,31.3,0,31.6,0,32c0,0.4,0,0.9,0.1,1.3c0.7,11.2,9.9,20,21.3,20
		c3.9,0,7.5-1.1,10.7-2.9c3.1,1.8,6.8,2.9,10.7,2.9c11.6,0,21-9.3,21.3-20.8c0-0.2,0-0.4,0-0.6S64,31.7,64,31.5z M26.7,46.1
		c-1.7,0.7-3.5,1-5.4,1C13,47.1,6.2,40.3,6.2,32S13,16.9,21.3,16.9c1.9,0,3.7,0.3,5.4,1c5.7,2.2,9.7,7.7,9.7,14.1
		S32.4,43.9,26.7,46.1z"/>
                </g>
              </svg>


              <p className="font-bold mt-4">Appwrite</p>
              <p className="mt-2 text-sm text-gray-500">Apps backend platform</p>
            </div>
            <div className="rounded-3xl py-10 flex flex-col items-center justify-center bg-blue-50 ">

              <svg width="70.071pt" height="80.383pt" viewBox="0 0 432.071 445.383" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                <g id="orginal" style={{ fillRule: 'nonzero', clipRule: 'nonzero', stroke: '#000000', strokeMiterlimit: 4 }}>
                </g>
                <g id="Layer_x0020_3" style={{ fillRule: 'nonzero', clipRule: 'nonzero', fill: 'none', stroke: '#FFFFFF', strokeWidth: 12.4651, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 4 }}>
                  <path style={{ fill: '#000000', stroke: '#000000', strokeWidth: 37.3953, strokeLinecap: 'butt', strokeLinejoin: 'miter' }} d="M323.205,324.227c2.833-23.601,1.984-27.062,19.563-23.239l4.463,0.392c13.517,0.615,31.199-2.174,41.587-7c22.362-10.376,35.622-27.7,13.572-23.148c-50.297,10.376-53.755-6.655-53.755-6.655c53.111-78.803,75.313-178.836,56.149-203.322    C352.514-5.534,262.036,26.049,260.522,26.869l-0.482,0.089c-9.938-2.062-21.06-3.294-33.554-3.496c-22.761-0.374-40.032,5.967-53.133,15.904c0,0-161.408-66.498-153.899,83.628c1.597,31.936,45.777,241.655,98.47,178.31    c19.259-23.163,37.871-42.748,37.871-42.748c9.242,6.14,20.307,9.272,31.912,8.147l0.897-0.765c-0.281,2.876-0.157,5.689,0.359,9.019c-13.572,15.167-9.584,17.83-36.723,23.416c-27.457,5.659-11.326,15.734-0.797,18.367c12.768,3.193,42.305,7.716,62.268-20.224    l-0.795,3.188c5.325,4.26,4.965,30.619,5.72,49.452c0.756,18.834,2.017,36.409,5.856,46.771c3.839,10.36,8.369,37.05,44.036,29.406c29.809-6.388,52.6-15.582,54.677-101.107" />
                  <path style={{ fill: '#336791', stroke: 'none' }} d="M402.395,271.23c-50.302,10.376-53.76-6.655-53.76-6.655c53.111-78.808,75.313-178.843,56.153-203.326c-52.27-66.785-142.752-35.2-144.262-34.38l-0.486,0.087c-9.938-2.063-21.06-3.292-33.56-3.496c-22.761-0.373-40.026,5.967-53.127,15.902    c0,0-161.411-66.495-153.904,83.63c1.597,31.938,45.776,241.657,98.471,178.312c19.26-23.163,37.869-42.748,37.869-42.748c9.243,6.14,20.308,9.272,31.908,8.147l0.901-0.765c-0.28,2.876-0.152,5.689,0.361,9.019c-13.575,15.167-9.586,17.83-36.723,23.416    c-27.459,5.659-11.328,15.734-0.796,18.367c12.768,3.193,42.307,7.716,62.266-20.224l-0.796,3.188c5.319,4.26,9.054,27.711,8.428,48.969c-0.626,21.259-1.044,35.854,3.147,47.254c4.191,11.4,8.368,37.05,44.042,29.406c29.809-6.388,45.256-22.942,47.405-50.555    c1.525-19.631,4.976-16.729,5.194-34.28l2.768-8.309c3.192-26.611,0.507-35.196,18.872-31.203l4.463,0.392c13.517,0.615,31.208-2.174,41.591-7c22.358-10.376,35.618-27.7,13.573-23.148z" />
                  <path d="M215.866,286.484c-1.385,49.516,0.348,99.377,5.193,111.495c4.848,12.118,15.223,35.688,50.9,28.045c29.806-6.39,40.651-18.756,45.357-46.051c3.466-20.082,10.148-75.854,11.005-87.281" />
                  <path d="M173.104,38.256c0,0-161.521-66.016-154.012,84.109c1.597,31.938,45.779,241.664,98.473,178.316c19.256-23.166,36.671-41.335,36.671-41.335" />
                  <path d="M260.349,26.207c-5.591,1.753,89.848-34.889,144.087,34.417c19.159,24.484-3.043,124.519-56.153,203.329" />
                  <path style={{ strokeLinejoin: 'bevel' }} d="M348.282,263.953c0,0,3.461,17.036,53.764,6.653c22.04-4.552,8.776,12.774-13.577,23.155c-18.345,8.514-59.474,10.696-60.146-1.069c-1.729-30.355,21.647-21.133,19.96-28.739c-1.525-6.85-11.979-13.573-18.894-30.338    c-6.037-14.633-82.796-126.849,21.287-110.183c3.813-0.789-27.146-99.002-124.553-100.599c-97.385-1.597-94.19,119.762-94.19,119.762" />
                  <path d="M188.604,274.334c-13.577,15.166-9.584,17.829-36.723,23.417c-27.459,5.66-11.326,15.733-0.797,18.365c12.768,3.195,42.307,7.718,62.266-20.229c6.078-8.509-0.036-22.086-8.385-25.547c-4.034-1.671-9.428-3.765-16.361,3.994z" />
                  <path d="M187.715,274.069c-1.368-8.917,2.93-19.528,7.536-31.942c6.922-18.626,22.893-37.255,10.117-96.339c-9.523-44.029-73.396-9.163-73.436-3.193c-0.039,5.968,2.889,30.26-1.067,58.548c-5.162,36.913,23.488,68.132,56.479,64.938" />
                  <path style={{ fill: '#ffffff', strokeWidth: 4.155, strokeLinecap: 'butt', strokeLinejoin: 'miter' }} d="M172.517,141.7c-0.288,2.039,3.733,7.48,8.976,8.207c5.234,0.73,9.714-3.522,9.998-5.559c0.284-2.039-3.732-4.285-8.977-5.015c-5.237-0.731-9.719,0.333-9.996,2.367z" />
                  <path style={{ fill: '#ffffff', strokeWidth: 2.0775, strokeLinecap: 'butt', strokeLinejoin: 'miter' }} d="M331.941,137.543c0.284,2.039-3.732,7.48-8.976,8.207c-5.238,0.73-9.718-3.522-10.005-5.559c-0.277-2.039,3.74-4.285,8.979-5.015c5.239-0.73,9.718,0.333,10.002,2.368z" />
                  <path d="M350.676,123.432c0.863,15.994-3.445,26.888-3.988,43.914c-0.804,24.748,11.799,53.074-7.191,81.435" />
                  <path style={{ strokeWidth: 3 }} d="M0,60.232" />
                </g>
              </svg>  <p className="font-bold mt-4">PostgreSQL (Coming Soon)</p>
              <p className="mt-2 text-sm text-gray-500">Most powerful SQL database</p>
            </div>
            <div className="rounded-3xl py-10 flex flex-col items-center justify-center bg-red-50 ">
              <svg width="100" height="100" viewBox="0 0 256 220" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                <path d="M245.97 168.943c-13.662 7.121-84.434 36.22-99.501 44.075-15.067 7.856-23.437 7.78-35.34 2.09-11.902-5.69-87.216-36.112-100.783-42.597C3.566 169.271 0 166.535 0 163.951v-25.876s98.05-21.345 113.879-27.024c15.828-5.679 21.32-5.884 34.79-.95 13.472 4.936 94.018 19.468 107.331 24.344l-.006 25.51c.002 2.558-3.07 5.364-10.024 8.988" fill="#912626" /><path d="M245.965 143.22c-13.661 7.118-84.431 36.218-99.498 44.072-15.066 7.857-23.436 7.78-35.338 2.09-11.903-5.686-87.214-36.113-100.78-42.594-13.566-6.485-13.85-10.948-.524-16.166 13.326-5.22 88.224-34.605 104.055-40.284 15.828-5.677 21.319-5.884 34.789-.948 13.471 4.934 83.819 32.935 97.13 37.81 13.316 4.881 13.827 8.9.166 16.02" fill="#C6302B" /><path d="M245.97 127.074c-13.662 7.122-84.434 36.22-99.501 44.078-15.067 7.853-23.437 
             7.777-35.34 2.087-11.903-5.687-87.216-36.112-100.783-42.597C3.566 127.402 0 124.67 0 122.085V96.206s98.05-21.344 113.879-27.023c15.828-5.679 21.32-5.885 34.79-.95C162.142 73.168 242.688 87.697 256 92.574l-.006 25.513c.002 2.557-3.07 5.363-10.024 8.987" fill="#912626" /><path d="M245.965 101.351c-13.661 7.12-84.431 36.218-99.498 44.075-15.066 7.854-23.436 7.777-35.338 2.087-11.903-5.686-87.214-36.112-100.78-42.594-13.566-6.483-13.85-10.947-.524-16.167C23.151 83.535 98.05 54.148 113.88 48.47c15.828-5.678 21.319-5.884 34.789-.949 13.471 4.934 83.819 32.933 97.13 37.81 13.316 4.88 13.827 8.9.166 16.02" fill="#C6302B" /><path d="M245.97 83.653c-13.662 7.12-84.434 36.22-99.501 44.078-15.067 7.854-23.437 7.777-35.34 2.087-11.903-5.687-87.216-36.113-100.783-42.595C3.566 83.98 0 81.247 0 78.665v-25.88s98.05-21.343 113.879-27.021c15.828-5.68 21.32-5.884 34.79-.95C162.142 29.749 242.688 44.278 256 49.155l-.006 25.512c.002 2.555-3.07 5.361-10.024 8.986" fill="#912626" /><path d="M245.965 57.93c-13.661 7.12-84.431 36.22-99.498 44.074-15.066 7.854-23.436 7.777-35.338 2.09C99.227 98.404 23.915 67.98 10.35 61.497-3.217 55.015-3.5 50.55 9.825 45.331 23.151 40.113 98.05 10.73 113.88 5.05c15.828-5.679 21.319-5.883 34.789-.948 13.471 4.935 83.819 32.934 97.13 37.811 13.316 4.876 13.827 8.897.166 16.017" fill="#C6302B" /><path d="M159.283 32.757l-22.01 2.285-4.927 11.856-7.958-13.23-25.415-2.284 18.964-6.839-5.69-10.498 17.755 6.944 16.738-5.48-4.524 10.855 17.067 6.391M131.032 90.275L89.955 73.238l58.86-9.035-17.783 26.072M74.082 39.347c17.375 0 31.46 5.46 31.46 12.194 0 6.736-14.085 12.195-31.46 12.195s-31.46-5.46-31.46-12.195c0-6.734 14.085-12.194 31.46-12.194" fill="#FFF" /><path d="M185.295 35.998l34.836 13.766-34.806 13.753-.03-27.52" fill="#621B1C" /><path d="M146.755 51.243l38.54-15.245.03 27.519-3.779 1.478-34.791-13.752" fill="#9A2928" />
              </svg>
              <p className="font-bold mt-4">Redis (Coming Soon)</p>
              <p className="mt-2 text-sm text-gray-500">Most popular In-memory database</p>
            </div>
            <div className="rounded-3xl py-10 flex flex-col items-center justify-center bg-green-50 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 32 32"><path d="M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.82-.436-1.255-.105-.523-.174-1.046-.14-1.586v-.244C16.057 24.21 15.796.21 15.9.087z" fill="#599636" /><path d="M15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614L15.9.034z" fill="#6cac48" /><path d="M16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453-.105-.174-.192-.383-.26-.575-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1-.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z" fill="#c2bfbf" /></svg> <p className="font-bold mt-4">MongoDB (Coming Soon)</p>
              <p className="mt-2 text-sm text-gray-500">Great document database</p>
            </div>

          </div>
        </div>
      </section>

      <div className='py-10 flex flex-col mt-20 items-center bg-gray-50 mb-0 px-12 pr-16 sm:pr-10 justify-center'>
        <div className='text-3xl sm:text-4xl lg:text-5xl font-bold pb-4 w-full sm:w-96 sm:pl-8'>Core Features</div>
        <div className='  pb-8 font-bold text-primary tracking-wide text-lg uppercase'>Features which define our infrastructure</div>

        <div className=' grid grid-col-1 lg:grid-cols-2 my-8'>
          <FeatureCard icon={pricingCard()} title={"Usage based pricing"} data={'We only charge by the amount of storage you are using. Network egress and Compute time is totally free.'} />
          <FeatureCard icon={globalCard()} title={"Global Low Latency"} data={'With Global Appwrite Instances, you can access your database from anywhere with very low latency.'} />
          <FeatureCard icon={fastCard()} title={"Ultra fast machines"} data={'We run your instances on dedicated machines with NVMe to acheive the best performance.'} />
          <FeatureCard icon={puzzleCard()} title={"Easier Integration"} data={'Using Netinc you can benefit from our software ecosystem with easier integration.'} />


        </div>


      </div>







      <section className="flex items-center px-2 justify-center pb-14 pt-10 bg-white min-w-screen">
        <div className="px-4 bg-white">
          <div className="container flex flex-col items-start mx-auto lg:items-center">
            <p className="relative flex items-start justify-start w-full font-bold text-primary tracking-wide text-lg uppercase   lg:justify-center lg:items-center">{"Don't just take our word for it"}</p>


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
                <div className="mt-8 text-lg text-gray-500">{"\"We used to use firebase for our android app which was kind of a black box. Later, we found appwrite which was an open source alternative to firebase and so we chose netinc's appwrite serverless offering. Using it we can scale our app without any operational difficulty.\""}</div>
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
                <div className="mt-8 text-lg text-gray-500">{"\"Netinc is awesome. It is a lot cheaper than any other backend service I've used. And the best part is that it's serverless which makes it crazy scalable without any overhead. My clients love it too.\""}</div>
              </div>

            </div>
          </div>
        </div>
      </section>







      <div className='flex flex-col px-2 justify-center items-center space-y-2 bg-gray-50 py-10'>
        <div className=' text-5xl font-bold'>Comparison</div>
        <div className='pb-8 font-bold text-primary tracking-wide text-lg uppercase'>our appwrite service compared to Firebase and Supabase</div>



        <div className=" my-20   rounded-3xl">

          <div className='flex flex-col lg:flex-row justify-center items-start    rounded-3xl border-p py-4 bg-white'>
            <div className='hidden lg:block'>
              <FeatureList features={comparisonFeatures} />
            </div>

            <ComparisonList comparisonFeatures={comparisonFeatures} features={[null, 'free', true, '15GB then $0.08 per GB', 'Free', null, true, true, true, null, '100GB then $0.012 per GB', true, 'free', null, 'free', 'free', 'free', '15 types of runtimes']} info={{ type: "Netinc's Appwrite", action: 'Start Using Now', 'function': () => { }, 'pricing': 'Starts at $6' }} />
            <ComparisonList comparisonFeatures={comparisonFeatures} features={[null, 'free', true, '8GB then $0.125 per GB', '$0.09 per GB', null, true, true, true, null, '100GB then $0.021 per GB', true, '$0.09 per GB', null, false, false, false, 'SQL functions']} info={{ type: "Supabase", action: 'Know More', 'function': () => { }, 'secondary': true, 'pricing': 'Starts at $25' }} />
            <ComparisonList comparisonFeatures={comparisonFeatures} features={[null, '$0.01-0.09 per 100,000', true, '1GB then $0.108 per GB', '5GB then $0.12 per GB', null, true, true, false, null, '5GB then $0.026 per GB', true, '$0.12 per GB', null, '2M then $0.4 per million', '5GB then $0.12 per GB', '$0.009 GB-hr & $0.036 GHz-hr', 'Nodejs']} info={{ type: 'Firebase', action: 'Know More', 'function': () => { }, 'secondary': true, 'pricing': 'Pay as you go' }} />
          </div>  </div>     </div>
      <div className='flex flex-col mt-8 items-center'>
        <div className='py-8 flex flex-col items-center space-y-2'>
          <div className=' text-5xl font-bold'>FAQ</div>
          <div className='font-bold text-primary tracking-wide text-lg uppercase   '>Frequently Asked Questions</div>
        </div>




        <div className='px-2  max-w-4xl'>
          <Collapse.Group>
            <Collapse title="What is a serverless infrastructure?">
              <Text>{"With servers/instances, you pay per-hour or a fixed price. With Serverless you're not charged when the service isn't in use. Netinc configures, manages and scales the services for you."}</Text>
            </Collapse>
            <Collapse title="How does Netinc compare to self hosted appwrite instance?">
              <Text>{"Most self hosted appwrite instances aren't scalable, highly available or dependable because they are available on a single node. If you setup appwrite with kubernetes it becomes very complicated and hard to manage. What we provide can resolve all of these issues with lower costs than self hosting on other cloud providers. Netinc provides managed apperite instances which gives your users very low latency. Moreover, we provide enterprise cloud solutions which simply Isn't possible possible when you host on your own."}</Text>
            </Collapse>
            <Collapse title="How affordable is netinc?">
              <Text>{"We run our services on servers provided by our low cost vendor which makes our services accessible to anyone."}</Text>
            </Collapse>
            <Collapse title="Can I export my data?
">
              <Text>Yes. You have full access to whatever services you use. If you decide to leave and want to export all your data, we will help you. Netinc has no vendor lock-in.
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
                    <span className="font-medium text-gray-500">Faster Processing and Delivery</span>
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

      <div className='bg-primary w-full h-72 sm:h-56 flex flex-col sm:flex-row px-2  blur-none justify-evenly text-white text-5xl font-extrabold items-center'>

        <div className='flex flex-col text-3xl md:text-5xl space-y-4 mx-4'>
          <div>
            Start Deploying Now →
          </div>

          <div className=' text-white text-opacity-75 text-lg font-normal'>
            Your Serverless app backend within 5 minutes
          </div>
        </div>
        <Button type='secondary' onClick={() => { window.location.assign(server) }} >Create Account(Coming Soon)</Button>
      </div>












    </div>
  )
}
