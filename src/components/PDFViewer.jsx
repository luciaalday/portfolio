import { useState, useCallback, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function PDFViewer({ file }) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(null);
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

  const changePage = (delta) => (e) => {
    e.preventDefault();
    setPageNumber(p => Math.clamp(p + delta, 1, numPages));
  };

  if (!file) return <p>No file provided.</p>;
  if (error) return <p>Failed to load PDF: {error}</p>;

  return (
    <div ref={containerRef} style={{ width: '100%', overflowAnchor:'none' }}>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={<p>Loading PDF...</p>}
      >
        <Page pageNumber={pageNumber} width={containerWidth ?? undefined} />
      </Document>

      {numPages && (
        <div>
          <button onClick={() => setPageNumber(p => Math.max(p - 1, 1))} disabled={pageNumber <= 1}>
            Previous
          </button>
          <span>Page {pageNumber} of {numPages}</span>
          <button onClick={() => setPageNumber(p => Math.min(p + 1, numPages))} disabled={pageNumber >= numPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}