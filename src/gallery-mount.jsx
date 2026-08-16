import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import AccordionGallery from './AccordionGallery.jsx';
import './AccordionGallery.css';

/* ARPITA's memories — five favourite photos from /public/image, laid out as
   two accordion rows (3 on top, 2 below). */
const FILES = ['1.0.jpg', '1.1.jpg', '1.2.jpg', '1.3.jpg', '1.4.jpg'];
const TITLES = [
  'a golden beginning',
  'sunshine and smiles',
  'a quiet kind of magic',
  'laughter in the light',
  'soft days, bright hours',
];

const base = import.meta.env.BASE_URL;

const useRowHeight = (fraction, cap) => {
  const [height, setHeight] = useState(() => Math.min(cap, Math.round(window.innerHeight * fraction)));
  useEffect(() => {
    const onResize = () => setHeight(Math.min(cap, Math.round(window.innerHeight * fraction)));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [fraction, cap]);
  return height;
};

const MemoriesGallery = () => {
  const rowTop = useRowHeight(0.24, 240);
  const rowBot = useRowHeight(0.3, 300);
  const items = FILES.map((f, i) => ({
    image: `${base}image/${f}`,
    label: TITLES[i],
    alt: TITLES[i],
  }));

  return (
    <div className="memories__rows">
      <AccordionGallery
        items={items.slice(0, 3)}
        defaultIndex={1}
        height={rowTop}
        expandRatio={0.5}
        trigger="hover"
        grayscale={false}
        accentColor="#f9c06a"
        overlayColor="#1c0612"
        textColor="#fff7ee"
      />
      <AccordionGallery
        items={items.slice(3, 5)}
        defaultIndex={0}
        height={rowBot}
        expandRatio={0.55}
        trigger="hover"
        grayscale={false}
        accentColor="#f9c06a"
        overlayColor="#1c0612"
        textColor="#fff7ee"
      />
    </div>
  );
};

export const mountGallery = (el) => {
  const root = createRoot(el);
  root.render(<MemoriesGallery />);
  return root;
};
