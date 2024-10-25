import { useEffect, useMemo, useRef, useState } from "react";

const TypingText: React.FC = () => {
  const [text, setText] = useState<string[]>([""]);
  const words = useMemo(
    () => [
      "IT기업에서 사용자 경험을 향상시키기 위해 노력한 경험이 있습니다.",
      "소통과 협력의 가치를 깊이 인지하고 있습니다.",
    ],
    [],
  );

  const START_DELAY = 2000;
  const LETTER_TYPE_DELAY = 100;
  const WORD_STAY_DELAY = 500;

  const wordIndex = useRef(0);
  const letterIndex = useRef(0);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const typeLetter = () => {
      const word = words[wordIndex.current];

      setText((prevText) => [
        ...prevText.slice(0, wordIndex.current),
        word.slice(0, letterIndex.current + 1),
      ]);

      letterIndex.current += 1;

      if (letterIndex.current === word.length) {
        clearTimeout(typingTimeout.current!);
        typingTimeout.current = setTimeout(() => {
          if (wordIndex.current < words.length - 1) {
            wordIndex.current += 1;
            letterIndex.current = 0;
            typingTimeout.current = setTimeout(typeLetter, LETTER_TYPE_DELAY);
          }
        }, WORD_STAY_DELAY);
        return;
      }
      typingTimeout.current = setTimeout(typeLetter, LETTER_TYPE_DELAY);
    };

    typingTimeout.current = setTimeout(typeLetter, START_DELAY);

    return () => {
      if (typingTimeout.current) {
        clearTimeout(typingTimeout.current);
      }
    };
  }, [words]);

  return (
    <div className="typing-text text-center text-3xl">
      {text.map((line, idx) => (
        <h2 key={idx}>
          {line}
          {idx === text.length - 1 && (
            <span className="blinking-cursor">|</span>
          )}
        </h2>
      ))}
    </div>
  );
};

export default TypingText;
