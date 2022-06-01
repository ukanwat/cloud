import { ComparisonList, FeatureList, } from '../components/Comparison';
import { Button, Popover, Spacer, Collapse, Text, Divider } from '@geist-ui/react'

import { Database, Key, HardDrive, FileFunction } from '@geist-ui/react-icons'

export default function About() {
    const comparisonFeatures = [{ 'name': "Database", 'section': true, 'icon': <Database /> }, { 'name': "Api Requests", 'info': 'Read, write, or delete requests to the database' }, { 'name': "Realtime functionality", 'info': 'Realtime allows you to listen to any events on the server-side in realtime' }, { 'name': "Database space", }, { 'name': "Transfer Limits", },
    { 'name': "Authentication", 'section': true, 'icon': <Key /> }, { 'name': "Unlimited Users", }, { 'name': "Custom SMTP server", 'info': 'Mail server that you can use to send emails' }, { 'name': "Audit logs", },
    { 'name': "Object Storage", 'section': true, 'icon': <HardDrive /> }, { 'name': "Storage", }, { 'name': "Customizable Access Controls", }, { 'name': "Outgoing Transfer Limits", },
    { 'name': "Functions", 'section': true, 'icon': <FileFunction /> }, { 'name': "Invocations", 'info': 'Number of times your function is triggered' }, { 'name': "Networking", 'info': 'Data usage by functions' }, { 'name': "Compute", 'info': 'Computation power used by functions' }, { 'name': "Type", }];
    return (

        <div className="pt-10 md:pt-24 mt-24 flex flex-col justify-center items-center px-2">



            <div className='flex px-2 text-center w-full justify-center items-center text-4xl  lg:text-6xl font-extrabold'>
                Pricing that scales with your usage
            </div>

            <div className='flex w-full text-center justify-center items-center text-xl lg:text-2xl mt-2 font-medium text-gray-600'>
                Scale to millions with fully Managed Appwrite on Coplane Cloud.

            </div>


            <div className='flex flex-col lg:flex-row justify-center items-center my-6 border-p rounded-3xl py-5'>
                <div className='hidden lg:block'>
                    <FeatureList features={comparisonFeatures} topButton={true} />
                </div>
                <ComparisonList comparisonFeatures={comparisonFeatures} features={[null, 'free', true, '15GB then $0.08 per GB', 'Free', null, true, true, true, null, '100GB then $0.012 per GB', true, 'free', null, 'free', 'free', 'free', '15 types of runtimes']} info={{ type: "Cloud", action: 'Start Using Now', 'function': () => { }, 'pricing': 'Starts at $6', 'topButton': true }} />
                <ComparisonList comparisonFeatures={comparisonFeatures} features={[null, 'free', true, '8GB then $0.125 per GB', '$0.09 per GB', null, true, true, true, null, '100GB then $0.021 per GB', true, '$0.09 per GB', null, false, false, false, 'SQL functions']} info={{ type: "Enterprise", action: 'Contact Sales', 'function': () => { }, 'secondary': true, 'pricing': 'Custom', 'topButton': true }} />

            </div>


            <div className='flex flex-col mt-20 items-center  w-full bg-gray-50'>
                <div className='py-8 flex flex-col items-center space-y-2'>
                    <div className=' text-5xl font-bold'>FAQ</div>
                    <div className=' text-xl text-gray-500'>Frequently Asked Questions</div>
                </div>




                <div className='  max-w-4xl mb-20'>
                    <Collapse.Group>

                        <Collapse title="When will I be billed?">
                            <Text>We will bill you at the start of the next month..</Text>
                        </Collapse>
                        <Collapse title="How can I monitor my usage and billing?">
                            <Text>You can do this in the console.</Text>
                        </Collapse>
                        <Collapse title="I'm worried I could end up with a huge bill at the end of the month?">
                            <Text>Our services are extremely affordable compared to other providers. You can set a pricing alert to track your usage</Text>
                        </Collapse>
                        <Collapse title="Can the pricing change in future?">
                            <Text>Our pricing most likely will not change in any near future because our services are catered towards developers.</Text>
                        </Collapse>
                        <Collapse title="Do you offer free trial?">
                            <Text>No, currently as of now we do not provide any kind of free trial because our cloud plans are already pretty affordable.</Text>
                        </Collapse>
                        <Collapse title="What kind of support does Coplane provide?">
                            <Text>If you have the cloud plan you can get support by email at support@coplane.co. And for enterprise plan we provide 24x7 support.</Text>
                        </Collapse>
                        <Collapse title="Where can I get the Coplane's privacy policy and Terms?">
                            <Text>You can read the Privacy policy  and terms of service at https://coplane.co/legal/privacy and https://coplane.co/legal/terms respectively.</Text>
                        </Collapse>
                        <Collapse title="Are there any limits on data transfer?">
                            <Text>No, unlike most of the cloud providers our data egress and ingress are totally free with no limits. </Text>
                        </Collapse>
                    </Collapse.Group>
                </div>



            </div>

        </div>
    )
}
