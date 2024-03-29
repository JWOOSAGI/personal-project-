'use client' 

import { persistStore } from "redux-persist";
import { store } from ".";
import { Provider } from "react-redux";

persistStore(store);
export default function ReduxProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Provider store={store}>{children}</Provider>;
}