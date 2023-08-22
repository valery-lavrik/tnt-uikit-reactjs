import { useState } from 'react';

//create your forceUpdate hook
export default function useForceUpdate(): () => void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [value, setValue] = useState<number>(0);
    return () => setValue((v) => v + 1);
}
