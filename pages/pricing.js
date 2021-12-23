import { ComparisonList, FeatureList, } from '../components/Comparison';
import { Button, Popover, Spacer, Collapse, Text, Divider } from '@geist-ui/react'

import { Database, Key, HardDrive, FileFunction } from '@geist-ui/react-icons'

export default function About() {
    const comparisonFeatures = [{ 'name': "Database", 'section': true, 'icon': <Database /> }, { 'name': "Api Requests", 'info': 'Read, write, or delete requests to the database' }, { 'name': "Realtime functionality", 'info': 'Realtime allows you to listen to any events on the server-side in realtime' }, { 'name': "Database space", }, { 'name': "Transfer Limits", },
    { 'name': "Authentication", 'section': true, 'icon': <Key /> }, { 'name': "Unlimited Users", }, { 'name': "Custom SMTP server", 'info': 'Mail server that you can use to send emails' }, { 'name': "Audit logs", },
    { 'name': "Object Storage", 'section': true, 'icon': <HardDrive /> }, { 'name': "Storage", }, { 'name': "Customizable Access Controls", }, { 'name': "Outgoing Transfer Limits", },

    { 'name': "Functions", 'section': true, 'icon': <FileFunction /> }, { 'name': "Invocations", 'info': 'Number of times your function is triggered' }, { 'name': "Networking", 'info': 'Data usage by functions' }, { 'name': "Compute", 'info': 'Computation power used by functions' }, { 'name': "Type", }];

    return (

        <div className="pt-24 mt-24 flex flex-col justify-center items-center">
            <div className='flex w-full justify-center items-center text-6xl font-extrabold text-center px-4'>
                {'Pricing that scales with your usage'}
            </div>


            <div className='flex w-full justify-center items-center text-2xl mt-10 font-medium text-gray-600'>
                Scale to millions with




            </div>
            <div className='flex w-full justify-center items-center text-2xl mt-2 font-medium text-gray-600'>
                fully Managed Appwrite on Netinc Cloud.
            </div>


            <div className='flex justify-center items-center my-6'>
                <FeatureList features={comparisonFeatures} topButton={true} />
                <ComparisonList features={[null, 'free', true, '15GB then $0.08 per GB', 'Free', null, true, true, true, null, '100GB then $0.012 per GB', true, 'free', null, 'free', 'free', 'free', '15 types of runtimes']} info={{ type: "Cloud", action: 'Start Using Now', 'function': () => { }, 'pricing': 'Starts at $9', 'topButton': true }} />
                <ComparisonList features={[null, 'free', true, '8GB then $0.125 per GB', '$0.09 per GB', null, true, true, true, null, '100GB then $0.021 per GB', true, '$0.09 per GB', null, false, false, false, 'SQL functions']} info={{ type: "Cloud Enterprise", action: 'Contact Sales', 'function': () => { }, 'secondary': true, 'pricing': 'Custom', 'topButton': true }} />

            </div>


            <div className='flex flex-col mt-20 items-center border-t-p w-full'>
                <div className='py-8 flex flex-col items-center space-y-2'>
                    <div className=' text-5xl font-bold'>FAQ</div>
                    <div className=' text-xl text-gray-500'>Frequently Asked Questions</div>
                </div>




                <div className='  max-w-4xl'>
                    <Collapse.Group>
                        <Collapse title="What is a serverless infrastructure?">
                            <Text>With servers/instances, you pay per-hour or a fixed price. With Serverless, you pay per-request. This means you're not charged when the database isn't in use. Netinc configures and manages the database for you.</Text>
                        </Collapse>
                        <Collapse title="How does Netinc compare to self hosted appwrite instance?">
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        </Collapse>
                        <Collapse title="How does Netinc compare to self hosted appwrite instance?">
                            <Text>Self hosted solutions have obvious limitations. Netinc provides managed apperite instances which gives your users very low latency. Our instances autoscale based on the the amount of usage they get which keeps your costs low. Moreover, we provide enterprise cloud solutions which simply Isn't possible possible when you host your own cloud.</Text>
                        </Collapse>
                        <Collapse title="How does Netinc compare to self hosted appwrite instance?">
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        </Collapse>
                        <Collapse title="How does Netinc compare to self hosted appwrite instance?">
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        </Collapse>
                        <Collapse title="How does Netinc compare to self hosted appwrite instance?">
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        </Collapse>
                        <Collapse title="How does Netinc compare to self hosted appwrite instance?">
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        </Collapse>
                        <Collapse title="How does Netinc compare to self hosted appwrite instance?">
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        </Collapse>
                        <Collapse title="How does Netinc compare to self hosted appwrite instance?">
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        </Collapse>
                        <Collapse title="How does Netinc compare to self hosted appwrite instance?">
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        </Collapse>
                        <Collapse title="How does Netinc compare to self hosted appwrite instance?">
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
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
