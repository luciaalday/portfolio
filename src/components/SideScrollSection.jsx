import { useRef } from 'react';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { TbArrowLeftDashed, TbArrowRightDashed } from 'react-icons/tb';

export default function SideScrollSection({ title, children }) {
  const scrollRef = useRef(null);

  const scrollByAmount = (amount) => {
    scrollRef.current?.scrollBy({
      left: amount,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <h1>{title}</h1>

      <div className="scroll-container" ref={scrollRef}>
        {children}
      </div>
      <div className="arrow-row">
        <button
          className="scroll-arrow"
          onClick={() => scrollByAmount(-900)}
          aria-label="Scroll left"
        >
          <MdKeyboardDoubleArrowLeft size={35} />
        </button>
        <button
          className="scroll-arrow"
          onClick={() => scrollByAmount(-400)}
          aria-label="Scroll left"
        >
          <TbArrowLeftDashed size={35} />
        </button>
        <button
          className="scroll-arrow"
          onClick={() => scrollByAmount(400)}
          aria-label="Scroll right"
        >
          <TbArrowRightDashed size={35} />
        </button>
        <button
          className="scroll-arrow"
          onClick={() => scrollByAmount(900)}
          aria-label="Scroll right"
        >
          <MdKeyboardDoubleArrowRight size={35} />
        </button>
      </div>

    </div>
  );
}