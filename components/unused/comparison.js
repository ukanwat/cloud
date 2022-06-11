import { FeatureList, ComparisonList } from "../Comparison"
function ComparisonTable({ color }) {
    return (<div className=" my-20   rounded-3xl">

        <div className='flex flex-col lg:flex-row justify-center items-start    rounded-3xl border-p py-4 bg-white'>
            <div className='hidden lg:block'>
                <FeatureList features={comparisonFeatures} />
            </div>

            <ComparisonList comparisonFeatures={comparisonFeatures}
                features={[null, 'free', true, '15GB then $0.08 per GB', 'Free', null, true, true, true, null, '100GB then $0.012 per GB', true, 'free', null, 'free', 'free', 'free', '15 types of runtimes']} info={{ type: "Appwrite", action: 'Start Using Now', 'function': () => { }, 'pricing': 'Starts at $6' }} />
            <ComparisonList comparisonFeatures={comparisonFeatures} features={[null, 'free', true, '8GB then $0.125 per GB', '$0.09 per GB', null, true, true, true, null, '100GB then $0.021 per GB', true, '$0.09 per GB', null, false, false, false, 'SQL functions']}
                info={{ type: "Supabase", action: 'Know More', 'function': () => { }, 'secondary': true, 'pricing': 'Starts at $25' }} />
            <ComparisonList comparisonFeatures={comparisonFeatures} features={[null, '$0.01-0.09 per 100,000', true, '1GB then $0.108 per GB', '5GB then $0.12 per GB', null, true, true, false, null, '5GB then $0.026 per GB', true, '$0.12 per GB', null, '2M then $0.4 per million', '5GB then $0.12 per GB', '$0.009 GB-hr & $0.036 GHz-hr', 'Nodejs']}
                info={{ type: 'Firebase', action: 'Know More', 'function': () => { }, 'secondary': true, 'pricing': 'Pay as you go' }} />
        </div>


    </div>)
}