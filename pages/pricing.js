import { ComparisonList, FeatureList, } from '../components/Comparison';
import { Button, Popover, Spacer, Collapse, Text, Divider } from '@geist-ui/react'

import { Database, Key, HardDrive, FileFunction, CreditCard, Monitor, UserX, Users } from '@geist-ui/react-icons'

export default function About() {
    const comparisonFeatures = [




        { 'name': "Monitoring", 'section': true, 'icon': <Monitor /> }, { 'name': "Metrics", }, { 'name': "Log retention", }, { 'name': "Audit log retention", },
        { 'name': "Support", 'section': true, 'icon': <Users /> }, { 'name': "Dedicated Account Manager", }, { 'name': "Custom SLAs", }, { 'name': "Support", },
        { 'name': "Pricing", 'section': true, 'icon': <CreditCard /> }, { 'name': "Requests", }, { 'name': "Network Usage", }, { 'name': "CPU usage", 'info': 'CPU used by containers in vCPU-s' }, { 'name': "Memory usage", 'info': 'Memory used by containers in GB-s' },];
    return (
        <div className="pt-10 md:pt-24 mt-16 flex flex-col justify-center items-center px-2">

            <h1 className="max-w-5xl mb-10 text-3xl font-bold leading-none tracking-tighter text-neutral-800 md:text-5xl lg:text-6xl lg:max-w-7xl">
                Pricing that scales with your usage. <br className="hidden lg:block" />
                Only pay for the resources used.

            </h1>



            <div className='flex flex-col lg:flex-row justify-center items-center my-6 border-p rounded-3xl py-5'>
                <div className='hidden lg:block'>
                    <FeatureList features={comparisonFeatures} topButton={true} />
                </div>
                <ComparisonList comparisonFeatures={comparisonFeatures} features={[null, '30 days', '30 days', '30 days', null, false, false, 'Basic Email Support', null, 'No Charge', '$0.075', '$0.000008', '$0.000003']} info={{ type: "Cloud", action: 'Start Using Now', 'function': () => { window.location.assign('https://console.coplane.co') }, 'pricing': 'Pay as you go', 'topButton': true }} />
                <ComparisonList comparisonFeatures={comparisonFeatures} features={[null, 'Unlimited', 'Unlimited', '12 months', null, true, true, 'Custom', null, 'No charge', 'Custom', 'Custom', 'Custom']} info={{ type: "Enterprise", action: 'Contact Sales', 'function': () => { window.location.assign('https://coplane.co/contact') }, 'secondary': true, 'pricing': 'Custom', 'topButton': true }} />

            </div>
            <div className='text-gray-600 text-xl px-4'>Apps are billed based on resource allocation. The first 100,000 vCPU-s and 200,000 GB-s each month are free. </div>

            <div className='flex flex-col mt-20 items-center  w-full bg-gray-50'>
                <div className='py-8 flex flex-col items-center space-y-2'>
                    <div className=' text-5xl font-bold leading-none tracking-tighter' >Pricing FAQ</div>
                </div>




                <div className='  max-w-7xl w-full mb-20'>
                    <Collapse.Group>

                        <Collapse title="When will I be billed?">
                            <Text>We will bill you at the start of the next month..</Text>
                        </Collapse>
                        <Collapse title="How can I monitor my usage and billing?">
                            <Text>You can use the console to manage usage and billing.</Text>
                        </Collapse>
                        <Collapse title="I'm worried I could end up with a huge bill at the end of the month?">
                            <Text>You can set a pricing alert to track your usage. We also provide DDOS protection top protect your apps from abuse.</Text>
                        </Collapse>
                        {/* <Collapse title="Can the pricing change in future?">
                            <Text></Text>
                        </Collapse> */}
                        <Collapse title="Do you offer free tier?">
                            <Text>Yes, The first 100,000 vCPU-s and 200,000 GB-s each month are free.</Text>
                        </Collapse>
                        <Collapse title="What kind of support does Coplane provide?">
                            <Text>If you have the cloud plan you can get support by email at support@coplane.co. And for enterprise plan we provide 24x7 support.</Text>
                        </Collapse>
                        <Collapse title="Where can I get the Coplane's privacy policy and Terms?">
                            <Text>You can read the Privacy policy and terms of service at https://coplane.co/legal/privacy and https://coplane.co/legal/terms respectively.</Text>
                        </Collapse>
                        {/* <Collapse title="Are there any limits on data transfer?">
                            <Text> </Text>
                        </Collapse> */}
                    </Collapse.Group>
                </div>



            </div>

        </div>
    )
}
