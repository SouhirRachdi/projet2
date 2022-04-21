
import React from 'react'
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library



export const Pdf = ({cour}) => {
 
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (

 <div><div className='container'>
 <br></br>
   <br></br>
   <h4>{cour.title}</h4>
 <div className='pdf-container'>
 {/* show pdf conditionally (if we have one)  */}
 {<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
   <Viewer fileUrl={cour.content}
     plugins={[defaultLayoutPluginInstance]} />
</Worker>}
</div>
</div>
   
</div>
  )
}
