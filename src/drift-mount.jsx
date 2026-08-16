import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import DriftWall from './DriftWall.jsx';
import './DriftWall.css';

/* ARPITA's memories — one tile per photo in /public/image.
   Warm, non-assertive captions used as the tiles' alt/aria text. */
const FILES = [
  '1.0.jpg', '1.1.jpg', '1.2.jpg', '1.3.jpg', '1.4.jpg',
  '1.5.jpg', '1.6.jpg', '1.7.jpg', '1.8.jpg', '1.9.jpg', '2.0.jpg',
];
const TITLES = [
  'a golden beginning',
  'sunshine and smiles',
  'a quiet kind of magic',
  'laughter in the light',
  'soft days, bright hours',
  'the little wins',
  'golden hour',
  'bright and brave',
  'cherished moments',
  'a year of you',
  'every moment counts',
];

const base = import.meta.env.BASE_URL;

const columnsFor = (width) => {
  if (width < 560) return 3;
  if (width < 900) return 4;
  return 5;
};

const useColumns = () => {
  const [columns, setColumns] = useState(() => columnsFor(window.innerWidth));
  useEffect(() => {
    const onResize = () => setColumns(columnsFor(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return columns;
};

const MemoriesWall = () => {
  const columns = useColumns();
  const items = FILES.map((f, i) => ({
    image: `${base}image/${f}`,
    title: TITLES[i],
  }));
  return (
    <DriftWall
      items={items}
      columns={columns}
      tileWidth={170}
      tileHeight={300}
      gap={16}
      radius={14}
      tilt={14}
      turn={-8}
      roll={0}
      perspective={1400}
      depth={120}
      speed={34}
      direction="up"
      variance={0.45}
      parallax={0}
      pauseOnHover={false}
      lift={60}
      fade={0.45}
      dim={0.95}
      grayscale={false}
      overlayColor="#3a0d22"
    />
  );
};

export const mountDriftWall = (el) => {
  const root = createRoot(el);
  root.render(<MemoriesWall />);
  return root;
};
