import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../Assets/Resume.pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `${import.meta.env.BASE_URL}pdf.worker.min.mjs`;

function RecordsPane() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="frame">
      <div className="records">
        <div>
          <div className="flame">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2c1 3-3 4-3 8a3 3 0 0 0 6 0c0-1-1-2-1-2 2 1 3 3 3 5a5 5 0 0 1-10 0c0-5 4-6 5-11z" />
            </svg>
          </div>
          <h3>Read the Full Records</h3>
          <p>Education, experience, and skills — kindled in full, viewable inline or carried away as a download.</p>
        </div>
        <a href={pdf} target="_blank" rel="noreferrer" className="ashen-btn">
          <AiOutlineDownload /> Download Resume
        </a>
      </div>

      <div className="records-doc">
        <Document file={pdf}>
          <Page pageNumber={1} scale={width > 786 ? 1.1 : 0.5} />
        </Document>
      </div>
    </div>
  );
}

export default RecordsPane;
