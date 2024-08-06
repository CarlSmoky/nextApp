import { useState, useRef, useEffect } from "react";

const useMessageRefs = (errors: { [key: string]: boolean }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const successMessageRef = useRef<HTMLSpanElement>(null);
  const failureMessageRef = useRef<HTMLSpanElement>(null);
  const errorMessageRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const focusMessage = (ref: React.RefObject<HTMLSpanElement>) => {
      if (ref.current) {
        setTimeout(() => ref.current!.focus(), 100);
      }
    };

    if (showSuccessMessage) focusMessage(successMessageRef);
    if (showFailureMessage) focusMessage(failureMessageRef);
    if (Object.keys(errors).length > 0) focusMessage(errorMessageRef);
  }, [showSuccessMessage, showFailureMessage, errors]);

  return {
    successMessageRef,
    failureMessageRef,
    errorMessageRef,
    showSuccessMessage,
    showFailureMessage,
    setShowSuccessMessage,
    setShowFailureMessage,
  };
};

export default useMessageRefs;
