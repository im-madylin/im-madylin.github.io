import { useEffect, useMemo, useRef, useState } from "react";

const TypingText: React.FC = () => {
  const [text, setText] = useState<string[]>([""]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = useMemo(
    () => [
      "사용자 중심의 경험을 만드는 개발자입니다.",
      "문제 해결과 협업을 통해 성장하는 개발자입니다.",
      "지속적인 학습으로 더 나은 서비스를 만듭니다.",
    ],
    [],
  );

  const START_DELAY = 2000;
  const LETTER_TYPE_DELAY = 80;
  const WORD_STAY_DELAY = 2500;
  const WORD_DELETE_DELAY = 50;

  const wordIndex = useRef(0);
  const letterIndex = useRef(0);
  const isDeleting = useRef(false);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleDotClick = (index: number) => {
    // 현재 타이핑 애니메이션 중단
    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }

    // 새로운 인덱스로 설정
    wordIndex.current = index;
    letterIndex.current = 0;
    isDeleting.current = false;
    setCurrentWordIndex(index);

    // 해당 텍스트를 즉시 표시하고 타이핑 애니메이션 시작
    setText([""]);

    // typeLetter 함수를 다시 정의하여 사용
    const typeLetter = () => {
      const word = words[wordIndex.current];

      if (!isDeleting.current) {
        // 타이핑 중
        setText([word.slice(0, letterIndex.current + 1)]);
        letterIndex.current += 1;

        if (letterIndex.current === word.length) {
          // 단어 완성 후 잠시 대기
          typingTimeout.current = setTimeout(() => {
            isDeleting.current = true;
            typingTimeout.current = setTimeout(typeLetter, WORD_DELETE_DELAY);
          }, WORD_STAY_DELAY);
          return;
        }
        typingTimeout.current = setTimeout(typeLetter, LETTER_TYPE_DELAY);
      } else {
        // 삭제 중
        setText([word.slice(0, letterIndex.current - 1)]);
        letterIndex.current -= 1;

        if (letterIndex.current === 0) {
          isDeleting.current = false;
          wordIndex.current = (wordIndex.current + 1) % words.length;
          setCurrentWordIndex(wordIndex.current);
          typingTimeout.current = setTimeout(typeLetter, LETTER_TYPE_DELAY);
          return;
        }
        typingTimeout.current = setTimeout(typeLetter, WORD_DELETE_DELAY);
      }
    };

    typingTimeout.current = setTimeout(() => {
      typeLetter();
    }, 100);
  };

  useEffect(() => {
    const typeLetter = () => {
      const word = words[wordIndex.current];

      if (!isDeleting.current) {
        // 타이핑 중
        setText([word.slice(0, letterIndex.current + 1)]);
        letterIndex.current += 1;

        if (letterIndex.current === word.length) {
          // 단어 완성 후 잠시 대기
          typingTimeout.current = setTimeout(() => {
            isDeleting.current = true;
            typingTimeout.current = setTimeout(typeLetter, WORD_DELETE_DELAY);
          }, WORD_STAY_DELAY);
          return;
        }
        typingTimeout.current = setTimeout(typeLetter, LETTER_TYPE_DELAY);
      } else {
        // 삭제 중
        setText([word.slice(0, letterIndex.current - 1)]);
        letterIndex.current -= 1;

        if (letterIndex.current === 0) {
          isDeleting.current = false;
          wordIndex.current = (wordIndex.current + 1) % words.length;
          setCurrentWordIndex(wordIndex.current);
          typingTimeout.current = setTimeout(typeLetter, LETTER_TYPE_DELAY);
          return;
        }
        typingTimeout.current = setTimeout(typeLetter, WORD_DELETE_DELAY);
      }
    };

    typingTimeout.current = setTimeout(typeLetter, START_DELAY);

    return () => {
      if (typingTimeout.current) {
        clearTimeout(typingTimeout.current);
      }
    };
  }, [words]);

  return (
    <div className="typing-text flex flex-col items-center gap-4">
      <div className="flex h-20 items-center justify-center">
        <h2 className="text-center text-2xl font-medium leading-relaxed text-gray-700 sm:text-3xl">
          {text[0]}
          <span className="blinking-cursor ml-1 text-blue-600">|</span>
        </h2>
      </div>

      {/* 진행 표시 점들 */}
      <div className="flex gap-2">
        {words.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-300 ${
              index === currentWordIndex
                ? "scale-125 bg-blue-600"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TypingText;
