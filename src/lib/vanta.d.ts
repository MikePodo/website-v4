declare module 'vanta/dist/vanta.net.min' {
	interface VantaEffect {
		destroy(): void;
		setOptions(opts: Record<string, unknown>): void;
		resize(): void;
	}
	type VantaFactory = (options: Record<string, unknown>) => VantaEffect;
	// UMD bundle: the default export is either the factory itself or an ESM namespace wrapping it.
	const mod: VantaFactory & { default: VantaFactory };
	export default mod;
}
