import { createContext, useContext, useState } from 'react';

const OverlayContext = createContext();

export function AppWrapper({ children }) {
	let [isOverlayVisible, setOverlayVisible] = useState(false);

	return (
		<OverlayContext.Provider value={[isOverlayVisible, setOverlayVisible]}>
			{children}
		</OverlayContext.Provider>
	);
}

export function useAppContext() {
	return useContext(OverlayContext);
}
