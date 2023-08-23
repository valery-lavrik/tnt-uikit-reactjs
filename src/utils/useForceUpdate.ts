import { useState } from 'react';

//create your forceUpdate hook
export default function useForceUpdate(): () => void {
    const [, setValue] = useState<number>(0);
    return () => setValue((v) => v + 1);
}
