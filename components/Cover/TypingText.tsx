import { useEffect, useMemo, useRef, useState } from "react";

// 타이핑 애니메이션 구현 컴포넌트
const TypingText: React.FC = () => {
  const [text, setText] = useState<string[]>([""]);
  const [isTyping, setIsTyping] = useState(true);
  const words = useMemo(
    () => [
      "IT기업에서 사용자 경험을 향상시키기 위해 노력한 경험이 있습니다.",
      "소통과 협력의 가치를 깊이 인지하고 있습니다.",
    ],
    [],
  );

  const START_DELAY = 2000;
  const LETTER_TYPE_DELAY = 300;
  const WORD_STAY_DELAY = 500;

  const wordIndex = useRef(0);
  const letterIndex = useRef(0);

  useEffect(() => {
    const typeLetter = () => {
      const word = words[wordIndex.current];

      setText((prevText) => [
        ...prevText.slice(0, wordIndex.current),
        word.slice(0, letterIndex.current + 1),
      ]);

      letterIndex.current += 1;

      // 한 줄 타이핑 후 잠시 대기
      if (letterIndex.current === word.length) {
        setIsTyping(false);
        setTimeout(() => {
          if (wordIndex.current < words.length - 1) {
            wordIndex.current += 1;
            letterIndex.current = 0;
            setIsTyping(true);
            setTimeout(typeLetter, LETTER_TYPE_DELAY);
          }
        }, WORD_STAY_DELAY);
        return;
      }
      setTimeout(typeLetter, LETTER_TYPE_DELAY);
    };

    const startTyping = () => {
      setTimeout(typeLetter, START_DELAY);
    };

    if (isTyping) {
      startTyping();
    }
  }, [isTyping, words]);

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
