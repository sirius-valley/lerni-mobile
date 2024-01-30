import { useEffect, useState } from 'react';
import ErrorDisplay from '../../../../components/common/ErrorDisplay';

export default function Page() {
  const [is404, setIs404] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIs404(!is404);
    }, 2000);
  }, [is404]);

  if (is404) {
    return <ErrorDisplay type="404" />;
  }

  return <ErrorDisplay type="505" />;
}
