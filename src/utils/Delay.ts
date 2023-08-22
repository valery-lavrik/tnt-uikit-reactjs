const Delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

export default Delay;
