import React from 'react'

import PDFViewer from 'pdf-viewer-reactjs'
import { useSelector } from 'react-redux';

const Test = () => {
    const Courses = useSelector((state) => state.courReducer.courses);
    return (
        
        <PDFViewer
            document={{
                url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
            }}
        />
    )
}

export default Test