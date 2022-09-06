export interface SaleOrDiscountComponentProp {
  text: string;
  extraClass: string;
}

/**
 * Primary UI component for user interaction
 */
export const SaleOrDiscountComponent: React.FC<SaleOrDiscountComponentProp> = ({
  text,
  extraClass,
}) => {
  return (
    <>
      <div
        className={`absolute rounded-lg border border-[#40a944] bg-[#40a944] text-base text-white ${extraClass}`}
      >
        <p>{text}</p>
      </div>
    </>
  );
};
