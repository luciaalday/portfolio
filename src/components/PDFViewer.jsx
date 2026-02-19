/** src/components/PDFViewer.jsx */
import { useState, useCallback, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { TbArrowLeftDashed, TbArrowRightDashed } from 'react-icons/tb';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function PDFViewer({ file }) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(null);
  const [pageHeight, setPageHeight] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(entries => {
      setContainerWidth(entries[0].contentRect.width);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  }, []);

  const onDocumentLoadError = useCallback((err) => {
    setError(err.message);
  }, []);

  if (!file) return <p>No file provided.</p>;
  if (error) return <p>Failed to load PDF: {error}</p>;

  return (
    <div ref={containerRef} style={{ width: '100%', minHeight: pageHeight ?? undefined, overflowAnchor: 'none' }}>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={<p>Loading PDF...</p>}
      >
        <Page
          pageNumber={pageNumber}
          width={containerWidth ?? undefined}
          onRenderSuccess={({ height }) => setPageHeight(height)}
        />
      </Document>
      {numPages && (
        <div>
          <button className="scroll-arrow" onClick={() => setPageNumber(1)} disabled={pageNumber <= 1}>
            <MdKeyboardDoubleArrowLeft size={35} />
          </button>
          <button className="scroll-arrow" onClick={() => setPageNumber(p => Math.max(p - 1, 1))} disabled={pageNumber <= 1}>
            <TbArrowLeftDashed size={35} />
          </button>
          <span>Page {pageNumber} of {numPages}</span>
          <button className="scroll-arrow" onClick={() => setPageNumber(p => Math.min(p + 1, numPages))} disabled={pageNumber >= numPages}>
            <TbArrowRightDashed size={35} />
          </button>
          <button className="scroll-arrow" onClick={() => setPageNumber(numPages)} disabled={pageNumber >= numPages}>
            <MdKeyboardDoubleArrowRight size={35} />
          </button>
        </div>
      )}
    </div>
  );
}