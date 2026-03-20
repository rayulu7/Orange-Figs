import { useEffect, useState } from "react";

const LOGO = "/oflogo.png";

export default function OrangeFigsLoader({ onDone }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
      if (onDone) onDone();
    }, 2800); // 2.8 seconds for smooth pulse
    return () => clearTimeout(t);
  }, [onDone]);

  if (!show) return null;

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ldr-root {
          position: fixed;
          inset: 0;
          background: #fffaf6;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          z-index: 9999;
        }

        .ldr-logo {
          width: 240px;
          height: 240px;
          object-fit: contain;
          animation: zoomInOut 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
        }

        @keyframes zoomInOut {
          0% { transform: scale(0.85); }
          100% { transform: scale(1.15); }
        }
      `}</style>

      <div className="ldr-root">
        <img className="ldr-logo" src={LOGO} alt="Orange Figs" loading="eager" fetchPriority="high" />
      </div>
    </>
  );
}

