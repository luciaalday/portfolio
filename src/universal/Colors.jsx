export default function Colors() {
  return (
    <article>
      <section>
        <h1 style={{textAlign:'center'}}>Lightmode</h1>
        <div className="lightmode half">
          <h1 style={{backgroundColor:"var(--background1)", margin:'5px', padding:'15px'}}> Header 1 (Txt 2, Bg 1)</h1>
          <h2 style={{backgroundColor:"var(--background1)", margin:'5px', padding:'15px'}}> Header 2 (Txt 2, Bg 1)</h2>
          <h3 style={{backgroundColor:"var(--background4)", margin:'5px', padding:'15px'}}> Header 3 (Txt 4, Bg 4)</h3>
          <h4 style={{backgroundColor:"var(--background5)", margin:'5px', padding:'15px'}}> Header 4 (Txt 4, Bg 5)</h4>
          <h5 style={{backgroundColor:"var(--background2)", margin:'5px', padding:'15px'}}> Header 5 (Txt 3, Bg 2)</h5>
          <h6 style={{backgroundColor:"var(--background3)", margin:'5px', padding:'15px'}}> Header 6 (Txt 2, Bg 3)</h6>
          <p  style={{backgroundColor:"var(--background1)", margin:'5px', padding:'15px'}}>Paragraph (Txt 1, Bg 1)</p>
        </div>
      </section>
      <section>
        <h1 style={{textAlign:'center'}}>Darkmode</h1>
        <div className="darkmode half">
          <h1 style={{backgroundColor:"var(--background1)", margin:'5px', padding:'15px'}}> Header 1 (Txt 2, Bg 1)</h1>
          <h2 style={{backgroundColor:"var(--background1)", margin:'5px', padding:'15px'}}> Header 2 (Txt 2, Bg 1)</h2>
          <h3 style={{backgroundColor:"var(--background4)", margin:'5px', padding:'15px'}}> Header 3 (Txt 4, Bg 4)</h3>
          <h4 style={{backgroundColor:"var(--background5)", margin:'5px', padding:'15px'}}> Header 4 (Txt 4, Bg 5)</h4>
          <h5 style={{backgroundColor:"var(--background2)", margin:'5px', padding:'15px'}}> Header 5 (Txt 3, Bg 2)</h5>
          <h6 style={{backgroundColor:"var(--background3)", margin:'5px', padding:'15px'}}> Header 6 (Txt 2, Bg 3)</h6>
          <p  style={{backgroundColor:"var(--background1)", margin:'5px', padding:'15px'}}>Paragraph (Txt 1, Bg 1)</p>
        </div>
      </section>
    </article>
  )
}