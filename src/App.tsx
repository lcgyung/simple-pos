import { useState } from "react";
import { ControlBox, ManageBox } from "./components";

import * as S from "./styled";

interface Item {
  id: number;
  label: string;
  price: number;
}

export interface StringKeyAndNumber {
  [key: string]: number;
}

function App() {
  /**
   * States
   */
  const [items, setItems] = useState<Item[]>([]);

  return (
    <S.Container>
      <ManageBox items={items} setItems={setItems} />
      <ControlBox items={items} />
    </S.Container>
  );
}

export default App;
