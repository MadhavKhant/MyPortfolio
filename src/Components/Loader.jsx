import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress(); // 👈 track model loading %

  return (
    <Html center>
      <div className="flex flex-col items-center text-black text-[100px] font-bold">
        <span className="text-xl mb-2">Loading...</span>
        <span className="text-lg">{progress.toFixed(0)}%</span>
      </div>
    </Html>
  );
};

export default Loader;
