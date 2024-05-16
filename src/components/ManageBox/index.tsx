import { useEffect, useState } from "react";
import * as S from "./styled";

interface Item {
  id: number;
  label: string;
  price: number;
}

interface IProps {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const CONSTANTS = {
  KEVIN_POS_STORAGE_KEY: "KEVIN_POS_STORAGE_KEY",
};

function ManageItemBox({ items, setItems }: IProps) {
  /**
   * States
   */
  const [label, setLabel] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  /**
   * Side-Effects
   */
  useEffect(() => {
    const savedItems = localStorage.getItem(CONSTANTS.KEVIN_POS_STORAGE_KEY);
    if (savedItems) {
      const newItems = JSON.parse(savedItems);
      setItems(newItems);
    }
  }, []);

  useEffect(() => {
    const { KEVIN_POS_STORAGE_KEY } = CONSTANTS;
    if (items?.length) {
      const converToStrByItems = JSON.stringify(items);
      localStorage.setItem(KEVIN_POS_STORAGE_KEY, converToStrByItems);
    } else {
      localStorage.removeItem(KEVIN_POS_STORAGE_KEY);
    }
  }, [items]);

  /**
   * Handlers
   */
  const handleClickAddItem = () => {
    const id = items?.length ? items?.length + 1 : 1;
    if (isActiveSubmit) {
      const newItem = { id, label, price };
      const newItems = [...items, newItem];
      setItems(newItems);
      setLabel("");
      setPrice(0);
    }
  };

  const handleClickRemoveItem = (o: Item) => {
    const { id } = o;
    const findItem = items?.find((o1) => o1.id === id);
    if (findItem) {
      const newItems = items.filter((o1) => o1.id !== id);
      setItems(newItems);
    }
  };

  /**
   * Helpers
   */
  const isActiveSubmit = price && label;

  return (
    <S.Container>
      {/* 상품 관리 */}
      <S.ManageBox>
        {/* 상품 리스트 */}
        <S.ManageListSection>
          {items?.map((o) => (
            <S.ManageItemBox>
              <S.ManageRegistInputSection>
                <S.ManageRegistInputBox>
                  <S.ManageRegistInput readOnly type="text" value={o.label} />
                </S.ManageRegistInputBox>
                <S.ManageRegistInputBox>
                  <S.ManageRegistInput readOnly type="number" value={o.price} />
                </S.ManageRegistInputBox>
              </S.ManageRegistInputSection>
              <S.ManageRegistSubmitBox>
                <S.ManageRegistSubmit onClick={() => handleClickRemoveItem(o)}>
                  삭제
                </S.ManageRegistSubmit>
              </S.ManageRegistSubmitBox>
            </S.ManageItemBox>
          ))}
        </S.ManageListSection>

        {/* 상품 등록 */}
        <S.ManageRegistBox>
          <S.ManageRegistInputSection>
            <S.ManageRegistInputBox>
              <S.ManageRegistInput
                type="text"
                placeholder="상품명"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
              />
            </S.ManageRegistInputBox>
            <S.ManageRegistInputBox>
              <S.ManageRegistInput
                type="number"
                placeholder="금액"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </S.ManageRegistInputBox>
          </S.ManageRegistInputSection>
          <S.ManageRegistSubmitBox>
            <S.ManageRegistSubmit
              disabled={!isActiveSubmit}
              onClick={handleClickAddItem}
            >
              추가
            </S.ManageRegistSubmit>
          </S.ManageRegistSubmitBox>
        </S.ManageRegistBox>
      </S.ManageBox>
    </S.Container>
  );
}

export default ManageItemBox;
