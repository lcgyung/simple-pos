import { useMemo, useState } from "react";

import * as S from "./styled";

interface Item {
  id: number;
  label: string;
  price: number;
}

interface IProps {
  items: Item[];
}

export interface StringKeyAndNumber {
  [key: string]: number;
}

function ControlBox({ items }: IProps) {
  /**
   * States
   */
  const [buyItems, setBuyItems] = useState<Item[]>([]);
  const [recevied, setRecevied] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  /**
   * Handlers
   */
  const handleClickItem = (o: Item) => {
    const newBuyItems = [...buyItems, o];
    setBuyItems(newBuyItems);
  };

  const handleClickCal = () => setResult(buyItemTotal - recevied);
  const handleClickReset = () => setBuyItems([]);
  const handleClickAllReset = () => {
    setBuyItems([]);
    setRecevied(0);
    setResult(0);
  };

  /**
   * Helpers
   */

  const addCommasToNumber = (number: number): string => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const buyItemMenuTable = useMemo(
    () =>
      buyItems?.reduce((acc, o) => {
        const { label } = o;
        if (acc[label]) {
          acc[label] += 1;
        } else {
          acc[label] = 1;
        }
        return acc;
      }, {} as StringKeyAndNumber),
    [buyItems]
  );

  const buyItemTotal = useMemo(
    () =>
      buyItems?.reduce((acc, o) => {
        const { price } = o;
        return acc + price;
      }, 0),
    [buyItems]
  );

  const isActiveCalculator = buyItemTotal && recevied;

  return (
    <S.Container>
      <S.CashierBox>
        {/* 캐셔 리스트 */}
        <S.CashierListSection>
          {items?.map((o) => (
            <S.CashierItemBox key={o.id}>
              <S.CashierItemButton onClick={() => handleClickItem(o)}>
                <p>{o.label}</p>
                <p>{`(${o.price})`}</p>
              </S.CashierItemButton>
            </S.CashierItemBox>
          ))}
        </S.CashierListSection>

        {/* 캐셔 컨트롤 */}
        <S.CashierControlSection>
          {/* 캐셔 품목 */}
          <S.CashierCountListBox>
            {Object.keys(buyItemMenuTable)?.length
              ? Object.keys(buyItemMenuTable).map((key) => (
                  <S.CashierCountItem>
                    {`${key}(${buyItemMenuTable[key]}`})
                  </S.CashierCountItem>
                ))
              : ""}
          </S.CashierCountListBox>

          {/* 캐셔 총합 */}
          <S.CashierCountListBox>
            <div>
              {`총액 : ${addCommasToNumber(buyItemTotal)}`}
              <button style={{ marginLeft: "10px" }} onClick={handleClickReset}>
                초기화
              </button>
            </div>
          </S.CashierCountListBox>

          {/* 받은돈, 거스름돈 */}
          <S.CashierCountListBox>
            {/* 계산 */}
            <div style={{ marginBottom: "15px" }}>
              <input
                type="number"
                placeholder="받은돈"
                style={{ height: "35px" }}
                value={recevied}
                onChange={(e) => setRecevied(Number(e.target.value))}
              />
              <button
                disabled={!isActiveCalculator}
                style={{ marginLeft: "10px", height: "40px" }}
                onClick={handleClickCal}
              >
                계산
              </button>
            </div>

            {/* 거스름돈 */}
            <div>
              <input
                readOnly
                type="number"
                placeholder="거스름돈"
                style={{ height: "35px" }}
                value={result}
              />
              <button
                style={{ marginLeft: "10px", height: "40px" }}
                onClick={handleClickAllReset}
              >
                완료
              </button>
            </div>
          </S.CashierCountListBox>
        </S.CashierControlSection>
      </S.CashierBox>
    </S.Container>
  );
}

export default ControlBox;
