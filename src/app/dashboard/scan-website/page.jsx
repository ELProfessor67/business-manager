'use client'
import React,{useRef, useState} from 'react';
import { renderReport } from 'lighthouse-viewer';
import axios from 'axios';


const page = () => {
    const [url, setUrl] = useState('');
    const [report, setReport] = useState(null);


    const handleScan = async () => {
        if(!url) return;
        try {
            const {data} = await axios.post('/api/scan',{url})
            const reportHtml = renderReport(data,{});
            const string = new XMLSerializer().serializeToString(reportHtml)
           
            setReport(string);
            console.log(string)
        } catch (error) {
            console.error('Error scanning website:', error);
        }
    };

    function createMarkup(report) {
        return {__html: report};
    }
    return (
        <div>
            <h1>Lighthouse Scanner</h1>
            <label>
                Enter Website URL:
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
            </label>
            <button onClick={handleScan}>Scan</button>

            {report && (
                <div>
                    <h2>Scan Results</h2>
                    
                    <div dangerouslySetInnerHTML={createMarkup(report)}>

                    </div>
                </div>
            )}
            
        </div>
    )
}

export default page