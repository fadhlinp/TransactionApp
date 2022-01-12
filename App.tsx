import { RootSiblingParent } from "react-native-root-siblings";
import MainNavigation from "./src/navigation/MainNavigation";
import { TransactionProvider } from "./src/context/TransactionContext";
export default function App() {
  return (
    <RootSiblingParent>
      <TransactionProvider>
        <MainNavigation />
      </TransactionProvider>
    </RootSiblingParent>
  );
}
